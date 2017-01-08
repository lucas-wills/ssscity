
exports.up = function(knex, Promise) {
  return knex.schema.createTable('snakes', function(table){
      table.increments('id')
      table.string('snake_name')
      table.string('hat_type')
      table.string('owner_name')
      table.string('bio')
      table.string('img_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snakes')
};
