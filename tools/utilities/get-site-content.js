const axios = require('axios');
const cheerio = require('cheerio');
const cp = require('child_process');
const fs = require('fs');
const moment = require('moment');
const url = require('url');

// scrape the site and hand back structured data
module.exports = async function (theUrl){
  if (theUrl) {
    console.log(`working on ${theUrl}`);
    const response = await axios.get(theUrl)
      .catch(e => {console.log(e)});
    const $ = cheerio.load(response.data);
    const timestamp = moment()
    var resourceData = {
      title: $('title').text() ? $('title').text() : `added`,
      description: $("meta[property='og:description']").attr("content") ? $("meta[property='og:description']").attr("content") : "",
      previewImage: $("meta[property='og:image']").attr("content") ? $("meta[property='og:image']").attr("content") : "",
      url: $("meta[property='og:url']").attr("content") ? $("meta[property='og:url']").attr("content") : theUrl,
      type: $("meta[property='og:type']").attr("content") ? $("meta[property='og:type']").attr("content") : "",
      ogKeywords: $("meta[name='keywords']").attr("content") ? $("meta[name='keywords']").attr("content").split(',').map(e=>{return e.trim()}) : [],
      videoTags: [],
      originalUrl: theUrl,
      images: [],
      timestamp: timestamp.format('YYYYMMDD-HHmmss.SSS'),
      resourceId: process.env.MY_AUTHOR_ID ? `${timestamp.format('YYYYMMDD-HHmmss.SSS')}-${process.env.MY_AUTHOR_ID}` : `${timestamp.format('YYYYMMDD-HHmmss.SSS')}-anon`
    }
    // consolidating keywords and removing duplicates:
    //
    // TODO: compare against an inventory of keywords on Airtable?
    // or should this happen the next level up?
    //
    if ($("meta[property='og:video:tag']")) {
      for (var i = 0; i < $("meta[property='og:video:tag']").length; i++) {
        resourceData.videoTags.push($($("meta[property='og:video:tag']")[i]).attr("content"))
      }
      resourceData.keywords = [...resourceData.videoTags, ...resourceData.ogKeywords].reduce((unique, item)=>unique.includes(item) ? unique : [...unique, item], []);
    } else {
      resourceData.keywords = resourceData.ogKeywords
    }
    const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/
    const youTubeIdRegex = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
    if (youtubeRegex.test(resourceData.url)) {
      console.log("looks like a YouTube link--let's embed it");
      resourceData.embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${resourceData.url.match(youTubeIdRegex)[1]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      for (var i = 0; i < $('img').length; i++) {
        if ($($('img')[i]).attr('data-thumb')) {
          resourceData.images.push({
            url: ($($('img')[i]).attr('data-thumb')).split('?')[0],
            alt: $($('img')[i]).attr('alt') ? $($('img')[i]).attr('alt') : "Insert Alternative Text"
          })
        }
      }
    } else {
      for (var i = 0; i < $('img').length; i++) {
        if ($($('img')[i]).attr('src')) {
          resourceData.images.push({
            url: $($('img')[i]).attr('src'),
            alt: $($('img')[i]).attr('alt') ? $($('img')[i]).attr('alt') : "Insert Alternative Text"
          })
        } else if ($($('img')[i]).attr('data-src')) {
          resourceData.images.push({
            url: $($('img')[i]).attr('data-src'),
            alt: $($('img')[i]).attr('alt') ? $($('img')[i]).attr('alt') : "Insert Alternative Text"
          })
        }
      }
    }
    // console.log(JSON.stringify(resourceData, null, 4));
    // UNCOMMENT NEXT LINE TO LOG ENTIRE RESPONSE TO /TEMP
    // fs.writeFileSync(`${ROOT_DIR}/temp/${moment().format('YYYYMMDD-HHmmss.SSS')}`, response.data);
    return resourceData;
  } else {
    console.log("getSiteContent function requires parameter url");
  }
}
