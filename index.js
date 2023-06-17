/* REQUIRED MODULES CONSIST IN IT */
const path = require('path')
const express = require('express')
const app = express()
const db = require('./DB/db')
const apis = require('./Routes/route')
require('dotenv').config()

app.use(express.json())

app.use('/',express.static(path.join(__dirname,'public')))

app.use('/api',apis)

const port = process.env.PORT
app.listen(port ,()=>{
    console.log("server is connected...")
})