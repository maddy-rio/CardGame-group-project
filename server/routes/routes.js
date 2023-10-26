import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

//Main route
router.get('/', async (req, res) => {
  try {
    const cards = await db.getCards()
    console.log(cards);
    res.render('game', { cards })
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


/**
 * 
 * MURRAY login page for display name --FORM
 */
router.get('/login', async (req, res) => {
  res.render('login')
})

router.post('/login', async (req, res) => {
  const displayName = req.body.display_name
  console.log(displayName);
  res.redirect('/')
})

export default router
