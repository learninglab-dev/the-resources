#!/usr/bin/env node

// to get the most out of these scripts,
// please create a .env file with
//
// MY_RESOURCE_DRAFTS='/path/to/your/folder'
// MY_AUTHOR_ID='firstname-[last initial]'
// MARKDOWN_EDITOR='FoldingText' [for instance--optional]
// MARKDOWN_PREVIEW_APP='Marked 2' [for instance--optional]
//

const resourceTools = require('./tools/resource-tools');
const yargs = require('yargs').argv;
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname,'.env')});
global.ROOT_DIR = __dirname;

console.log(`launching resourceTools`);
resourceTools(yargs);
