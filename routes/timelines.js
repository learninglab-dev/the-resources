var express = require('express');
var router = express.Router();
const request = require('request');
var moment = require('moment-timezone');
const marked = require('marked');
const fs = require('fs');
const path = require('path');
const Airtable = require('airtable');
const airtableTools = require('../tools/airtable/airtable-tools');


router.get('/', function(req, res, next){
  res.send('try /timelines/two-weeks for now')
})

router.get('/two-weeks', async function(req, res, next) {
  var base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_EVENTS_BASE);
  var events = await airtableTools.findMany(
    {
      maxRecords: 200,
      view: "TwoWeeks",
      base: base,
      table: "Events"
    }
  );
  console.log(`found ${events.length} events, the first of which is ${JSON.stringify(events[0], null, 4)}`);
  var timelineJson = {
    "title": {
        "media": {
          "url": 'https://slackhq.com/admin-slacktips/wp-content/uploads/sites/2/2019/01/0_Custom-Slack-Emojis.png',
          "caption": "timeline.",
        },
        "text": {
          "headline": `Two Weeks in the LL`,
          "text": `<p>Timeline of ${events.length} events over the past two weeks in the LL.</p>`
        }
    },
    scale_factor: 1,
    events: makeTimelineEvents(events)
  }
  res.render('timeline', {
    title: `2 weeks in the LL`,
    timelineJson: timelineJson
  });
});

router.get('/:dateRange', async function(req, res, next) {
  var dateStart = req.params.dateRange.match(/.*(?=-)/);
  var dateEnd = req.params.dateRange.match(/\d{8}$/);
  var events = await airtableTools.findManyByFormula(
    {
      maxRecords: 100
    }
  )
  res.render('timeline', {
    title: `${dateStart} to ${dateEnd}`,
    json: req.params
  });
});

function makeTimelineEvents(airtableEvents){
  return airtableEvents.map(e => {
    return {
      "media": {
        "url": e.fields.heroShot ? e.fields.heroShot : "https://live.staticflickr.com/7907/46719365194_6ec4a8b4d9_h.jpg",
        "caption": e.fields.CalendarEventName,
        "credit": "LL"
      },
      "start_date": {
        "second": moment(e.fields["Start date"]).tz('America/New_York').format('s'),
        "minute": moment(e.fields["Start date"]).tz('America/New_York').format('m'),
        "hour": moment(e.fields["Start date"]).tz('America/New_York').format('H'),
        "month": moment(e.fields["Start date"]).tz('America/New_York').format('M'),
        "day": moment(e.fields["Start date"]).tz('America/New_York').format('D'),
        "year": moment(e.fields["Start date"]).tz('America/New_York').format('YYYY'),
      },
      "text": {
        "headline": e.fields.CalendarEventName,
        "text": e.fields.eventDescription
      }
    }
  })
}

module.exports = router;
