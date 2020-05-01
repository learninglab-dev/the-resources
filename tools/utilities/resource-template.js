

module.exports = function(data){
  var templateText = `
# ${data.title}
${data.formattedTime}
![${data.title}](${data.image})

## OUTLINE
list of elements:
- one
- two

## CODE SNIPPETS
\`var fs = require('fs');\`

`
  return templateText;
}
