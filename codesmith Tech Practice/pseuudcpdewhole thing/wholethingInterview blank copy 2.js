
//1 ///////////////////////////////////////////////// Challenge: goodKeys
// // Create a function goodKeys that accepts an object and a callback. The callback will return either true or false.
// //  goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return 
// //  an array consisting only the keys whose associated values yielded a true return value from the callback.

//  function goodKeys(obj, callback) {
//   //  declare a variable as an empty array
//   let result = [];
//   // iterate through the object w/ for...in loop
//   for(let str in obj){
//     // intiate cond stmt; if the callback is truthy return true   ///
//     if(callback(obj[str])){
//       // push the key of the object into result
//       result.push(str)
      
//     }
//   }
//   // return the result
//   return result;

// }
// //   // Uncomment these to check your work!
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']



//2.  ////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// For example, if the input is 'g', then the output should be 'ggggg'.
//////////////////////////////example////////////////////////////
// Input: {String} char
// Output: {String}
////////////////////////////example///////////////////////////////

// console.log('Hello, world!');
// // add code here////
// function repeater(char, num=0, output =""){
//   // base: if number === 5; then return the output;
//   if(num ===5){return output}
//   // increment num
//   newNum = num+1
//   // increment output by char
//   output+=char;
//   // recursive call
//   return repeater(char,newNum, output)


// }

// // // To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g'));
// console.log(repeater('j'));



//3 /////////////////////////////////////////////////// CHALLENGE 1
// Create a function createFunction that creates and returns a function. 
// When that created function is called, it should print "hello". 
// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.


// function createFunction(input) {
//   // create a new function
//   function print(){
//     //return hello
//     return console.log('hello')
//   }
//   // return new function
//   return print

// }

// // /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');



//4.  ////////////////////////////////////////////////////////////// Challenge: groupBy
// Create a function groupBy that accepts an array and a callback, and returns an object. 
// groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
// The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

// // // // ADD CODE HERE
// function groupBy(array, callback){
//   // declare a varaiable and assign it as an empty object
//   let obj = {};
//   // iterate through the array w/ a for...of loop
//   for(let num of array){
//     // intitiate a conditional stmt where if there is an existing object, use the value from the callback....
//     if(callback(num) in obj){
//       // push the eleemnt will be pushed to a new array
//       obj[callback(num)].push(num)
//     }else {
//       // otherwise...
//       // if there is no existing key in the object have the key assigned as the returned value of the callback
//       obj[callback(num)] = [num]
//     }
//   }
//   // return object;
//   return obj;
// }


//   // Uncomment these to check your work!
//    const decimals = [1.3, 2.1, 2.4];
//    const floored = function(num) { return Math.floor(num); };
//    console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }



// 5.  ////////////////////////////////////////////CHALLENGE 2
// Create a function createFunctionPrinter that accepts one input and returns a function. 
// When that created function is called, it should print out the input that was used when the function was created.

// function createFunctionPrinter(input) {
//   // create new function
//   function print(){
//     //return input
//     console.log(input)
//   }
//   // return new function
//   return print;
// }

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');



//6.  //////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
///////////////////////////////////example//////////////////////////////////////////
// Input: {Number} num - number whose factorial is sought
// Output: {Number}
///////////////////////////////////example//////////////////////////////////////////
// add code here////
// function factorial(num, product=1){
//   // base case: if num === 0 return product;
//   if(num===0){return product}
//   // update product
//   newProduct = num * product
//   // decrement num
//   newNum = num-1
//   // recursive call
//   return factorial(newNum,newProduct)

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1




//7.  ///////////////////////////////////////////////////////////////////////////////////////////// Challenge: countBy
// Create a function countBy that accepts an array and a callback, and returns an object. 
// // countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
// // The value associated with each key will be the number of times that particular return value was returned.

// // ADD CODE HERE
// function countBy(arr, fn) {
//   // declare variable as empty object
//   let obj = {};
//   // iterate thorugh array w/ for...of loop
//   for(let num of arr){
//     // intiate conditoal stmt; if the invoked callback is in the object, increment the value of the key value pair by 1
//     if(fn(num) in obj){
//       // update/increment key value pair
//       obj[fn(num)]++

