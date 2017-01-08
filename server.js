var path = require('path')
var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var routes = require('./routes')

var app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.engine('hbs', hbs({extname: 'hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', routes.getHome)

module.exports = app
