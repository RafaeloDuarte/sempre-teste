const express = require('express')
const userValidation = require('../controller/validacoes/userValidation')
const registerValidation = require('../controller/validacoes/registerValidation')
const RegisterController = require('../controller/RegisterController')
const UserController = require('../controller/UserController')
const auth = require('./auth')

const route = express.Router()

route.get('/', (req, res) => res.json({ 'status': 'OK' }))

route.get('/users/login', auth, UserController.index)
route.post('/users/login/store', userValidation.store, UserController.store)
route.post('/users/login', userValidation.login, UserController.login)

route.post('/register', auth, registerValidation.store,
    RegisterController.store)
route.get('/register', auth, RegisterController.show)

module.exports = route