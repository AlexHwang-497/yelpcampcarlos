

//////////////////////////////////////////////////////////Challenge: createFunction///////////////////////////////////////////////////////////////////////
// Create a function createFunction that creates and returns a function. When that newly created function is called, 
//it should return the string 'hello world'.
//////////////////////this is an example//////////////
// // const myFunction = createFunction();
// //  // Let's call the function we created and log its return value
// // console.log(myFunction()); //should log: 'hello world'
// ////////////////////////this is an example/////////////////
// // When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

// // ADD CODE HERE
// function createFunction(){
//     function hello(){
//         return 'hello world'
//     }
//     return hello;
// }
// // ///UNCOMMENT THESE TO TEST YOUR WORK!
// // const myFunction = createFunction();
// // console.log(myFunction()); //should log: 'hello world'


// ///////////////////////////////////////////////////// Challenge: createFunctionWithInput////////////////////////////////////////////////////
// // Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, 
// // it should return the input that was passed to createFunctionWithInput when it was created.

// // const sampleFunc = createFunctionWithInput('sample');
// // const helloFunc = createFunctionWithInput('hello');
// //////////////////////////////////////////this is an example/////////////////
// // // Now we'll call the functions we created and log the result
// // console.log(sampleFunc()); 
// // // should log 'sample' to the console
// // console.log(helloFunc());
// // // should log 'hello' to the console
// //////////////////////////////////////////this is an example/////////////////

// // // ADD CODE HERE

// function createFunctionWithInput(input){
//     //create new function
//     function printInput(){
//         //return input value
//         return input;
//     }
//     //return new function
//     return printInput;
// }
// // //UNCOMMENT THESE TO TEST YOUR WORK!
// // const sampleFunc = createFunctionWithInput('sample');
// // console.log(sampleFunc()); // should log: 'sample'
// // const helloFunc = createFunctionWithInput('hello');
// // console.log(helloFunc()); // should log: 'hello'


// ////////////////////////////////////////////////// Challenge: Scoping//////////////////////////////////////////////
// // Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope. Uncomment those lines of code. 
// // Try to deduce the output before executing.

// // function outer() {
// //     let counter = 0; // this variable is outside incrementCounter's scope
// //     function incrementCounter() {
// //       counter++;
// //       console.log('counter', counter);
// //     }
// //     return incrementCounter;
// //   }
  
// //   const willCounter = outer();
// //   const jasCounter = outer();
  
// //   // Uncomment each of these lines one by one.
// //   // Before your do, guess what will be logged from each function call.
  
// //   willCounter();
// //   willCounter();
// //   willCounter();
  
// //   jasCounter();
// //   willCounter();

// ////////// ///////////////////////////Challenge: addByX/////////////////////////////////////////////////////////////////////////////////////////
// // Now we are going to create a function addByX that returns a function that will add an input by x.
// /////////////////////this is an example////////////////////////////////////
// // const addByTwo = addByX(2);
// // addByTwo(1); //should return 3
// // addByTwo(2); //should return 4
// // addByTwo(3); //should return 5

// // const addByThree = addByX(3);
// // addByThree(1); //should return 4
// // addByThree(2); //should return 5

// // const addByFour = addByX(4);
// // addByFour(4); //should return 8
// // addByFour(10); //should return 14
// /////////////////////this is an example////////////////////////////////////


// // // ADD CODE HERE

// // function addByX(x){
// //     function plusTwo(num){
// //         return x + num;
// //     }
// //     return plusTwo;
// // }
// // ///////check your work
// // const addByTwo = addByX(2);

// // // Now call addByTwo with an input of 1 and log the output
// // console.log(addByTwo(1));
// // // Now call addByTwo with an input of 2 and log the output
// // console.log(addByTwo(2));


// // ////////////////////////////////////////////////////////////////// Challenge: once/////////////////////////////////////////////////////////
// // // Write a function once that accepts a callback as input and returns a function. 
// // // When the returned function is called the first time, it should call the callback and return that output. 
// // // If it is called any additional times, 
// // // instead of calling the callback again it will simply return the output value from the first time it was called.
// // // // ADD CODE HERE

// // // // // //once function will accept a callback function and return a function
// function once(callback){
//     //create variable hasBeenCalled:boolean
//     let hasBeenCalled = false;  /// this will indicate wheter callBack has been invoked
//     //create the variable cachedResult
//     let cachedResult;  //this will store the result of callBack invocation;
//     //create a function, onceificedCb
//     function onceifiedCb(...args){
//         //if onceified hasn't been called
        
//         if(!hasBeenCalled){
//             //invoke the callback with args and store result in cachedResult;
//             cachedResult = callback(...args)
//             console.log('callback...args: '+callback(...args));
//             //set hasBeenCalled to true
//             hasBeenCalled = true;
//         }
//         return cachedResult;
//     }
//     return onceifiedCb;
// // }

// // // // UNCOMMENT THESE TO TEST YOUR WORK!
// const addByTwoOnce = once(function(num){ 
//     return num+2;
// });

// console.log(addByTwoOnce(5));  //should log 7
// debugger
//  console.log(addByTwoOnce(10));  //should log 7
//  console.log(addByTwoOnce(9001));  //should log 7



// // /////////////////////////////////////////////////////////////// Challenge: after/////////////////////////////////////////////////////////////////
// // // Write a function after that takes the number of times the callback needs to be called 
// // // // before being executed as the first parameter and the callback as the second parameter.
// // // // ADD CODE HERE
// function after(num, callback){
//     //establish a count variable
//     let count = 0;
//     //closure requires a return function
//     return function(...args){
//         //each time our returned function is called we need to increment our count
//         count++;
//         //we want to check if count is greater or equal to the num that was passed in
//         if(count>=num){

