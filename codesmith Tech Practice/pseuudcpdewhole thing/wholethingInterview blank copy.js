
//1 ///////////////////////////////////////////////// Challenge: goodKeys
// // Create a function goodKeys that accepts an object and a callback. The callback will return either true or false.
// //  goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return 
// //  an array consisting only the keys whose associated values yielded a true return value from the callback.

//  function goodKeys(obj, callback) {
//    //decalre a varible and assign it an empty array;
//    let output =[];
//    //decalre a for..in loop to iterate through the sunny object;
//    for(let word in obj){
//     //if the callback is true, update the empty object;
//     if(callback(obj[word])){
//       output.push(word)
//     }
//    }
//    //return the updated array/output
//    return output;
    

// // }
// // //   // Uncomment these to check your work!
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

// // console.log('Hello, world!');
// // add code here////
//  function repeater(char, num=0, output =""){
//   //base case: when output has length of 5, return the output
//   if(num===5){
//     return output;
//   }
//   //concat char to the output;
//   output+=char;
//   //recursive call
//   return repeater(char, num+1,output)
//  }

// // // // To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g'));
// console.log(repeater('j'));



//3 /////////////////////////////////////////////////// CHALLENGE 1
// Create a function createFunction that creates and returns a function. 
// When that created function is called, it should print "hello". 
// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

// //create a function called createFunction
// function createFunction() {
//   //create new function
//   function prints(){
//     //return string
//     return 'hello';  
//   }
//   //return new function
//   return prints

// }

// // /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// console.log(function1()); // => should console.log('hello');



//4.  ////////////////////////////////////////////////////////////// Challenge: groupBy
// Create a function groupBy that accepts an array and a callback, and returns an object. 
// groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
// The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

// // // // ADD CODE HERE
// function groupBy(array, callback){
//   debugger;
//   //declare a variable that contains an empty object;
//   let obj={};
//   //iterate through the array with a for..of loop;
//   for(let element of array){
//     //if there is already an existing key in the object, ush the value from the callback    //////double check with arthur
//     // arthur-  if key exists in obj, push callback return value
//     if(callback(element) in obj){
//       //push the element that will be pushed to the same array
//       obj[callback(element)].push(element)
//     }else {
//       //if there is no existin key in the objet, have key = returned value from the callback
//       obj[callback(element)] =[element]  //////////why does this need the []?  
//       // ask arthur -- we need to do this becasue we don't have an array established.  the first time we ecounter the key we have to assign it an array.  it doesnt know that
//     }
//   }
//   //return the updated object;
//   return obj;
// }


//   // Uncomment these to check your work!
//    const decimals = [1.3, 2.1, 2.4];
//    const floored = function(num) { return Math.floor(num); };
//    console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }



// 5.  ////////////////////////////////////////////CHALLENGE 2
// // Create a function createFunctionPrinter that accepts one input and returns a function. 
// // When that created function is called, it should print out the input that was used when the function was created.

// function createFunctionPrinter(input) {
//   //create new function
//   function prints(){
//     //return input
//     return input;
//   }
  
//   //print/return the function
//   return prints;


// }

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// console.log(printSample()); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// console.log(printHello()); // => should console.log('hello');



//6.  //////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
///////////////////////////////////example//////////////////////////////////////////
// Input: {Number} num - number whose factorial is sought
// Output: {Number}
///////////////////////////////////example//////////////////////////////////////////
// add code here////
// function factorial(num, product=1){
//   //base case: return the product when num <= 1;
//   if(num <= 1){return product}
//   //multiply product by num
//   newProduct = num*product
//   //decrement num by 1
//   newNum = num-1
//   //recursive call;  multiply      //////double check with arthur
//   return factorial(newNum,newProduct) 

// // }
// // // To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1




//7.  ///////////////////////////////////////////////////////////////////////////////////////////// Challenge: countBy
// Create a function countBy that accepts an array and a callback, and returns an object. 
// // countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
// // The value associated with each key will be the number of times that particular return value was returned.

