var development = require('./knexfile').development
var knex = require('knex')(development)

function getHome(req, res){
  knex('snakes')
    .then(snakeArray => {
      res.json({snakes: snakeArray})
    })
    .catch(err => console.error(err))
}

function getSnake(req, res){
  knex('snakes')
    .where('snakes.id', req.params.id)
    .then(snake => {
      res.render('snakeById', snake[0])
    })
    .catch(err => console.error(err))
}

module.exports = {
  getHome: getHome,
  getSnake: getSnake
}
