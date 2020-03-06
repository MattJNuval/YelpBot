
// require the discord.js and yelp-fusion module
const Discord = require('discord.js');
const Yelp = require('yelp-fusion');

// create a new Discord and Yelp client
const discordClient = new Discord.Client();
const yelpClient = Yelp.client('hkkJIKWdwY1z1mnqBkp711ceL7Gx14oUa9Z7brHqklFM9fHbjeOWU_6NmWNGKqUYPrE0ilZIWMvzF4R87eGXAZ14dWHFzqYgRscBE7jX6TByS9fAYGSPKEQe5qAwXnYx');

// copy token in the token variable
const token = 'ADD TOKEN HERE';

// instance variables
//var topic = ' ';
var lat = '34.2441724';
var lng = '-118.5388516';
var results = '';


// when the client is ready, run this code
// this event will only trigger one time after logging in
discordClient.once('ready', () => {
    console.log('Ready!');
});

discordClient.on('message', message => {
    if (message.author == discordClient.user) {
        return;
    }

    // TODO: Implement and configure searchAnywhere(topic, location) command

    // TODO: Implement and configure search engine command
    if (message.content.substring(0, 6) == '!find ') {

        console.log('Sent: ' + message.content);
        searchInCsun(message.content.substring(6, message.content.length));
        setTimeout(function () {
            message.channel.send(results + '');
        }, 3000);
    }
}); 

function searchAnyWhere(topic, location) {
    // TODO: Implement code
}

function searchInCsun(topic) {
    yelpClient.search({
        term: topic,
        latitude: lat,
        longitude: lng,
    }).then(response => {
        // TODO: Add RELEVANT information and a Google Map link with the given lat and lng
        results += 'Here is our top three picks for \'' + topic + '\' near CSUN:\n\n';
        for (var i = 0; i < 3; i++) {
            var name = response.jsonBody.businesses[i].name;
            var rating = response.jsonBody.businesses[i].rating;
            var reviewCount = response.jsonBody.businesses[i].review_count;
            var price = response.jsonBody.businesses[i].price;
            var url = response.jsonBody.businesses[i].url;
            var address = response.jsonBody.businesses[i].location.address1;
            var city = response.jsonBody.businesses[i].location.city;
            var state = response.jsonBody.businesses[i].location.state;
            var zipCode = response.jsonBody.businesses[i].location.zip_code;
            var counter = i + 1;
            results += counter + ')\n' +'Name: ' + name + ' ' + '(' + price + ')' + '\n'
                + 'Rating: ' + rating + ' stars (' + reviewCount + ')' + '\n' 
                + 'Address: ' + address + ', ' + city + ', ' + state + ' ' + zipCode + '\n'
                + 'URL: ' + url + '\n\n';
        }

    }).catch(e => {
        console.log(e);
        results = '\'' + topic + '\'' + ' is not found.';
    });
}

// login to Discord with your app's token 
discordClient.login(token);