const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core');
const youTubeClips = require('../../cmd_assets/clips').ericAndreClips;

module.exports = class YouJustGotRoastedCmd extends Command {
  constructor(client) {
    super(client, {
      name: 'ericandre',
      aliases: ['hit', 'ranch'],
      group: 'youtube',
      memberName: 'ericandre',
      description: `Plays a random Eric Andre clip in a voice channel. Enter a number from 0 to ${youTubeClips.length-1} after the command to get a specific clip.`,
      details: `Type a number from 0 to ${youTubeClips.length-1} to get a specific clip.`,
      throttling: {
        usages: 3,
        duration: 30
      },
      
      args: [
        {
          key:  'clipID',
          prompt: `Which clip would you like to play? Enter a number from 0 to ${youTubeClips.length-1}.\n`,
          type: 'integer',
          default: -1,
          max: youTubeClips.length-1
        }
      ]
    });
  }
  
  async run(message, args) {
    const channel = message.member.voiceChannel;
    const { clipID } = args;
    const clip = this.clipToPlay(clipID);
    
    if (channel === undefined) {
      message.reply("You can't use that command outside of a voice channel.");
      return;
    }
    
    const stream = ytdl(clip.videoUrl, {filter : 'audioonly'});
    
    channel.join().then(connection => { 
      console.log(`Playing: "${clip.videoTitle}" `);
      const dispatcher = connection.playStream(stream, clip.options);
      
      dispatcher.on("start", () => {
        // clip only plays for its stated duration
        setTimeout( () => {
          channel.leave();
        }, clip.duration );
      });
      
      // Don't stick around if the duration is too high and clip ends before duration is over.
      dispatcher.on("end",  () => channel.leave());
    })
    .catch(err => {
      console.error(err);
      message.reply(`Connection timed out. This is usually caused by calling a command before another one has finished playing or making too many requests to the YouTube API. Anveio will try to fix this soon.`);
    });
  }
  
  clipToPlay(clipID){
    // Clip will be randomly chosen if no clipID is specified by the user.
    if (clipID === -1) {
      return youTubeClips[Math.floor(Math.random() * youTubeClips.length)];
    } else {
      return youTubeClips[clipID];
    }
  }
};