//     }else {
//       // assign the key valu pair as 1 if it doesnt exist in our object
//       obj[fn(num)]=1
//     }

//   }
//   // return object
//   return obj
// }
  
// //   // Uncomment these to check your work!
//   function evenOdd(n) {
//     if (n % 2 === 0) return 'even';
//     else return 'odd';
//   }
//   const nums = [1, 2, 3, 4, 5];
//   console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

// //8.  //////////////////////////////////////////////////////////////////////////// CHALLENGE 4
// // Write a function once that accepts a callback as input and returns a function. 
// // When the returned function is called the first time, it should call the callback and return that output. 
// // If it is called any additional times, 
// // instead of calling the callback again it will simply return the output value from the first time it was called.


// function once(func) {
//   // declare variable and assign it as boolean 
//   let toggle = false;
//   // declare variable and assign as empty array
//   let result = [];
//   // create new function
//   function print(input){
//     // initite conditional stmt; where if boolean is false....
//     if(!toggle){
//       // assign toggle as true
//       toggle = true;
//       // call the callback and assign it to result;
//       result= func(input)
//     }
    
//     // return result
//     return result;
//   }
//   // return new function
//   return print;
// }

// /*** Uncomment these to check your work! ***/
// /*** Uncomment these to check your work! ***/
// const addByTwoOnce = once(function(num) {
//   return num + 2;
// });

// // UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(addByTwoOnce(5));  //should log 7
// console.log(addByTwoOnce(10));  //should log 7
// console.log(addByTwoOnce(9001));  //should log 7




//9.                      //////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
// Get the length of an array using recursion without accessing its length property.
// ///////////////////////////////////example//////////////////////////////////////////
// Input: {Array} array - array whose length is sought
// Output: {Number}
// ///////////////////////////////////example//////////////////////////////////////////
// // // add code here////
// function getLength(arr,length=0){
//   // base: if arr.length === 0 return 0;
//   if(arr.length===0){return length}
//   // increment length by 1
//   newLength = length+1
//   // slice array and return everything after 1 index
//   newArr = arr.slice(1)
//   // recurse call
//   return getLength(newArr,newLength)

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0


//10.  //////////////////////////////////////////////////////////// Challenge: prioritize
// Create a function prioritize that accepts an array and a callback. The callback will return either true or false. 
// prioritize will iterate through the array and perform the callback on each element, and return a new array, 
// where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
// // // ADD CODE HERE
// function prioritize(array, callback){
//   // decalre variable and assign it as empty array to store callback results;
//   let callResult = [];
//   // declare variable and assin it as empty array to store false results
//   let result = [];
//   // iterate through array w/ for... of loop
//   for( let str of array){
//     // intitate conditional where if callback is true....
//     if(callback(str)){
//       // push result into callback result
//       callResult.push(str)
//     } else {
//       // otherwise...
//         //push result into false results
//         result.push(str)

//     }
//   }
//   // return results through concat
//   return callResult.concat(result)
// }


// // Uncomment these to check your work!
// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']



//11.  /////////////////////////////////////////////////////// CHALLENGE 5
// Write a function after that takes the number of times the callback needs to be called before being executed as 
// the first parameter and the callback as the second parameter.


// function after(num, callback) {
//   // declare variable and assign value of 0
//   let count = 0
//   // decalre variabale and assgin empty array
//   let result =[]
//   // create new function
//   function print(){
//     // increment ocunter
//     count++
//     // intiate conditional stmt; if num === count...
//     if(num === count){
//       // update/assign result with callback
//       return result = callback()
//     } else {
//       // otherwise....
      
//         // assing 'nothing is printed' to result
//         result = console.log('nothing is printed')

//     }
//     // return result;
//     return result;

//   }
// // return newfunction
// return print;

// }

// // /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


//12.  //////////////////////////////////////////////// Challenge: POW///////////////////////////////////////////////////////////////////////////////////
// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. 
// For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

