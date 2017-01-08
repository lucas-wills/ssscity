var development = require('./knexfile').development
var knex = require('knex')(development)

function getHome(req, res){
  knex('snakes')
    .then(snakes => {
      res.render('index', {snakes: snakes})
    })
}

module.exports = {
  getHome: getHome
}
