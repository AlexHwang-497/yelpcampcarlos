//1.  ////////////////////  ////////////////////////////////////////////////////// CHALLENGE 19

// Inspect the commented out test cases carefully if you need help to understand these instructions.

// Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), 
// and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
// On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

// On the SECOND invocation of the PLAYER function, it will return either:

// the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
// the string 'bust' if that sum is over 21.

// If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

// the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
// the string 'bust' if the new sum is over 21.

// And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
// You may assume that the given array is long enough to give a 'bust' before running out of numbers.

// BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.


  // function blackjack(array) {
  // 
  // }
  
  // /*** Uncomment these to check your work! ***/
  
  // /*** DEALER ***/
  // write the function for the array[2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

  
  // /*** PLAYER 1 ***/
  //  (4, 5);
  // // => should log 9
  // // => should log 11
  // // => should log 17
  // // => should log 18
  // // => should log 'bust'
  // // => should log 'you are done!'
  // // => should log 'you are done!'
  
  // /*** BELOW LINES ARE FOR THE BONUS ***/
  
  // /*** PLAYER 2 ***/
  //  (2, 2);
  // // => should log 4
  // // => should log 15
  // // => should log 19
  // // => should log 'bust'
  // // => should log 'you are done!
  // // => should log 'you are done!
  
  // /*** PLAYER 3 ***/
  // (3, 7);
  //  // => should log 10
  //  // => should log 13
  //  // => should log 'bust'
  //  // => should log 'you are done!
  //  // => should log 'you are done!




// //2.  ///////////////////////////////////////////////////Challenge 5
// // Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
// // const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
// // const arr = ["first","second","third"];
// // pathFinder(obj,arr);   //-> "finish"



// function pathFinder(obj, arr, index=0) {

// }

// // const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// // const arr = ["first", "second", "third"];
// // console.log(pathFinder(obj, arr));   //-> "finish"




// //3.     /////////////////////////////////////////////////////////////////movie selector/////////////////////////////////////////////////////
// // Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). 
// // Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. 
// // The titles should be all uppercase strings.

// const movieSelector = (moviesArr) => {
  
// }

// // const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// // console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]





// //4.  ////////////////////////////////////////////////////////////////// //CHALLENGE 18

// // Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). 
// // The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). 
// // Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space).
// //  However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space).
// //  If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.

// function makeHistory(limit) {
  
  
// }

// // /*** Uncomment these to check your work! ***/

// // write the callback function w/ a limit of 2

// // // => should log 'jump done'
// //  // => should log 'jump undone'
// // // => should log 'walk done'
// // // => should log 'code done'
// // // => should log 'pose done'
// //  // => should log 'pose undone'
// //  // => should log 'code undone'
// //  // => should log 'nothing to undo'


// //5.  /////////////////////////////////////arrayChunking//////////////////////////////////////////////////////////////////////////////////
// // --- Directions
// // Given an array and chunk size, divide the array into many subarrays
// // where each subarray is of length size
// // --- Examples
// // chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// // chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// // chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// // chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// // chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// ////////////////solution using loop
// function chunk(array, size) {


//   ///////alternate solution using slice method////////////
  
//   }
  
  
//   // console.log(chunk([1, 2, 3, 4], 2)) //--> [[ 1, 2], [3, 4]] 
//   // console.log(chunk([1, 2, 3, 4, 5], 2))// --> [[ 1, 2], [3, 4], [5]])
//   // console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]])
//   // console.log(chunk([1, 2, 3, 4, 5], 4))// --> [[ 1, 2, 3, 4], [5]])
//   // console.log(chunk([1, 2, 3, 4, 5], 10))// --> [[ 1, 2, 3, 4, 5]])
  


            
// //6.  //////////////////////////////////////////////////Challenge 6
// // Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.

// function flattenRecursively(arr,result=[]) {
  
// }
// // console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// // console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


// //7.  //////////////////////////////////////////////////////////////////////Challenge 9
//     //   Given a collection of distinct integers, write a function getPermutations to return all possible permutations.
//     //   Input:[1, 2, 3]
//     //   Output:[
//     //     [1,2,3],
//     //     [1,3,2],
//     //     [2,1,3],
//     //     [2,3,1],
//     //     [3,1,2],
//     //     [3,2,1]
//     //   ]




//     function getPermutations(nums) {

//     }
    
//     // console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
//     // console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]



// //8. ////////////////////////////////////////////////////////////////// // CHALLENGE 16
// // Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). 
// // When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). 
// // When the returned function is invoked with no arguments, the current average is outputted.
// //  If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.


// // // function average() {
  

  


// // // /*** Uncomment these to check your work! ***/
// // /////////////////write the correct console logs

// // write the callback function

//  // => should log 0
//  // => should log 4
//  // => should log 6
// // => should log 6
//  // => should log 8
// // => should log 8






            
// //9.  ////////////////////////////////////// Challenge 4
// // Write a recursive function isPrime that determines if a number is prime and returns true if it is.

// function isPrime(num,numBelow=num) {


// }

// // console.log(isPrime(1)); //-> false
// // console.log(isPrime(2)); //-> true
// // console.log(isPrime(3)); //-> true
// // console.log(isPrime(4)); //-> false



//  //10.   //////////////////////////////////////////////////////////////////////////////////////


//  function poyoyotion(str){


// };
// // console.log(poyoyotion('432A452B2')) ///4334521
// // console.log(poyoyotion('7545B4B1')) // 754530



// //11.  ///////////////////////////////////////////// // CHALLENGE 11
// // Create a function dateStamp that accepts a function and returns a function. 
// // The returned function will accept however many arguments the passed-in function accepts, 
// // and return an object with a date key that contains a timestamp with the time of invocation, 
// // and an output key that contains the result from invoking the passed-in function.
// //  HINT: You may need to research how to access information on Date objects.