// ///////////////////////////////////example//////////////////////////////////////////
// Input 1: {Number} base - base number raised to the exponent
// Input 2: {Number} exponent - exponent the base is raised to
// Output: {Number} - expected value of base raised to exponent
// ///////////////////////////////////example//////////////////////////////////////////
// // add code here////
// function pow(base, exponent){
//   // base: if exponenet ===0 then return 1
//   if(exponent===0){return 1}
//   // decrement exponenet
//   newExponent = exponent-1
//   // recurse function
//   return pow(base,newExponent) * base

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243



//13.  ///////////////////////////////////////////////////////////////////////////////// Challenge: majority
// Create a function majority that accepts an array and a callback. 
// The callback will return either true or false.
//  majority will iterate through the array and perform the callback on each element until it can be determined 
//  if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
// // ADD CODE HERE

// function majority(array,callback){
//   // declare variable as an empty object
//   let obj = {};
//   // iterate through the array w/ for...of loop
//   for(let num of array){
//     // intiaitate conditional stmt; if callback value is true....
//     if(callback(num) in obj){
//       // count object
//       obj[callback(num)]++
//     }else{
//       // otherwise...
//       // add one 
//       obj[callback(num)] = 1
//     }
//   }
//   // return max number in the obj through sort
//   return Object.values(obj).sort((a,b)=> b-a)[0]
//   // return Object.keys(obj).sort((a,b)=>b-a)
// }


// // //can you answer this using a forEach loop?
// // function majority(array, callback){
// //   let tCount =0
// //   let fCount =0
// //   array.forEach((element)=> {
// //     callback(element) ? tCount++:fCount++
// //   })
// //   return tCount>fCount ? true:false;

// // }



//   Uncomment these to check your work!
//    const isOdd = function(num) { return num % 2 === 1; };
//    console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
//    console.log(majority([2, 3, 4, 5], isOdd)); // should log: false



  //14. /////////////////////////////////////////////////////////////////////////////// // CHALLENGE 7
// Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, 
// it should log the first name to the console. The second time it is invoked, it should log the second name to the console, 
// and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

// function rollCall(names) {
//   // decalre varaible as empty string
//   let result = ''
//   // decalre vairalbe as 0 for count variable
//   let count = 0
//   // create new function
//   function print(){
//     // intiate conditional stmt, where if count >= names.length; ...
//     if(count>=names.length){
//       // reassign/update result to 'everyone is accounted for'
//       result = console.log('everyone is accounter for')
//       // otherwise...
//     } else {
//         // reasiign/update result to counter index
//         result = console.log(names[count])
//         // increment counter
//         count++
//     }
//     // return result
//     return result;
//   }
//   // return new function
//   return print;
// }

// // /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


//15.  //////////////////////////////////////////////////////////////////////////////////////// Challenge: flow
// Write a function that takes an array of functions and a number that will be piped through all those functions. 
// The input number passes through the first function, whose output is passed as input to the second function, 
// whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.
// ///////////////////////////////////example//////////////////////////////////////////
// Input 1: {Number} input - number flowing through all functions
// Input 2: {Array} funcArray - array of functions to pass input through
// Output: {Number} - final output of final function
// ///////////////////////////////////example//////////////////////////////////////////
// // // add code here////
// function flow(input, funcArray){
//   // base: if funcArray.length === 0 return input
//   if(funcArray.length ===0){return input}
//   // slice funcArray
//   newFunc = funcArray.slice(1)
//   // recursive call
//   return flow(funcArray[0](input),newFunc)

// }
// // To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
//  function add7(num) { return num + 7; }
//  function modulo4(num) { return num % 4; }
//  function subtract10(num) { return num - 10; }
//  const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
//  console.log(flow(2, arrayOfFunctions)); // -> -7





//16.///////////// //////////////////////////////////////////////////////////////////Challenge: multiMap
// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks.
//  multiMap will return an object whose keys match the elements in the array of values. 
//  The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// // ADD CODE HERE
// const multiMap = (arrayOfValues, arrayOfCallbacks) =>{
//     //declare a variable as an empty object;
//     let obj = {};
//     //iterate through array through for...of loop
//     for(let str of arrayOfValues){
//       //create empty array
//       let element = str
//       obj[str]=[]; ///////////////ask arthur about this
  
