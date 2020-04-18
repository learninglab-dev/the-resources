var express = require('express');
var router = express.Router();

/* GET person page. */
// TODO: list tools with thumbnails

router.get('/', function(req, res, next) {
  res.send("help us add list of tools here")
})

// TODO: need to build out this route
// so that it gets a tool record from Airtable
// TODO: also grab most recent 3 elements?

router.get('/:name', function(req, res, next) {
  res.render('json', {
    title: "under construction",
    json: req.params
  })
});


module.exports = router;