// // function dateStamp(func) {


// // }

// // // /*** Uncomment these to check your work! ***/
// // assign the function aka  ///dateStamp(n => n * 2);

//  // => should log { date: (today's date), output: 8 }
//  // => should log { date: (today's date), output: 12 }


// //12. ////////////////////////////////////////////// // CHALLENGE 12
// // // Create a function censor that accepts no arguments. 
// // censor will return a function that will accept either two strings, or one string. 
// // // When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
// // When one string is given, the returned function will return the same string,
// //  except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).


// // function censor() {

// // }

// // // /*** Uncomment these to check your work! ***/
// // // write the necessary function for the return value


// // // ('dogs', 'cats');
// // // ('quick', 'slow');
// // //  // => should log 'The slow, brown fox jumps over the lazy cats.'


// //13.  ////////////////////////////////////////////////////////////////////nestedEvenSum/////////////////////////////////////////////////////////

// // return the sum of all even numbers in an object which may contain nested objects;

// function nestedEvenSum (obj, sum = 0) {

// }
  
  
//   var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }
  
//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };
  
//   // console.log(nestedEvenSum(obj1)); // 6
//   // console.log(nestedEvenSum(obj2)); // 10

// //14.  //////////////////////////////////////////////prime/////////////////////////////////////////////////

// // function isPrime(num,div = 3) {
// //   debugger

// // //num divide it by an incrementing number
// // //base: 
// //   if(num===1){return false}
// //   if(num<3){
// //     return true}
 
  
// //   if((num/2)<div){return true}
// //   else if(num%div===0){
// //     return false
// //   } else{
// //     return isPrime(num,div+1)
// //   }
  
//   /// if at any time it is divisible by that incrementing number, return false
//   //// if the incrementing number is == half of num, return true
//   /////if there is a remainder, return isPrime and incrementing the increment number
  
  
  
//   // //   base: wehre if element is less then 2 or doesn't have a remainder then return false
// //       if(num === 2) return true;
// //       if(num < 2 || num % 2 === 0)  return false;
// //       // if(div * div > num) return true;
// //       if(num % div === 0) return false;
// //       return isPrime(num, div + 1);
// // }

// // console.log(isPrime(100))
// // console.log(isPrime(17))

// // console.log(isPrime(1)); //-> false
// // console.log(isPrime(2)); //-> true
// // console.log(isPrime(3)); //-> true
// // console.log(isPrime(4)); //-> false




// //15.  ////////////////////////////////////////// // CHALLENGE 13
// // There's no such thing as private properties on a JavaScript object! But, maybe there are? 
// // Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. 
// // getSecret() which returns the secret setSecret() which sets the secret

// // function createSecretHolder(secret) {

// // }

// // /*** Uncomment these to check your work! ***/
// // // write the function///// start with secret as 5
// // //  // => returns 5
// // //  // => shoule return blank
// // //  // => returns 2


// //16.  //////////////////////////////////////// // CHALLENGE 14
// // Write a function, callTimes, that returns a new function. The new function should return the number of times it???s been called.

// // // function callTimes() {
  

  
// // // }

// // // /*** Uncomment these to check your work! ***/
// //assign the functinos ;


// // => 1
//  // => 2
//  // => 1
//  // => 2






// //16. ////////////////////////////////////// Challenge: flow
// // Write a function that takes an array of functions and a number that will be piped through all those functions. 
// // The input number passes through the first function, whose output is passed as input to the second function, 
// // whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.
// // ///////////////////////////////////example//////////////////////////////////////////
// // Input 1: {Number} input - number flowing through all functions
// // Input 2: {Array} funcArray - array of functions to pass input through
// // Output: {Number} - final output of final function
// // ///////////////////////////////////example//////////////////////////////////////////
// // // add code here////
// // function flow(input, funcArray){


// // }
// // // To check if you've completed the challenge, uncomment this code!
// // create a function called multiplyBy2(num) 
// //  create a function called add7(num) 
// //  create a function called modulo4(num) 
// //  create a function called subtract10(num) 

// //  build the callback function 
// // ->should log  -7   //// use input of 2








// //17.   /////////////////////////////// Challenge 3
// // Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). 
// // The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.

// function palindrome(string) {

// }

// // console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// // console.log(palindrome("llama mall")); //-> true
// // console.log(palindrome("jmoney")); //-> false



// //18.  ///////////////////////////////////////////// // CHALLENGE 15
// // Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, 
// // and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), 
// // the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.

// // // function russianRoulette(num) {

// // // }

// // // /*** Uncomment these to check your work! ***/
// // assign the functions w/ 3 passed in the argumetn


//  // => should log 'click'
//  // => should log 'click'
//  // => should log 'bang'
//  // => should log 'reload to play again'
//  // => should log 'reload to play again'




// //19./////////////////////////////////////////////////////////////////////// // CHALLENGE 17
// // Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). 
// // The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array).
// //  Otherwise, the returned function should return false.

// // // function makeFuncTester(arrOfTests) {

// // // }

// // /*** Uncomment these to check your work! ***/
// // write the correct stuff
// ////////////////////////////create an array and create the follwing array pairs
// // const capLastTestCases = [];
// // (['hello', 'hellO']);
// // (['goodbye', 'goodbyE']);
// // (['howdy', 'howdY']);


// //write the callback function


// // const capLastAttempt1 = str => str.toUpperCase();
// // const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// // // => should log false
// // // => should log true


// //20.  ////////////////////////////////////////////////////////////////////capitalizeFirst/////////////////////////////////////////////////////////

// // given an array of String, capitlzie the first letter of each string in the array

// // function capitalizeFirst (array) {


// //   }
  
// // console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']



// //21  ////////////////////////////////////////////////////////////////////capitalize/////////////////////////////////////////////////////////
// // given an array of words, return an new array conating each word captialzied