//             return callback(...args);
//             console.log('count:' +count)
//             console.log('callback...args: '+callback(...args))
//         }
//     }
// }

// // UNCOMMENT THESE LINES TO TEST YOUR WORK
// const called = function(string) { return('hello ' + string); };
// const afterCalled = after(3, called);

//  console.log(afterCalled('world')); // -> undefined is printed
//  console.log(afterCalled('world')); // -> undefined is printed
// //  console.log(afterCalled('world')); // -> 'hello world' is printed




//  ////////////////////////////////////////////////////////Challenge: delay////////////////////////////////////////////////////////////////
// //Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. 
// //Delay should return a function that, when invoked waits for the specified amount of time before executing. 
// //HINT - research setTimeout();
// // ADD CODE HERE

// function delay(input1, input2, ...args){
//     return function(){
//         return setTimeout(input1, input2, ...args);
//     }
// }

// // UNCOMMENT THE CODE BELOW TO TEST DELAY
// let count = 0;
// const delayedFunc = delay(() => count++, 1000);
// delayedFunc();
// console.log(count); // should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second


// /////////////////////////////////////////Challenge: saveOutput////////////////////////////////////////////////////////////////////////
// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
//  saveOutput will then return a function that behaves exactly like the passed-in function,
//  except for when the password string is passed in as an argument. 
// // When this happens, the returned function will return an object with all previously passed-in arguments as keys, 
// // and the corresponding outputs as values
// // // // // ADD CODE HERE
// function saveOutput(func, callback){
//     //declare an object "cache" that will store the previous arguments and corresponding outputs
//     const cache = {};
//     //declare and return a function taht takes one argument
//     return function(arg){
//         //console.log('arg:'+arg);
//         // if the argument passed is the password
//         if(arg === callback){
//             //return the cache object
//             return cache
            
//         } else {
//             //create a new entry in our cache object for our current argument
//             // the value associated with this object key will be the result of ivoking
//             // func with the argument
//             //console.log('cache[arg]: '+cache[arg], 'func(arg): '+func(arg));
//             cache[arg] = func(arg);
// //             //return the value associated with our cahce object
//             return cache[arg]
            
//          }
//      }
// //    // console.log('cache: '+cache)
//      console.log('cache[arg]: '+cache[arg])
//  }

// // Uncomment these to check your work!
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // should log: 4
// console.log(multBy2AndLog(9)); // should log: 18
// console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }



// ////////////////////////////////////////Challenge: cycleIterator//////////////////////////////////////////////////////////////////////////
// //Create a function cycleIterator that accepts an array, and returns a function. 
// //The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. 
// // When invoked a second time, the returned function will return the second element of the array, and so forth. 
// // After returning the last element of the array, the next invocation will return the first element of the array again, 
// // and continue on with the second after that, and so forth.
// // ADD CODE HERE
// function cycleIterator(array){
//     // declare an index variable, starting at 0;
//     let index = 0;
//     return function(){
//         //return each element of the array in sequence when invoked
//         //grab the result the value of the array to return using the index
//         //update the index variable, increment it by 1
//         const result = array[index++];
//         //check if the index variable is greater than or equal to the arrya length.  if so, reset the index to 0
//         if(index >=array.length){
//             index = 0;
            
//         }
//         //return the result value
//         return result;
//     }
// }

// // Uncomment these to check your work!
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // should log: 'Fri'
// console.log(getDay()); // should log: 'Sat'
// console.log(getDay()); // should log: 'Sun'
// console.log(getDay()); // should log: 'Fri'


// //////////////////////////////////////////////////////Challenge: defineFirstArg///////////////////////////////////////////////////////////////
// // Create a function defineFirstArg that accepts a function and an argument. 
// //Also, the function being passed in will accept at least one argument. 
// //defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument 
// // as the passed-in function's first argument. 
// // // Additional arguments needed by the passed-in function will need to be passed into the returned function.
// // ADD CODE HERE
// function defineFirstArg(input, arg){
//     return function(...args){
//         return input(arg,...args);
//     }
// }

// // Uncomment these to check your work!
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // should log: 15


// ////////////////////////////////////////////////////////////Challenge: dateStamp/////////////////////////////////////////////////////////////////
// // Create a function dateStamp that accepts a function and returns a function. 
// // The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key 
// // whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), 
// // and an output key that contains the result from invoking the passed-in function.


// // ADD CODE HERE
// function dateStamp(input){
//     let todayDate = new Date();
//     return function(...args){
//         return {date:todayDate.toDateString(), output:input(...args)}
//     }
// }

// // // Uncomment these to check your work!
// // const stampedMultBy2 = dateStamp(n => n * 2);
// // console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
// // console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }



//////////////////////////////////////////////////////Challenge: censor/////////////////////////////////////////////////////////////////////
//Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. 
//When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
//When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) 
//will be replaced with the second string (of a saved pair).
// ADD CODE HERE

// //decalre a function censor that takes no arguments
function censor(){
    //create a variable cahce to store key value pairs
    const cache = {};
    //return a function that takes up to two arguments
    return function(stringOne, stringTwo){
    //check to see how many strings are passed in to the returned function
    if(stringTwo){
        //if two string are passed in, add to cache object as a key value pair
        cache[stringOne] = stringTwo;
        console.log('cache[stringOne]:'+cache[stringOne])
        console.log('string2: '+stringTwo)
        return;
    }
    //if one string is passedin, modify the string to replace any instance of the keys in the cahce with the corresponding values in the cache
    Object.keys(cache).forEach((key) => {
        stringOne = stringOne.replace(key, cache[key]);
    });
    return stringOne;
    }
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'