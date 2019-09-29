var express = require('express');
var router = express.Router();
var moment = require('moment');


var things = [
  {
    creatorName: "Jad",
    creationDate: 20181102,
    creationName: "show.learninglab.xyz prototype",
    type: "web",
    url: "show.learninglab.xyz",
    vimeoUrl: false,
    imageLink: false
  },
  {
    creatorName: "Lara",
    creationDate: 20181030,
    creationName: "ArtLab badge",
    type: "art",
    url: false,
    vimeoUrl: false,
    imageLink: false
  },
  {
    creatorName: "Lara",
    creationDate: 20181102,
    creationName: "Awesome Sorting Function",
    type: "code",
    url: false,
    vimeoUrl: false,
    imageLink: false
  }
];


router.get('/menu', function(req, res, next) {
  res.render('menu', { title: "show and tell" });
});

router.get('/things', function(req, res, next) {
  console.log("just got a request for things");
  var theRealThings = [];
  for (var i = 0; i < things.length; i++) {
    if (things[i].creationDate > 20181101) {
      theRealThings.push(things[i]);
    }
  }
  console.log(JSON.stringify(things, null, 4));
  res.render('things', { title: "things", theThings: theRealThings });
});

router.get('emoji-data', function(req, res, next){
  var theData = [
    {
      name: "element 1",
      size: 100
    },
    {
      name: "element 2",
      size: 150
    },
    {
      name: "element 3",
      size: 200
    },
    {
      name: "element 4",
      size: 300
    },
    {
      name: "element 5",
      size: 237
    },
  ]
  res.render('d3/barChart', { data: theData });
})

module.exports = router;