// // ADD CODE HERE
// function countBy(arr, callback) {
//   //decalre variable as an empty object;
//   let obj = {};
//   //decalre varialbe for odd count
//   let oCount = 0
//   //declare vairable ofr even count
//   let eCount = 0
//   //iterate through array with a for...of loop
//   for(let element of arr){
//     //initial conditioanl stmt where if the callback is true; increment even count
//     if(callback(element)){
//       eCount++
//       obj[callback(element)]=eCount   ///// double chekc with arthur 
//       // arthur - set the object key to even count
//       // or set the obj callback key to the even count
//     } else {
//       //otherwise increment odd count
//       oCount++
//       obj[callback(element)] = oCount
//     }
//   }
//   //return the object;
//   return obj;
// }

// function countBy(array, callback){
//   //declare variable as an empty object
//   let obj = {};
//   //iterate throuth the array and run the callback on each element
//   //return value will be the key and if there is more than one same key, the value will be incmented by 1
//   for(let element of array){
//     //if the key is in the obj;
//     if(callback(element) in obj){
//       //increment the count by 1
//       obj[callback(element)]++
//       ////if the key is not in the obj;  assign the value of 1
//     } else {
//       obj[callback(element)] = 1
//     }
//   }
//   //return the object;
//   return obj;
// // }


  
  // Uncomment these to check your work!
  // function evenOdd(n) {
  //   if (n % 2 === 0) return 'even';
  //   else return 'odd';
  // }
  // const nums = [1, 2, 3, 4, 5];
  // console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

//8.  //////////////////////////////////////////////////////////////////////////// CHALLENGE 4
// Write a function once that accepts a callback as input and returns a function. 
// When the returned function is called the first time, it should call the callback and return that output. 
// If it is called any additional times, 
// instead of calling the callback again it will simply return the output value from the first time it was called.


// function once(callback) {
//   //create variable named toggle and assign it false;
//   let toggle = false;
//   //decalre variable with empty array
//   let result = [];
//   //create new function;
//   function prints(...args){    ////////////////////double check with arthur on this one 
//     //initiate a conditioal statment where if the toggle hasnt been invoked
//     if(!toggle){
//       //invoke toggle to true
//       toggle = true;
//       //call the callback and store it as result;
//       result = callback(...args)
//     }
//     return result;
//     //return function
//   }
//   return prints;
// }

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
// // // // add code here////
// function getLength(array,length = 0){
//   //base case: if arr.length <=1 return arr[0];
//   if(array[0] === undefined){return length}

//   //increment length by 1
//   newLength=length+1
//   //slice the array by index 1
//   newArr = array.slice(1)
  
//   //recurse the call 
//   return getLength(newArr,newLength)

// // }
// // // To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0


// //10.  //////////////////////////////////////////////////////////// Challenge: prioritize
// // Create a function prioritize that accepts an array and a callback. The callback will return either true or false. 
// // prioritize will iterate through the array and perform the callback on each element, and return a new array, 
// // where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
// // ADD CODE HERE
// function prioritize(array, callback){
//   //declare a variable as an empty arrray where we will store the callback elements
//   let callResult = [];
//   //decalse an empty array where we will store the data where it is false for the callback
//   let result = [];
//   //iterate the array with a for...of loop
//   for(let str of array){
//     //initialize an if stameent where if the callback is true
//     if(callback(str)){
//       //push/update the callbackresult variable;
//       callResult.push(str)
//     }else{
//       //otherwise store in result
//       result.push(str)
//     }
//   }

//   //return results through concatation of arrays
//   return callResult.concat(result)

// }


// // Uncomment these to check your work!
// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']



//11.  /////////////////////////////////////////////////////// CHALLENGE 5
// Write a function after that takes the number of times the callback needs to be called before being executed as 
// the first parameter and the callback as the second parameter.


// function after(count, func) {
//   //decalre a variable to store the number of counts
//   let counted = 0
//   //create a nenw function
//   function prints(){
//     //incrment count
//     counted++
//     //initiate a conditional where if the count === the # of times called, print hello
//     if(counted === count ){
//       //reset counted;
//       counted = 0
//       //return callback
//       return func()
      
//     }else {
//       //otherwise return 'nothing is printed'
//       console.log('nothing is pritned')
//     }
//   }
//   //retrn new function
//   return prints;
// }

// // /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed
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
// // // add code here////
// function pow(base, exponent){
// //   //base case: if exponenet ===0 return 1;
// //   if(exponent ===0){return 1}

// //   //decremnet exponent
// //   newExp = exponent-1
// //   //return recursive call   ///////////////////talk to arthur
// //   return base * pow(base,newExp)

