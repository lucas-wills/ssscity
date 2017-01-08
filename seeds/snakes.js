
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snakes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('snakes').insert({snake_name: 'Edward Slithersworth', hat_type: 'Top Hat', owner_name: 'Barack Obama', bio: 'Dressed to impress, Edward takes the social scene of Chicago by storm.', img_url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/11/cute-snakes-wear-hats-101__700.jpg'}),
        knex('snakes').insert({snake_name: 'Clint Hisswood', hat_type: 'Stetson', owner_name: 'Barack Obama', bio: '"Stick \'em up!" yelled the Sherrif, if only he could.', img_url:'http://static.boredpanda.com/blog/wp-content/uploads/2015/11/cute-snakes-wear-hats-87__700.jpg'}),
        knex('snakes').insert({snake_name: 'Emily Hisser', hat_type: 'Breton', owner_name: 'Michelle Obama', bio: 'Enjoys the simple things in life; bathing in the sun, drinking fine wines, and biting anyone who comes too close.', img_url:'http://cdn3-www.craveonline.com/assets/uploads/2014/01/man_file_1048902_red-hat-society-snake-1.jpg'})
      ]);
    });
};