// // function capitalizeFirst (array) {


// //   }
  
// //   let words = ['i', 'am', 'learning', 'recursion'];
// //   console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']



  
// //22.   //////////////////////////////////////disemvowle///////////////////////////////////////////
// // Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

//   function disemvowel(string) {
  
  
  
//   }
      
// // Uncomment these to check your work!
// // console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// // console.log(disemvowel('BANANA')); // => 'BNN'
// // console.log(disemvowel('hello world')); // => 'hll wrld'




//23.   /////////////// function groupBy(array, callback) {


// }

// // /*** Uncomment these to check your work! ***/
// // const decimals = [1.3, 2.1, 2.4];
// // const floored = function(num) { return Math.floor(num); };
// // console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// //23.  ////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
// // write a function called recursiveRange which accepts a number and up all the numbers from 0 to the number passed to the function

// // function recursiveRange(x){

// // }

// // console.log(recursiveRange(6)) // 21
// // console.log(recursiveRange(10)) // 55 




// //24.   //////////////////////////////////////////////////////////////////////reverse///////////////////////////////////////////////////////////////////
// // //write a function called reverse which accepts a string and returns a new string in reverse

// // function reverse(str){

// //   }
  
// //   console.log(reverse('awesome')) // 'emosewa'
// //   console.log(reverse('rithmschool')) // 'loohcsmhtir'




 

// //25.  ////////////////////////////////////////////////////////////////////someRecurseive/////////////////////////////////////////////////////////

// //write a function which accepts an array and a clalback.  
// // the function returns true if a single value in teh array returns true when passed to the callback
// // otherwise it is false

// // function someRecursive(array, callback){

// //   }


// //   // SAMPLE INPUT / OUTPUT
// // const isOdd = val => val % 2 !== 0;

// // console.log(someRecursive([1,2,3,4], isOdd)) // true
// // console.log(someRecursive([4,6,8,9], isOdd)) // true
// // console.log(someRecursive([4,6,8], isOdd)) // false
// // console.log(someRecursive([4,6,8], val => val > 10)); // false








// //26.  /////////////////////////////////////////////////////// // CHALLENGE 9
// // function cycleIterator(array) {


// // }

// // // /*** Uncomment these to check your work! ***/
// // //  write array for ['Fri', 'Sat', 'Sun'];


// // write clalback equqation

// // // ; // => should log 'Fri'
// // // ; // => should log 'Sat'
// // // ; // => should log 'Sun'
// // // ; // => should log 'Fri'


// //27.   ////////////////////////////////////////////////////// // CHALLENGE 10
// // function defineFirstArg(func, arg) {

// //   }
  
  

// // // /*** Uncomment these to check your work! ***/
// // // write a function for  subtract 

// // //wrate the callback function 

// // //  => should log 15




// ///28.    //////////////////////////////////////////////// Challenge: intersection/////////////////////////////////////**************focus on this  */
// // Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

// // //ADD CODE HERE
// // //////////////////answer with reduce




// // //Do the same problem above but with a loop? 



// // // // // //   // Uncomment these to check your work!
// //   const arr1 = [5, 10, 15, 20];
// //   const arr2 = [15, 88, 1, 5, 7];
// //   const arr3 = [1, 10, 15, 5, 20];
// //    // should log: [5, 15]


// //29. ////////////////////////////////// ////////////////////////////////// Challenge: union//////********focus on this  */
// // Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. 
// // If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 
// // BONUS - Use reduce!
// // // // ADD CODE HERE

// ////////////// //using reduce



// /////////use for each or regular loop to solve
  
  
//     // Uncomment these to check your work!
//     // const arr1 = [5, 10, 15];
//     // const arr2 = [15, 88, 1, 5, 7];
//     // const arr3 = [100, 15, 10, 1, 5];
//      // should log: [5, 10, 15, 88, 1, 7, 100]



// //30. ////////////////////////////////////////////Challenge 1
// // Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). 
// // This function should return a new array containing *only* the functions from the original array that, when invoked with input, return the value output. Use reduce!


// const functionValidator = (funcArr, input, output) => {
  
//   }
  
//   // write a function of  addFive 
//   // write a function of  multiplyByTwo ;
//   // write a function  subtractOne 
  
  
//   //////////////////////////////////////////// // should log [num => num + 5, num => num * 2]   ////input should be 5 and output should be 10
  
  
// //31.  ////////////////////////////////////////////////////////////////////////////////// Challenge 2
// //   Create a function allClear that accepts an array of evaluator functions (each returning a boolean value), and a single value. 
// // Using reduce, return a single boolean value indicating whether the value "passes" every single one of the evaluator functions (i.e. returns true).

//   const allClear = (funcArr, value) => {
    
//   //   ///////solve using loop solution

  
//   // ///////////////solve using reduce
  
    
  
//   }
  
//   // write a function isOdd 
//   // wrtie a function that determines if number  isPositive 
//   // write a function multipleOfFive 

//   // write the callback function
  
  
  
//   // console.log(allClear(numFnArr, 25)) // should log true 
//   // console.log(allClear(numFnArr, -25)) // should log false
   
  
// //32.  //////////////////////////////////////////////////////////////////////////////////// Challenge 3
// //   Write a function numSelectString that accepts an array of numbers and returns a string.
// //  This function should use filter, sort, and reduce to return a string containing only the odd numbers from the array, separated by commas, in ascending order.

//   const numSelectString = (numArr) => {

//     // //////////////////use array methods

  
//   ///////////////////////usse reduce to solve
//   }

//   // const nums = [17, 34, 3, 12]
//   // should log "3, 17"
  






// //33.  ///////////////////////////////////////////////////////////////////////// //Challenge 7

// // Write a recursive function findInOrderedSet that determines if a number is in an ordered array. 
// // Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.


