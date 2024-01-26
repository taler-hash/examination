require('dotenv').config()

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const router = require('./routes/start.js')
const port = process.env.APP_PORT

app
.set('view engine', 'ejs')
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(cookieParser())
.use(router)
.listen(port)

require('./websocket/config.js')

console.log(`starting server on port ${port}`)