#!/usr/bin/env node

'use strict';

const program = require('commander');

program
.version('1.0.0')
.command('setKey [key]','Sets the Consumer Key').alias('sK')
.command('setSecret [secret]','Sets the Consumer Secret').alias('sS')
.command('auth','Generates an OAuth URL and waits for the PIN to be entered to authorize the account.')  
.parse(process.argv);