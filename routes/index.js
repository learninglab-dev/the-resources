var express = require('express');
var router = express.Router();
var moment = require('moment');
var linksList = require('../data/links/front-page-links.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "the resources", message: `all the resources as of ${moment().format('YYYYMMDD')}`, links: linksList})
});

module.exports = router;
