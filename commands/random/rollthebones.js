const commando = require('discord.js-commando');

class RollTheBonesCmd extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'Allows users to simulate Roll the Bones ability in WoW'
    });
    
    this.BUFFS_ARRAY = ["Grand Melee", "Jolly Roger", "Buried Treasure", "Broadsides", "Shark Infested Waters", "True Bearing"];
  }
  async run(message, args) {
    var roll = this._generateRoll();
    message.reply("Your Rolls: " + roll);
  }
  
  _rawRoll() {  
    return this.BUFFS_ARRAY.map(element => 
    this.BUFFS_ARRAY[Math.floor(Math.random() * this.BUFFS_ARRAY.length)]);
  }
  
  _generateHistogram(ary) {  
    return ary.reduce((counter, item) => {
      let el = item;
      counter[el] = counter.hasOwnProperty(el) ? counter[el] + 1 : 1;
      return counter;
    }, {});
  }
  
  _findModes(histogram) {  
    const mode = Math.max(...Object.values(histogram));
    return Object.keys(histogram).filter(el => histogram[el] == mode);
  }
  
  _generateRoll() { 
    return (this._findModes(this._generateHistogram(this._rawRoll())));
  }  
}

module.exports = RollTheBonesCmd;