// // // }
// // // // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243



//13.  ///////////////////////////////////////////////////////////////////////////////// Challenge: majority
// Create a function majority that accepts an array and a callback. 
// The callback will return either true or false.
//  majority will iterate through the array and perform the callback on each element until it can be determined 
//  if the majority of the return values from the callback are true. 
// If the number of true returns is equal to the number of false returns, majority should return false.
// // ADD CODE HERE

function majority(array,callback){
  //declare variable as an empty object;
  let obj = {}
  //iterate through the array with for..of loop
  for(let num of array){
    //if the key is in the object
    if(callback(num) in obj){
      //increment the count by 1
      obj[callback(num)]++
    }else {
      //otherwise if the key is not in the obj, assign a value of 1
      obj[callback(num)] = 1
    }

  }
  //return the max value of the object thorugh sorting
  // return obj
  return Object.keys(obj).sort((a,b)=>b-a)[0]   //////////////talk to arthur
  // return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
  // return obj;

}




  // Uncomment these to check your work!
   const isOdd = function(num) { return num % 2 === 1; };
   console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
   console.log(majority([2, 3, 4, 5], isOdd)); // should log: false



  //14. /////////////////////////////////////////////////////////////////////////////// // CHALLENGE 7
// Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, 
// it should log the first name to the console. The second time it is invoked, it should log the second name to the console, 
// and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

// function rollCall(names) {
//   //declare variable as number 0 to store number of counts
//   let counter = 0
//   //declare variable as empty string;
//   let str = ''
//   //declare new function
//   function prints(){
//     //intialize a coindtial statement where if the  counter === array.length
//     if(counter >= names.length){
//       //return 'Everyone's accounted for'
//     console.log('Everyone is accounted for')

//       //otherwise...
//     }else {
//       //let assign array's index based on current counter
//       console.log(names[counter])
//       //increment counter
//       counter++
//     }

//   }
//   //return new function
//   return prints;
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
// // add code here////
// function flow(input, funcArray){
//   //base: if funcArray.length === 0 return input;
//   if(funcArray.length === 0 ){
//     return input;
//   }
//   //update input with callback[0]
//   newInput = funcArray[0](input)
//   //slice funcArray anything after index 1
//   newFuncArray = funcArray.slice(1)

//   //recursively call  fuction  /////////////////ask arthur about this one
//   return flow(newInput,newFuncArray)

//   // return flow(funcArray[0](input),funcArray.slice(1))

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

// // // ADD CODE HERE
const multiMap = (arrayOfValues, arrayOfCallbacks) =>{
  //declare a variable as an empty object;
  let obj = {};
  //iterate through array through for...of loop
  for(let str of arrayOfValues){
    //create empty array
    let element = str
    obj[element]=[]; ///////////////ask arthur about this

    //iterate over the callbacks
    for(let i=0;i<arrayOfCallbacks.length;i++){

      obj[str].push(arrayOfCallbacks[i](str)) //// ask arthur how to properly write this
    }
  }
  return obj;

}


//  // Uncomment these to check your work!
  function uppercaser(str) { return str.toUpperCase(); }
  function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
  function repeater(str) { return str + str; }
  const items = ['catfood', 'glue', 'beer'];
  const functions = [uppercaser, capitalize, repeater];
  console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//17.///////////////////////////////////////////////////////////////////////////////////////// // CHALLENGE 9
// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
// When first invoked, the returned function will return the first element of the array. When invoked a second time, 
// the returned function will return the second element of the array, and so forth. After returning the last element of the array, 
// the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

// function cycleIterator(array) {
//   //declare a variable and assign the value = 0
//   let counter = 0
//   //declare a variable as assign it an empty string
//   let str = ''
//   //create a new function
//   function prints(){
//     //intialize conditional statement where if the count >= length of array-1 or the maximum index#; 
//     if(counter >=array.length-1){
//       // update empty string
//       str = array[counter]
//       //return counter to 0
//       counter = 0
//       //otherwise
//     }else {
//       //assign result as array of current index based on counter
//       str = array[counter]
//         //increment counter
//         counter++
//       }
//       //return the empty string variable
//       return str;

//   }
// //return the new function
// return prints;
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
//   // base: if the array.lenth = 1; rreurn the element of array[0]
//   if(arr.length === 1){return output}

