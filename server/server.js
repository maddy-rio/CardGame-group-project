import * as Path from 'node:path'
import * as URL from 'node:url'

import express from 'express'
import handlebars from 'express-handlebars'
import session from 'express-session'
import crypto from 'crypto'
import flash from 'connect-flash'

import userRoutes from './routes/routes.js'

const server = express()

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)
const publicFolder = Path.resolve('public')

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
server.use(express.static(publicFolder))




// Session Middleware
const generateSecret = (length = 32) => {
  return crypto.randomBytes(length).toString('hex')
}
const secret = generateSecret()
server.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
)
server.use(flash())

// Routes
server.use('/', userRoutes)

export default server



