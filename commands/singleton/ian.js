const { Command } = require('discord.js-commando');

module.exports = class IanOnlyCmd extends Command {
  constructor(client) {
    super(client, {
      name: 'ian',
      group: 'singleton',
      memberName: 'ian',
      description: "A command only usable by Ian",
    });
  }
    
  async run(message, args) {
    if (message.author.id === "159114235366866944") {
      message.reply("https://www.youtube.com/watch?v=OLpeX4RRo28");
    } else {
      message.reply("You're not Ian!");
      return;
    }
  }
};