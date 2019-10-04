var express = require('express');
var router = express.Router();
const request = require('request');
const moment = require('moment');
const marked = require('marked');
const fs = require('fs');
const path = require('path');

router.get('/', function(req, res, next) {
  var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/work'));
  res.send("nothing here. But try these routes:\n" + JSON.stringify(markdownFiles));
});

router.get('/:id', async function (req, res, next) {
  var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/work'));
  if (markdownFiles.includes(`${req.params.id}.md`)) {
    fs.readFile(path.join(ROOT_DIR, 'data/work', `${req.params.id}.md`), {encoding: 'utf-8'}, (err, data) => {
      if (err) {res.send("check back in a minute")};
      console.log(data);
      res.render("work",  {
        title: `markdown for ${req.params.id}`,
        date: moment().format("YYYYMMDD"),
        convertedMarkdown: marked(data)
      });
    });
  } else {
    res.render('test', {title: "nothing here just yet.", data: JSON.stringify(markdownFiles, null, 4)});
  }
});

router.get('/*', function(req, res, next) {
  res.send("nothing here.\n" + JSON.stringify(req.params));
})

module.exports = router;
