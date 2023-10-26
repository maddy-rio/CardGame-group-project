import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    
    const data = {
      // user_id: 'test',
      cardInPlay: {
        card_answer: 'test'
      },
      
    }
    
    
    res.render('game', { users: users })
// cardInPlay: [leaderCard]


  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router