// function findInOrderedSet(arr, target) {

//   }
  
//   //write the callback variable// [1, 4, 6, 7, 9, 17, 45];

//   // console.log(findInOrderedSet(nums, 4));  //-> true
//   // console.log(findInOrderedSet(nums, 2));  //-> false
//   // console.log(findInOrderedSet(nums, 1));  //-> true
//   // console.log(findInOrderedSet(nums, 45));  //-> true
//   // console.log(findInOrderedSet(nums, 3));  //-> false
      
// //34.  //////////////////////////////////////////////////////////////////////////////////////////////Challenge 8
// //There are n stairs. A person standing at the bottom wants to reach the top. 
// // The person can climb either 1 or 2 stairs at a time.
// //  Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See
// //  test cases for examples.

//       function countWaysToReachNthStair(n) {
      
//       }
      
//       // console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
//       // console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
//       // console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
      
      

      
      
// //35.  ////////////////////////////////////////////////Challenge 10/////////////////////////////////////////////////////////////////////////
//     //   Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.


//       function getRangeBetween(beg, end) {
      
        
//       }

//       // console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
//       // console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]


// //36.  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // --- Directions
// // Given a string, return a new string with the reversed
// // order of characters
// // --- Examples
//   // reverse('apple') === 'leppa'
//   // reverse('hello') === 'olleh'
//   // reverse('Greetings!') === '!sgniteerG'


//   ////////////////solve using reverse


// //////////////////////////////solve using a looop///////////////

// // ////////////////////////////use an array function aka reduce///////////////////////////

// ///////////////////////do recrusion/////////////////////////////


// // console.log(reverse('apple'))
// // console.log(reverse('hello'))
// // console.log(reverse('Greetings!'))



// //37.  ////////////////////////////////////////////////////////////////////////////////////////palindrome//////////////////////////////////////////////////////////////
  
// // --- Directions
// // Given a string, return true if the string is a palindrome
// // or false if it is not.  Palindromes are strings that
// // form the same word if it is reversed. *Do* include spaces
// // and punctuation in determining if the string is a palindrome.
// // --- Examples:
// //   palindrome("abba") === true
// //   palindrome("abcdefg") === false

// function palindrome(str) {


//   // ////////////////alternate solution w/every?/////////////////////


// }
  


//   // console.log(palindrome("abba") === true)
//   // console.log(palindrome("abcdefg") === false)
  
  
// //38.   ////////////////////////////////////////////////////////reverseInt/////////////////////////////////////////////////////////////////////////
// // --- Directions
// // Given an integer, return an integer that is the reverse
// // ordering of numbers.
// // --- Examples
// //   reverseInt(15) === 51
// //   reverseInt(981) === 189
// //   reverseInt(500) === 5
// //   reverseInt(-15) === -51
// //   reverseInt(-90) === -9
  
//   function reverseInt(n) {
  
  
//   }
//   // console.log(reverseInt(15)===51)
//   // console.log(reverseInt(981) === 189)
//   // console.log(reverseInt(500) === 5)
//   // console.log(reverseInt(-15) === -51)
//   // console.log(reverseInt(-90) === -9)
  
  
  
  
// //39.   //////////////////////////////////////////////////////maxChar///////////////////////////////////////////////////////////////////////////////////
// // --- Directions
// // Given a string, return the character that is most
// // commonly used in the string.
// // // --- Examples
// // // maxChar("abcccccccd") === "c"
// // // maxChar("apple 1231111") === "1"

// // function maxChar(str){


// // }

// // console.log(maxChar("abcccccccd") )
// // console.log(maxChar("apple 1231111"))

// //40.  ////////////////////////////////////////fizzBuzz////////////////////////////////////////////////////////////////////////////////////////////
// // --- Directions
// // Write a program that console logs the numbers
// // from 1 to n. But for multiples of three print
// // ???fizz??? instead of the number and for the multiples
// // of five print ???buzz???. For numbers which are multiples
// // of both three and five print ???fizzbuzz???.
// // --- Example
// //   fizzBuzz(5);
// //   1
// //   2
// //   fizz
// //   4
// //   buzz

// // function fizzBuzz(n) {



// // }
// /////////////////////test cases//////////////////////////////////
// // console.log('n=1:'+fizzBuzz(1));
// // console.log('n=2:'+fizzBuzz(2));
// // console.log('n=3:'+fizzBuzz(3));
// // console.log('n=4:'+fizzBuzz(4));
// // console.log('n=5:'+fizzBuzz(5));
// // console.log('n=6:'+fizzBuzz(6));
// // console.log(fizzBuzz(30));
  
  



  
// //41.  ///////////////////////////////////////////////////////////////// Challenge 19
// // Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. 
// // rating should return the percentage of functions from the array that return true when the value is used as input.

// function rating(arrOfFuncs, value) {
 
// }
    
// /*** Uncomment these to check your work! ***/
// // write a function isEven ;
// // write a function greaterThanFour ;
// // write a function isSquare = //////////aka sqrt;
// // write a function hasSix = ////has contains a 6;


//  // should log: 100  use 64
//  // should log: 75  use 66
//  // should log: 75 use 5
        
        
// //42.  ////////////////////////////////////////////////////////////////////// Challenge 20
// // Create a function pipe that accepts an array (of functions) and a value. 
// // pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, 
// // and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. 
// // pipe should return the final output.


// function pipe(arrOfFuncs, value) {
// // //   //////////solution 1 using for...of


// //   /////////////solution 2 using reduce method


// ///////////   solutinon 3    using for each method


// }

// // /*** Uncomment these to check your work! ***/
// //write a function called capitalize 
// //write a function called addLowerCase ;
// //write a function called repeat =; //////aka repeat the string
// //
// // // should log: 'CATcatCATcat'
        
        
// //43.//////////////////////////////////////////////////////////// Challenge 21/////////////////////
// // Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). 
// // highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, 
// // when the subject is given as input.


