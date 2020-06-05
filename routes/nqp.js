var express = require('express');
var router = express.Router();
const marked = require('marked');
var prepMarkdown = require("../tools/utilities/prep-markdown");
var Airtable = require("airtable");
var fm = require('front-matter');

router.get('/:id', async function(req, res, next) {
  console.log("request for nqp id " + req.params.id);
  var base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_RESOURCE_BASE);
  base("NotQuitePinterestBut")
    .find(req.params.id)
    .then(result=>{
      var theStuff = result.fields.completedMarkdown ? fm(result.fields.completedMarkdown) : fm(result.fields.draftMarkdown);
      res.render("resource", {
        title: theStuff.attributes.title ? theStuff.attributes.title
          : req.params.id,
        thumbnail: theStuff.attributes.thumbnail ? theStuff.attributes.thumbnail
          : result.fields.ogImage ? result.fields.ogImage : "https://www.84lumber.com/media/1333/lumber_cover.jpg",
        description: theStuff.attributes.description ? theStuff.attributes.description
          : result.fields.description ? result.fields.description : "A resource from the Learning Lab",
        convertedMarkdown: marked(theStuff.body)
      });
    })
    .catch((err)=>{res.send(`couldn't find ${req.params.id}`)})
});

module.exports = router;
