const jokes = require("give-me-a-joke")
const colors = require("colors")

jokes.getRandomDadJoke(function(joke){
    // console.dir(joke.rainbow)
    console.log(joke.rainbow)
})