// function highestFunc(objOfFuncs, subject) {


  
// }
        
// // /*** Uncomment these to check your work! ***/
// // const groupOfFuncs = {};
// // write a method inside the object called double 
// // write a method inside the object called addTen 
// // write a method inside the object called inverse /// inverse in this case is -1
// // / should log: 'addTen'
// // // should log: 'double'
// //  // should log: 'inverse'
        
        
// //43.////////////// //////////////////////////////Challenge 22///////////////////////////////
// // Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. 
// // combineOperations should pass the starting value into the first function in the array. 
// // combineOperations should pass the value returned by the first function into the second function, 
// // and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.


// function combineOperations(startVal, arrOfFuncs) {
// ///////use reduce to solve 

// ////////////////use for each to solve
// //

// // use regular loop to solve




// }

// // wrtie a function called  add100(num) {
// //   
// // }

// //  wrtie a function called  divByFive(num) {
// //   / }

// //  wrtie a function called  multiplyByThree(num) {
// //   / }

// //  wrtie a function called  multiplyFive(num) {
// //   / }

// //  wrtie a function called  addTen(num) {
// //   // }
        
// // // /*** Uncomment these to check your work! ***/
// //  // Shoculd output 60 --> order should be add100, divByFive, multiplyByThree w/startVal = 0
// //  // Should output 10 -->order should be divByFive, multiplyFive, addTen w/startVal = 0

        
// //44./////////////////////////////////////////////// Challenge 23
// // Define a function myFunc that takes an array and a callback. 
// // myFunc should pass each element from the array (in order) into the callback. 
// // If the callback returns true, myFunc should return the index of the current element. 
// // If the callback never returns true, myFunc should return -1;

// function myFunc(array, callback) {


// }

// // const numbers = [2, 2, 77, 64, 10, 8, 12];
// // const evens = [2, 4, 6, 8, 10, 12, 64];



// // /*** Uncomment these to check your work! ***/
//  // Output should be 1
//  // Output should be -1


// //45.   /////////// Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.


// function countdown(n) {


// }

// // To check if you've completed it, uncomment these console.logs!
// // countdown(5);
// // countdown(10);
            
            
// //46.  ///////////// Challenge 2
// // Write a recursive function sum that calculates the sum of an array of integers.
// function sum(array, output = 0) {

// }

// // uncomment these to check your work
// // console.log(sum([1,1,1])); // -> returns 3
// // console.log(sum([1,2,3,4,5,6])); // -> returns 21

            

// //47.  /////////////////////////////////////////////////////////anagrams///////////////////////////////////////////////////////////////////////////////////////
  
//   // --- Directions
//   // Check to see if two provided strings are anagrams of eachother.
//   // One string is an anagram of another if it uses the same characters
//   // in the same quantity. Only consider characters, not spaces
//   // or punctuation.  Consider capital letters to be the same as lower case
//   // --- Examples
//   //   anagrams('rail safety', 'fairy tales') --> True
//   //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   //   anagrams('Hi there', 'Bye there') --> False
  
  
//   // ///////////////soultion 1=== use helper function to build////////////
//   // function anagrams(stringA, stringB) {
  
//   // }
  
//   // console.log(anagrams('rail safety', 'fairy tales'))///=== True)
//   // console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))// === True)
//   // console.log(anagrams('Hi there', 'Bye there'))// === False)
//   // console.log()
  
//   //48.   ////////////////////////////////////////////////////////////sentenceCapitalization///////////////////////////////////////////////////////////////////
  
//   // --- Directions
//   // Write a function that accepts a string.  The function should
//   // capitalize the first letter of each word in the string then
//   // return the capitalized string.
//   // --- Examples
//   //   capitalize('a short sentence') --> 'A Short Sentence'
//   //   capitalize('a lazy fox') --> 'A Lazy Fox'
//   //   capitalize('look, it is working!') --> 'Look, It Is Working!'
  
  
  
//   /////////solution 1////////////////
//   // function capitalize(str) {
 
//   // }
  
  
//   // console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
//   // console.log(capitalize('a lazy fox')) //-> 'A Lazy Fox')
//   // console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'
    


//   //49.  /////////////////////////////////////////////////////////////////////////vowels////////////////////////////////////////////

// // --- Directions
// // Write a function that returns the number of vowels
// // used in a string.  Vowels are the characters 'a', 'e'
// // 'i', 'o', and 'u'.
// // --- Examples
// //   vowels('Hi There!') --> 3
// //   vowels('Why do you ask?') --> 4
// //   vowels('Why?') --> 0
// ///////////////////////solution/////////////////////
// // function vowels(str) {


// // }


// // console.log(vowels('Hi There!')) //--> 3)
// // console.log(vowels('Why do you ask?'))// --> 4)
// // console.log(vowels('Why?')) //--> 0)


// //50.   ////////////////////////////////////////////////////////////////////////////////////fibonacci series/////////////////////////////

// // --- Directions
// // Print out the n-th entry in the fibonacci series.
// // The fibonacci series is an ordering of numbers where
// // each number is the sum of the preceeding two.
// // For example, the sequence
// //  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// // forms the first ten entries of the fibonacci series.
// // Example:
// //   fib(4) === 3


// ////////////////////solution 1///////////
// // function fib(n) {


// // console.log(fib(4)===3)



// //51./////////////////////////////////Create a function 'multiplyNumbers' that takes a number as an argument. 'multiplyNumbers' 
// // should multiply all the numbers from 1 to the number you passed to the function.  
// // For example, if the input is 4 then your function should return 24 because 1 * 2 * 3 * 4 = 24.
// // function multiplyNumbers(num){


// //   }
  
// //   console.log(multiplyNumbers(3))


