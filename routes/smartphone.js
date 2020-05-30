var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'camera' });
});
router.get('/editer', function(req, res, next) {
  res.render('editer', { title: 'editer' });
});

module.exports = router;
