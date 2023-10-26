export async function up(knex) {
  return knex.schema.createTable('answers', function (table) {
    table.increments('id').primary()
    table.string('response')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('answers')
}
