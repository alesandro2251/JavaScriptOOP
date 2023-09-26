class Guild {
  guildName;
  players;

  constructor(guildName) {
    this.guildName = guildName;
    this.players = [];
  }

  assign_player(player) {
    if (!this.players.includes(player) && player.guild === "Unaffiliated") {
      player.guild = this.guildName;
      this.players.push(player);
      console.log(
        "Welcome player " + player.playerName + " to the guild " + this.guildName
      );
    } else {
      console.log("Player " + player + " is already in the guild.");
    }
  }

  kick_player(player_name) {
    let found = false;

    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].includes(player_name)) {
        this.players[i].guild = "Unaffiliated";
        this.players[i].pop();
        found = true;
        console.log(
          "Player " + player_name + " has been removed from the guild."
        );
        break;
      }
    }

    if (found === false) {
      console.log("Player " + player_name + " is not in the guild.");
    }
  }

  guild_info() {
    console.log("Guild: " + this.guildName);
    for (let i = 0; i < this.players.length; i++) {

        const filteredEntries = Object.entries(this.players[i])
        .filter(
          ([, value]) =>
            value !== false && value !== undefined && value !== null
        )
        .map(([key, value]) => `${key} - ${value}\n`)
        .join(" || ");

      console.log(filteredEntries)
    }
  }
}

module.exports = Guild;
