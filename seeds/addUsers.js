
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, name: 'Pearl', password: 'funfunfun', avatar: 'http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/kiwi-icon.png'}),
    knex('users').insert({id: 2, name: 'Artorias', password: 'funfunfun', avatar: 'http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/kiwi-icon.png'}),
    knex('users').insert({id: 3, name: 'Uili', password: 'funfunfun', avatar: 'http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/kiwi-icon.png'}),
    knex('users').insert({id: 4, name: 'Broc', password: 'funfunfun', avatar: 'http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/kiwi-icon.png'}),
    knex('users').insert({id: 5, name: 'Olly', password: 'funfunfun', avatar: 'http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/kiwi-icon.png'}),
    knex('users').insert({id: 6, name: 'Nick', password: 'funfunfun', avatar: 'http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/kiwi-icon.png'}),
    knex('users').insert({id: 7, name: 'Lauren', password: 'funfunfun', avatar: 'http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/kiwi-icon.png'}),
    knex('users').insert({id: 8, name: 'Hape', password: 'funfunfun', avatar: 'http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/kiwi-icon.png'})
    knex('users').insert({id: 9, name: 'Surya', password: 'funfunfun', avatar: 'http://icons.iconarchive.com/icons/fi3ur/fruitsalad/256/kiwi-icon.png'})
  );
};
