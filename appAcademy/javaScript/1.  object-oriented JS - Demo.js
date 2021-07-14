
// this is the constructor function for our NBA player
function NBAPlayer(name, team, position) {
    this.name = name
    this.team = team
    this.position = position
}

// we are creating instances of the NBA player
let curry = new NBAPlayer('Steph Curry', 'Golden State Warriors', 'Point Guard')


// when execute, this variable we will have the constructor function returned to us
// 
// console.log(curry)

// dunder proto curry-  since we don't have anything assigned to the dunder proto, we will recieve an empty object
// **proto is defined on the instance of the NBA player**
// console.log(curry.__proto__)
// this will also return a empty object since we have nothing assigned to it
// **prototype is defined on the NBA player itself**
// console.log(NBAPlayer.prototype)





NBAPlayer.prototype.dunk = function(){
    console.log(`${this.name} dunks!`)
}
// when we call curry.dunk, this is method style invocation of the dunk function 
// doing that makes sure that the dunk function, the context is appropriately set, so that 'this' points to curry
// when we say this.name, that is defined right on curry
console.log(curry.dunk())

// since we created a prototype function let's check on NBAPlayer.prototype
// so the nbaPlayer prototype has a key of dunk that points to the function that we wrote
console.log('NBAPlayer Proto: ',NBAPlayer.prototype)  //which it should then print NBAPlayer Proto:  { dunk: [Function (anonymous)] }


// let's look uat curry.__proto__
console.log('curr _proto_:', curry.__proto__)   // which should also print { dunk: [Function (anonymous)] }



//// so what ends happening when we curry.dunk?
// first thing is javascript is going to look into curry directly and ask is dunk defined? which it will look at the NBA player constructor
// and determine that it doesn't exist

// second, it is going into curry's proto, where it points to NBAPLayer Prototype and finds the dunk function and executes it


return curry.name
// return curry.name



