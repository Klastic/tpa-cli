#!/usr/bin/env node

'use strict';

const program = require('commander');
// const TwitterPinAuth = require('twitter-pin-auth');
// const config = require('./config');
// const twitterPinAuth = new TwitterPinAuth(config.consumer_key, config.consumer_secret);

program
.version('1.0.0')
.command('setKey [key]','Sets the Consumer Key')
.command('setSecret [secret]','Sets the Consumer Secret')
.command('auth','Generates an OAuth URL and waits for the PIN to be entered to authorize the account.')  
.parse(process.argv);