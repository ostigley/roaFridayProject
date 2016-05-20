var express = require('express');
var router = express.Router();

var knexOptions = require('../knexfile')
var knex = require ('knex')(knexOptions.development)
var model = require('../model/model')(knex)

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('login');
});
// router.get('/tweets', function(req, res, next) {
//   console.log("hello")
//   res.render('index', testobject);
// });


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
  console.log("/user POST hit")
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

