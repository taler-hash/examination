require('dotenv').config()

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

module.exports = sequelize