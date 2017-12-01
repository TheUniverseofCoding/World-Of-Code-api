'use strict'

const db = require('../server/db')
const { User, Location, Question } = require('../server/db/models')

async function seed () {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' })
  ])
  const locations = await Promise.all([
    Location.create({id: 1, url: 'https://www.youtube.com/watch?v=BMUiFMZr7vk', userId: 1}),
    Location.create({id: 2, url: 'https://www.youtube.com/watch?v=e-5obm1G_FY', userId: 2}),
    Location.create({
        id: 3,
        url: 'https://www.youtube.com/watch?v=fGdd9qNwQdQ',
        userId: 1
    }),
    Location.create({
      id: 4,
      url: 'https://www.youtube.com/watch?v=k7-N8R0-KY4',
      userId: 1
    }),
    Location.create({
      id: 5,
      url: 'https://www.youtube.com/watch?v=Aagf3RyK3Lw',
      userId: 1
    }),
    Location.create({
      id: 6,
      url: 'https://www.youtube.com/watch?v=10ujZygJzMQ',
      userId: 1
    })
  ])
  const questions = await Promise.all([
    Question.create({content: 'make an array', description: 'Arrays', hints: ['const array...'], answer: 'const array=[1,2,3,4,5]', boilerplate: 'const array=[]', locationId: 1, userId: 1}),
    Question.create({content: 'make an object', description: 'Objects', hints: ['const obj...'], answer: 'const obj = {name: cody, age: 30}', boilerplate: 'const obj={}', locationId: 2, userId: 2 }),
    Question.create({content: 'make a for-loop', description: 'For-Loops', hints: ['for (let i = 0)...'], answer: `for (let i = 0; i < 5; i++){
      i*2 }`, boilerplate: 'for ()', locationId: 1, userId: 1 }),
    Question.create({content: 'make a function', description: 'Functions', hints: ['const functionName...'], answer: `const myFunction = num => {
      return num + 5 }`, boilerplate: 'const myFunction = ', locationId: 1, userId: 2
    }),
    Question.create({
      content: 'Prompt Intro',
      description: 'Prompt Intro',
      answer: `prompt('Hi! What is your name?');`,
      boilerplate: `prompt('Hi! What is your name?');`,
      locationId: 3,
      userId: 1
    }),
    Question.create({
      content: 'Alert Intro',
      description: 'Alert Intro',
      answer: `var name = prompt('Hi! What is your name?'); alert(name);`,
      boilerplate: `var name = prompt('Hi! What is your name?'); alert(name);`,
      locationId: 3,
      userId: 2
    }),
    Question.create({
      content: 'Combine Them',
      description: 'Combine Them',
      answer: `var first = prompt('Hi! What is your first name?'); var last = prompt('Great! What is your last name?'); alert(first + " " + last);`,
      boilerplate: `var first = prompt('Hi! What is your first name?'); var last = prompt('Great! What is your last name?'); alert(first + " " + last);`,
      locationId: 3,
      userId: 1
    }),
    Question.create({
      content: 'Give Thanks',
      description: 'Give Thanks',
      answer: `var name = prompt('Hi! What is your name?'); "Great to meet you, " + name + "! Welcome to CodeMode!";`,
      boilerplate: `var name = prompt('Hi! What is your name?'); "Great to meet you, " + name + "! Welcome to CodeMode!";`,
      locationId: 3,
      userId: 1
    }),
    Question.create({
        content: 'Countdown',
        description: 'Countdown',
      answer: `var name = prompt('Hi! What is your name?');
        "Great to meet you, " + name + "! Welcome to CodeMode!";
        `,
      boilerplate: `var name = prompt('Hi! What is your name?');
        "Great to meet you, " + name + "! Welcome to CodeMode!";`,
        locationId: 4,
        userId: 2
      }),
      Question.create({
        content: 'Fibonacci',
        description: 'Fibonacci',
        answer: `function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
fibonacci(10)`,
        boilerplate: `function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
fibonacci(10)`,
        locationId: 4,
        userId: 1
      }),
      Question.create({
        content: 'Factorial',
        description: 'Factorial',
        answer: `function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(5)`,
        boilerplate: `function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(5)`,
        locationId: 4,
        userId: 1
      }),
      Question.create({
        content: 'Make Tree',
        description: 'Make Tree',
        answer: `let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] =
      makeTree(categories, c.id))
  return node
}

JSON.stringify(
  makeTree(categories, null), null, 2
)`,
        boilerplate: `let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] =
      makeTree(categories, c.id))
  return node
}

JSON.stringify(
  makeTree(categories, null), null, 2
)`,
        locationId: 4,
        userId: 1
      })
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${locations.length} locations`)
  console.log(`seeded ${questions.length} questions`)
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })


console.log('seeding...')
