const Commando = require('discord.js-commando');
const client = new Commando.Client({
  owner: '226909433970556930' // Anveio
});


client.registry.registerDefaults();
client.registry.registerGroups([
  ['random', "Random"],
  ['sound', "Sound"],
  ['singleton', "Singleton"],
  ['youtube', "YouTube"]
]);
client.registry.registerCommandsIn(__dirname + "/commands");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.login(process.env.DISCORD_BOT_TOKEN);