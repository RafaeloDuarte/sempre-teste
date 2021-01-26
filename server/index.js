const express = require('express')
const route = require('./routes')
const cors = require('cors')

const app = express()

require('./database')

app.use(express.json())
app.use(cors())
app.use(route)

app.listen(3000)