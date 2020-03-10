# YelpBot
> YelpBot is a discord bot that helps users find their desired business with a given command 

## Getting Started

* [Software Dependencies](#Software-Dependencies)
* [Git Clone](#Git-Clone)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Acknowledgments](#Acknowledgments)

### Software Dependencies

* NodeJS 9.5.0
  * https://nodejs.org/en/
* Node Package Manager (npm)
  * https://www.npmjs.com/
* Discord.js
  * https://discord.js.org/#/
* Yelp-Fusion
  * https://www.npmjs.com/package/yelp-fusion

  
### Git Clone
To do a basic clone of the project execute:
```bash
git clone https://github.com/MattJNuval/AccessibilityBot.git
```
in a terminal.

## Usage
In the terminal, insert the following command. 
```bash
node index.js
```
Keep in mind: 
 * You must first create your own bot and obtain your own secret token (https://discordapp.com/developers/applications/)
 * Anthorizes your bot into your own server in the following website: https://discordapp.com/oauth2/authorize?client_id=YOUROWNCLIENTIDFROMDISCORDDEVELOPERSWEBSITE&scope=bot

Once index.js is running, in your Discord server, you can invoke the following commands: 

> !find TERM (to find a business near fix location which is Northridge, CA)

> !find TERM -near LOCATION  (to find a business near a given location) 

## Contributors
* Mathew Nuval | Project Owner

## Acknowledgments
* https://nodejs.org/en/
* https://www.npmjs.com/
* https://discord.js.org/#/
* https://www.yelp.com/fusion