//   //slice the array to include all of the array after index 1
//   newArr = arr.slice(1)
//   //multipy arr[0] to the recursed function   //////double check with arthur
//   return arr[0] * productOfArray(newArr)

// }


// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60



//19.  ////////////////////////////////////////////////////////////////// Challenge: objOfMatches ******tehre are a lot of examples.  study this.  
// Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
//arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback 
//(when those elements are passed in) as the corresponding values.

// function arrToObj(array, callback) {
//   // declare variable as empty object
//   let obj ={};
//   // iterate through array with for..of loop
//   for(let str of array){
//     // update/assign the object based on the called callback   ////////////talk to arthur
//     // arthur- update/reassign the object property to the callback return value;
//     obj[str] = callback(str)

//   }
//   //return the object
//   return obj;

// }

// //   // Uncomment these to check your work!
//   const arrOfStrings = ['beer', 'glue'];
//   const capitalize = str => str.toUpperCase();
//   console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }



//20. /////////////////////////////////////////////////////////////////////////////// // CHALLENGE 10
// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
// defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument 
// as the passed-in function's first argument. 
// Additional arguments needed by the passed-in function will need to be passed into the returned function.


// function defineFirstArg(func, arg) {
//   //declare new function()
//   function prints(...args){
//     //return function with spread args
//     return func(arg,...args)

//   }

//   return prints

// }

// // /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


//21.  ////////////////////////////////////////////////////////////////////sum of numbers//////////////////////////////////////
// write a function called recursiveRange which accepts a number and up all the numbers from 0 to the number passed to the function

// function recursiveRange(x){
//   //base: if x === 0 return 0
//   if(x===0){return 0}

//   //decrement x
//   newX = x-1

//   //add x to recursed function
//   return x + recursiveRange(newX)

   
// }

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 




//22.  ////////////////////////////////////////////////////////////////// Challenge: objOfMatches ******tehre are a lot of examples.  study this.  
// Construct a function objOfMatches that accepts two arrays and a callback. 
// objOfMatches will build an object and return it.  To build the object, objOfMatches will test each element of the first array 
// using the callback to see 
// if the output matches the corresponding element (by index) of the second array. 
// If there is a match, the element from the first array becomes a key in an object,
//  and the element from the second array becomes the corresponding value.


// // ADD CODE HERE
// function objOfMatches(array1, array2, callback) {
//   //declare variable as empty object
//   //itterate through 

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
//   //create a variable and assign as an empty object
//   let obj = {};
//   //create new function w/ two variables of strOne and strTwo
//   function prints(strOne,strTwo){
//     //initialte conditional stmt where if strTwo = false....
//     if(!strTwo){
//       //iterate through the objec w/ for...in loop
//       for(let str in obj){
//         //replace strOne with strTwo
//         strOne = strOne.replace(str,obj[str])
//       }
//       //return string one 
//       return strOne
//       //otherwise.....
//     }else{
//         // update the obj strOne and assign values of strTwo
//         obj[strOne] = strTwo
//     }
//   }
//   //return new function
//   return prints
// }

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
// // => should log 'The slow, brown fox jumps over the lazy cats.'


//24.  ////////////////////////////////////////////////////////////////////fibonacci//////////////////////////////////////

