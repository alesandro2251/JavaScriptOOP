// Create the constructor function for a Video object. The function should take
//     in arguments of title (a string), uploader (a string, the person who uploaded it),
//      and seconds (a number, the duration), and it should save them as properties of the object.
// Create a method on the Video object called watch(). When that method is called,
//     it should use console.log to output a string like "You watched all 60 seconds of Otters Holding Hands!"
// Instantiate a new Video object and call the watch() method on it.
// Instantiate another Video object with different constructor arguments.
// Bonus: Use an array of data and a for loop to instantiate 5 Video objects.
// Bonus: Make the watch method accept amounts of seconds to watch for, and call
//        it with different amounts of seconds.

class Video {
    title;
    uploader;
    seconds;

    constructor (title, uploader, seconds) {
        {
            this.title = title
            this.uploader = uploader
            this.seconds = seconds
        }
    }

    watch () {
        console.log(this.uploader + " watched all " + this.seconds +" seconds of "+ this.title +"!")
    }

}

const data = [
    {
        title : "Frozen Kingdom",
        uploader: 'Stewart',
        seconds: 60
    },
    {
        title: "Holiday in the Mountains",
        uploader: 'Maria',
        seconds: 120
    },
    {
        title: "Golden City",
        uploader: 'George',
        seconds: 150
    },
    {
        title: "Sea and Forests",
        uploader: 'Penny',
        seconds: 180
    },
    {
        title: "Birds over the River",
        uploader: 'Ian',
        seconds: 100
    },
    {
        title: "Legend of the Heroes",
        uploader: 'Peter',
        seconds: 140
    }
];

for (let i = 0; i < data.length; i++){
    let checker = Object.values(data[i])
    screen = new Video(...checker);
    screen.watch()

}
