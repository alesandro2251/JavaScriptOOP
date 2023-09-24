class Player {
  playerName;
  hp;
  mp;
  skills;
  guild;

  constructor(playerName, hp, mp) {
    this.playerName = playerName;
    this.hp = hp;
    this.mp = mp;
    this.skills = [];
    this.guild = "Unaffiliated";
  }

  add_skill(skill_name, mana_cost) {
    if (!this.skills.includes(skill_name)) {
      this.skills.push([skill_name, mana_cost]);
      console.log(
        "Skill " +
          skill_name +
          " added to the collection of the player " +
          this.playerName
      );
    } else {
      console.log("Skill already added");
    }
  }

  player_info(){
    console.log("Name: " + this.playerName)
    console.log("HP: " + this.hp)
    console.log("MP: " + this.mp)
    for (let i = 0; i<this.skills.length;i++){
        console.log(this.skills[i][0]+ " - " + this.skills[i][1])
    }
  }
}

module.exports = Player