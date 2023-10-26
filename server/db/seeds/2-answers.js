export async function seed(knex) {
  await knex('answers').insert([
    {
      id: 1,
      response: 'Life is full of surprises, embrace the unexpected Aardvark.',
    },
    {
      id: 2,
      response: 'The journey of a thousand miles begins with a single step.',
    },
    { id: 3, response: 'In the midst of chaos, there is also opportunity.' },
    {
      id: 4,
      response:
        'Remember to take a deep breath and relax, everything will be alright.',
    },
    {
      id: 5,
      response: 'Creativity knows no bounds; let your imagination soar.',
    },
  ])
}