// //52. / ////////////////////////////////////////////////////////////////////////////////////factor chain
// // A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// // [3, 6, 12, 36]

// // 3 is a factor of 6
// // 6 is a factor of 12
// // 12 is a factor of 36
// // Create a function that determines whether or not an array is a factor chain.

// // Examples
// // factorChain([1, 2, 4, 8, 16, 32]) ??? true

// // factorChain([1, 1, 1, 1, 1, 1]) ??? true

// // factorChain([2, 4, 6, 7, 12]) ??? false

// // factorChain([10, 1]) ??? false


// function factorChain(arr) {
//     // ////////////solution 1 / //// using loop
	


//     // //////////////////solution2  //// use reudce and every
    


//     // ////////////////////solution 3  //////////////use reduce
//     // })
// }

// // console.log(factorChain([1, 2, 4, 8, 16, 32])) //??? true

// // console.log(factorChain([1, 1, 1, 1, 1, 1])) //??? true

// // console.log(factorChain([2, 4, 6, 7, 12])) //??? false

// // console.log(factorChain([10, 1])) //??? false


// //53. //////////////////////////////////index multiplier

// // Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// // Examples
// // indexMultiplier([1, 2, 3, 4, 5]) ??? 40
// // // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// // indexMultiplier([-3, 0, 8, -6]) ??? -2
// // // (-3*0 + 0*1 + 8*2 + -6*3)

// function indexMultiplier(arr){
//     // ///////////////solution 1  ///////////use loop
    
// // //////////////solution 2 //////////use reduce
    



// // console.log(indexMultiplier([9, 3, 7, -7]), -4)
// // console.log(indexMultiplier([3, 8, 6, -4]), 8)
// // console.log(indexMultiplier([10, -9, -2, 0, 2]), -5)
// // console.log(indexMultiplier([4, 4, 2, 2, -4]), -2)
// // console.log(indexMultiplier([9, 4, 7, 5, -1, -3]), 14)
// // console.log(indexMultiplier([-9, 5, 9, 5, -7, 7]), 45)
// // console.log(indexMultiplier([-1, -2, 8, -5]), -1)
// // console.log(indexMultiplier([7, 10, -5, -4, 6, 2]), 22)
// // console.log(indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1]), 16)
// // console.log(indexMultiplier([-2, 5, -7, -23, 0, 14]), -8)
// // console.log(indexMultiplier([53, -43, 39, -2, -11, 3]), 0)
// // console.log(indexMultiplier([40, 32, -18, 48, -15]), 80)
// // console.log(indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34]), 170)
// // console.log(indexMultiplier([-21, 30, 20, 6, -16]), 24)
// // console.log(indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20]), -183)
// // console.log(indexMultiplier([]), 0)



// //54.   ////////////////////special arrays
// // An array is special if every even index contains an even number and every odd index 
// // contains an odd number. 
// // Create a function that returns true if an array is special, and false otherwise.

// // Examples
// // isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ??? true
// // // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// // isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ??? false
// // // Index 2 has an odd number 9.

// // isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ??? false
// // // Index 3 has an even number 8.


// function isSpecialArray(arr){
    

// }

// // console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true)
// // console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false)
// // console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false)
// // console.log(isSpecialArray([1, 1, 1, 2]), false)
// // console.log(isSpecialArray([2, 2, 2, 2]), false)
// // console.log(isSpecialArray([2, 1, 2, 1]), true)
// // console.log(isSpecialArray([4, 5, 6, 7]), true)
// // console.log(isSpecialArray([4, 5, 6, 7, 0, 5]), true)



// //55.     /////////////////////filter repeating hcaracter strings
// // Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// // Examples
// // identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
// // ??? ["aaaaaa", "d", "eeee"]

// // identicalFilter(["88", "999", "22", "545", "133"]) 
// // ??? ["88", "999", "22"]

// // identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
// // ??? []
// // Notes
// // A string with a single character is trivially counted as a string with repeating identical characters.
// // If there are no strings with repeating identical characters, return an empty array (see example #3).

// function identicalFilter(arr){
//     // /////////////////solution 1///////////////////
    
//     // //////////////////solution 2//////////////////////   use filter to solbe
    


// }




// // console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']))//,['aaaaaa', 'd', 'eeee'])

// // console.log(identicalFilter(['88', '999', '22', '545', '133'])) //['88', '999', '22'])

// // console.log(identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo'])) //[])

// // console.log(identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee'])) //['aa', 'bb', 'cc', 'dd', 'ee'])

// // console.log(identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee'])) //['eee'])

// // console.log(identicalFilter(['1', '2', '3'])) //['1', '2', '3'])

// //56.   ////////////////////////////////////////the reverser

// // The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

// // Examples
// // reverse("Hello World") ??? "DLROw OLLEh"

// // reverse("ReVeRsE") ??? "eSrEvEr"

// // reverse("Radar") ??? "RADAr"
// // Notes
// // There will be no punctuation in any of the test cases.

// function reversed(str){
//     // //////////////////solution 1
  


//     // //////////////solution 2   use map function for this 


// }

// // console.log(reversed("Hello World")) //, "DLROw OLLEh")
// // console.log(reversed("ReVeRsE")) //, "eSrEvEr")
// // console.log(reversed("")) //, "")
// // console.log(reversed("Radar")) //, "RADAr")


// //57.    /////////////////////////////////replace Vowel with another Character/////////////

// // Create a function that takes a string and replaces the vowels with another character.

// // a = 1
// // e = 2
// // i = 3
// // o = 4
// // u = 5
// // Examples
// // replaceVowel("karachi") ??? "k1r1ch3"
// // replaceVowel("chembur") ??? "ch2mb5r
// // replaceVowel("khandbari") ??? "kh1ndb1r3"
// function replaceVowel(word){

