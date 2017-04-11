const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 4, volume: 0.5 };

module.exports = class YouJustGotRoastedCmd extends Command {
  constructor(client) {
    super(client, {
      name: 'roasted',
      aliases: ['roast'],
      group: 'youtube',
      memberName: 'roasted',
      description: 'Plays the "You Just Got Roasted" Filthy Frank video in the voice channel of the user who invoked it.',
      throttling: {
        usages: 1,
        duration: 360
      }
    });
  }
  
  async run(message, args) {
    const channel = message.member.voiceChannel;
    
    if (channel === undefined) {
      message.say("https://www.youtube.com/watch?v=_tWC5qtfby4 :fire:");
      return;
    }
    
    channel.join().then(connection => { 
      console.log('Connected!');
      const stream = ytdl('https://www.youtube.com/watch?v=_tWC5qtfby4', {filter : 'audioonly'});
      const dispatcher = connection.playStream(stream, streamOptions);
      
      dispatcher.on("end",  () => { 
        channel.leave();
        message.say(":fire: :fire: :fire: :joy: :joy:");
      });
    })
    .catch(err => console.log(err));
  }
};