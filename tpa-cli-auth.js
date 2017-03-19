const TwitterPinAuth = require('twitter-pin-auth');
const config = require('./config');
const twitterPinAuth = new TwitterPinAuth(config.consumer_key, config.consumer_secret);
const prompt = require('prompt');
const program = require('commander');

program.parse(process.argv);
prompt.message = 'Enter';
prompt.delimiter = ' ';


if(!config.consumer_key[0] || !config.consumer_secret[0]) return console.log('You are missing your Key or Secret. Use setKey or setSecret to add them.');

twitterPinAuth.requestAuthUrl()
.then(function(url) {
    console.log('Authorization URL: '+url);
    prompt.start();
    prompt.get(['pin'], function (err, result) {
        if (err) { return onErr(err); }
        twitterPinAuth.authorize(result.pin, function(err, data) {
            if(err) {
                return console.error(err);
            }
            console.log('Your Access Token Key: '+data.accessTokenKey);
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


