var path = require('path')
var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var routes = require('./routes')

var app = express()

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use('/', express.static(path.join(__dirname, 'public')))
// app.engine('hbs', hbs({extname: 'hbs'}))
// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', hbs({defaultLayout: 'main'})) // makes the main page html file work.
app.set('view engine', 'hbs') //causes the render function to work

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, 'public')))

// app.get('/', function(req, res){
//   res.redirect('/api/v1/resources')
// })
app.get('/api/v1/resources', routes.getHome)
app.get('/api/v1/resources/:id', routes.getSnake)

module.exports = app
