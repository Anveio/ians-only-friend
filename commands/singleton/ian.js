const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 10, volume: 0.5 };
const youTubeClips = require('../../cmd_assets/clips').ianClips;

module.exports = class ageOfMythology extends Command {
  constructor(client) {
    super(client, {
      name: 'ian',
      aliases: ['999','aom', 'ageofmythology'],
      group: 'singleton',
      memberName: 'ian',
      description: 'A command only usable by Ian',
      throttling: {
        usages: 1,
        duration: 60
      }
    });
  }
  
  hasPermission(msg) {
		return (msg.author.id === "159114235366866944");
	}
  
  async run(message, args) {
    const channel = message.member.voiceChannel;
    
    if (channel === undefined) {
      message.reply("You can't use that command outside of a voice channel.");
      return;
    }
    
    const clip = youTubeClips[Math.floor(Math.random() * youTubeClips.length)];
    const stream = ytdl(clip.videoUrl, {filter : 'audioonly'});
    
    channel.join().then(connection => {
      console.log(`Playing: "${clip.videoTitle}" `);
      const dispatcher = connection.playStream(stream, streamOptions);
      
      dispatcher.on("start", () => {
        // clip only plays for its stated duration
        setTimeout( () => {
          channel.leave();
        }, clip.duration );
      });
      
      dispatcher.on("end",  () => channel.leave());
    })
    .catch(err => console.log(err));
  }
};


