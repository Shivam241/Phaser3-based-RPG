var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Express' });
});

router.get('/poke', function(req, res, next) {
  res.render('poke', { title: 'Express' });
});


module.exports = router;