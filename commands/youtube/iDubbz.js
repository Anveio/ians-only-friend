const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0.5, volume: 1 };

module.exports = class ImGayIdubbz extends Command {
  constructor(client) {
    super(client, {
      name: 'imgay',
      aliases: ['gay'],
      group: 'singleton',
      memberName: 'imgay',
      description: 'Idubbz falls down and reveals his true self.',
      throttling: {
        usages: 1,
        duration: 60
      }
    });
  }
  
  async run(message, args) {
    const channel = message.member.voiceChannel;
    
    if (channel === undefined) {
      message.reply("You can't use that command outside of a voice channel.");
      return;
    }
    
    const stream = ytdl('https://www.youtube.com/watch?v=Fz50hqWrHUY', {filter : 'audioonly'});
    
    try {
      const connection = await channel.join();
      const dispatcher = connection.playStream(stream, streamOptions);
      dispatcher.on('end', () => channel.leave());
    } catch( err ) {
      console.log("Something went wrong " + err);
    }
  }
};





