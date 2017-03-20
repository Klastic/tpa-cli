#!/usr/bin/env node

const program = require('commander');
const json = require('json-update');

program.parse(process.argv);

if (!program.args) {
  console.error('Consumer Secret Required');
  process.exit(1);
}

json.update(__dirname+'/config.json',{consumer_secret:program.args})
.then(function(dat) { 
  console.log('Your Secret has been updated.') 
});