var express = require('express');
var router = express.Router();
var people = require('../data/people.json');





/* GET person page. */
router.get('/:name', function(req, res, next) {
  console.log(req.params.name);
  var thePersonIWant = {};
  for (var i = 0; i < people.length; i++) {
    if (people[i].name == req.params.name) {
      thePersonIWant = people[i];
      console.log("found the person I want!  It's " + people[i].name);
    }
    else {
      console.log(people[i].name + " is not the person I want");
    }
  }
  res.render('person', {
    person: thePersonIWant
  })
});



module.exports = router;
