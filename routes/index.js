var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', errorMessage);
});
router.get('/tweets', function(req, res, next) {
  console.log("hello")
  res.render('index', testobject);
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
