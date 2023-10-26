import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getCards() {
  const numberOfEntries = 3
  const randomEntries = await connection('start-card')
    .select()
    .orderByRaw('RANDOM()')
    .limit(numberOfEntries)
  return randomEntries
}

export async function getAnswers() {
  return connection('answers').select()
}

export async function createGameRoom(data) {
  console.log(data)
  return connection('gameRooms').insert(data)
}

export async function addPlayerToGameRoom(user, gameRoomId) {
  const data = {
    unqiueId: user.sub,
    gameRoomId: gameRoomId,
    username: user.name,
    playerDoneMove: false,
  }
  return connection('player').insert(data)
}
