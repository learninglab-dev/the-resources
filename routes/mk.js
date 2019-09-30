var express = require('express');
var router = express.Router();
const request = require('request');
const moment = require('moment');
const marked = require('marked');
const fs = require('fs');
const path = require('path');

router.get('/', function(req, res, next) {
  res.send("nothing here.\n" + JSON.stringify(req.params));
});

router.get('/work', function(req, res, next) {
  fs.readFile(path.join(__basedir, '/public/mk/workbook.md'), {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.render("workbook",  {
      title: "workbook",
      date: moment().format("YYYYMMDD"),
      work: marked(data)
    });
  });
});

router.get('/*', function(req, res, next) {
  res.send("nothing here.\n" + JSON.stringify(req.params));
})

module.exports = router;