// write a recursive funcation called fib which accepts a number and returns the nth number in the fibonacci sequence.
// Recall that the fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8... which starts with 1 and 1 and where every number thereafter 
// is equal to the sum of the previous two numbers;


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(n){
// //base case: if n is less than or equal to 2, return 1;
//   if(n<=2){return 1} 
//   //recurse the function
//   return fib(n-1) + fib(n-2)
  

// }

// console.log(fib(4))// 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465



//25. //////////////////////////////////////////////////////// /////////////////////////////////// CHALLENGE 14
// Write a function, callTimes, that returns a new function. 
// The new function should return the number of times it’s been called.

// function callTimes() {
  
//   //declare a variable for the counter and assign it the value of 0;
//   let counter = 0
//   //declare a new function
//   function print(){
//     //return the counter
//     console.log(++counter)

//   }
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
// Create a function russianRoulette that accepts a number (let us call it n), 
// and returns a function. 
// The returned function will take no arguments, 
// and will return the string 'click' the first n - 1 number of times it is invoked. 
// On the very next invocation (the nth invocation), 
// the returned function will return the string 'bang'. 
// On every invocation after that, the returned function returns the string 'reload to play again'.


// function russianRoulette(num) {
//   //declare a variable for counter and assign value of 0
//   let counter = 0;
//   //declare a variable and assign it the value of empty string
//   let result = ''
//   //create new function
//   function print(){
//     //intilize conditional stmt where if coutner >num;
//     if(counter >num-1){
//       // assign result ; 'reload to play again'
//       result ='reload to play again'
//       //otherwise if num === counter assign result  'bbang'
//     }else if(num-1 === counter){
//       result = 'bang'
//       counter++
//       //otherwise....
//     } else {
//       //update/assing result the string of  'click'
//       result = 'click'
//       counter++
//       //incrementer counter

//     }
//     return result;

//   }
//   //return new function
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
// Construct a function union that takes an input array of arrays, compares each array, 
// and returns a new flat array that contains all elements. 
// If there are duplicate elements, only add it once to the new array. 
// Preserve the order of the elements starting from the first element of the first input array. 
// BONUS - Use reduce!
// // // ADD CODE HERE

// // ////solve using reduce/and map
function union(arrays){

  //use reduce to iterate through the outer array of arrays
  // intialize an empty array to be our output
  return arrays.reduce((a,b) =>{
    return a.concat(b.filter(c=>!a.includes(c)))
  })
}

function union(arrays){
  // intialize an empty array to be our output
  return arrays.reduce((acc,curr)=>{
    //iterate through each inner array
    curr.forEach(el=>{
      // if the element is not present in the output array, add it to the output array
      if(!acc.includes(el)){
        acc.push(el);
      }
    })
    //return the output array
    return acc
  },[])
}


//solve using reduce
function union(array){
  //declare a variable for the result;
  let result;
  //use reduce to include all numbers inot one big array
  result = array.reduce((acc,curr) => acc.concat(curr))
//create unique values
  return[...new Set(result)]
}


////sovle using loops
// function union(arrays){
//   let result = arrays[0];
//   for(let i=0; i<arrays.length;i++){
//     result = compareArrays(result,arrays[i])
//   }
//   return result;
// }

// function compareArrays(array1,array2){
//   for(let i=0; i<array1.length;i++){
//     if(!array2.includes(array1[i])){
//       array1.push(array2[i])
//     }
//   }
//   return array1;
// }




  // Uncomment these to check your work!
  // const arr1 = [5, 10, 15];
  // const arr2 = [15, 88, 1, 5, 7];
  // const arr3 = [100, 15, 10, 1, 5];
  // console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

  /////////////28.  //////////////////////////////////////////////////////////////////////////////////////////// // CHALLENGE 16
// Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, 
//or no arguments at all). When the returned function is invoked with a number, the output should be average of 
// all the numbers have ever been passed 
//into that function (duplicate numbers count just like any other number).
//  When the returned function is invoked with no arguments, 
// the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, 
// then it should return 0.


// function average() {
//   let average=0;
//   let numbers = [];
//   let calculateAverage = number =>{
//     if(!numbers.length) return 0
//     let sum=numbers.reduce((acc,curr)=> acc+curr,0)
//     return sum/numbers.length;
//   }
//   return function(number){
//     if(!number) return calculateAverage(number)
//     numbers.push(number)
//     return calculateAverage(number)
//   }
  
//   }
  
//   /*** Uncomment these to check your work! ***/
//   const avgSoFar = average();
//   console.log(avgSoFar()); // => should log 0
//   console.log(avgSoFar(4)); // => should log 4
//   console.log(avgSoFar(8)); // => should log 6
//   console.log(avgSoFar()); // => should log 6
//   console.log(avgSoFar(12)); // => should log 8
//   console.log(avgSoFar()); // => should log 8


//29.    //////////////////////////////////////////////////////////////////////reverse///////////////////////////////////////////////////////////////////
// //write a function called reverse which accepts a string and returns a new string in reverse

// function reverse(str){
//   //base: if str.length <=1 return str
//   if(str<=1){return str}
//   // slice the str after 1 index
//   newStr = str.slice(1)
//   // recurse the function and add str[0]
//   return reverse(newStr) + str[0];

// }
  
//   console.log(reverse('awesome')) // 'emosewa'
//   console.log(reverse('rithmschool')) // 'loohcsmhtir'



//30.    //////////////////////////////////////////////////////////////////////isPalindrome/////////////////////////////////////////////////////////
// write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same foward and backward)
// otherwise returns false.



// function isPalindrome(str){
//   // base case: str.length <=1, return str
//   if(str.length <=1){return true}
//   // if str.length ===2, return str[0] === str[1]
//   if(str.length ===2){return str[0]===str[1]}
//   //slice str to after index 1
//   // newStr=str.slice(1)
//   // if str[0] === str.slice(-1) ///// talk to arthur about this
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

// // //ADD CODE HERE
function intersection(arrays){
  // use the reduce method on arrays, taking in a callback
  return arrays.reduce((acc,curr)=> {
    //declare a variable that stores thhe comparison between two arrays
    const result =[];
    //iterate over the accmulator using the forEach method, taking callback(ele)
    acc.forEach((ele)=>{
      //if current value contains element, we can use the includes method
      if(curr.includes(ele)){
        //push the element into the result array
        result.push(ele)
      }
    })
    // return result
    return result;
  })
}

//Do the same problem above but with a loop?
// // // //ADD CODE HERE
// function intersection(arrays){
//   let result=arrays[0];

//   for (let i=0; i<arrays.length; i++){
//     let arr = arrays[i]
//     for (let j=0; j<result.length; j++){
//       let value = result[j];
//       //console.log(arrays[i],value)
      
//       if(!arr.includes(value)) {
//         result.splice(j,1)
//         //console.log(result.splice(j,1))
//       }
//     }
//   }
//   return result; 
// }

// //   // Uncomment these to check your work!
  const arr1 = [5, 10, 15, 20];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [1, 10, 15, 5, 20];
  console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]





