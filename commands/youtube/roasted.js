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
        duration: 60
      }
    });
  }
  
  async run(message, args) {
    const channel = message.member.voiceChannel;
    
    if (channel === undefined) {
      message.reply("https://www.youtube.com/watch?v=_tWC5qtfby4");
      return;
    }
    
    channel.join().then(connection => { 
      // message.react("fire");
      console.log('Connected!');
      const stream = ytdl('https://www.youtube.com/watch?v=_tWC5qtfby4', {filter : 'audioonly'});
      const dispatcher = connection.playStream(stream, streamOptions);
      
      dispatcher.on("end",  () => channel.leave());
    })
    .catch(err => console.log(err));
  }
};


// ,
      
//       args: [
//         {
//           key: 'target',
//           prompt: "who would you like to roast?\n",
//           type: "string",
//           default: '',
//           parse: str => str.toLowerCase().replace(/[^\w\s]/gi, '')
//         }
//       ]