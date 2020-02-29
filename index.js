
// require the discord.js and yelp-fusion module
const Discord = require('discord.js');
const Yelp = require('yelp-fusion');

// create a new Discord and Yelp client
const discordClient = new Discord.Client();
const yelpClient = Yelp.client('hkkJIKWdwY1z1mnqBkp711ceL7Gx14oUa9Z7brHqklFM9fHbjeOWU_6NmWNGKqUYPrE0ilZIWMvzF4R87eGXAZ14dWHFzqYgRscBE7jX6TByS9fAYGSPKEQe5qAwXnYx');

// copy token in the token variable
const token = 'YOUR TOKEN HERE';

// instance variables
var topic = 'Boba';
var lat = '34.2441724';
var lng = '-118.5388516';
results = 'yooo';


// when the client is ready, run this code
// this event will only trigger one time after logging in
discordClient.once('ready', () => {
    console.log('Ready!');
});

discordClient.on('message', message => {
    if (message.author == discordClient.user) {
        return;
    }

    // TODO: Implement and configure search engine command
    if (message.content == '!find') {
        console.log(message.content);
        message.channel.send(results + '');
    }
}); 

yelpClient.search({
    term: topic,
    latitude: lat,
    longitude: lng,
}).then(response => {
    // TODO: Add more information and a Google Map link with the given lat and lng
    results = response.jsonBody.businesses[0].name;
}).catch(e => {
    console.log(e);
});

// login to Discord with your app's token 
discordClient.login(token);