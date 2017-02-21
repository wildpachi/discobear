const Discord = require('discord.js');
const client = new Discord.Client();

var settings = require('./config/discord.js');

client.on('ready', () => { console.log('Started.'); });

client.on('message', message => {
  if (message.content.toLowerCase() == '!hell')
  {
    message.react(message.guild.emojis.filter(emoji => emoji.name.includes('foot') || emoji.name=='epicsoul').random());
  }
});

client.login(settings.auth.token);
