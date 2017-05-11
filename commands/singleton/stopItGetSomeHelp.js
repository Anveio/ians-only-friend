const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 1.5, volume: 1 };

module.exports = class StopItGetSomeHelp extends Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      aliases: ['stopit, getsomehelp'],
      group: 'singleton',
      memberName: 'stop',
      description: 'For when someone needs to stop.',
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
    
    channel.join().then(connection => { 
      const stream = ytdl('https://www.youtube.com/watch?v=9Deg7VrpHbM', {filter : 'audioonly'});
      const dispatcher = connection.playStream(stream, streamOptions);
      
      dispatcher.on("end",  () => channel.leave());
    })
    .catch(err => console.log(err));
  }
};





