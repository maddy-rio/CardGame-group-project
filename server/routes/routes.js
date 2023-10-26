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
    authRequired: false,
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
    const user = req.session.user
    console.log(user)
    res.render('index', { user: user })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

//Answers route
router.get('/answers', async (req, res) => {
  try {
    const data1 = await db.getCards()
    const blackCard = data1[0]

    const data2 = await db.getAnswers()
    console.log(data2);
    const whiteCards = await db.getAnswers()


    //  id phrase
    // [
    //   {
    //     id: 36,
    //     phrase: 'My coding skills are like a fine wine, they get better with __________.'
    //   }
    // ]
    
    //  id response
    res.render('game', { blackCard, whiteCards })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

// Game route
router.get('/game', async (req, res) => {
  try {
    const cards = await db.getCards()
    const card = {
      id: 100,
      phrase: 'hello world',
    }
    // console.log(req.session.gameLobbyName)
    res.render('game', {
      cards,
      card,
      // gameLobby: gameLobbyName,
      players: ['Toby', 'Sam'],
      user: req.oidc.user,
    })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

//Create Game routes
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

  req.flash('success', 'Game created successfully')
  req.flash('gameRoomData', gameRoomData)
  req.flash('userDisplayName', userDisplayName)
  res.redirect('joinGame')
})

//Join game routes
router.get('/joinGame', (req, res) => {
  const user = req.session.user
  const gameRoomData = req.flash('gameRoomData')[0]
  const userDisplayName = req.flash('userDisplayName')[0]

  console.log(user)
  console.log(gameRoomData)

  res.render('joinGame', {
    user: user,
    gameRoomData: gameRoomData,
    userDisplayName: userDisplayName,
  })
})

router.post('/joinGame', requireAuth, async (req, res) => {
  try {
    const { roomName, password, personalDisplayName } = req.body
    const user = req.oidc.user
    const userDisplayName = personalDisplayName
    const gameLobbyName = await db.joinGame(
      user,
      roomName,
      password,
      userDisplayName
    )

    if (gameLobbyName) {
      res.redirect('/game')
    } else {
      res.redirect('/joinGame', {
        errorMessage: 'Incorrect room name or password',
      })
    }
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

// // Initiate OIDC login

router.get('/loginfix', (req, res) => {
  res.oidc.login({ returnTo: '/login-callback' })
})

// // Handle OIDC callback after successful login
router.get('/login-callback', (req, res) => {
  const user = req.oidc.user
  req.session.user = user
  res.redirect('/')
})

router.get('/logoutFix', (req, res) => {
  res.oidc.logout({ returnTo: '/' })
})


/**
 * 
 * test route for game without the authentication
 */
router.get('/game1', async (req, res) => {
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
  res.render('game', { user: req.oidc.user })
})

export default router