//       //iterate over the callbacks
//       for(let i=0;i<arrayOfCallbacks.length;i++){
  
//         obj[str].push(arrayOfCallbacks[i](str)) //// ask arthur how to properly write this
//       }
//     }
//     return obj;
// }


// //  // Uncomment these to check your work!
//   function uppercaser(str) { return str.toUpperCase(); }
//   function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
//   function repeater(str) { return str + str; }
//   const items = ['catfood', 'glue', 'beer'];
//   const functions = [uppercaser, capitalize, repeater];
//   console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//17.///////////////////////////////////////////////////////////////////////////////////////// // CHALLENGE 9
// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
// When first invoked, the returned function will return the first element of the array. When invoked a second time, 
// the returned function will return the second element of the array, and so forth. After returning the last element of the array, 
// the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

// function cycleIterator(array) {
//   // declare variable and assign value of 0 for count
//   let count = 0;
//   // declare variable as empty str
//   let result = '';
//   // create new function
//   function print(){
//     // initiate cond stmt; if count >= array.length-1....
//     if(count >=array.length-1){
//       // update/reassign result
//       result = array[count]
//       // return count to 0
//       count = 0

//       // otherwise...
//     } else {
//         //  update/reassign result;
//         result = array[count]
//         // incrment count
//         count++

//     }
//     // return result
//     return result;

//   }
//   // return new function
//   return print;

// }

// // /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

//18.  ////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
// write a function called productOfArray which takes in an array of of numbers and returns the product of them all.
// function productOfArray(arr) {
//   // base: if arr.length === 0; return 1
//     if(arr.length ===0){return 1}
//   // slice array
//   newArr = arr.slice(1)
//   // recurse call
//   return arr[0] * productOfArray(newArr)

// }


// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60



// //19.  ////////////////////////////////////////////////////////////////// Challenge: objOfMatches ******tehre are a lot of examples.  study this.  
// // Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// //arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback 
// //(when those elements are passed in) as the corresponding values.

// function arrToObj(array, callback) {
//   // declare variable and assign as empty obj;
//   let obj = {};
//   // iterate through array w/ for...of loop
//   for(let str of array){
//     // intiate cond stmt; if callback is true....
//     if(callback(str)){
//       // update obj w/ callback value
//       obj[str] = callback(str)

//     }
    
//   }
//   // return obj
//   return obj;

// }

// //   // Uncomment these to check your work!
//   const arrOfStrings = ['beer', 'glue'];
//   const capitalize = str => str.toUpperCase();
//   console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }



//20. /////////////////////////////////////////////////////////////////////////////// // CHALLENGE 10
// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
// defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. 
// Additional arguments needed by the passed-in function will need to be passed into the returned function.


// function defineFirstArg(func, arg) {
//   // create new function
//   function print(...args){
//     // return func
//     return func(arg,...args)

//   }

//   // return new function
//   return print

// }

// // /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


//21.  ////////////////////////////////////////////////////////////////////sum of numbers//////////////////////////////////////
// write a function called recursiveRange which accepts a number and up all the numbers from 0 to the number passed to the function

// function recursiveRange(x){
//   // base: if x===0; return 0
//   if(x===0){return 0}
//   // decrement x
//   newX=x-1
//   // recursive call
//   return recursiveRange(newX)+x

   
// }

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 




// 22.  ////////////////////////////////////////////////////////////////// Challenge: objOfMatches ******tehre are a lot of examples.  study this.  
// Construct a function objOfMatches that accepts two arrays and a callback. 
// objOfMatches will build an object and return it.  To build the object, objOfMatches will test each element of the first array using the callback to see 
// if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object,
//  and the element from the second array becomes the corresponding value.

