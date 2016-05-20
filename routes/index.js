var express = require('express');
var router = express.Router();
var model = require('../model/model')

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
     res.redirect('/');
    });



module.exports = router;


var testobject = {
  user: {id: 1, name: "Olly", imageUrl: "http://www.wearysloth.com/Gallery/ActorsG/6883-30057.jpg"},
  tweets: [
    {user_id: 1, user_name: "Olly", id: 1, tweet: "I'm working at EDA", createdAt: "5pm"},
    {user_id: 2, user_name: "Hape", id: 2, tweet: "I'm working at BNZ", createdAt: "5pm"}
  ]
}

var errorMessage = {message: "Invalid user name"}
