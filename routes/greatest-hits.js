var express = require('express');
var router = express.Router();
var moment = require('moment');
var greatestHits = require('../data/links/greatest-hits.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "greatest hits", message: `some of the greatest hits as of ${moment().format('YYYYMMDD')}`, links: greatestHits})
});

module.exports = router;
