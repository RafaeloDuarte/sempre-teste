const express = require('express')
const RegisterController = require('../controller/RegisterController')
const UserController = require('../controller/UserController')
const auth = require('./auth')

const route = express.Router()

route.get('/', (req, res) => res.json({ 'status': 'OK' }))

route.get('/users', auth, UserController.index)
route.post('/users', UserController.store)
route.post('/users/login',  UserController.login)

route.post('/register', auth, RegisterController.store)
route.get('/register', auth, RegisterController.show)

module.exports = route