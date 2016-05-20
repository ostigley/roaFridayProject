exports.up = function(knex, Promise) {
  console.log("create tweets table")

  return knex.schema.createTableIfNotExists('tweets', function(table) {
      table.increments('id')
      table.string('tweet')
      table.string('time_stamp')
      table.string('user_id')
  })

};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tweets').then(function () {
        console.log('tweets table was dropped')
    })
};
