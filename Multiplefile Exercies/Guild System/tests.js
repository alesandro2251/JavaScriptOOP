const Guild = require("./guild.js");
const Player = require("./player.js");

// // Test 1
console.log("Test 1");
const player = new Player("George", 50, 100);
player.add_skill("Shield Break", 20);
player.player_info();
const guild = new Guild("UGT");
guild.assign_player(player);
guild.guild_info();

// Expected Output

// Skill Shield Break added to the collection of the player George
// Name: George
// HP: 50
// MP: 100
// Shield Break - 20
// Welcome player George to the guild UGT
// Guild: UGT
// playerName - George
//  || hp - 50
//  || mp - 100
//  || skills - Shield Break,20
//  || guild - UGT

// Test 2
console.log('Test 2');
const player2 = new Player("Linda", 80, 60);
player2.add_skill("Fireball", 30);
player2.add_skill("Ice Blast", 25);
player2.player_info();
const guild2 = new Guild("Mages Union");
guild2.assign_player(player2);
guild2.guild_info();

// Expected Output

// Skill Fireball added to the collection of the player Linda
// Skill Ice Blast added to the collection of the player Linda
// Name: Linda
// HP: 80
// MP: 60
// Fireball - 30
// Ice Blast - 25
// Welcome player Linda to the guild Mages Union
// Guild: Mages Union
// playerName - Linda
//  || hp - 80
//  || mp - 60
//  || skills - Fireball,30,Ice Blast,25
//  || guild - Mages Union

// Test 3
console.log('Test 3');
const player3 = new Player("Arthur", 100, 40);
player3.add_skill("Sword Slash", 15);
player3.add_skill("Parry", 5);
player3.player_info();
const guild3 = new Guild("Knights of Round");
guild3.assign_player(player3);
guild3.guild_info();

// Expected Output

// Skill Sword Slash added to the collection of the player Arthur
// Skill Parry added to the collection of the player Arthur
// Name: Arthur
// HP: 100
// MP: 40
// Sword Slash - 15
// Parry - 5
// Welcome player Arthur to the guild Knights of Round
// Guild: Knights of Round
// playerName - Arthur
//  || hp - 100
//  || mp - 40
//  || skills - Sword Slash,15,Parry,5
//  || guild - Knights of Round
