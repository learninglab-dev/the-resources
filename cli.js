#!/usr/bin/env node

const resourceTools = require('./tools/resource-tools');
const yargs = require('yargs').argv;
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname,'.env')});
global.ROOT_DIR = __dirname;

console.log(`launching resourceTools`);
resourceTools(yargs);
