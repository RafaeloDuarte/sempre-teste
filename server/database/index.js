const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const User = require('../model/User')
const Register = require('../model/Register')

const conn = new Sequelize(dbConfig)
User.init(conn)
Register.init(conn)

module.exports = conn