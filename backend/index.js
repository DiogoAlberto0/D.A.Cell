const express = require('express')
const consign = require('consign')
const db = require('./config/db')

const port = 8080

const app = express()

app.db = db
consign()
    .include('./config/validation.js')
    .include('./config/middlewares.js')
    .include('./config/passport.js')
    .include('./api')
    .include('./config/routes.js')
    .into(app)

app.listen(port, () => {
    console.log('Backend Executando Porta:', port)
})