//create a loop with i and j
// // ADD CODE HERE
// function objOfMatches(array1, array2, callback) {
//   // declare variable and assign as empty object
//   let obj = {};
//   // iterate through array w/ for loop;
//   for(let i=0; i<array1.length;i++)
//     // intiate cond stmt; if callback is equal to current element of array 2....
//     if(callback(array1[i])=== array2[i]){
//       // update obj property
//       obj[array1[i]] = [array2[i]]

//     }
//   // return object
//   return obj;

// }




// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }


//23.  //////////////////////////////////////////////////////////////////////////////////// CHALLENGE 12
// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. 
// When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
// When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) 
// will be replaced with their corresponding second strings (of those saved pairs).

// function censor() {
//   // declare variable as empty ojbect
//   let obj = {};
//   // create new function
//    function prints(strOne, strTwo){
//     // initiate cond stmt; where if strTwo doesnt exist....
//     if(!strTwo){
//       // iterate through obj w/ for...in
//       for(let i in obj){
//         // replace strOne w/strTwo
//         strOne = strOne.replace(i,obj[i])
//       }
//       // return strOne
//       return strOne
//     }else{
//       // update object
//       obj[strOne] = strTwo;
//     }
//   }
//   return prints;
// }

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


//24.  ////////////////////////////////////////////////////////////////////fibonacci//////////////////////////////////////

