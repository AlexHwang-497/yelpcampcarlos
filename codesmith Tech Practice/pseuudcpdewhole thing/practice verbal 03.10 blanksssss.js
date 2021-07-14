//16.///////////// //////////////////////////////////////////////////////////////////Challenge: multiMap
// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks.
//  multiMap will return an object whose keys match the elements in the array of values. 
//  The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// ADD CODE HERE
// function multiMap(array,callbacks){

//   }




// // //  // Uncomment these to check your work!
//   function uppercaser(str) { return str.toUpperCase(); }
//   function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
//   function repeater(str) { return str + str; }
//   const items = ['catfood', 'glue', 'beer'];
//   const functions = [uppercaser, capitalize, repeater];
//   console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }



///           31.    //////////////////////////////////////////////// Challenge: intersection/////////////////////////////////////**************focus on this  */
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

// //ADD CODE HERE

// //intiate function with parameters or argument of arrays which consist of the the arrays 
// function intersection(arrays){


// }


// //Do the same problem above but with a loop? 
// // // //ADD CODE HERE
// function intersection(arrays){

// }

// // // //   // Uncomment these to check your work!
//   const arr1 = [5, 10, 15, 20];
//   const arr2 = [15, 88, 1, 5, 7];
//   const arr3 = [1, 10, 15, 5, 20];
//   console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


//27. ////////////////////////////////// ////////////////////////////////// Challenge: union//////********focus on this  */
// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. 
// If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 
// BONUS - Use reduce!
// // // ADD CODE HERE

// //using arrays
// function union(arrays){

// }


// using for each to solve
// function union(arrays){

// }


  // Uncomment these to check your work!
  // const arr1 = [5, 10, 15];
  // const arr2 = [15, 88, 1, 5, 7];
  // const arr3 = [100, 15, 10, 1, 5];
  // console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

  
//23.  //////////////////////////////////////////////////////////////////////////////////// CHALLENGE 12
// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. 
// When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
// When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) 
// will be replaced with their corresponding second strings (of those saved pairs).

// function censor() {

// }

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// 11.  /////////////////////////////////////////////////////// CHALLENGE 5
// Write a function after that takes the number of times the callback needs to be called before being executed as 
// the first parameter and the callback as the second parameter.


// function after(count, func) {

// }

// // /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed



/////////////////////////////////////////Challenge: saveOutput////////////////////////////////////////////////////////////////////////
// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
//  saveOutput will then return a function that behaves exactly like the passed-in function,
//  except for when the password string is passed in as an argument. 
// When this happens, the returned function will return an object with all previously passed-in arguments as keys, 
// and the corresponding outputs as values
// // ADD CODE HERE
// function saveOutput(func,str){

// }


// // // Uncomment these to check your work!
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // should log: 4
// console.log(multBy2AndLog(9)); // should log: 18
// console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

//17.///////////////////////////////////////////////////////////////////////////////////////// // CHALLENGE 9
// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
// When first invoked, the returned function will return the first element of the array. When invoked a second time, 
// the returned function will return the second element of the array, and so forth. After returning the last element of the array, 
// the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

// function cycleIterator(array) {

// }

// // /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

//6.  //////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
///////////////////////////////////example//////////////////////////////////////////
// Input: {Number} num - number whose factorial is sought
// Output: {Number}
///////////////////////////////////example//////////////////////////////////////////
// add code here////
// function factorial(num, product=1){


// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1


//2.  ////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// For example, if the input is 'g', then the output should be 'ggggg'.
//////////////////////////////example////////////////////////////
// Input: {String} char
// Output: {String}
////////////////////////////example///////////////////////////////

// console.log('Hello, world!');
// add code here////
// function repeater(char, num=0, output =""){


// }

// // // To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g'));
// console.log(repeater('j'));


//9.                      //////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
// Get the length of an array using recursion without accessing its length property.
// ///////////////////////////////////example//////////////////////////////////////////
// Input: {Array} array - array whose length is sought
// Output: {Number}
// ///////////////////////////////////example//////////////////////////////////////////
// // add code here////
// function getLength(arr,length=0){

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0



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

// }
// // To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
//  function add7(num) { return num + 7; }
//  function modulo4(num) { return num % 4; }
//  function subtract10(num) { return num - 10; }
//  const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
//  console.log(flow(2, arrayOfFunctions)); // -> -7




 //7.  ///////////////////////////////////////////////////////////////////////////////////////////// Challenge: countBy
// Create a function countBy that accepts an array and a callback, and returns an object. 
// // countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
// // The value associated with each key will be the number of times that particular return value was returned.

// // ADD CODE HERE
// function countBy(arr, fn) {

// }
  
// //   // Uncomment these to check your work!
//   function evenOdd(n) {
//     if (n % 2 === 0) return 'even';
//     else return 'odd';
//   }
//   const nums = [1, 2, 3, 4, 5];
//   console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }


//4.  ////////////////////////////////////////////////////////////// Challenge: groupBy
// Create a function groupBy that accepts an array and a callback, and returns an object. 
// groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
// The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

// // // // ADD CODE HERE
// function groupBy(array, callback){

// }


//   // Uncomment these to check your work!
//    const decimals = [1.3, 2.1, 2.4];
//    const floored = function(num) { return Math.floor(num); };
//    console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


//1 ///////////////////////////////////////////////// Challenge: goodKeys
// // Create a function goodKeys that accepts an object and a callback. The callback will return either true or false.
// //  goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return 
// //  an array consisting only the keys whose associated values yielded a true return value from the callback.

//  function goodKeys(obj, callback) {


// }
// //   // Uncomment these to check your work!
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']



// function once(func) {

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



// 22.  ////////////////////////////////////////////////////////////////// Challenge: objOfMatches ******tehre are a lot of examples.  study this.  
// Construct a function objOfMatches that accepts two arrays and a callback. 
// objOfMatches will build an object and return it.  To build the object, objOfMatches will test each element of the first array using the callback to see 
// if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object,
//  and the element from the second array becomes the corresponding value.

//create a loop with i and j
// // ADD CODE HERE
// function objOfMatches(array1, array2, callback) {


// }




// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }





//46.   //////////////////////////////////////disemvowle///////////////////////////////////////////
// Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

// function disemvowel(string) {

// }
  
//   // Uncomment these to check your work!
//   console.log(disemvowel('CodeSmith')); // => 'CdSmth'
//   console.log(disemvowel('BANANA')); // => 'BNN'
//   console.log(disemvowel('hello world')); // => 'hll wrld'



  //47.   //////////////////////////////////////loops-multiple conditions///////////////////////////////////////////
// Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
// Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

// BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.

// function addingAllTheWeirdStuff(array1, array2){

//   }
  
//   // Uncomment these to check your work!
//   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
//   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]