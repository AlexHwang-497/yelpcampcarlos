//////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// For example, if the input is 'g', then the output should be 'ggggg'.
//////////////////////////////example////////////////////////////
// Input: {String} char
// Output: {String}
////////////////////////////example///////////////////////////////

// console.log('Hello, world!');
// // add code here////
// function repeater(char, num=0, output =""){
//   //base case 
//   if(num===5){
//     return output;
//   }else {
//     output+=char
//     // num++
//     return repeater(char,num+1,output)
//   }
  

// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g'));
// console.log(repeater('j'));


/////////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
///////////////////////////////////example//////////////////////////////////////////
// Input: {Number} num - number whose factorial is sought
// Output: {Number}
///////////////////////////////////example//////////////////////////////////////////
// // add code here////
// function factorial(num, product=1){
//   //base case 
//   if(num <=1){
//     return product
//   } else {
//     return num *factorial(num-1,product)
//   }

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1




////////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
// Get the length of an array using recursion without accessing its length property.
// ///////////////////////////////////example//////////////////////////////////////////
// Input: {Array} array - array whose length is sought
// Output: {Number}
// ///////////////////////////////////example//////////////////////////////////////////
// add code here////
// function getLength(arr){
//   if(arr.length === 0 ){
//     return 0
//   } else {
//     return 1+getLength(arr.slice(1))
//   }

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0




////////////////////////////////////////////////// Challenge: POW///////////////////////////////////////////////////////////////////////////////////
// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. 
// For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

// ///////////////////////////////////example//////////////////////////////////////////
// Input 1: {Number} base - base number raised to the exponent
// Input 2: {Number} exponent - exponent the base is raised to
// Output: {Number} - expected value of base raised to exponent
// ///////////////////////////////////example//////////////////////////////////////////
// // add code here////
// function pow(base, exponent){
//   //base case 
//   if(exponent ===0){
//     return 1
//   }else {
//     return base * pow(base,exponent-1)
//   }

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243


// Challenge: flow
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
//   if(funcArray.length === 0){
//     return input;
//   } else {
//     return flow(funcArray[0](input),funcArray.slice(1))

//   }

// }
// // To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
//  function add7(num) { return num + 7; }
//  function modulo4(num) { return num % 4; }
//  function subtract10(num) { return num - 10; }
//  const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
//  console.log(flow(2, arrayOfFunctions)); // -> -7




//////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
// write a function called productOfArray which takes in an array of of numbers and returns the product of them all.
// function productOfArray(arr) {
//   if(arr.length === 0){
//     return 1
//   } else {
//     return arr[0] * productOfArray(arr.slice(1))
//   }

// }


// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60



//////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
// write a function called recursiveRange which accepts a number and up all the numbers from 0 to the number passed to the function

// function recursiveRange(x){
//   if(x===0){
//     return 0
//   } else {
//     return x+ recursiveRange(x-1)
//   }
   
// }

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 

//////////////////////////////////////////////////////////////////////fibonacci//////////////////////////////////////

// write a recursive funcation called fib which accepts a number and returns the nth number in the fibonacci sequence.
// Recall that the fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8... which starts with 1 and 1 and where every number thereafter 
// is equal to the sum of the previous two numbers;


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(n){
//   if(n<=2){
//     return 1;
//   } else {
//     return fib(n-1) + fib(n-2)
//   }
// }


// console.log(fib(4))// 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465


// //////////////////////////////////////////////////////////////////////reverse///////////////////////////////////////////////////////////////////
// //write a function called reverse which accepts a string and returns a new string in reverse

// function reverse(str){
//   if(str.length === 0 ){
//     return str;
//   } else {
//     return reverse(str.slice(1))+str[0]
//   }


// }
  
//   console.log(reverse('awesome')) // 'emosewa'
//   console.log(reverse('rithmschool')) // 'loohcsmhtir'



// //////////////////////////////////////////////////////////////////////isPalindrome/////////////////////////////////////////////////////////
// write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same foward and backward)
// otherwise returns false.



// function isPalindrome(str){
//   if(str.length<=1){
//     return true;
//   }else if (str.length === 2) {
//     return str[0] === str[1]
//   }else if (str[0] === str.slice(-1)){
//     return isPalindrome(str.slice(1,-1))
//   }
//   return false;

//   }


// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false

 

//////////////////////////////////////////////////////////////////////someRecurseive/////////////////////////////////////////////////////////

//write a function which accepts an array and a clalback.  
// the function returns true if a single value in teh array returns true when passed to the callback
// otherwise it is false

// function someRecursive(array, callback){
//   if(array.length === 0 ){
//     return false
//   } else if (callback(array[0])){
//     return true;
//   } else {
//     return someRecursive(array.slice(1),callback)
//   }
// }


//   // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false


//////////////////////////////////////////////////////////////////////flatten/////////////////////////////////////////////////////////
// write a function taht acceps an array of arrays and returns a new array with all value flattneed

function flatten(oldArr){

  }
  
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])) // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3


//////////////////////////////////////////////////////////////////////capitalizeFirst/////////////////////////////////////////////////////////

// given an array of String, capitlzie the first letter of each string in the array

// function capitalizeFirst (array) {
//   if(array.length ===1){
//     return [array[0].toUpperCase()]
//   }
//   let result = capitalizeFirst(array.slice(0,-1))
//    result.push(array.slice(array.length-1)[0].toUpperCase())
//    return result;

    
//   }
  
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


//////////////////////////////////////////////////////////////////////nestedEvenSum/////////////////////////////////////////////////////////

// return the sum of all even numbers in an object which may contain nested objects;

// function nestedEvenSum (obj, sum = 0) {


//   }
  
  
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
  
//   console.log(nestedEvenSum(obj1)); // 6
//   console.log(nestedEvenSum(obj2)); // 10

  //////////////////////////////////////////////////////////////////////capitalize/////////////////////////////////////////////////////////
// given an array of words, return an new array conating each word captialzied

function capitalizeFirst (array) {

  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


    //////////////////////////////////////////////////////////////////////stringifyNumbers/////////////////////////////////////////////////////////

    //write a function which akes an object and finds all of the values which are numbers and converts them to strings.  

