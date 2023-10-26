export async function seed(knex) {
  await knex('answers').insert([
    {
      id: 1,
      response: 'A rubber duck debugging session',
    },
    {
      id: 2,
      response: 'Stack Overflow at 3 AM',
    },
    {
      id: 3,
      response: 'A keyboard covered in Cheeto dust',
    },
    {
      id: 4,
      response: '"It works on my machine."',
    },
    {
      id: 5,
      response: 'A never-ending npm install',
    },
    {
      id: 6,
      response: 'Infinite loops',
    },
    {
      id: 7,
      response: 'A coffee-stained mousepad',
    },
    {
      id: 8,
      response: 'A compile error message written in Shakespearean English',
    },
    {
      id: 9,
      response: 'Spaghetti code',
    },
    {
      id: 10,
      response: "A bug so elusive, it's like a unicorn.",
    },
    {
      id: 11,
      response: "A web developer's eternal nightmare: Internet Explorer 6.",
    },
    {
      id: 12,
      response: 'Recursive self-doubt',
    },
    {
      id: 13,
      response: 'Refactoring for fun and profit',
    },
    {
      id: 14,
      response: 'A keyboard with no escape key',
    },
    {
      id: 15,
      response: '"404 Not Found" errors',
    },
    {
      id: 16,
      response: 'A 500-page software documentation manual',
    },
    {
      id: 17,
      response: 'Debugging with print statements',
    },
    {
      id: 18,
      response: 'A rubber dome keyboard',
    },
    {
      id: 19,
      response: 'A version control conflict that turns into a heated debate',
    },
    {
      id: 20,
      response: 'A hard drive full of cat videos',
    },
    {
      id: 21,
      response: 'An email thread with 100 replies',
    },
    {
      id: 22,
      response: 'A missing semicolon',
    },
    {
      id: 23,
      response: 'An over-engineered solution',
    },
    {
      id: 24,
      response: 'A heated argument about tabs vs. spaces',
    },
    {
      id: 25,
      response: 'An outdated tech stack',
    },
    {
      id: 26,
      response: 'A codebase with no comments',
    },
    {
      id: 27,
      response: 'An infinite Git merge conflict',
    },
    {
      id: 28,
      response: 'An unresponsive client',
    },
    {
      id: 29,
      response: 'An AI that generates code comments',
    },
    {
      id: 30,
      response: 'A broken continuous integration pipeline',
    },
    {
      id: 31,
      response: 'An outdated Internet Explorer plugin',
    },
    {
      id: 32,
      response: 'A server room without proper cooling',
    },
    {
      id: 33,
      response: 'An outdated IDE with neon colors',
    },
    {
      id: 34,
      response: 'A code review that ends in tears',
    },
    {
      id: 35,
      response: 'An intractable memory leak',
    },
    {
      id: 36,
      response: 'A rubber stamp that says "Code Review Approved."',
    },
    {
      id: 37,
      response: 'A meeting that could have been an email',
    },
    {
      id: 38,
      response: 'A "404 Not Found" costume for Halloween',
    },
    {
      id: 39,
      response: 'An untested edge case',
    },
    {
      id: 40,
      response: 'An endless loop of "Hello, World!"',
    },
    {
      id: 41,
      response: 'A software update that breaks everything',
    },
    {
      id: 42,
      response: 'A project manager who speaks in buzzwords',
    },
    {
      id: 43,
      response: 'An algorithm that only works on odd-numbered Wednesdays',
    },
    {
      id: 44,
      response: 'A keyboard with a sticky "Ctrl" key',
    },
    {
      id: 45,
      response: 'A program that generates random syntax errors',
    },
    {
      id: 46,
      response: 'A conference call with no agenda',
    },
    {
      id: 47,
      response: 'An AI that writes terrible code',
    },
    {
      id: 48,
      response: 'A team-building exercise involving code golf',
    },
    {
      id: 49,
      response: 'A coding challenge with no clear solution',
    },
    {
      id: 50,
      response: 'A software license written in Klingon',
    },
    {
      id: 51,
      response: 'A codebase haunted by the ghost of previous developers',
    },
    {
      id: 52,
      response: 'An app that only works on Internet Explorer 6',
    },
    {
      id: 53,
      response: 'A 404-page with a typo',
    },
    {
      id: 54,
      response: 'Debugging an issue caused by a single misplaced semicolon',
    },
    {
      id: 55,
      response: "A commit message that simply says 'oops'",
    },
    {
      id: 56,
      response: 'An unexpected server crash during a live demo',
    },
    {
      id: 57,
      response: 'A recursive function that runs forever',
    },
    {
      id: 58,
      response:
        "A comment that says 'To-Do: Fix this later' from five years ago.",
    },
    {
      id: 59,
      response: "A software project that's perpetually 'almost' finished.",
    },
    {
      id: 60,
      response: 'An intern who broke the build',
    },
    {
      id: 61,
      response:
        "A JavaScript framework that's 'the next big thing' every month.",
    },
    {
      id: 62,
      response: 'An unreadable error message in a foreign language',
    },
    {
      id: 63,
      response:
        "A database query that returns 'null' when it should return data.",
    },
    {
      id: 64,
      response:
        'A web page that renders perfectly in Internet Explorer but nowhere else',
    },
    {
      id: 65,
      response: 'An algorithm that becomes self-aware',
    },
    {
      id: 66,
      response: 'A coding convention debate that leads to a 3-hour meeting',
    },
    {
      id: 67,
      response: 'A never-ending software update',
    },
    {
      id: 68,
      response: "A variable named 'foo' that no one remembers the purpose of.",
    },
    {
      id: 69,
      response: "A '404 Not Found' page for your own website.",
    },
    {
      id: 70,
      response: 'A compiler error message filled with cryptic symbols',
    },
    {
      id: 71,
      response: 'An AI that insists on refactoring all your code',
    },
    {
      id: 72,
      response: 'A keyboard shortcut that only works on Fridays',
    },
    {
      id: 73,
      response: 'A code review with more comments than code',
    },
    {
      id: 74,
      response: "A software bug that's older than some of your team members.",
    },
    {
      id: 75,
      response: "An outdated design pattern that won't die.",
    },
    {
      id: 76,
      response: 'A function with a name longer than the code inside it',
    },
    {
      id: 77,
      response:
        'A server error that mysteriously vanishes when you try to reproduce it',
    },
    {
      id: 78,
      response: 'A security vulnerability that no one wants to fix',
    },
    {
      id: 79,
      response: 'An API that changes its response format every week',
    },
    {
      id: 80,
      response: 'A test suite that takes longer to run than the code it tests',
    },
    {
      id: 81,
      response: 'A typo in production code that crashes the entire application',
    },
    {
      id: 82,
      response: "A '404 Not Found' page with a broken link to the error page.",
    },
    {
      id: 83,
      response: "A codebase that's older than the internet itself.",
    },
    {
      id: 84,
      response: "An issue marked as 'Closed' that's still very much open.",
    },
    {
      id: 85,
      response: 'A codebase with comments that are more like ancient scrolls',
    },
    {
      id: 86,
      response: 'A password policy that requires 20 characters and an emoji',
    },
    {
      id: 87,
      response: 'An error message that only appears on Fridays at 4:59 PM',
    },
    {
      id: 88,
      response: "A codebase that's more patches than original code.",
    },
    {
      id: 89,
      response:
        'A browser compatibility issue that only happens in obscure browsers',
    },
    {
      id: 90,
      response:
        'An email from a user who discovered a bug you thought no one would find',
    },
    {
      id: 91,
      response: "A '404 Not Found' page with a 404% error rate.",
    },
    {
      id: 92,
      response: "A codebase that's been forked more times than you can count.",
    },
    {
      id: 93,
      response: 'An infinite recursion that leads to a server meltdown',
    },
    {
      id: 94,
      response: 'A syntax error caused by a single misplaced quote',
    },
    {
      id: 95,
      response: "A commit message that simply says 'fixes stuff'",
    },
    {
      id: 96,
      response: "A bug report that consists of one word: 'help'",
    },
    {
      id: 97,
      response:
        'A version control system that insists on renaming all your files',
    },
    {
      id: 98,
      response: 'A merge conflict that feels like a declaration of war',
    },
    {
      id: 99,
      response:
        "An AI chatbot that can only generate '404 Not Found' responses.",
    },
    {
      id: 100,
      response:
        "A test environment that's more unstable than a house of cards.",
    },
  ])
}
