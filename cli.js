#!/usr/bin/env node


const markdownTools = require('./tools/utilities/markdown-tools');
const yargs = require('yargs').argv;
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname,'.env')});
global.ROOT_DIR = path.resolve(__dirname);

console.log(`it's working`);

markdownTools.resourceFromUrl(yargs);