//33.    ////////////////////////////////////////////////////////////////////someRecurseive/////////////////////////////////////////////////////////

//write a function which accepts an array and a clalback.  
// the function returns true if a single value in teh array returns true when passed to the callback
// otherwise it is false

// function someRecursive(array, callback){
//   //base case:if array.length ===0; return false
//   if(array.length === 0){return false}
//   //if callback of array[0] === true; return true
//   if(callback(array[0])){return true}

//   //slice the array from 1 index
//   newArray = array.slice(1)
//   //recurse the function
//   return someRecursive(newArray,callback)

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
//   //create a blank array
//   let arr =[];
//   //create a helper function with array argument
//   function helper(array){
//     //iterate through the array witha for lop
//     for(let i=0; i<array.length;i++){
//       let element = array[i]
//       //if the element is an array, recurse the helper function
//       if(Array.isArray(element)){
//         helper(element)
//       } else {
//         arr.push(element)
//       }
//     }
//   }
//   //call helper arry
//   helper(array)
//   return arr

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
//     // ADD CODE HERE
// const callbacks = item => callback1(item) || callback2(item);
//  return callbacks
    
// }


// //   // Uncomment these to check your work!
//   function filterArray(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//       if (callback(array[i], i, array)) newArray.push(array[i]);
//     }
//     return newArray;
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
//   // declare a variable and assign the value of intial
//   let result = initial;
//   //iterate with a for loop
//   for(let i=0; i<array.length;i++){
//     // update result with the called callback    /////////////ask arthur about this one
//     result = callback(result, array[i])

//   }
//   //return the results
//   return result

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
//   // base case: if the length of array is 1, return the uppercased array at 0 index
//   if(array.length ===1){
//     return [array[0].toUpperCase()]   ////////////////talk to arthur about this.  why you need to pu []
//   }
//   // decalre varaible reult and assign the value of the recursed array
//   let result = capitalizeFirst(array.slice(0,-1))
//   //push result 
//   result.push(array.slice(array.length-1)[0].toUpperCase())
//   // return result
//   return result;


// }
  
//   let words = ['i', 'am', 'learning', 'recursion'];
//   console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']









// 40.//////////////////////////////////////////////////////////Challenge: eitherFilter
// Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// The array returned from eitherFilter should contain all elements in the passed-in array 
//that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.
// ///***********there are mutiple answers.  please look at your spreadsheet */

// function eitherFilter(array, callback1, callback2) {
//   // declare variable and assign it as empty array
//   let result = [];
//   // iterate through the array with a for loop
//   for (let i=0; i<array.length; i++){
//     // intialze conditoal stmt; where if current element is divisible by 1...
//     if(array[i]%1===0){
      
