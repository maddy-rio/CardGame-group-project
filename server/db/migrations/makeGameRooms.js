export async function up(knex) {
  // Creating gameRooms table
  await knex.schema.createTable('gameRooms', (table) => {
    table.increments('id').primary()
    table.string('currentRound')
    table.string('totalRounds')
    table.string('name')
    table.string('password')
    table.integer('numberOfPlayers')
    table.string('createdBy')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

  // Creating players table
  await knex.schema.createTable('players', (table) => {
    table.increments('id').primary()
    table.string('userId')
    table.integer('gameRoomId')
    table.string('username')
    table.boolean('pickedCard').defaultTo(false)
    table.integer('startCard').unsigned().references('id').inTable('start-card')
    table.integer('awswer').unsigned().references('id').inTable('answers')
  })
}

export async function down(knex) {
  // Drop players table first due to foreign key constraint
  await knex.schema.dropTable('players')
  await knex.schema.dropTable('gameRooms')
}
