const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 0.5 };

module.exports = class DoublingOfPiCmd extends Command {
  constructor(client) {
    super(client, {
      name: '666',
      aliases: ['sixsixsix'],
      group: 'youtube',
      memberName: '666',
      description: 'Demonstrates your knowledge of mathematics.',
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
      const stream = ytdl('https://www.youtube.com/watch?v=Pg_M0SsBNTA', {filter : 'audioonly'});
      const dispatcher = connection.playStream(stream, streamOptions);
      
      dispatcher.on("end",  () => channel.leave());
    })
    .catch(err => console.log(err));
  }
};





