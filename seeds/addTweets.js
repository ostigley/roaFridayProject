
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('tweets').del(),

    // Inserts seed entries
    knex('tweets').insert({id: 1, tweet: 'hashTag roa 4eVa', time_stamp: '', user_id: '1'}),
    knex('tweets').insert({id: 2, tweet: 'Apple is OK, i guess', time_stamp: '', user_id: '2'}),
    knex('tweets').insert({id: 3, tweet: 'roomio on who does not like slippers?!?', time_stamp: '', user_id: '3'}),
    knex('tweets').insert({id: 4, tweet: 'roomio on who likes orange hoodies?', time_stamp: '', user_id: '4'}),
    knex('tweets').insert({id: 5, tweet: 'Roa is the Business', time_stamp: '', user_id: '5'})
    knex('tweets').insert({id: 6, tweet: 'always bet on roa!', time_stamp: '', user_id: '7'})
    knex('tweets').insert({id: 7, tweet: 'roa even just sounds awesome', time_stamp: '', user_id: '6'})
    knex('tweets').insert({id: 8, tweet: 'if awesome was a bird... Roa.', time_stamp: '', user_id: '8'})
    knex('tweets').insert({id: 9, tweet: 'if you want style, roa.', time_stamp: '', user_id: '9'})
    knex('tweets').insert({id: 10, tweet: 'there is no try, only roa', time_stamp: '', user_id: '9'})
    knex('tweets').insert({id: 11, tweet: 'Just DO IT', time_stamp: '', user_id: '1'}),
    knex('tweets').insert({id: 12, tweet: 'OMG ROa', time_stamp: '', user_id: '2'}),
    knex('tweets').insert({id: 13, tweet: 'FunfunRoa!', time_stamp: '', user_id: '3'}),
    knex('tweets').insert({id: 14, tweet: 'objects are over rated', time_stamp: '', user_id: '4'}),
    knex('tweets').insert({id: 15, tweet: 'ES7, really?', time_stamp: '', user_id: '5'}),
    knex('tweets').insert({id: 16, tweet: 'wisdom begins with humility', time_stamp: '', user_id: '7'}),
    knex('tweets').insert({id: 17, tweet: 'how many different mistakes to go until i become an expert?', time_stamp: '', user_id: '6'}),
    knex('tweets').insert({id: 18, tweet: 'just one breath away from calm', time_stamp: '', user_id: '8'}),
    knex('tweets').insert({id: 19, tweet: 'unix time sux!', time_stamp: '', user_id: '9'}),
    knex('tweets').insert({id: 20, tweet: 'doooooong, circle time :)', time_stamp: '', user_id: '4'}),
    knex('tweets').insert({id: 21, tweet: 'Wisdom 1: I dont know', time_stamp: '', user_id: '5'}),
    knex('tweets').insert({id: 22, tweet: 'Wisdom 2: I was wrong', time_stamp: '', user_id: '7'}),
    knex('tweets').insert({id: 23, tweet: 'Wisdom 3: I am sorry', time_stamp: '', user_id: '6'}),
    knex('tweets').insert({id: 24, tweet: 'Wisdom 4: I need help', time_stamp: '', user_id: '8'}),
    knex('tweets').insert({id: 25, tweet: 'Nothing more humorous than an empty object {}.', time_stamp: '', user_id: '9'})


  );
};
