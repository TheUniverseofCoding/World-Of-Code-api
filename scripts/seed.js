'use strict'

const db = require('../server/db')
const { User, Location, Question } = require('../server/db/models')

async function seed () {
  await db.sync({ force: true })
  console.log('db synced!')
  const users = await Promise.all([
    User.create({ email: 'aziggy1337@gmail.com', password: 'password' }),
  ])
  const locations = await Promise.all([
    Location.create({id: 1, url: 'https://www.youtube.com/watch?v=BMUiFMZr7vk', userId: 1}),
    Location.create({id: 2, url: 'https://www.youtube.com/watch?v=k7-N8R0-KY4', userId: 1})
  ])
  const questions = await Promise.all([
    // Recursion -- Video 2
  Question.create({
    content: `Find the longest increasing
              subsequence in an array of numbers.`,
    description: `Longest Increasing
                  Subsequence`,
    answer: `const longestIncreasingSubsequence = (nums, idx = 0, base = -Infinity)  => {
      if (idx === nums.length) return 0;
      const num = nums[idx];
      const whenExcluded = longestIncreasingSubsequence(nums, idx + 1, base);
      if (num <= base) return whenExcluded;
      const whenIncluded = 1 + longestIncreasingSubsequence(nums, idx + 1, num);
      return Math.max(whenIncluded, whenExcluded);
    }

    longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80])`,
    boilerplate: `const longestIncreasingSubsequence = (nums, idx = 0, base = -Infinity)  => {
// your code here
}`,
    locationId: 2,
    userId: 1
  }),
  Question.create({
    content: `Return the nth number
              in a fibonacci sequence.`,
    description: 'Fibonacci',
    answer:`const fibonacci = num => {
      if (num === 0) return 1
      if (num === 1) return 1
      else return fibonacci(num - 1) + fibonacci(num - 2)
    }

    fibonacci(4)`,
    boilerplate: `const fibonacci = {
// your code here
}`,
    locationId: 2,
    userId: 1
  }),
  Question.create({
    content: `Find the factorial of a number`,
    description: 'Factorial',
    answer: `const factorial = num => {
      if (num === 0) return 1
      if (num === 1) return 1
      else return num * factorial(num - 1)
    }

    factorial(5)`,
    boilerplate: `const factorial = {
// your code here
}`,
    locationId: 2,
    userId: 1
  }),
  Question.create({
    content: `Write a function 'merge' which
              implements the given function
              'mergeSort' and sorts an array
              from largest to smallest value.`,
    description: 'Merge Sort',
    answer: `const merge = (left, right) => {
      const result = [];
      while (left.length && right.length)
        if (left[0] <= right[0]) result.push(left.shift());
        else result.push(right.shift());
      while (left.length)
        result.push(left.shift());
      while (right.length)
        result.push(right.shift());
      return result;
    }
    mergeSort([4,5,4,7,1,5])`,
    boilerplate: `const mergeSort = arr => {
      if (arr.length < 2) return arr;
      const middle = parseInt(arr.length / 2);
      const left   = arr.slice(0, middle);
      const right  = arr.slice(middle, arr.length);
      return merge(mergeSort(left), mergeSort(right));
    }`,
    locationId: 2,
    userId: 1
  }),
  // Higher Order Functions
  Question.create({
    content: `Filter the array of animals
                  by species`,
    description: 'Video Exercise',
    answer: `var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'},
  ]
  var dogs = animals.filter(function(animal) {
    return animal.species === 'dog'
  })`,
    boilerplate: `var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'},
  ]
  var isDog = animal => {
    return animal.species === 'dog'
  }`,
    locationId: 1,
    userId: 1
  }),
  Question.create({
    content: `Create a function which takes
              an array and a string, 'parent'.
              Return a nested 'tree' object
              in which 'parent' is the root node
              and children are the element of the
              array whose parent property matches
              'parent'`,
    description: 'JSON Object Tree',
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
}`,
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
// your code here
}`,
    locationId: 1,
    userId: 1
  }),
  Question.create({
    content: `Replace every instance of a word
              in a string with another word.
              Don't use JS's .replace method.`,
    description: 'Replace',
    answer: `const replace = (string, word1, word2) => {
      return string.split(' ').map(selectedWord => {
        if (selectedWord === word1) return word2
        else return selectedWord
      })
      .join(' ')
    }`,
    boilerplate: `const replace = (string, word1, word2) => {
// your code here
}`,
    locationId: 1,
    userId: 1
  }),
  Question.create({
    content: `Use .map and .reduce to sum
              the numbers in the nested array.`,
    description: 'Nested Reduce',
    answer: `const nestedReduce = array => {
      return array.map(innerArray => {
        return innerArray.reduce((a,b) => a+b)
      })
      .reduce((a,b) => a+b)
    }`,
    boilerplate:`const array = [[1,2],[3,4],[5,6]]
const nestedReduce = array => {
// your code here
}`,
    locationId: 1,
    userId: 1
}),
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
