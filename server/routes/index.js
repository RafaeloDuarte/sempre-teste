const express = require('express')
const UserController = require('../controller/UserController')

const route = express.Router()

route.get('/', (req, res) => {
    res.json({ 'status': 'OK' })
})

route.post('/users', UserController.store)
route.post('/users/login', UserController.login)

module.exports = route