//       // update result with callback1
//       result.push(callback1(array[i]));
      
//     }
//     // initlize conditoal stmt; where if the current element is >100....
    
//     if(array[i]>100){
//       // update result with callback 2   ////////////go  through with arthur on this one
//       result.push(callback2(array[i]))
      
//     }
//   }
//   // return result;
// return result; 

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


// function subtractTwo(num){
//   return num-2;
// }

// // // ADD CODE HERE
// function map(array, callback){
//   //declare variable as an empty array
//   let result = []
//   //iterate through array using a for..of loop
//   for(let num of array){
//     // push/update result of callback
//     result.push(callback(num))
//   }
//   // return result
//   return result;

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
//   for(let str of array){
//     callback(str)
//   }

// }
  
// function map(arr, call){
//   let result = []
//   forEach(arr,function(element){
//     result.push(call(element))
//   })
//   return result;

// }
// //   //Uncomment these to check your work!
//   console.log(typeof forEach); // should log: 'function'
//   forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
//   console.log(typeof map); // should log: 'function'
//   console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]



//43.   //////////////////////////////////////Arraybuildier///////////////////////////////////////////

// Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. 
// The order of the elements in the array does not matter, but repeated elements should be grouped.


function arrayBuilder(obj) {
  // declare variable and assign it as an empty array
  let result = [];
  // iterate through strings in object;
  for(let str in obj){
    // talk to arthur about how to prpertly describe this
    for(let i=0; i<obj[str];i++)
    // /push results
    result.push(str)
  }
  // returnreseultss
  return result;

  }
  
  // Uncomment these to check your work!
  console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
  console.log(arrayBuilder({})); // => []



//44.   //////////////////////////////////////findWaldo///////////////////////////////////////////

// Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. 
// If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

// function findWaldo(obj){
//   // iterate trough object w/ for..in
//   for(let str in obj){
//     // intiilize conditioal stmt; if the object's value is unknown.....   /// /talk to arthur
//     if(obj[str]==='unknown')
//     // return 'unknown'
//     return 'unkown'

//   }

//     // return where's waldo
//     return 'wheres waldo'

//   }
  
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
// // ADD CODE HERE 
// function addWaldo(obj){
// obj['waldo'] = 'unkown'
// return obj
//   }
  
//   // Uncomment these to check your work!
//   const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
//   console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }



//46.   //////////////////////////////////////disemvowle///////////////////////////////////////////
// Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

function disemvowel(string) {
  // declare variable as an object and asssign it all the vowels in the alphabet
  let vowels ={
    'a' :true,
    'e':true,
    'i':true,
    'o':true,
    'u':true
  }
  // declare variable and assign as aempty array
  let result = [];
  //iterate through string with for...of loop
  for(str of string){
    // declare variable and assign it lowercase str
    let lower = str.toLowerCase()
    //intialize conditioal stmt; if doesnt include vowels....
    if(!vowels[lower]){
      // update/increment result with str
      result+=str
    }
  }
  // return result
  return result;
  
}

// // Uncomment these to check your work!
//   console.log(disemvowel('CodeSmith')); // => 'CdSmth'
//   console.log(disemvowel('BANANA')); // => 'BNN'
//   console.log(disemvowel('hello world')); // => 'hll wrld'


//47.   //////////////////////////////////////loops-multiple conditions///////////////////////////////////////////
// Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
// Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

// BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.

// function addingAllTheWeirdStuff(array1, array2){
//     // ADD CODE HERE
//     debugger;
//     let oddSum=0
//     let evenSum =0
//     let bonus = 0
//     array2.forEach((elem)=> {
//       if(elem%2 === 0){
//         evenSum += elem
//       } else{
//         oddSum +=elem
//       }
//       if(elem>20){
//         bonus = 1
//       }
//     })
//       return array1.map((elem) => {
//         if (elem >= 10) return elem + evenSum + bonus;
        
//         if (elem <10) return elem + oddSum + bonus;
      
//       })
//   }
  
  // Uncomment these to check your work!
  // console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
  // console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  


//48.   //////////////////////////////////////loops-range///////////////////////////////////////////
// Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr.
//  The value returned should be an array with the low, high, and range.


// function getTheRange(arr){

//   }
  
//   // Uncomment these to check your work!
//   console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]