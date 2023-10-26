export async function seed(knex) {
  await knex('start-card').del()
}
