#!/usr/bin/env node

const TwitterPinAuth = require('twitter-pin-auth');
const config = require('./config');
const twitterPinAuth = new TwitterPinAuth(config.consumer_key, config.consumer_secret);
const prompt = require('prompt');
const program = require('commander');
const chalk = require('chalk');


program.parse(process.argv);
if(!config.consumer_key[0] || !config.consumer_secret[0]) {
    if(!config.consumer_key[0])console.log(chalk.styles.red.open + 'You are missing your Consumer Key. Use '+ chalk.styles.red.close + chalk.styles.cyan.open +'tpa setKey YOURKEYHERE'+ chalk.styles.cyan.close + chalk.styles.red.open +' to add it.' + chalk.styles.red.close);
    if(!config.consumer_secret[0])console.log(chalk.styles.red.open + 'You are missing your Comsumer Secret. Use the ' + chalk.styles.red.close + chalk.styles.cyan.open +'tpa setSecret YOURSECRETHERE'+ chalk.styles.cyan.close + chalk.styles.red.open +' to add it.' + chalk.styles.red.close);
    return;
}
var pin = () => {
    twitterPinAuth.requestAuthUrl()
    .then(function(url) {
        console.log(chalk.styles.cyan.open +'Authorization URL: '+ chalk.styles.cyan.close + chalk.styles.green.open + url + chalk.styles.green.close);
        prompt.start();
        prompt.message = 'Enter';
        prompt.delimiter = ' ';
        prompt.get(['pin'], function (err, result) {
            if (err) { return onErr(err); }
            twitterPinAuth.authorize(result.pin, function(err, data) {
                if(err) {
                    console.error(chalk.styles.red.open + 'Error: Incorrect PIN' + chalk.styles.red.close);
                    console.error(chalk.styles.magenta.open + 'Restarting OAuth flow' + chalk.styles.magenta.close);
                    return pin();
                }
                console.log(chalk.styles.cyan.open + 'Your Access Token Key: ' + chalk.styles.cyan.close + chalk.styles.green.open + data.accessTokenKey + chalk.styles.green.close);
                console.log(chalk.styles.cyan.open + 'Your Access Token Secret: '+ chalk.styles.cyan.close + chalk.styles.green.open + data.accessTokenSecret + chalk.styles.green.close);
            });
        });
        function onErr(err) {
        console.log(err);
        return 1;
        }
    }).catch(function(err) {
        console.error(err);
    });
};
pin();
