import { config } from 'dotenv'
config()
import express from 'express'
import { auth } from 'express-openid-connect'
import * as db from '../db/db.js'

const router = express.Router()

// Auth0 set up
const requireAuth = (req, res, next) => {
  if (!req.oidc.isAuthenticated()) {
    res.oidc.login({ returnTo: req.originalUrl })
  } else {
    next()
  }
}
router.use(
  auth({
    authRequired: process.env.AUTH_REQUIRED === 'true',
    auth0Logout: process.env.AUTH0_LOGOUT === 'true',
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  })
)

//Main route
router.get('/', async (req, res) => {
  try {
    const cards = await db.getCards()
    console.log(cards)
    const card = {
      id: 100,
      phrase: 'hello world',
    }
    res.render('game', {
      cards,
      card,
      user: req.oidc.user,
      isAuthenticated: req.oidc.isAuthenticated(),
    })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

//Answers route
router.get('/answers', async (req, res) => {
  try {
    const answers = await db.getAnswers()
    res.render('test', { answers })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

router.get('/game', requireAuth, (req, res) => {
  res.render('game', { user: req.oidc.user })
})

router.get('/createGame', requireAuth, (req, res) => {
  res.render('createGameRoom', { user: req.oidc.user })
})

router.post('/createGame', requireAuth, async (req, res) => {
  const user = req.oidc.user
  const userDisplayName = req.body.personalDisplayName
  const gameRoomData = {
    createdBy: user.sub,
    name: req.body.roomName,
    password: req.body.roomPassword,
    currentRound: 0,
    totalRounds: Number(req.body.totalRounds),
    numberOfPlayers: Number(req.body.numberOfPlayers),
  }
  await db.createGameRoom(user, userDisplayName, gameRoomData)

  res.render('joinRoom', { user: req.oidc.user, userDisplayName, gameRoomData })
})

router.get('/joinRoom', requireAuth, (req, res) => {
  res.render('joinRoom', { user: req.oidc.user })
})

router.get('/login', (req, res) => {
  res.oidc.login({ returnTo: '/home' })
})

router.get('/logout', (req, res) => {
  res.oidc.logout({ returnTo: '/home' })
})

export default router
