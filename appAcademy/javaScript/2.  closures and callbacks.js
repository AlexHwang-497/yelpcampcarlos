'use strict'

// 
function soundMaker(sound,times){
    // this function will print our sound
    //// this is a closure function - because the function is nested within sound maker and using the variable of sound
    // where it going to interperlate the string and print it out
    //// so why can we use the sound varialbe if it wasnt actually defined within the scope?
    // because of the scope and how it is defined in javascript
    // because we have 3 levels of scope the function has access to- 
        // 1. any arguments that were passed into the function
        // 2.  any variables defined within the closure function
        // 3. **this is why this is possible**, function has acess to any varialbes that were already declared, when 
        // function was defined -- we should also say that the makeSound variable captures the 'souund variable'

    function makeSound(){
        console.log(`${sound}`)
    }
    // this will create the number of times we will print our sound
    for(let i=0; i<times;i++){
        makeSound()
    }
}

// soundMaker('woof', 2)
// soundMaker('brains', 2)


// new example
const summation = (arr)=>{
    let sum = 1
    // this is a clsoure because  it is capturing the array free variable at the time that the summing function was defined

    function summing(){
        for(let i=0;i<arr.length;i++){
            sum*= arr[i]
        }
    }
    summing()
    // when the value sum is being updated in the closure,the value will exist also outside the closure
    // hence it will provide us with the value of 24
    return sum
}

console.log(summation([1,2,3,4]))


/////////// most common use case of closure aka callback

// ////what is a callback?
// it is a function that is passed to another function as an argument, that is intended to be called at a later time

// /////what is the most common use?
// when the result is not immedately availabe from a function, because for example it relies on user input where
// we are waiting until the information becomes available

// set time out, javascript has already defined for us  w/ two differnet variables depending 
// on whether we are doing a server side javascipt or whether we are doing client side javascript
// in the case below set timeout is set as global
// global.setTimeout


// functino 1
// when will run the callback based on the amt of time for 'time to wait'
let callback = () => {
    console.log('It has been 5 seconds')
}

let timeToWait = 5000 // this is in mili seconds

global.setTimeout(callback,timeToWait)


// function 2
//  you are more likely to see it like this....
// in this case we put the actual function instead of a variable

// es 5 way of doing it 
global.setTimeout(function(){
    console.log('It has been 5 seconds')
},5000)  ///this is es5 syntax

// es6

global.setTimeout(()=> {
    console.log('it has been 5 seconds es6 version')
},5000)

//////////// so what's the diffence between the two functions of setimeout?
// in the second example, we define our function
// in the first we pass in an invoked function
// in the first example, when we pass in the variable calleback, we are passing in console.log('It has been 5 seconds')
// in this case the function will be invoked 5 seconds later

// in the first exmaple, if we pass in callback();   we will be passing in the return value of the callback function.  since we dont' have a return value, it will be undefined
