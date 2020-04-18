var express = require('express');
var router = express.Router();
var moment = require('moment');
var frontPageLinks = require('../data/links/front-page-links.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "the resources", message: `all the resources as of ${moment().format('YYYYMMDD')}`, links: frontPageLinks})
});

module.exports = router;