// write a recursive funcation called fib which accepts a number and returns the nth number in the fibonacci sequence.
// Recall that the fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8... which starts with 1 and 1 and where every number thereafter 
// is equal to the sum of the previous two numbers;


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(n){
//   // base: if n<=2 return 1
//   if(n<=2){return 1}
//   // recurse call
//   return fib(n-1) + fib(n-2)

// }


// console.log(fib(4))// 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465



//25. //////////////////////////////////////////////////////// /////////////////////////////////// CHALLENGE 14
// Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.

// function callTimes() {
//   // declare variable and assign value of 0
//   let count = 0;
//   // create new function
//   function print(){
//     // incremeent count
//     console.log(++count)
//   }
//   // return new funciton
//   return print
  
// }
  
//   /*** Uncomment these to check your work! ***/
//   let myNewFunc1 = callTimes();
//   let myNewFunc2 = callTimes();
//   myNewFunc1(); // => 1
//   myNewFunc1(); // => 2
//   myNewFunc2(); // => 1
//   myNewFunc2(); // => 2
  

//26. ///////////////////////////////////////////////////////////////////////////////// // CHALLENGE 15
// Create a function russianRoulette that accepts a number (let us call it n), and returns a function. 
// The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. 
// On the very next invocation (the nth invocation), the returned function will return the string 'bang'. 
// On every invocation after that, the returned function returns the string 'reload to play again'.


// function russianRoulette(num) {
//   // declare variable and assign value of 0 for count
//   let count =0
//   // declre variable and assign empty string
//   let result =''
//   // declare new function
//   function print(){
    
//     // intiate cond stmt; if count>=num-1....
//     if(count>num-1){
//       // update/assign result
//       result = 'reload to play again'
//     } else if(num-1 === count){
//       // if num-1 === count
//         // update/reassign result
//         result='bang'
//         // increment counter
//         count++
//     } else {
//       // otherwise... reassign 
//       result='click'
//       // increment counter
//       count++
//     }
//     return result
//   }
//   // return new function
//   return print;
// }

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'





//27. ////////////////////////////////// ////////////////////////////////// Challenge: union//////********focus on this  */
// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. 
// If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 
// BONUS - Use reduce!
// // // ADD CODE HERE
// function union(arrays){
//   debugger;
// return arrays.reduce((acc,curr)=> {
//   return acc.concat(curr.filter(c=>!acc.includes(c)))
// })
// }

// function union(arrays){
//   debugger;
//   return arrays.reduce((acc,curr)=>{
//     curr.forEach(el=> {
//       if(!acc.includes(el)){
//         acc.push(el)
//       }
//     })
//     return acc
//   },[])
// }

// function union(arrays){
//   debugger;
//   joinedArray = arrays[1].concat(arrays[2])
//   let compareArray = arrays[0]
//   let result =[];
//   for(let num of compareArray){
//     // let compareArray = arrays[0]
//     for(let i=0;i<joinedArray;i++){
//       if(num!==joinedArray[i]){
//         result.push(num)
//       }
//     }
//   }
//   return result;
// }


// function union(arrays){
//   let compare = arrays[0];
//   for(let i=0;i<arrays.length;i++){
//     result = compareArrays(result,arrays[i])
//   }
//   return result;

// }

// function compareArrays(array1,array2){
//   for(let i=0;i<array1.length;i++){

//   }
// }


  // Uncomment these to check your work!
  // const arr1 = [5, 10, 15];
  // const arr2 = [15, 88, 1, 5, 7];
  // const arr3 = [100, 15, 10, 1, 5];
  // console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

  /////////////28.  //////////////////////////////////////////////////////////////////////////////////////////// // CHALLENGE 16
// Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, 
//     or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed 
//     into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, 
//     the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.


// function average() {
  
//   }
  
//   /*** Uncomment these to check your work! ***/
  // const avgSoFar = average();
  // console.log(avgSoFar()); // => should log 0
  // console.log(avgSoFar(4)); // => should log 4
  // console.log(avgSoFar(8)); // => should log 6
  // console.log(avgSoFar()); // => should log 6
  // console.log(avgSoFar(12)); // => should log 8
  // console.log(avgSoFar()); // => should log 8


//29.    //////////////////////////////////////////////////////////////////////reverse///////////////////////////////////////////////////////////////////
// //write a function called reverse which accepts a string and returns a new string in reverse

// function reverse(str){
//   // base: if str.length ===0 return str[0]
//   if(str.length ===0){return str}
//   // slice string
//   newStr = str.slice(1)
//   // recursive call
//   return  reverse(newStr) +str[0]


// }
  
//   console.log(reverse('awesome')) // 'emosewa'
//   console.log(reverse('rithmschool')) // 'loohcsmhtir'



//30.    //////////////////////////////////////////////////////////////////////isPalindrome/////////////////////////////////////////////////////////
// write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same foward and backward)
// otherwise returns false.



// function isPalindrome(str){
//   // base: if str.length <=1 return str[0]
//   // return str.slice(1,-1)
//   if(str.length <=1){return true}
//   if(str.length === 2){return str[0]===str[1]}
//   if(str[0]===str.slice(-1)){return isPalindrome(str.slice(1,-1))}
//   return false

// }


// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false





///           31.    //////////////////////////////////////////////// Challenge: intersection/////////////////////////////////////**************focus on this  */
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

// //ADD CODE HERE
// function intersection(arrays){
//   debugger
//   // return arrays.reduce((a,b)=>a.filter(c=>b.includes(c)));
//   return arrays.reduce((acc,curr)=> {
//     return acc.filter(num=>curr.includes(num))
//   })
// }

// Do the same problem above but with a loop?
// // //ADD CODE HERE
// function intersection(arrays){
// debugger
  // // ////include everything that is not common
  // return arrays.reduce((acc,curr)=>{
  //   // concat the cur amout to the acc
  //   return acc.concat(curr.filter(num=>!acc.includes(num)))
  // // })

  

  // return arrays.reduce((acc,curr)=> {
  //      return acc.concat(curr.filter(c=>!acc.includes(c)))

// }
//   // Uncomment these to check your work!

function intersection(array){
  debugger;
  // create empy result array that will hold our common elemments
  const result = [];
  // select the first subarray to use as base numbers to compare
  const subArray = array[0]
  // loop over subarray
  subArray.forEach(num => {
    // loop over reamining subarray to check if current element is present on all other nsubarrays
    let shouldPush = true;
    for(let i=1; i<array.length; i++){
      if(!array[i].includes(num)){
        shouldPush=false;
        break;
      }
    }
    // if current is present on all other subarrays  push it into results array
    if(shouldPush)result.push(num)

  })
  return result
}

// function intersection(arrays){
//   debugger;
//   // decalre variable and assign it as array index 0
//   let compareArray = arrays[0];
//   // iterate through arrays
//   for(let i=0; i<arrays.length;i++){
//     // declare variable and assign value of arrays based on i value 
//     let arr = arrays[i];
//     // iterate through our results array/array[0]
//     for(let j=0;j<compareArray.length;j++){
//       // declare variable and assign it as value based on result element
//       let value = compareArray[j]
//       // intiate cond stmt; where if element is not found in the array...
//       if(!arr.includes(value)){
//         // splice the result
//         compareArray.splice(j,1)
        
//       }

//     }

//   }
//   // return result
//   return compareArray;
// }


// function union(arrays){
//   debugger;
//   return arrays.reduce((acc,curr)=>{
//     curr.forEach(el=> {
//       if(!acc.includes(el)){
//         acc.push(el)
//       }
//     })
//     return acc
//   },[])
// }


// function intersection(arrays){
//   let compared = arrays[0]
//   return arrays.reduce((acc,curr)=>{
//     curr.forEach(el=> {
//       if(compared.includes(el)){
//         acc.push(el)
//       }
//     })
//     return acc
//   },[])
// }


//   // Uncomment these to check your work!
  const arr1 = [5, 10, 15, 20];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [1, 10, 15, 5, 20];
  console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


//32. /////////////////////////////////////////////////////////////////////////////// // CHALLENGE 17
// Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). 
// The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the 
// corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.

// function makeFuncTester(arrOfTests) {

  
// }

// // /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


//33.    ////////////////////////////////////////////////////////////////////someRecurseive/////////////////////////////////////////////////////////

//write a function which accepts an array and a clalback.  
// the function returns true if a single value in teh array returns true when passed to the callback
// otherwise it is false

// function someRecursive(array, callback){

// }


//   // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false


//34.    ////////////////////////////////////////////////////////////////////flatten/////////////////////////////////////////////////////////
// write a function taht acceps an array of arrays and returns a new array with all value flattneed

// function flatten(array){


// }
  
//   console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
//   console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
//   console.log(flatten([[1],[2],[3]])) // [1,2,3]
//   console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3






//35.   /////////////////////////////////////////////////////////////// Challenge: eitherCallback
// Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// Notice that the lines of code testing your work are using functions and an array from previous challenges. 
// The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should
//  match the results of simply passing the two callbacks into eitherFilter in the previous challenge.

// function eitherCallback(callback1, callback2) {
//   // declare variable and assign empty array
//   // iterate through 

//   }
//   const arrOfNums = [10, 35, 105, 9];
//   const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
//   const over100 = n => n > 100;
//   const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
//   console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

//36.                ///////////////////////////////////////////////// Challenge: reduce********spend time on this one********
// The function reduce takes an array and reduces the elements to a single value.

// The reduce function loops through the array and applies any operation that you can put into a function to each element in the array 
// while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.
////////this is an example
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// reduce(nums, add, 0); //-> 8
// Here's how it works:

// The function has an "accumulator value". Its job is to keep track of the accumulated output of each loop. It starts out equal to the initialValue.
// The array is iterated over, passing the accumulator and the next array element as arguments to the callback.
// The callback's return value becomes the new accumulator value.
// The next loop executes with this new accumulator value.
// In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) makes it 5. Finally add(5, 3) brings it to 8, which is returned.

// Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

// // ADD CODE HERE
// function reduce(array,callback, initial){

// }


// //   // Uncomment these to check your work!
//   const nums = [4, 1, 3];
//   const add = function(a, b) { return a + b; }
//   console.log(reduce(nums, add, 0)); // should log 8



//37.        ////////////////////////////////////////////////////////////////////capitalizeFirst/////////////////////////////////////////////////////////

// given an array of String, capitlzie the first letter of each string in the array

// function capitalizeFirst (array) {

// }
  
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


 //38.                ////////////////////////////////////////////////////////////////////capitalize/////////////////////////////////////////////////////////
// given an array of words, return an new array conating each word captialzied

// function capitalizeFirst (array) {


//   }
  
//   let words = ['i', 'am', 'learning', 'recursion'];
//   console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']






//39. ////////////////////////////////////////////////////////// Challenge: filterArray
// Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

// function filterArray(array, callback) {

//   }
  
// //   // Uncomment these to check your work!
//   console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
//   console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]


// 40.//////////////////////////////////////////////////////////Challenge: eitherFilter
// Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// The array returned from eitherFilter should contain all elements in the passed-in array 
//that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.
// ///***********there are mutiple answers.  please look at your spreadsheet */

// function eitherFilter(array, callback1, callback2) {


// }
//   // Uncomment these to check your work!
//   const arrOfNums = [10, 35, 105, 9];
//   const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
//   const over100 = n => n > 100;
//   console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]





////43               ////////////////////////////////////////////////////// Challenge: map
// Create a function subtractTwo that accepts a number and returns that number minus 2.
// Then create a function map that takes two inputs -
// 1.  an array of numbers (a list of numbers)
// 2.  a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. 
// Please do not use the native map or forEach method.

// // ADD CODE HERE
// function map(array, callback){
//   // decalre variable and assign as an empty array
//   // iterate thourh

// }

  
// //   // Uncomment these to check your work!
//   console.log(typeof subtractTwo); // should log: 'function'
//   console.log(typeof map); // should log: 'function'
//   console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]


//42./////////////////////////////////////////////////////////////////////////////////// Challenge: forEach
// ---------Part 1
// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use 
// the native forEach or map method.
//this is an exmmpale below;
// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'

// Part 2
// Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.

// // // ADD CODE HERE
// function forEach(array, callback){

// }
  
// function map(arr, call){

// }
// //   //Uncomment these to check your work!
//   console.log(typeof forEach); // should log: 'function'
//   forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
//   console.log(typeof map); // should log: 'function'
//   console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]



//43.   //////////////////////////////////////Arraybuildier///////////////////////////////////////////

// Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. 
// The order of the elements in the array does not matter, but repeated elements should be grouped.


// function arrayBuilder(obj) {

//   }
  
//   // Uncomment these to check your work!
//   console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
//   console.log(arrayBuilder({})); // => []



//44.   //////////////////////////////////////findWaldo///////////////////////////////////////////

// Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. 
// If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

// function findWaldo(obj){
//   debugger;
//   // iterate through object w/ for 
//   for(let str in obj){
//     if(str === 'Waldo')
//     return obj[str]
//   }
//   return 'where'

// }
  
//   // Uncomment these to check your work!
//   const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
//   const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
//   console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
//   console.log(findWaldo(supernatural)) // should log: 'unknown'

//45.   //////////////////////////////////////adddWaldo///////////////////////////////////////////


// Challenge: addWaldo
// Create a function addWaldo that accepts an object with keys being first names and values being last names. 
// For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) 
// should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.
// ADD CODE HERE 
// function addWaldo(obj){

//   }
  
//   // Uncomment these to check your work!
//   const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
//   console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }



//46.   //////////////////////////////////////disemvowle///////////////////////////////////////////
// Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

// function disemvowel(string) {
//   debugger;
//   let vowels ={
//     'a':true,
//     'e':true,
//     'i':true,
//     'o':true,
//     'u':true
//   };
//   let result =[];
 
//   for(let i=0; i<string.length; i++){
//     let letter = string[i].toLowerCase();
//     if(!vowels[letter]){
//       result+=string[i]
//     }
//   }
//   return result;
// }
  
  // Uncomment these to check your work!
  // console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  // console.log(disemvowel('BANANA')); // => 'BNN'
  // console.log(disemvowel('hello world')); // => 'hll wrld'


//47.   //////////////////////////////////////loops-multiple conditions///////////////////////////////////////////
// Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
// Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

// BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.

// function addingAllTheWeirdStuff(array1, array2){

//   }
  
//   // Uncomment these to check your work!
//   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
//   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  


//48.   //////////////////////////////////////loops-range///////////////////////////////////////////
// Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr.
//  The value returned should be an array with the low, high, and range.


// function getTheRange(arr){

//   }
  
//   // Uncomment these to check your work!
//   console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); 
//// expect log [2, 10, 8]