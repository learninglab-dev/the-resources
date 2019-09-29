var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
  res.send("nothing here.\n" + JSON.stringify(req.params));
})

router.get('/test', function(req, res, next) {
  request(('https://api.darksky.net/forecast/' + process.env.DARK_SKY_SECRET + '/' + 42.3601 +',-71.0589,255657600'), { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
    res.send(JSON.stringify(body));
  });
});

/* GET person page. */
router.get('/weather/lat/:lat/long/:long/', function(req, res, next) {
  console.log(JSON.stringify(req.params));
  console.log(JSON.stringify(req.query));
  request(('https://api.darksky.net/forecast/' + process.env.DARK_SKY_SECRET + '/' + req.params.lat +',' + req.params.long), { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    res.send(JSON.stringify(body));
  });
});


module.exports = router;
