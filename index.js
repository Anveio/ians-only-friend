// const Discord = require("discord.js");
const Commando = require('discord.js-commando');
const client = new Commando.Client({
    owner: '226909433970556930'
});

client.registry.registerGroup('random', "Random");
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");


client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Mjk4OTE0ODI3NjEzNzY1NjMz.C8WRsw.LxivOYZp8m9ANtgBsmAYuvwKHbM');