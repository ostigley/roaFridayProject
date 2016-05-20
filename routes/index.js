var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Chat Express' });
});
router.get('/tweets', function(req, res, next) {
  res.render('index', { title: 'Chat Express' });
});


module.exports = router;
