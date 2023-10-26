export async function seed(knex) {
  await knex('start-card').insert([
    { id: 1, phrase: 'Ambitious Aardvark' },
    { id: 2, phrase: 'Bamboozled Baboon' },
    { id: 3, phrase: 'Curious Capybara' },
    { id: 4, phrase: 'Dilapidated Duck' },
    { id: 5, phrase: 'Exuberant Elephant' },
  ])
}
