var express = require('express');
var router = express.Router();
const marked = require('marked');
const fs = require('fs');
const path = require('path');
const util = require('util');
var moment = require('moment');
var recursive = require("recursive-readdir");
const readdir = util.promisify(fs.readdir);
var prepMarkdown = require("../tools/utilities/prep-markdown");
var Airtable = require("airtable");

router.get('/:id', async function(req, res, next) {
  console.log("request for nqp id " + req.params.id);
  var base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_RESOURCE_BASE);
  base("NotQuitePinterestBut")
    .find(req.params.id)
    .then(result=>{
      res.render("resource", {
        title: result.fields.title ? result.fields.title
          : result.fields.title ? result.fields.title
          : req.params.id,
        thumbnail: result.fields.ogImage ? result.fields.ogImage : "https://www.84lumber.com/media/1333/lumber_cover.jpg",
        description: result.fields.description ? result.fields.description : "A resource from the Learning Lab",
        convertedMarkdown: result.fields.completedMarkdown ? marked(result.fields.completedMarkdown)
          : result.fields.draftMarkdown ? marked(result.fields.draftMarkdown)
          : ""
      });
    })
    .catch((err)=>{res.send(`couldn't find ${req.params.id}`)})
});

module.exports = router;
