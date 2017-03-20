#!/usr/bin/env node
const program = require('commander');
const json = require('json-update');

program.parse(process.argv);

if (!program.args) {
  console.error('Consumer Key Required');
  process.exit(1);
}

json.update(__dirname+'/config.json',{consumer_key:program.args})
.then(function(dat) { 
  console.log('Your Key has been updated.');
});