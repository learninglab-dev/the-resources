const moment = require('moment');
const placeholderImage = 'https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg';

module.exports = function(data){
  const timestamp = moment()

  if (!data.previewImage) {
    data.previewImage = placeholderImage
  }
  if (!(data.title)) {
    console.log("the resource template requires .title argument");
    return `<h1>sorry, no data</h1>` ;
  } else {
    var templateText = `---
title: ${data.title}
description: ${data.description}
thumbnail: ${data.previewImage}
author: ${process.env.MY_AUTHOR_ID}
id: ${timestamp.format('YYYYMMDD-HHmmss.SSS')}-${process.env.MY_AUTHOR_ID}
---
# ${data.title}
Resource pulled from [${data.title}](${data.url}).
${timestamp.format('YYYYMMDD-HH:mm:ss.SSS')}

${ data.embedCode ? data.embedCode
  : `![${data.title}](${data.previewImage})`
}

## DESCRIPTION
${data.description ? data.description : ""}

## KEYWORDS
${data.videoTags ? `\n${data.videoTags.join(", ")}` :  data.keywords}

`
    if (data.images.length > 0) {
      templateText+=`\n##IMAGE OPTIONS\n`
      for (var i = 0; i < data.images.length; i++) {
        templateText+=`![${data.images[i].alt}](${data.images[i].url})\n`
      }
    }

    if (process.env.SHOW_SCRAPED_DATA=="TRUE") {
      templateText+=`
## SCRAPED CONTENT
\`\`\`
${JSON.stringify(data, null, 4)}
\`\`\`
`
    }

    return templateText;
  }
}
