const Commando = require('discord.js-commando');

class RollTheBonesCmd extends Commando.Command {
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
    let roll = this._generateRoll();
    let grade = this._gradedRoll(roll)
    let full_message = roll.map(el => {
      return (":game_die:" + el);
    });
    message.reply("Grade: " + grade + full_message);
  }
  
  _generateRoll() { 
    return (this._findModes(this._generateHistogram(this._rawRoll())));
  }
  
  _rawRoll() {  
    return this.BUFFS_ARRAY.map(_ => 
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
  
  _calculatedScore(roll) {
    let score = 0.0;
    roll.map(el =>{
      if (!!/true bearing/i.exec(el)) score += 2;
      if (!!/shark infested waters/i.exec(el)) score += 1.33;
      if (!!/grand melee|jolly roger|buried treasure|broadsides/i.exec(el)) score += 0.66;
    });
    return score;
  }
  
  _gradedRoll(roll) {
    let score = this._calculatedScore(roll);
    if (score >= 5.9) {
        return "Six Buff!"; // Six buff
    } else if(score >= 3.98) {
      return "Extremely Good"; // True-bearing + Shark + one other buff
    } else if(score >= 2.66) {
      return "Definitely Above Average"; // True-Bearing + another buff
    } else if(score >= 1.97) {
      return "Good enough, I guess"; // Bad three-buff or shark + one bad buff or single True-bearing.
    } else if(score >= 1.33) {
      return "Keep if you've got cooldowns up"; // Single shark
    } else {
      return "Terrible. Reroll." ; // Bad one buff, bad two buffs.
    }
  }
}

module.exports = RollTheBonesCmd;