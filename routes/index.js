var express = require('express');
var router = express.Router();

var knexOptions = require('../knexfile')
var knex = require ('knex')(knexOptions.development)
var model = require('../model/model')(knex)

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('login', errorMessage);
});
router.get('/tweets', function(req, res, next) {
  console.log("hello")
  res.render('index', testobject);
});


/* GET add new user page */

router.get('/new-user', function(req, res, next) {
     res.render('new-user', { title: 'Chat Express' });
    });

/* POST new user page */

router.post('/new-user', function(req, res, next) {
     res.redirect('/');
    });

/* GET existing user */

router.get('/user', function(req, res, next) {
     res.render('user', { title: 'Chat Express' });
    });

/* POST existing user */

router.post('/user', function(req, res, next) {
  // expecting req.body.name and req.body.password
  model.login(req.body.name, req.body.password)
    .then(function (user) {
      model.getAllTweets()
        .then(function (tweets) {
          res.render('index', { user: user, tweets: tweets })
        })
    })
    .catch(function (err) {
      res.render('login', { message: err.message })
    })
});



module.exports = router;


var testobject = {
  user: {id: 1, name: "Olly", imageUrl: "http://www.wearysloth.com/Gallery/ActorsG/6883-30057.jpg"},
  tweets: [
    {user_id: 1, user_name: "Olly", id: 1, tweet: "I'm working at EDA", createdAt: "5pm"},
    {user_id: 2, user_name: "Hape", id: 2, tweet: "I'm working at BNZ", createdAt: "1pm"},
    {user_id: 3, user_name: "Lauren", id: 3, tweet: "I'm working at BNZ", createdAt: "8pm"},
    {user_id: 4, user_name: "Nick", id: 4, tweet: "I'm working at BNZ", createdAt: "7pm"}
  ]
}

var errorMessage = {message: "Invalid user name"}
