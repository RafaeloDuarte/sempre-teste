const express = require('express')
const route = require('./routes')
const app = express()

require('./database')

app.use(express.json())
app.use(route)

app.listen(3000)