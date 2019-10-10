var express = require('express');
var router = express.Router();
var moment = require('moment');
var frontPageLinks = require('../data/front-page-links.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "the show", message: `all the things as of ${moment().format('YYYYMMDD')}`, links: frontPageLinks})
});

router.get('/and-tell', function(req, res, next) {
  res.render('index', { title: "show (and tell)", message: `all the things as of ${moment().format('YYYYMMDD')}`, links: frontPageLinks})
});

module.exports = router;
