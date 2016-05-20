
exports.up = function(knex, Promise) {
  console.log("create user table")

  return knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id')
      table.string('name')
      table.string('password')
      table.string('avatar')
  })

};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users').then(function () {
        console.log('users table was dropped')
    })
};