// // // ///////////////solution 1////////////////////  use loop



// }


// // console.log(replaceVowel("karachi"))//, "k1r1ch3")
// // console.log(replaceVowel("dang"))//, "d1ng")
// // console.log(replaceVowel("aen"))//, "12n")
// // console.log(replaceVowel("chembur"))//, "ch2mb5r")
// // console.log(replaceVowel("khandbari"))//, "kh1ndb1r3")
// // console.log(replaceVowel("thamel"))//, "th1m2l")


// //58.    ///////////////////////////multiplying numbers in a string////////////////

// // Given a string of numbers separated by a comma and space, return the product of the numbers.

// // Examples
// // multiplyNums("2, 3") ??? 6

// // multiplyNums("1, 2, 3, 4") ??? 24

// // multiplyNums("54, 75, 453, 0") ??? 0

// // multiplyNums("10, -2") ??? -20

// function multiplyNums(str){
//     // ////////////solutin 1  ///////////use reduce
    

//     // //////////////solution 2   use map and reduce




//     // ///////////solution 3///////////////  use loop
    

// }



// // console.log(multiplyNums("2, 3"), 6)
// // console.log(multiplyNums("1, 2, 3, 4"), 24)
// // console.log(multiplyNums("54, 75, 453, 0"), 0)
// // console.log(multiplyNums("10, -2"), -20)
// // console.log(multiplyNums("-26, 1, -27, -12, -19"), 160056)
// // console.log(multiplyNums("16, 8"), 128)
// // console.log(multiplyNums("-27, -14, -28, 13, -17"), 2339064)
// // console.log(multiplyNums("-19, -22, -14, 20, -15, -24, -17, 19, 30, -10"), -4082823360000)
// // console.log(multiplyNums("1, 13, 0, -11, 26, -17, 21"), 0)
// // console.log(multiplyNums("-25, -19, 7, -26, -26"), 2247700)
// // console.log(multiplyNums("-4, -16, -22, -3, -6"), -25344)
// // console.log(multiplyNums("-22, 11, 19, 5, 19, -9, -13, 20, -29"), 29641926600)
// // console.log(multiplyNums("-25, 22"), -550)
// // console.log(multiplyNums("-25"), -25)


// //59.   //////////////////Censor words longer than 4 characters
// // Create a function that takes a string and censors words over four characters with *.

// // Examples
// // censor("The code is fourty") ??? "The code is ******"

// // censor("Two plus three is five") ??? "Two plus ***** is five"

// // censor("aaaa aaaaa 1234 12345") ??? "aaaa ***** 1234 *****"
// // Notes
// // Don't censor words with exactly four characters.
// // If all words have four characters or less, return the original string.
// // The amount of * is the same as the length of the word.

// function censor(str) {
//     // ///////////////solution 1   //////////////use loop
    

//     /////////////// solution 2  ////////////use map to solve
    
	
// }

// // console.log(censor("The code is fourty"))//,"The code is ******", "Example #1")
// // console.log(censor("Two plus three is five"))//,"Two plus ***** is five", "Example #2")
// // console.log(censor("aaaa aaaaa 1234 12345"))//,"aaaa ***** 1234 *****", "Example #3")
// // console.log(censor("abcdefghijklmnop"))//,"****************")
// // console.log(censor("a"))//,"a")

// //60.    ///////////////////////is the word an isogram?

// // Is the Word an Isogram?
// // An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// // Examples
// // isIsogram("Algorism") ??? true

// // isIsogram("PasSword") ??? false
// // // Not case sensitive.

// // isIsogram("Consecutive") ??? false
// // Notes
// // Ignore letter case (should not be case sensitive).
// // All test cases contain valid one word strings.


// function isIsogram(str){

//     ////////////////////////// solution 1

// // /////////////////solution 2  ////////////use filter to solve



// ////////////////////////////////////////// solution 3   use reduce to solve




// }


// // console.log(isIsogram("Algorism"))//, true)
// // console.log(isIsogram("PasSword"))//, false)
// // console.log(isIsogram("Dermatoglyphics"))//, true)
// // console.log(isIsogram("Cat"))//, true)
// // console.log(isIsogram("Filmography"))//, true)
// // console.log(isIsogram("Consecutive"))//, false)
// // console.log(isIsogram("Bankruptcies"))//, true)
// // console.log(isIsogram("Unforgivable"))//, true)
// // console.log(isIsogram("Unpredictably"))//, true)
// // console.log(isIsogram("Moose"))//, false)





  
  
  
// //61.   //////////////////////////////////////loops-multiple conditions///////////////////////////////////////////
// // Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
// // Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

// // BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.

// // function addingAllTheWeirdStuff(array1, array2){

// //   }
  
// //   // Uncomment these to check your work!
// //   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
// //   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]


// //   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

// //62.    ///////////////////////////
// function commutative(func1, func2, value) {


// }

// // /*** Uncomment these to check your work! ***/
// // write a function called multBy3;
// // write a function called divBy4 
// // write a function called subtract5 
// // console.log(commutative(multBy3, divBy4, 11)); // should log: true
// // console.log(commutative(multBy3, subtract5, 10)); // should log: false
// // console.log(commutative(divBy4, subtract5, 48)); // should log: false
 
// //63.    ///////////////////// Challenge 11
// function objectFilter(obj, callback) {

// }

// // const cities = {
// // London: 'LONDON',
// // LA: 'Los Angeles',
// // Paris: 'PARIS',
// // };
// // console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}f





// //64.      // CHALLENGE 6///////////////////////////////////////
// // function delay(func, wait) {

// // }


// // 65.   ////////////////////////// CHALLENGE 7
// // function rollCall(names) {


// // }

// // // /*** Uncomment these to check your work! ***/
// // // write teh function for (['Victoria', 'Juan', 'Ruth'])


