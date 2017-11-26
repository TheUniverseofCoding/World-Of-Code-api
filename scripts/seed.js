'use strict'

const db = require('../server/db')
const { User, Question } = require('../server/db/models')
async function seed () {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' })
  ])
  const questions = await Promise.all([
    Question.create({content: 'make an array', hints: ['go for it'], answer: 'const array=[1,2,3,4,5]', boilerplate: 'const array=[]'})
  ])
  console.log(`seeded ${users.length} users`)
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
