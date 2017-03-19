#!/usr/bin/env node
const program = require('commander');

program.parse(process.argv);

if (!program.args) {
  console.error('Consumer Key Required');
  process.exit(1);
}

console.log(JSON.stringify(program.args));