// // //  // => should log 'Victoria'
// // //  // => should log 'Juan'
// // //  // => should log 'Ruth'
// // //  // => should log 'Everyone accounted for'


// //66.  ..................///////////////////// // CHALLENGE 8
// // function saveOutput(func, magicWord) {

// // }

// // // /*** Uncomment these to check your work! ***/
// // // write a function for  multiplyBy2 
// // // write the function for the callback  aka saveOutput(multiplyBy2, 'boo');


// // // ; // => should log 4
// // // ; // => should log 18
// // // ')); // => should log { 2: 4, 9: 18 }


// // // CHALLENGE 4
// // function once(func) {

// // }

// // // /*** Uncomment these to check your work! ***/
// // // write the callback function


// // //  // => should log 6   include 4,
// // //  // => should log 6   include  10, 
// // //  // => should log 6   include  9001


// // // CHALLENGE 5
// // function after(count, func) {

// // }

// // // /*** Uncomment these to check your work! ***/
// // // const called = function() { console.log('hello') };
// // // const afterCalled = after(3, called);
// // // // => nothing is printed
// // // // => nothing is printed
// // // // => 'hello' is printed




// /////////////////////////////////callbacks
// // Type JavaScript here and click "Run Code" or press Ctrl + s


    
    
//     // Challenge 12
// function majority(array, callback) {

// }

// // /*** Uncomment these to check your work! ***/
// // const isOdd = function(num) { return num % 2 === 1; };
// // console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// // console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
    
    
//     // Challenge 13
// function prioritize(array, callback) {

// }

// // /*** Uncomment these to check your work! ***/
//   // const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
//   // console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log: // ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
    
    
//     // Challenge 14
// function countBy(array, callback) {

// }

// // /*** Uncomment these to check your work! ***/
// // console.log(countBy([1, 2, 3, 4, 5], function(num) {
// // if (num % 2 === 0) return 'even';
// // else return 'odd';
// // })); // should log: { odd: 3, even: 2 }

    
//     // Challenge 15

    
    
//     // Challenge 16
// function goodKeys(obj, callback) {

// }

// // /*** Uncomment these to check your work! ***/
// // const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// // const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// // console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

    
//     // Challenge 17



// // Challenge 18
// function objFilter(obj, callback) {


// }

// // /*** Uncomment these to check your work! ***/
// // const startingObj = {};
// // write a an object that contains {6:3,2:1,12:4}
// // const half = n => n / 2;
// // console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }
    
    

    









// //////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// // For example, if the input is 'g', then the output should be 'ggggg'.
// //////////////////////////////example////////////////////////////
// // Input: {String} char
// // Output: {String}
// ////////////////////////////example///////////////////////////////

// // console.log('Hello, world!');
// // // add code here////
// // function repeater(char, num=0, output =""){

// // }

// // // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(repeater('g'));
// // console.log(repeater('j'));


// /////////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
// // Write a function that returns the factorial of a number.

// // EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
// ///////////////////////////////////example//////////////////////////////////////////
// // Input: {Number} num - number whose factorial is sought
// // Output: {Number}
// ///////////////////////////////////example//////////////////////////////////////////
// // // add code here////
// // function factorial(num, product=1){

// // }
// // // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(factorial(4)); // -> 24
// // console.log(factorial(6)); // -> 720
// // console.log(factorial(0)); // -> 1




// ////////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
// // Get the length of an array using recursion without accessing its length property.
// // ///////////////////////////////////example//////////////////////////////////////////
// // Input: {Array} array - array whose length is sought
// // Output: {Number}
// // ///////////////////////////////////example//////////////////////////////////////////
// // // add code here////
// // function getLength(arr){


// // }
// // // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(getLength([1])); // -> 1
// // console.log(getLength([1, 2])); // -> 2
// // console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// // console.log(getLength([])); // -> 0

// ////////////////////////////////////////////////// Challenge: POW///////////////////////////////////////////////////////////////////////////////////
// // Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. 
// // For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

// // ///////////////////////////////////example//////////////////////////////////////////
// // Input 1: {Number} base - base number raised to the exponent
// // Input 2: {Number} exponent - exponent the base is raised to
// // Output: {Number} - expected value of base raised to exponent
// // ///////////////////////////////////example//////////////////////////////////////////
// // // add code here////
// // function pow(base, exponent){


// // }
// // // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(pow(2, 4)); // -> 16
// // console.log(pow(3, 5)); // -> 243





// //////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// // For example, if the input is 'g', then the output should be 'ggggg'.
// //////////////////////////////example////////////////////////////
// // Input: {String} char
// // Output: {String}
// ////////////////////////////example///////////////////////////////

// // console.log('Hello, world!');
// // // // add code here////
// // function repeater(char,num=0,output=""){



// // }
// // // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(repeater('g'));
// // console.log(repeater('j'));


// /////////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
// // Write a function that returns the factorial of a number.

// // EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
// ///////////////////////////////////example//////////////////////////////////////////
// // Input: {Number} num - number whose factorial is sought
// // Output: {Number}
// ///////////////////////////////////example//////////////////////////////////////////
// // // // add code here////
// // function factorial(num, product=1){


// // }


// // // // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(factorial(4)); // -> 24
// // console.log(factorial(6)); // -> 720
// // console.log(factorial(0)); // -> 1




// ////////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
// // Get the length of an array using recursion without accessing its length property.
// // ///////////////////////////////////example//////////////////////////////////////////
// // Input: {Array} array - array whose length is sought
// // Output: {Number}
// // ///////////////////////////////////example//////////////////////////////////////////
// // // // add code here////

// // function getLength(array, length=0){

    


// // }

// // // // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(getLength([1])); // -> 1
// // console.log(getLength([1, 2])); // -> 2
// // console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// // console.log(getLength([])); // -> 0



