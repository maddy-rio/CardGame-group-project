import * as Path from 'node:path'
import * as URL from 'node:url'

import { config } from 'dotenv'
config()

import { auth } from 'express-openid-connect'

import express from 'express'
import handlebars from 'express-handlebars'

const server = express()

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

// Middleware
server.engine(
  'hbs',
  handlebars.engine({
    extname: 'hbs',
    layoutsDir: Path.join(__dirname, 'views/layouts'),
    partialsDir: Path.join(__dirname, 'views/partials'),
  })
)
server.set('view engine', 'hbs')
server.set('views', Path.join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true }))

const requireAuth = (req, res, next) => {
  if (!req.oidc.isAuthenticated()) {
    res.oidc.login({ returnTo: req.originalUrl })
  } else {
    next()
  }
}

server.use(
  auth({
    authRequired: process.env.AUTH_REQUIRED === 'true',
    auth0Logout: process.env.AUTH0_LOGOUT === 'true',
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  })
)

server.get('/', async (req, res) => {
  try {
    res.render('index', {
      user: req.oidc.user,
      isAuthenticated: req.oidc.isAuthenticated(),
    })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

server.get('/home', (req, res) => {
  res.render('home', {
    title: 'User Dashboard',
    user: req.oidc.user,
  })
})

server.get('/joinRoom', requireAuth, (req, res) => {
  res.render('protected')
})

server.get('/login', (req, res) => {
  res.oidc.login({ returnTo: '/home' })
})

server.get('/logout', (req, res) => {
  res.oidc.logout({ returnTo: '/home' })
})
server.get('/gameRoomPage', (req, res) => {
  const gameRoomData = {
    name: req.query.name,
    password: req.query.password,
    rounds: req.query.rounds,
  }
  console.log(gameRoomData)
  res.render('gameRoomPage', { gameRoomData })
})
server.post('/createGameRoom', (req, res) => {
  res.oidc.logout({ returnTo: '/dashboard' })
})

export default server
