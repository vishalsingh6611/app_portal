const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
const { load } = require('dotenv')
mongoose.connect('mongodb://localhost/App_Portal', {useNewUrlParser : true})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected To Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)