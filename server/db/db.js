'use strict'

const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://ctnhsnmsormaqo:a2d64b0a38868ae0256731f0e9d99d260ed543f057260b5f6f3ce731b1aac8d3@ec2-23-21-220-32.compute-1.amazonaws.com:5432/d6ebp59rqvafhn', {
    logging: false
  }
)


module.exports = db
