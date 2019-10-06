var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "show and tell", message: "all the things", date: moment().format("YYYYMMDD")})
});

module.exports = router;
