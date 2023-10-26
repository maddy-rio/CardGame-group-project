export async function seed(knex) {
  await knex('start-card').insert([
    { id: 1, phrase: 'The key to efficient coding is __________.' },
    {
      id: 2,
      phrase:
        'The best way to break the ice at a coding conference is to ask, Have you ever tried __________?',
    },
    {
      id: 3,
      phrase:
        "In my previous life, I was a developer. Now, I'm just __________.",
    },
    {
      id: 4,
      phrase:
        'The secret to being a great programmer is mastering the art of __________.',
    },
    {
      id: 5,
      phrase:
        'In the world of coding, there are two types of developers: those who love __________ and those who hate it.',
    },
    {
      id: 6,
      phrase:
        "I've finally found the ultimate cure for imposter syndrome: __________.",
    },
    {
      id: 7,
      phrase: "When I can't figure out a bug, I just blame it on __________.",
    },
    {
      id: 8,
      phrase:
        "If coding were a sport, I'd be the world champion of __________.",
    },
    {
      id: 9,
      phrase:
        'The best coding superpower is the ability to create __________ with just one line of code.',
    },
    {
      id: 10,
      phrase: 'I once fixed a critical bug by sacrificing a __________.',
    },
    { id: 11, phrase: "My computer's best friend is __________." },
    {
      id: 12,
      phrase: 'The secret ingredient in every great website is __________.',
    },
    {
      id: 13,
      phrase:
        'When a project is about to go live, I always double-check for __________.',
    },
    {
      id: 14,
      phrase: 'My code is so clean; it makes __________ look like a dumpster.',
    },
    {
      id: 15,
      phrase: "You know you're a developer when you dream about __________.",
    },
    { id: 16, phrase: 'I code like a ninja, using __________.' },
    {
      id: 17,
      phrase:
        'The key to successful pair programming is excellent communication and __________.',
    },
    {
      id: 18,
      phrase:
        'My code is so efficient; it can process __________ in under a second.',
    },
    {
      id: 19,
      phrase:
        "What's the next great tech trend? I'd put my money on __________.",
    },
    {
      id: 20,
      phrase: 'My coding style is best described as intuitive as __________.',
    },
    {
      id: 21,
      phrase:
        'You can never have enough of __________ in your development toolkit.',
    },
    {
      id: 22,
      phrase:
        'In the future, humans will communicate exclusively through __________.',
    },
    {
      id: 23,
      phrase:
        'The most terrifying error message a developer can receive would reference __________.',
    },
    {
      id: 24,
      phrase: 'When I grow up, I want to be a specialise in __________.',
    },
    {
      id: 25,
      phrase:
        'The only way to explain blockchain to a five-year-old is to compare it to __________.',
    },
    {
      id: 26,
      phrase: 'My favorite coding language is the one with __________.',
    },
    {
      id: 27,
      phrase: 'When the code review reveals your worst nightmare: __________.',
    },
    {
      id: 28,
      phrase: 'My dream job is to get paid for working on __________ all day.',
    },
    {
      id: 29,
      phrase: 'In my free time, I enjoy writing poetry about __________.',
    },
    {
      id: 30,
      phrase: "If code were food, I'd be a connoisseur of __________.",
    },
    {
      id: 31,
      phrase: 'To become a great developer, you must first master __________.',
    },
    {
      id: 32,
      phrase:
        "In an alternate universe, I'm famous for my invention of __________.",
    },
    {
      id: 33,
      phrase: "As a developer, I'm only afraid of one thing: __________.",
    },
    {
      id: 34,
      phrase:
        'The secret to surviving an all-night coding session is to have __________.',
    },
    {
      id: 35,
      phrase: 'In the programming world, __________ is the new black.',
    },
    {
      id: 36,
      phrase:
        'My coding skills are like a fine wine, they get better whenever I incorporate __________.',
    },
    { id: 37, phrase: "When I'm stressed, I find comfort in __________." },
    {
      id: 38,
      phrase: 'My code is so beautiful; it brings tears to __________.',
    },
    {
      id: 39,
      phrase:
        'The secret to getting a standing ovation at a tech conference is to talk about __________.',
    },
    { id: 40, phrase: 'I code for a living, but I live for __________.' },
    {
      id: 41,
      phrase:
        'My computer desktop is a graveyard of what remains from __________.',
    },
    {
      id: 42,
      phrase: "I'm convinced that the solution to world peace is __________.",
    },
    {
      id: 43,
      phrase:
        'I once created an AI that could predict the outcome of __________.',
    },
    { id: 44, phrase: 'My code is like a love letter to __________.' },
    { id: 45, phrase: 'My code is more complex than __________.' },
    {
      id: 46,
      phrase:
        'If I could only bring one thing to a desert island, it would be __________.',
    },
    {
      id: 47,
      phrase: 'The best way to impress a date is to talk about __________.',
    },
    { id: 48, phrase: 'In a past life, I was a __________-whisperer.' },
    {
      id: 49,
      phrase:
        "You're not a real developer until you've experienced __________.",
    },
    {
      id: 50,
      phrase: "My code is so cutting-edge; it's powered by __________.",
    },
  ])
}
