import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

//Main route
router.get('/', async (req, res) => {
  try {
    const cards = await db.getCards()
    res.render('index', { cards })
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

export default router
