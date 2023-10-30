const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const route = require('./routes')
const cors = require('cors');
require('dotenv').config()


// middelware
app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// router
app.use('/todo', route)

module.exports = app;