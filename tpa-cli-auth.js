#!/usr/bin/env node

const TwitterPinAuth = require('twitter-pin-auth');
const config = require('./config');
const twitterPinAuth = new TwitterPinAuth(config.consumer_key, config.consumer_secret);
const prompt = require('prompt');
const program = require('commander');
const chalk = require('chalk');

program.parse(process.argv);
if(!config.consumer_key[0] || !config.consumer_secret[0]) return console.log(chalk.styles.red.open + 'You are missing your Key or Secret. Use the'+ chalk.styles.red.close + chalk.styles.cyan.open +'setKey '+ chalk.styles.cyan.close + chalk.styles.red.open +'or'+ chalk.styles.red.close + chalk.styles.cyan.open +' setSecret '+ chalk.styles.cyan.close + chalk.styles.red.open +' command to add them.' + chalk.styles.red.close);

twitterPinAuth.requestAuthUrl()
.then(function(url) {
    console.log('Authorization URL: '+url);
    prompt.start();
    prompt.message = 'Enter';
    prompt.delimiter = ' ';
    prompt.get(['pin'], function (err, result) {
        if (err) { return onErr(err); }
        twitterPinAuth.authorize(result.pin, function(err, data) {
            if(err) {
                return console.error(err);
            }
            console.log(chalk.styles.yellow.open + 'Your Access Token Key: ' + chalk.styles.yellow.close + chalk.styles.green.open + data.accessTokenKey + chalk.styles.green.close);
            console.log('Your Access Token Secret: '+data.accessTokenSecret);
        });
    });
    function onErr(err) {
    console.log(err);
    return 1;
    }
}).catch(function(err) {
    console.error(err);
});


