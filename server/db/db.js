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

export async function createGameRoom(user, userDisplayName, gameRoomData) {
  const gameRoomId = await connection('gameRooms').insert(gameRoomData)
  // const gameRoom = await connection('gameRooms')
  //   .select()
  //   .where('id', gameRoomId[0])
  addPlayerToGameRoom(user, userDisplayName, gameRoomId[0])
  return
}

export async function addPlayerToGameRoom(user, userDisplayName, gameRoomId) {
  console.log(userDisplayName)
  const data = {
    userId: user.sub,
    gameRoomId: gameRoomId,
    username: userDisplayName,
  }
  return connection('players').insert(data)
}
