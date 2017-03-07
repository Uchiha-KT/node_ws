var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Belajar Node.js dengan SB-Admin 2.0' });
});

module.exports = router;
