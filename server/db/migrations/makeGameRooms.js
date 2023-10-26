export async function up(knex) {
  // Creating gameRooms table
  await knex.schema.createTable('gameRooms', (table) => {
    table.increments('id').primary()
    table.string('currentRound')
    table.string('totalRounds')
    table.string('name')
    table.string('password')
    table.integer('numberOfPlayers')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

  // Creating players table
  await knex.schema.createTable('players', (table) => {
    table.increments('id').primary()
    table.string('unqiueId')
    table.integer('gameRoomId').unsigned().references('id').inTable('gameRooms')
    table.string('username')
    table.boolean('playerDoneMove').defaultTo(false)
  })
}

export async function down(knex) {
  // Drop players table first due to foreign key constraint
  await knex.schema.dropTable('players')
  await knex.schema.dropTable('gameRooms')
}
