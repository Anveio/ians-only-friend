const { Command } = require('discord.js-commando');

module.exports = class PlayAudioCmd extends Command {
  constructor(client) {
    super(client, {
      name: 'narration',
      group: 'sound',
      memberName: 'narration',
      description: 'Allows users to hear some audio.'
    });
  }
  
  async run(message, args) {
    const channel = message.member.voiceChannel;
    
    if (channel === undefined) {
      message.reply("You can only use that command from a voice channel.");
      return;
    }
    
    channel.join().then(connection => { 
      console.log('Connected!');
      const dispatcher = connection.playFile('./narration.mp3');
      dispatcher.on("error", err => console.log(err));
      dispatcher.on("end",  () => channel.leave());
      dispatcher.on("debug", debug => console.log(debug));
    })
    .catch(err => console.log(err));
    
    // channel.join().then(connection => { 
    //   console.log('Connected!');
    //   const stream = ytdl('https://www.youtube.com/watch?v=_tWC5qtfby4', {filter : 'audioonly'});
    //   const dispatcher = connection.playStream(stream, streamOptions);
      
    //   dispatcher.on("end",  () => channel.leave());
    // })
    // .catch(err => console.log(err));
  }
  
  _permittedChannel(voiceChannel){
    return (voiceChannel.speakable && voiceChannel.joinable);
  }
}

