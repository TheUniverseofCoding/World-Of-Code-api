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
    Question.create({content: 'make an array', description: 'Arrays', hints: ['const array...'], answer: 'const array=[1,2,3,4,5]', boilerplate: 'const array=[]', locationId: 1}),
    Question.create({content: 'make an object', description: 'Objects', hints: ['const obj...'], answer: 'const obj = {name: cody, age: 30}', boilerplate: 'const obj={}', locationId: 2 }),
    Question.create({content: 'make a for-loop', description: 'For-Loops', hints: ['for (let i = 0)...'], answer: `for (let i = 0; i < 5; i++){
      i*2 }`, boilerplate: 'for ()', locationId: 1 }),
    Question.create({content: 'make a function', description: 'Functions', hints: ['const functionName...'], answer: `const myFunction = num => {
      return num + 5 }`, boilerplate: 'const myFunction = ', locationId: 1
    }),
    Question.create({
      content: 'Prompt Intro',
      answer: `prompt('Hi! What is your name?');`,
      boilerplate: `prompt('Hi! What is your name?');`,
      locationId: 3
    }),
    Question.create({
      content: 'Alert Intro',
      answer: `var name = prompt('Hi! What is your name?'); alert(name);`,
      boilerplate: `var name = prompt('Hi! What is your name?'); alert(name);`,
      locationId: 3
    }),
    Question.create({
      content: 'Combine Them',
      answer: `var first = prompt('Hi! What is your first name?'); var last = prompt('Great! What is your last name?'); alert(first + " " + last);`,
      boilerplate: `var first = prompt('Hi! What is your first name?'); var last = prompt('Great! What is your last name?'); alert(first + " " + last);`,
      locationId: 3
    }),
    Question.create({
      content: 'Give Thanks',
      answer: `var name = prompt('Hi! What is your name?'); "Great to meet you, " + name + "!\nWelcome to CodeMode!";`,
      boilerplate: `var name = prompt('Hi! What is your name?'); "Great to meet you, " + name + "!\nWelcome to CodeMode!";`,
      locationId: 3
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
