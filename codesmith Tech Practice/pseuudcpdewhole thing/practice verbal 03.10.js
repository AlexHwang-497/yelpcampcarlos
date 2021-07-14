//16.///////////// //////////////////////////////////////////////////////////////////Challenge: multiMap
// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks.
//  multiMap will return an object whose keys match the elements in the array of values. 
//  The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// ADD CODE HERE
// const multiMap = (arrayOfValues, arrayOfCallbacks) =>{
//     // decalre an variable and assign it as an empty object;
//     const obj = {}
//     // iterate through array of values w/ a for...of loop
//     for(let str of arrayOfValues){
//         // let object store key value pairs as an array
//         obj[str] = [];
//         // iterate through arrray of callbacks with a for...loop
//         for(let i=0; i<arrayOfCallbacks.length;i++){
//             // push the iinvoked callback into the array
//             obj[str].push(arrayOfCallbacks[i](str))

//         }

//     }
//     // return key value pairs
//     return obj;

// }


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
//   // use reduce on the arrays; taking in callbacks of acc and curr
//   return arrays.reduce((acc,curr)=> {
//     //  filter the array based simlar numbers to  curr
//     return acc.filter(num=>curr.includes(num))

//   })
// }

// //Do the same problem above but with a loop?
// // // // //ADD CODE HERE
// function intersection(arrays){
//   // decalre variable and assign it as arrays index 0 for comparison
//   const compareArray = arrays[0]
//   //iterate through arrays w/ a for loop
//   for(let i=0; i<arrays.length;i++){
//     // declare vaiable and assign value of arrays based on i value
//     let arr =arrays[i]
//     // iterate through our comparArray
//     for(let j=0; j<compareArray.length;j++){
//       // ddecalre variable and assign it as value based on the j index of the comparableArray
//       let value = compareArray[j]
//       // intiate cond stmst; wehre if element is not found in the array...
//       if(!arr.includes(value))
//         // splice the result
//         compareArray.splice(j,1)

//     }
//   }
//   // return comparARray;
//   return compareArray
// }

// // // //   // Uncomment these to check your work!
//   const arr1 = [5, 10, 15, 20];
//   const arr2 = [15, 88, 1, 5, 7];
//   const arr3 = [1, 10, 15, 5, 20];
//   console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


//27. ////////////////////////////////// ////////////////////////////////// Challenge: union//////********focus on this  */
// Construct a function union that takes an input array of arrays, compares each array, 
// and returns a new flat array that contains all elements. 
// If there are duplicate elements, only add it once to the new array. 
// Preserve the order of the elements starting from the first element of the first input array. 
// BONUS - Use reduce!
// // // ADD CODE HERE

///reduce 
// function union(arrays){
// // utlize reduce on the arrays w/ callbacks of acc and curr
// return arrays.reduce((acc,curr)=> {
//   // concat our acumulator to the filtereed array based off of
//   return acc.concat(
//     // accumulatr bassed of nums that are unique
//     curr.filter(num=>!acc.includes(num))
//   )
// })
// }

  // // Uncomment these to check your work!
  // const arr1 = [5, 10, 15];
  // const arr2 = [15, 88, 1, 5, 7];
  // const arr3 = [100, 15, 10, 1, 5];
  // console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

  
//23.  //////////////////////////////////////////////////////////////////////////////////// CHALLENGE 12
// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. 
// When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
// When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) 
// will be replaced with their corresponding second strings (of those saved pairs).

function censor() {
  // declare a variable and assign as empty object; used to store key/value pairs
  let obj = {}
  // create new function which we will pass in two strings;
  function print(strOne,strTwo){
    // check to see if one string was passed in or two string were passed in so check to
    // see how many strings are passed in

    //intiate cond stmt; where is strTwo is falsy...; c
    if(!strTwo){
      // iterate though obj with for in loop
      for(let str in obj){
        // replace strOne w/ strTwo
        strOne = strOne.replace(str,obj[str])
      }
        // return key value pairs
        return strOne;
        // otherwise...
    } else {
        // update obj with key value pairs
        obj[strOne] = strTwo
    }
  }
    // return new function
    return print;
}
/*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


//11.  /////////////////////////////////////////////////////// CHALLENGE 5
// Write a function after that takes the number of times the callback needs to be called before being executed as 
// the first parameter and the callback as the second parameter.


// function after(count, func) {
//   // declare variable and assign value of 0
//   let num = 0
//   // create ne function
//   function print(){
//     // increment num
//     num++
//     // intiate cond stmt; where if our counter is gretater then num
//     if(num >= count){
//       // return func
//       return func();
//       // otherwise...
//     } else {
//         // console.log 'nothing is printed
//         console.log('nothin is printed')
//     }
//   }
//   // return new function
//   return print;

// }

// /*** Uncomment these to check your work! ***/
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
// function saveOutput(callback,str){
//   // declare variable as empty object to store key-value pairs
//   let obj = {};
//   // create new functino with a argument
//   function print(arg){
//     // intiate cond stmt; where if str equals arg...
//     if(str === arg){
//       // return obj
//       return obj;
//       // othewise....
//     }else {
// // in the case in which our arument is not in the password what we'll first neeed to do is invoke our function with that arument, store it within our object
// // and then return the output of invoking ourfunction with that arguument


//       // create a new entry in object
//       // the avlue associated with this objec key will be the result of invoking func with the arguement
//       obj[arg] = callback(arg)
//       // return the avlue associated wit hthe arument in our cahce object
//       return  obj[arg]
//     }
//   }
//   // return new function
//   return print;
// }



// Uncomment these to check your work!
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
//   // decalre varaiable and assign it value of 0
//   let count = 0
//   // decalare a variable and assign as empty string
//   let result = ''
//   // create new function
//   function print(){
//     // intiate cond stmtm; where if count >= array.length-1...
//     if(count>=array.length-1){
//       // update/reassingn result string
//       result = array[count]
//       // return count  to 0
//       count=0
//       // othewise...
//     }else {
//         // update/reassing result string
//         result = array[count]
//         // increment count
//         count++
//     }
//     // return result
//     return result

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

//6.  //////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
///////////////////////////////////example//////////////////////////////////////////
// Input: {Number} num - number whose factorial is sought
// Output: {Number}
///////////////////////////////////example//////////////////////////////////////////
// add code here////
// function factorial(num, product=1){ /// product1 is aou updated default parameter of product =1
//   // base: if num equals 0, return product
//   if(num ===0){return product}
//   // update product
//   newProduct = num * product
//   // decrement num
//   newNum = num -1
//   // recurse with updated inputs
//   return factorial(newNum,newProduct)

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
// // // add code here////
// function repeater(char, num=0, output =""){
//   // base: num equals 5 return output
//   if(num === 5){return output}
//   // increment num
//   newNum = num+1
//   // concat output by char
//   output+= char
//   // recursive call
//   return repeater(char,newNum,output)


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
//   // base: if arr[0] is undefined, return length
//   if(arr[0] === undefined) {return length}
//   // increment length
//   newLength = length+1
//   // slice arr
//   newArr = arr.slice(1)
//   // recursive call
//   return getLength(newArr, newLength)



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