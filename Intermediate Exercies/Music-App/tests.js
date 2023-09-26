const Song = require("./song.js");
const Band = require("./band.js");
const Album = require("./album.js");

const song = new Song("Running in the 90s", 3.45, False);
song.get_info();
const album = new Album("Initial D", song);
const second_song = new Song("Around the World", 2.34, False);
album.add_song(second_song);
album.details();
album.publish();
const band = new Band("Manuel");
band.add_album(album);
band.remove_album("Initial D");
band.details();
