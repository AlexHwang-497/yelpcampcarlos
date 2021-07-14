// // Part 1
// // Create a function forEach which takes an array and a callback, and 
// // runs the callback on each element of the array. 
// // forEach does not return anything. Please do not use the native forEach or map method.

// // let alphabet = '';
// // const letters = ['a', 'b', 'c', 'd'];
// // forEach(letters, function(char) {
// //   alphabet += char;
// // });
// // console.log(alphabet); //prints 'abcd'



// // Part 2
// // Now let's rebuild map from the previous challenge. This time instead of using a for loop,
// //  you're going to use the forEach we just created.


// function forEach(arr,cb){
//     let result =[]
//     for(let i=0; i<arr.length; i++){
//       result.push(cb(arr[i]))
//     }
//     return result;
//   }
  
//   function map(array, callb){
//   return array.map((a => {
//     return a-2
//   }))
    
//   }
//   // Uncomment these to check your work!
//   console.log(typeof forEach); // should log: 'function'
//   forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
//   console.log(typeof map); // should log: 'function'
//   console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]




// // Convert Array To Object 1
// // 1
// // Convert Array To Object 1
// // Submitted on Yesterday at 8:24 PM
// // Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:

// // 1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.

// // Example input:

// // var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// // Function's return value (output):

// // {
// //   Queen : 'Beyonce'
// // }
// // Do not change the input array. Assume all elements in the input array will be of type 'string'.

// // Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

// // E.g. it should handle input like:

// // ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']
// // Function's return value (output):

// // {
// //   Kevin : 'Coleman'
// // }
// // const transformFirstAndLast = arr =>{
// //   let obj = {}
// //   obj [arr[0]]=arr[arr.length-1]
// //   return obj
// // }
// // console.log(transformFirstAndLast(input))


// //////////////////////////////////////////////////////



// // Convert Object To Array 1
// // 2
// // Convert Object To Array 1
// // Submitted on 04/26/2021
// // Write a function called "getAllKeys" which returns an array of all the input object's keys. Example input:

// // var input = {
// //   name : 'Sam',
// //   age : 25,
// //   hasPets : true
// // };
// // Function's return value (output) :

// // ['name', 'age', 'hasPets']
// // Do not use "Object.keys" to solve this prompt.

// // Note that your function should be able to handle any object passed in it.

// // E.g. it should also handle an input like:

// // const getAllKeys = obj => {
// //   let result = []
// //   for(let key in obj){
// //     result.push(key)
// //   }
// //   return result
  
// // }


// // var alternativeInput = {
// //   a : 'a',
// //   number : 11,
// //   hungry : true,
// //   grammyWins : 1
// // };

// // console.log(getAllKeys(alternativeInput))

// // Function's return value (output):

// // ['a', 'number', 'hungry', 'grammyWins']

// //////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Convert Array To Object 2
// // 3
// // Convert Array To Object 2
// // Submitted on 04/01/2021
// // Write a function 'transformArrayToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// // Example input:

// // var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// // Function's return value (output):

// // {
// //   make : 'Ford',
// //   model : 'Mustang',
// //   year : 1964
// // }
// // Do not change the input string. Assume that all elements in the array will be of type 'string'.

// // Note that the input may have a different number of elements than the given sample. For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

// /////////////////////////////////////////////////////////////////////////


// // Convert Object To Array 2
// // 4
// // Convert Object To Array 2
// // Submitted on Today at 7:47 AM
// // Write a function called "listAllValues" which returns an array of all the input object's values. Example input:

// // var input = {
// //   name : 'Krysten',
// //   age : 33,
// //   hasPets : false
// // };
// // Function's return value (output):

// // ['Krysten', 33, false]
// // Do not use "Object.values" to solve this prompt.

// // Note that the input may have a different number of keys and values than the given sample. E.g. it should also handle an input like:
// const listAllValues  = obj => {
//   let result = []
//   for(let key in obj){
//     result.push(obj[key])
//   }
//   return result
// }

// var alternativeInput = {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// };

// console.log(listAllValues(alternativeInput))
// // // Function's return value (output):

// // // ['a', 11, true, 1]
// /////////////////////////////////////////////////////////////////////////////////////////////


// // Convert Array To Object 3
// // 5
// // Convert Array To Object 3
// // Submitted on Today at 8:01 AM
// // Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

// // The argument will look like this:

// // const transformEmployeeData = arr => {
// //   let result = []
// //   for(let el of arr){
// //     let obj={}
// //     for(let i=0;i<arr.length;i++){
// //       obj[el[i][0]] = el[i][1]
// //     }
// //     result.push(obj)
// //   }
// //   return result
// // }

// // var input = [
// //     [
// //         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
// //     ],
// //     [
// //         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
// //     ]
// // ];

// // console.log(transformEmployeeData(input))
// // Given that input, the return value should look like this:

// // [
// //     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
// //     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// // ]
// // Note that the input may have a different number of rows or different keys than the given sample.

// // For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.


// //////////////////////////////////////////////////////////////////////////////////////////////////////


// // Convert Object To Array 3
// // 6
// // Convert Object To Array 3
// // Submitted on Today at 8:01 AM
// // Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

// // Argument:
// const convertObjectToArray = obj =>{
//   let result = []
//   for(let key in obj){
//     result.push([key,obj[key]])
//   }
//   return result
  
// }

// var input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// };

// console.log(convertObjectToArray(input))
// // // Return value:

// // [['name', 'Holly'], ['age', 35], ['role', 'producer']]

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Find Shortest Element
// // 7
// // findShortestElement
// // Submitted on Today at 8:07 AM
// // Write a function called "findShortestElement".

// // Given an array, "findShortestElement" returns the shortest string within the given array.
// // const findShortestElement = arr =>{
// //   let min = arr[0].length
// //   let minW = arr[0]
// //   for(let el of arr){
// //     if(el.length<min){
// //       min = el.length
// //       minW = el
// //     }
// //   }
// //   return min
  
// // }
// // // Notes:

// // // If there are ties, it should return the first element to appear.
// // // If the given array is empty, it should return an empty string.
// // var output = findShortestElement(['a', 'two', 'three']);
// // console.log(output); // --> 'a'

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Filter Odd Length Words
// // 8
// // filterOddLengthWords
// // Submitted on Today at 8:07 AM
// // Write a function called "filterOddLengthWords".

// // Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

// // const  filterOddLengthWords = arr =>{
// //   let result = []
// //   for(let el of arr){
// //     if(el.length%2!==0){
// //       result.push(el)
// //     }
// //   }
// //   return result
// // }

// // var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// // console.log(output); // --> ['there', "now']


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Get Largest Element
// // 9
// // getLargestElement
// // Submitted on Today at 8:08 AM
// // Write a function called "getLargestElement".

// // Given an array, "getLargestElement" returns the largest number in the given array.
// // const getLargestElement = arr =>{
// //   return arr.sort((a,b)=>a-b)[arr.length-1]
  
// // }
// // // Notes:

// // // It should return 0 if the array is empty.
// // var output = getLargestElement([5, 2, 8, 3]);
// // console.log(output); // --> 8;


// ///////////////////////////////////////////////////////////////////////////////////////////////////////


// // Compute Sum of All Elements
// // 10
// // computeSumOfAllElements
// // Submitted on Today at 8:08 AM
// // Write a function called "computeSumOfAllElements".

// // Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// // var output = computeSumOfAllElements([1, 2, 3])
// // console.log(output); // --> 6

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Calculate Bill Total
// // 11
// // calculateBillTotal
// // Submitted on Today at 8:08 AM
// // Write a function called "calculateBillTotal".

// // Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
// // const calculateBillTotal = num =>{
// //   return num + (num*.15)+(num*.095)
  
// // }
// // // Notes:

// // // Assume that sales tax is 9.5% and tip is 15%.
// // // Do NOT tip on the sales tax, only on the pre tip amount.
// // var output = calculateBillTotal(20);
// // console.log(output); // --> 24.9

// //////////////////////////////////////////////////////////////////////////////////////////////////

// // Get String Length
// // 12
// // getStringLength
// // Submitted on Today at 8:08 AM
// // Write a function called "getStringLength".

// // Given a string, "getStringLength" returns the length of the given string.

// // Notes:

// // Do NOT use any native 'length' methods.
// // You might consider using 'substring' or 'slice' as alternatives.
// // var output = getStringLength('hello');
// // console.log(output); // --> 5

// ////////////////////////////////////////////////////////////////////////////////////////////////////


// // Join Array of Arrays
// // 13
// // joinArraysOfArrays
// // Submitted on Today at 8:08 AM
// // Write a function called "joinArrayOfArrays".

// // Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.
// // const  joinArrayOfArrays = arr => {
// //   // return arr[0].concat(arr[1],arr[2])
  
// //   // return arr.flat()
// //   let output =[]
// //   for(let el of arr){
// //     output=output.concat(el)
// //   }
// //   return output
  
// // }
// // var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// // console.log(output); // --> [1, 4, true, false, 'x', 'y']
// // // You should be familiar with the "concat" method for this problem.

// /////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Get Product of All Elements at Property
// // 14
// // getProductOfAllElementsAtProperty
// // Submitted on Today at 8:36 AM
// // Write a function called "getProductOfAllElementsAtProperty".

// // Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

// // Notes:
// // const  getProductOfAllElementsAtProperty = (object,key) => {
// //   let output =1
// //   for(let el of object[key]){
// //     output*=el
    
// //   }
// //   return output
  
// // }

// // // If the array is empty, it should return 0.
// // // If the property at the given key is not an array, it should return 0.
// // // If there is no property at the given key, it should return 0.
// // var obj = {
// //   key: [1, 2, 3, 4]
// // };
// // var output = getProductOfAllElementsAtProperty(obj, 'key');
// // console.log(output); // --> 24


// /////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Sum Digits
// // 15
// // sumDigits
// // Submitted on Today at 8:44 AM
// // Write a function called "sumDigits".

// // Given a number, "sumDigits" returns the sum of all its digits.
// // const sumDigits=(num)=>{
// //   let output =0
// //   let conv = num.toString()
// //   .split('')
// //   for(let i=0;i<conv.length;i++){
// //     if(conv[i]==='-'){
// //       i++
// //       output+=-Number(conv[i])
      
// //     } else {
// //       output+=Number(conv[i])
// //     }
// //   }
// //   return output
  
// // }
// // var output = sumDigits(1148);
// // console.log(output); // --> 14
// // // If the number is negative, the first digit should count as negative.

// // var output = sumDigits(-316);
// // console.log(output); // --> 4
// // Notes:

// // In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// // Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

// /////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Get Sum of All Elements at Property
// // 16
// // getSumOfAllElementsAtProperty
// // Submitted on Today at 8:54 AM
// // Write a function called "getSumOfAllElementsAtProperty".

// // Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

// // Notes:
// // const getSumOfAllElementsAtProperty = (object, key) =>{
// //   let output = 0
// //   for(let el of object[key] ){
// //     output+=el
// //   }
// //   return output
  
// // }

// // If the array is empty, it should return 0.
// // If the property at the given key is not an array, it should return 0.
// // If there is no property at the key, it should return 0.
// // var obj = {
// //   key: [4, 1, 8]
// // };
// // var output = getSumOfAllElementsAtProperty(obj, 'key');
// // console.log(output); // --> 13

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Find Shortest Word Amongst Mixed Elements
// // 17
// // findShortestWordAmongMixedElements
// // Submitted on Today at 8:58 AM
// // Write a function called "findShortestWordAmongMixedElements".

// // Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// // Notes:
// // const findShortestWordAmongMixedElements = arr => {
// //   let min = arr[0]
// //   let minW = arr[0]
// //   for(let el of arr){
// //     if(typeof el==='string'){
// //       if(el.length<min){
// //         minW = el
// //         min=el.length
// //       }
// //     }
// //   }
// //   return minW
  
// // } 
// // // If there are ties, it should return the first element to appear in the given array.
// // // Expect the given array to have values other than strings.
// // // If the given array is empty, it should return an empty string.
// // // If the given array contains no strings, it should return an empty string.
// // var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// // console.log(output); // --> 'two'
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Find Smallest Number Amongst Mixed Elements
// // 18
// // findSmallestNumberAmongMixedElements
// // Submitted on Today at 9:02 AM
// // Write a function called "findSmallestNumberAmongMixedElements".

// // Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// // Notes:
// // const findSmallestNumberAmongMixedElements = arr => {
// //     let min = arr[0]
// //   let minW = arr[0]
// //   for(let el of arr){
// //     if(typeof el==='number'){
// //       if(el<min){
// //         minW = el
// //         // min=el.length
// //       }
// //     }
// //   }
// //   return minW
// // }

// // // If the given array is empty, it should return 0.
// // // If the array contains no numbers, it should return 0.
// // var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// // console.log(output); // --> 4
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Get Longest Word Of Mixed Elements
// // 19
// // getLongestWordOfMixedElements
// // Submitted on Today at 9:25 AM
// // Write a function called "getLongestWordOfMixedElements".

// // Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// // Notes:

// // If the array is empty, it should return an empty string ("").
// // If the array contains no strings; it should return an empty string.
// // var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// // console.log(output); // --> 'word'
// ////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Get Largest Number Among Mixed Elements
// // 20
// // getLargestNumberAmongMixedElements
// // Submitted on Today at 9:28 AM
// // Write a function called "getLargestNumberAmongMixedElements".

// // Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// // Notes:

// // The array might contain values of a type other than numbers.
// // If the array is empty, it should return 0.
// // If the array contains no numbers, it should return 0.
// // var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// // console.log(output); // --> 5

// ////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Compute Summation to N
// // 21
// // computeSummationToN
// // Submitted on Today at 9:30 AM
// // Write a function called "computeSummationToN".

// // Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

// // Notes:

// // If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
// // var output = computeSummationToN(6);
// // console.log(output); // --> 21

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Convert Score To Grade
// // 22
// // convertScoreToGrade
// // Submitted on Today at 9:36 AM
// // Write a function called "convertScoreToGrade".

// // Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// // Notes:

// // (100 - 90) --> 'A'
// // (89 - 80) --> 'B'
// // (79 - 70) --> 'C'
// // (69 - 60) --> 'D'
// // (59 - 0) --> 'F'
// // If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// // var output = convertScoreToGrade(91);
// // console.log(output); // --> 'A'

// /////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Convert Score to Grade with Plus/Minus
// // 23
// // convertScoreToGradeWithPlusAndMinus
// // Submitted on Today at 9:43 AM
// // Write a function called "convertScoreToGradeWithPlusAndMinus".

// // Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

// // Notes:

// // (100 - 90) --> 'A'
// // (89 - 80) --> 'B'
// // (79 - 70) --> 'C'
// // (69 - 60) --> 'D'
// // (59 - 0) --> 'F'
// // If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// // If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
// // If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
// // There are is no F+ and there is no F-.
// // var output = convertScoreToGradeWithPlusAndMinus(91);
// // console.log(output); // --> 'A-'

// /////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Repeat String
// // 24
// // repeatString
// // Submitted on Today at 9:44 AM
// // Write a function called "repeatString".

// // Given a string and a number, "repeatString" returns the given string repeated the given number of times.

// // var output = repeatString('code', 3);
// // console.log(output); // --> 'codecodecode'

// //////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Get Longest of Three Words
// // 25
// // getLongestOfThreeWords
// // Submitted on Today at 9:46 AM
// // Write a function called "getLongestOfThreeWords".

// // Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

// // Notes:

// // If there is a tie, it should return the first word in the tie.
// // var output = getLongestOfThreeWords('these', 'three', 'words');
// // console.log(output); // --> 'these'

// //////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Find Shortest of Three Words
// // 26
// // findShortestOfThreeWords
// // Submitted on Today at 9:48 AM
// // Write a function called "findShortestOfThreeWords".

// // Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// // Notes:

// // If there are ties, it should return the first word in the parameters list.
// // var output = findShortestOfThreeWords('a', 'two', 'three');
// // console.log(output); // --> 'a'

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Compute Compound Interest
// // 27
// // computeCompoundInterest
// // Submitted on Today at 9:50 AM
// // Write a function called "computeCompoundInterest".

// // Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

// // var output = computeCompoundInterest(1500, .043, 4, 6);
// // console.log(output); // --> 438.8368221341061
// // Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest  This shows the formula used to calculate the total compound interest generated.


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Modulo
// // 28
// // modulo
// // Submitted on Today at 9:51 AM
// // Write a function called "modulo".

// // Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// // It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_() 

// // Notes:

// // Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// // 0 % ANYNUMBER = 0.
// // ANYNUMBER % 0 = NaN.
// // If either operand is NaN, then the result is NaN.
// // Modulo always returns the sign of the first number, even if the remainder is 0.
// // var output = modulo(25, 4);
// // console.log(output); // --> 1

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Multiply
// // 29
// // multiply
// // Submitted on Today at 9:54 AM
// // Write a function called "multiply".

// // Given 2 numbers, "multiply" returns their product.

// // Notes:

// // It should not use the multiply operator - *
// // var output = multiply(4, 7);
// // console.log(output); // --> 28

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Is Odd without Modulo
// // 30
// // isOddWithoutModulo
// // Submitted on Today at 9:56 AM
// // Write a function called "isOddWithoutModulo".

// // Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// // Note:

// // It does so without using the modulo operator (%).
// // It should work for negative numbers and zero.
// // var output = isOddWithoutModulo(17);
// // console.log(output); // --> true

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Is Even without Modulo
// // 31
// // isEvenWithoutModulo
// // Submitted on Today at 9:56 AM
// // Write a function called "isEvenWithoutModulo".

// // Given a number, "isEvenWithoutModulo" returns whether it is even.

// // Notes:

// // It does so without using the modulo operator (%).
// // It should work for negative numbers and zero.
// // var output = isEvenWithoutModulo(8);
// // console.log(output); // --> true

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Multiply Between
// // 32
// // multiplyBetween
// // Submitted on Today at 9:57 AM
// // Write a function called "multiplyBetween".

// // Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

// // Notes:

// // The product between 1 and 4 is 1 * 2 * 3 = 6.
// // If num2 is not greater than num1, it should return 0.
// // var output = multiplyBetween(2, 5);
// // console.log(output); // --> 24

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Compute Sum Between
// // 33
// // computeSumBetween
// // Submitted on Today at 9:57 AM
// // Write a function called "computeSumBetween".

// // Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

// // Notes:

// // The sum between 1 and 4 is 1 + 2 + 3 = 6.
// // If num2 is not greater than num1, it should return 0.
// // var output = computeSumBetween(2, 5);
// // console.log(output); // --> 9

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Greet Customer
// // 34
// // Greet Customer
// // Submitted on Today at 10:06 AM
// // Write a function called "greetCustomer".

// // Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.

// // The greeting should be different, depending on the name on their reservation.

// // Case 1 - Unknown customer ( Name is not present in customerData ):

// // var output = greetCustomer('Terrance');
// // console.log(output); // --> 'Welcome! Is this your first time?'
// // Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

// // var output = greetCustomer('Joe');
// // console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
// // Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

// // var output = greetCustomer('Carol');
// // console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
// // Notes:

// // var customerData = {
// //   'Joe': {
// //     visits: 1
// //   },
// //   'Carol': {
// //     visits: 2
// //   },
// //   'Howard': {
// //     visits: 3,
// //   },
// //   'Carrie': {
// //     visits: 4
// //   }
// };
// const greetCustomer = name => {
//   let greeting = ''
//   if(!customerData[name]){
//     return 'Welcome! Is this your first time?'
//   } else if(customerData[name]['visits']===1){
//     return 'Welcome back, '+name +' We are glad you liked us the first time!'
//   } else if(customerData[name]['visits']>1){
//     return 'Welcome back, '+ name +'! So glad to see you again!'
//   }
  
// }

// // console.log(greetCustomer('Carrie'))
// // console.log(greetCustomer('Terrance'))
// // console.log(greetCustomer('Joe'))
  
// // Your function should not alter the customerData object to update the number of visits.
// // Do not hardcode to the exact sample data. This is a BAD IDEA:
// // if (firstName === 'Joe') {
// //   // do something
// // }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Detect Outlier Value
// // 35
// // Detect Outlier Value
// // Submitted on Today at 10:17 AM
// // Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// // // The return value should be 1-indexed, not 0-indexed.
// // const detectOutlierValue = string =>{
// //     var arr = string.split(' ');
// //     var res = arr[0];
// //     var even = false;
// //     for(let i = 1; i < arr.length; i++){
// //         if(arr[i] % 2 === 0 && res % 2 === 0 ){
// //             even = true;
// //         }
// //         else if(arr[i] % 2 !== 0 && res %2 !== 0){
// //             even = false;
// //         }
// //         if(even === false && arr[i] %2 === 0) return i+1;
// //         else if (even === true && arr[i] % 2 !== 0) return i+1;
         
// //     }
// // }

// // // Example:

// // console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
// // console.log(detectOutlierValue("1 10 1 1"));  //=> 2 - Second number is even, while the rest of the numbers are odd

// ////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Find Pair for Sum
// // 36
// // Find the Pair
// // Submitted on Today at 12:01 PM
// // Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// // Example:
// // const findPairForSum = (arr,target)=>{
// //   for(let i=0;i<arr.length;i++){
// //     for(let j=i+1;j<arr.length;j++){
// //       if(arr[i]+arr[j]===target){
// //         return [arr[i],arr[j]]
// //       }
// //     }
// //   }
  
// // }

// // var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// // console.log(pair); // --> [4, 5]

// ////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Is Rotated
// // 37
// // Is Rotated
// // Submitted on Today at 12:06 PM
// // Is the first input string a rotated version of the second input string?

// // Example:

// // var string_1 = 'hello world';
// // var string_2 = 'orldhello w';

// // var result = isRotated(string_1, string_2);
// // console.log(result); // --> true

// // /////////////////////////////////////////////////////////////////////////////////////////////////


// // Binary Search with Divide and Conquer (exceeds difficulty of interview)
// // 38
// // Divide and Conquer
// // PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.
// // Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// // Given a sorted array, such as this: [1, 3, 16, 22, 31, 33, 34]

// // You can search for the value 31, as follows:

// // 1) Pick the midpoint: 22. 2) The value is higher than 22, so now consider only the right half of the previous array: [...31, 33, 34] 3) Pick the midpoint: 33 4) The value is lower than 33, so now consider only the left half of the previous array: [...31...] 5) Pick the midpoint: 31 6) You've hit the value. 7) Return the index of the value.

// // Notes:

// // If you don't find the value, you can return null.
// // If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
// // Example:

// // var arr = [1, 3, 16, 22, 31, 33, 34]
// // var result = search(arr, 31);
// // console.log(result); //--> 4

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Average Integers
// // 39
// // Average
// // Submitted on Today at 12:08 PM
// // Use the skeleton provided to complete the sum and average functions described below.

// ////////////////////////////////////////////////////////////////////////////////////////////////////


// // Isogram
// // 40
// // isIsogram
// // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Your task is to write and test a function that determines whether a string is an isogram, following the format of the previous problems. It should return true if the input string is an isogram, and should return false otherwise.

// // While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.

// // Notes:

// // Assume your input is only letters.
// // Assume the empty string is an isogram.
// // Ignore case.
// // Follow the pseudocode exactly!
// /////////////////////////////////////////////////////////////////////////////////////////////




// // Find Longest Palindrome
// // 41
// // findLongestPalindrome
// // Submitted on Today at 12:09 PM
// // Your task is to write a function that will find the longest single-word palindrome within an input phrase (string). The phrase inputted will only contain letters (no symbols, punctuation, or numbers). Your palindrome detection should be case-insensitive. If there are multiple palindromes of equal length, return the last one.

// // Ideally, your solution will use a native method (built into the language) called .sort(). Essentially, when called, this method takes a function that tells the sorting operation how it should order the resulting sorted array. We have supplied a function inside of the skeleton. Please consult this MDN documentation, and read it carefully: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 

// //////////////////////////////////////////////////////////////////////////////////////////




// // Fashion Inventory - Part A
// // 42
// // Fashion Inventory Part-A
// // You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// // It looks like this:

// // const inventory = arr =>{
//   // return arr.map((el) =>
//   //   el.shoes.map(elem =>
//   //     `${el.name}, ${elem.name} ${elem.price}`
//   //   )
//   // ).flat()//.join('\n')
  
//   let result = []
//   for(let el of arr){
//     let tempStr
//     console.log(el)
//    if (el.shoes) {     
//      el.shoes.forEach(entry => {
//        tempStr = `${el.name} ${entry.name} ${entry.price}`     
//      })
     
//      // result.push(tempStr)
     
//    }
    
//   }

//   return result.flat()
// }
  
  
// // function renderInventory(inventory) {
 
// //   var outPutArray = [];
 
// //   inventory.map(items =>{
// //   for(var i = 0; i < items.shoes.length; i++){
// //     outPutArray.push(`${items.name}, ${items.shoes[i].name}, ${items.shoes[i].price}`)
// //   }
// //    });
 
// //   return outPutArray;
// // }



// // var currentInventory = [
// //   {
// //     name: 'Brunello Cucinelli',
// //     shoes: [
// //       {name: 'tasselled black low-top lace-up', price: 1000},
// //       {name: 'tasselled green low-top lace-up', price: 1100},
// //       {name: 'plain beige suede moccasin', price: 950},
// //       {name: 'plain olive suede moccasin', price: 1050}
// //     ]
// //   },
// //   {
// //     name: 'Gucci',
// //     shoes: [
// //       {name: 'red leather laced sneakers', price: 800},
// //       {name: 'black leather laced sneakers', price: 900}
// //     ]
// //   }
// // ];
// // var output = renderInventory(currentInventory);
// // console.log(output);
// // console.log(inventory(currentInventory))
// // Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

// // //...console output:
// // Brunello Cucinelli, tasselled black low-top lace-up, 1000
// // Brunello Cucinelli, tasselled green low-top lace-up, 1100
// // // and so on...
// // Here is an example of a flat list in code:

// // var flatList = "First line\nSecond Line\nThird Line\n";
// // console.log(flatList);
// // Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

// // Hint: the return value is a string.

// //////////////////////////////////////////////////////////////////////////////////////////




// // Fashion Inventory - Part B
// // 43
// // Fashion Inventory Part-B
// // You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// // It looks like this:
// // const avgCost = arr =>{
// //   return arr.map(el=> {
// //     return {
// //       'Designer': el.name,
// //       'Shoes':el.shoes
// //     }
// //   })
  
// // }
// // var currentInventory = [
// //   {
// //     name: 'Brunello Cucinelli',
// //     shoes: [
// //       {name: 'tasselled black low-top lace-up', price: 1000},
// //       {name: 'tasselled green low-top lace-up', price: 1100},
// //       {name: 'plain beige suede moccasin', price: 950},
// //       {name: 'plain olive suede moccasin', price: 1050}
// //     ]
// //   },
// //   {
// //     name: 'Gucci',
// //     shoes: [
// //       {name: 'red leather laced sneakers', price: 800},
// //       {name: 'black leather laced sneakers', price: 900}
// //     ]
// //   }
// // ];

// // console.log(avgCost(currentInventory))
// // Your function should return the average cost of all shoes per designer in this format:

// // var expected = {
// //   'designers': [
// //     {
// //       'name': 'Brunello Cucinelli',
// //       'averagePrice': 1025
// //     },
// //     {
// //       'name': 'Gucci',
// //       'averagePrice': 850
// //     }
// //   ]
// // };
// // There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

// //////////////////////////////////////////////////////////////////////////////////////////




// // Fashion Inventory - Part C
// // 44
// // Fashion Inventory Part-C
// // You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// // It looks like this:

// // var currentInventory = [
// //   {
// //     name: 'Brunello Cucinelli',
// //     shoes: [
// //       {name: 'tasselled black low-top lace-up', price: 1000},
// //       {name: 'tasselled green low-top lace-up', price: 1100},
// //       {name: 'plain beige suede moccasin', price: 950},
// //       {name: 'plain olive suede moccasin', price: 1050}
// //     ]
// //   },
// //   {
// //     name: 'Gucci',
// //     shoes: [
// //       {name: 'red leather laced sneakers', price: 800},
// //       {name: 'black leather laced sneakers', price: 900}
// //     ]
// //   }
// // ];
// // Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A. Here is an example of the console output:

// // Brunello Cucinelli, tasselled black low-top lace-up, 1000
// // Gucci, black leather laced sneakers, 900
// // Here is an example of a flat list in code:

// // var flatList = "First line\nSecond Line\nThird Line\n";
// // console.log(flatList);
// // Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

// //////////////////////////////////////////////////////////////////////////////////////////




// // Fashion Inventory - Part D
// // 45
// // Fashion Inventory Part-D
// // You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// // It looks like this:

// // var currentInventory = [
// //   {
// //     name: 'Brunello Cucinelli',
// //     shoes: [
// //       {name: 'tasselled black low-top lace-up', price: 1000},
// //       {name: 'tasselled green low-top lace-up', price: 1100},
// //       {name: 'plain beige suede moccasin', price: 950},
// //       {name: 'plain olive suede moccasin', price: 1050}
// //     ]
// //   },
// //   {
// //     name: 'Gucci',
// //     shoes: [
// //       {name: 'red leather laced sneakers', price: 800},
// //       {name: 'black leather laced sneakers', price: 900}
// //     ]
// //   }
// // ];
// // The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this:

// // var expectedResult = [
// //   {
// //     "nameWords": [
// //       "tasselled",
// //       "black",
// //       "low-top",
// //       "lace-up"
// //     ],
// //     "targetWordIndex": 3
// //   },
// //   {
// //     "nameWords": [
// //       "tasselled",
// //       "green",
// //       "low-top",
// //       "lace-up"
// //     ],
// //     "targetWordIndex": 3
// //   },
// //   {
// //     "nameWords": [
// //       "red",
// //       "leather",
// //       "laced",
// //       "sneakers"
// //     ],
// //     "targetWordIndex": 2
// //   },
// //   {
// //     "nameWords": [
// //       "black",
// //       "leather",
// //       "laced",
// //       "sneakers"
// //     ],
// //     "targetWordIndex": 2
// //   }
// // ];


// ///////////////////////////////////////////////////////////////////////////////acual test/////////////////////////////////////

// /*
// Declare a variable 'myNums' and set it to an object.
// On that object you will have two key-value pairs. One key will be 'favoriteNumber' and its value will be your favorite number.
// The other key will be 'randomNumber' and its value will be 12.
// */

// // const myNums = {
// //   favoriteNumber : 13,
// //   randomNumber: 12
// // }
// // console.log(myNums)
// /*
// Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps. 'largestSwap' should return a boolean.
// For example, if 27 is our our input, we should return false because swapping the digits gives us 72, and 72 > 27.
// Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.
// */
  
  
// // const largestSwap = num =>{
// //   let conv = num.toString()
// //   .split('')
// //   .reverse()
// //   .join('')
// //   return num > Number(conv)
  
// // }
// // console.log(largestSwap(27))
// // console.log(largestSwap(43))



// /*

// // Check that your 'largestSwap' function is working correctly by passing the value of 'randomNumber' on your 'myNums' object to your 'largestSwap' function


// /*


// Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.

// Example:
// */
// // const countTimes = (arr,target)=>{
// //   let count =0
// //   for(let el of arr){
// //     if(target===el){
// //       count++
// //     }
// //   }
// //   return count
// // }
// // console.log(countTimes([1, 8, 9, 9, 10], 9))// -> 2


// /*
// Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
// "wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.

// Example:
// "D" shows up 3 times: twice in first row, once in third row.
// */
// // const wordSearchLetterCounter = (arr,str)=>{
// //   let output = 0
// //   for(let el of arr){
// //     output += countTimes(el,str) 
// //   }
// //   return output
  
// // }

// // console.log(wordSearchLetterCounter([
// //   ["D", "E", "Y", "H", "A", "D"],
// //   ["C", "B", "Z", "Y", "J", "K"],
// //   ["D", "B", "C", "A", "M", "N"],
// //   ["F", "G", "G", "R", "S", "R"],
// //   ["V", "X", "H", "A", "S", "S"]
// // ], "D"))// ➞ 3

// // console.log(wordSearchLetterCounter([
// //   ["D", "E", "Y", "H", "A", "D"],
// //   ["C", "B", "Z", "Y", "J", "K"],
// //   ["D", "B", "C", "A", "M", "N"],
// //   ["F", "G", "G", "R", "S", "R"],
// //   ["V", "V", "V", "V", "V", "S"]
// // ], "V"))// ➞ 5


  


// // Create a function "countChar" that takes two arguments (an input string and a target string).
// // "countChar" will return the number of times the target string is found in the input string.

// // Example:
// // Note: Do not use any native JS methods, or loops.

// // const countChar = (str,letter,index=0,count=0)=>{
// //   if(str[index]===letter){count++}
// //   if(str[index]===undefined){return count}
// //   index++
// //   return countChar(str,letter,index,count)
// // }
    
// // console.log(countChar('hello world', 'o'));// -> 2
// // console.log(countChar('javascript', 'j')); //-> 1
    
// /*
// Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe". "passwordSafe" should return a function that takes in a password as a string.
// If that password doesn’t match the one originally provided, return the string “You have entered the wrong password”. If the passwords do match, return the safe.



// Example:
// */

// // const passwordSafe = (password,safe)=>{
// //   return function(str){
// //     if(str===password){
// //       return safe
      
// //     } else if(str!==password){
// //       return 'you have entered the wrong password'
// //     }
// //   }
// // }

// // const mySafe = passwordSafe('myPassword', 'My Super Secret');
// // console.log(mySafe('wrongPassword'))// -> "You have entered the wrong password"
// // console.log(mySafe('myPassword'))// -> "My Super Secret"


// //////////////////////////////////////////////////////////////////////adam's test


//     // Declare a variable 'number' and set it to the value 10.

// /*
// Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// */
// //create func addNumbers with param num

// // const addNumber = num =>{
// //   let output =0
// //   for(let i=0;i<=num;i++){
// //     output+=i
// //   }
// //   return output
  
// // }
// // console.log(addNumber(4))
// /*
// Create a function "between50And500" that takes a number as an argument.
// "between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
// For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
// */
// const between50And500 = num => {
//   return num>50 && num<500
  
// }
// // console.log(between50And500(45))
// // console.log(between50And500(472))
// /*
// Create a function "divBy100" that takes a number as an argument.
// "divBy100" should return a true if the number passed to it is divisible by 100.
// For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
// */
// const divBy100 = num => {
//   return num%100===0
// }
// // console.log(divBy100(100))
// // console.log(divBy100(200))
// // console.log(divBy100(1))

// /*
// Create a function "negativeOrEven" that takes a number as an argument.
// "negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
// For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
// */
// const negativeOrEven = num =>{
//   return num<0 || num%2===0
// }

// // console.log(negativeOrEven(2))
// // console.log(negativeOrEven(-3))
// // console.log(negativeOrEven(5))
// // console.log(negativeOrEven(20))

// /*
// Create a function "passAllTests" that takes an array of functions and another value as arguments.
// Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
// If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
// */
// // const passAllTests = (arr,value) => {
// //   return arr.reduce((acc,curr)=>{
// //     acc.push(curr(value))
// //     return acc
// //   },[])
// //   .every(bool=>bool===true)
  
// // }

// // let fnArr = [between50And500,divBy100,negativeOrEven]

// // console.log(passAllTests(fnArr,400))
// // console.log(passAllTests(fnArr,-100))
// // console.log(passAllTests(fnArr,5))

// /*
// Create a function "add" that takes an argument (a number) and returns a function.
// The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally passed to "add"
// Example:
// const addBy10 = add(10)
// addBy10(20) -> 30
// */




// // Create a function "addOne" that takes a number as and argument and returns that number plus one

// // const addOne = num =>  num+1
// // Create a function "subtractOne" that takes a number as and argument and returns that number minus one
// // const subtractOne = num =>  num-1
// /*
// There are two types of potions:
// Growing potion: "A"
// Shrinking potion: "B"
// If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
// If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
// Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

// Example:
// */
// //input: str with nums and letters
// //output: str with only nums
// // const usePotions = str => {
// //   let conv = str.split('')
// //   for(let i=0;i<conv.length;i++){
// //     if(conv[i]==='A'){
// //       conv.splice(i,1)
// //       conv.splice(i-1,1,addOne(parseInt(conv[i-1])))
// //     } else if (conv[i]==='B'){
// //       conv.splice(i,1)
// //       conv.splice(i-1,1,subtractOne(parseInt(conv[i-1])))
// //     }
// //   }
// //   return conv.join('')
// // }

// // console.log(usePotions("3A78B51")) //➞ "47751" 3 grows to 4, 8 shrinks to 7
// // console.log(usePotions("9999B")) //➞ "9998"
// // console.log(usePotions("9A123")) //➞ "10123"
// // console.log(usePotions("567")) //➞ "567"




// // Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
// //create func geLength with params str, index set to 0, count set to 0


// // const getLength = (str,index=0,count=0)=>{
// //   if(str[index]===undefined){return count}
// //   index++
// //   count++
// //   return getLength(str,index,count)
  
// // }

// // console.log(getLength('poop'))
// // console.log(getLength('hello'))
// // console.log(getLength('awe'))
// /*
// Write a function called 'transpose' that accepts a two dimensional array and 
// // returns a transposed version of that array.
// Example:
// */
// // const transpose = arr => {

//     https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
// //   let lResult = []
// //   let rResult = []
  
// //   for(let el of arr){
// //     lResult.push(el[0])
// //   }
// //   for(let el of arr){
// //     rResult.push(el[1])
// //   }
// //   return [lResult,rResult]
  
// // }
// // const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
// // console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
// //input: array of arrays
// //output: an array of two arrays
// //create func transpose takes an arr



// // You are given coins of different denominations and a total amount of money. 
// // Write a function to compute the fewest number of coins that you need to make up that amount.
// //  If that amount of money cannot be made up by any combination of the coins, return -1.
// //   You may assume that you have an infinite number of each kind of coin.

const coinChange = (arr,amount) => {
    debugger
  let count = 0
  let sum = amount
  for(let i=0;i<arr.length;i++){
    count+=Math.floor(amount/arr[i])
    amount%=arr[i]     /////what would you call the process of doing this?
  }
  return count
}
console.log(coinChange([25, 10, 5, 1], 5));      // 1
console.log(coinChange([25, 10, 5, 1], 20));     // 2
console.log(coinChange([25, 10, 5, 1], 90));     // 5
// /*
// Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the same grid rotated 90 degrees clockwise.
// Example:
// */
// // const rotateGrid = arr =>{
// //   let arr1 = []
// //   let arr2 = []
// //   let arr3 = []
// //   for(let el of arr){
// //     arr1.push(el[0])
// //   }
// //     for(let el of arr){
// //     arr2.push(el[1])
// //   }
// //     for(let el of arr){
// //     arr3.push(el[2])
// //   }
// //   return [arr1.reverse(),arr2.reverse(),arr3.reverse()]
// // }
// // const sampleGrid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// // console.log(rotateGrid(sampleGrid)); // -> [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]



// /*
// Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
// Non-bracket characters should not affect the logic.Make your solution work for all types of brackets: () [] {}
// Examples:
// balancedBrackets(" { }    n");                           // -> true
// balancedBrackets("hi][  ");                              // -> false
// balancedBrackets("[{random words and such}]");           // -> true
// balancedBrackets("[The]Rains(In){Spain}");               // -> true
// balancedBrackets("[({}Call me Ishmael)]");               // -> true
// balancedBrackets("[(]{)}");                              // -> false
// balancedBrackets(" gibberish { howdy: partner() }");     // -> true
// balancedBrackets(" isThisAFunction?() { notReally();");  // -> false
// */



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Take a look at the object we've provided in the code editor. The user object contains three keys. 
// // The data key contains five keys, one of which contains an array of friends. 
// // From this, you can see how flexible objects are as data structures. 
// // We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the 
// // name of the friend argument to the array stored in user.data.friends and returns that array.

// // let user = {
// //   name: "Kenneth",
// //   age: 28,
// //   data: {
// //     username: "kennethCodesAllDay",
// //     joinDate: "March 26, 2016",
// //     organization: "freeCodeCamp",
// //     friends: ["Sam", "Kira", "Tomo"],
// //     location: {
// //       city: "San Francisco",
// //       state: "CA",
// //       country: "USA"
// //     }
// //   }
// // };

// // function addFriend(userObj, friend) {
// //   userObj.data.friends.push(friend)
// //   return userObj.data.friends

// // }

// // console.log(addFriend(user, "Pete"));


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument. aka return keys
// // let users = {
// //   Alan: {
// //     age: 27,
// //     online: false
// //   },
// //   Jeff: {
// //     age: 32,
// //     online: true
// //   },
// //   Sarah: {
// //     age: 48,
// //     online: false
// //   },
// //   Ryan: {
// //     age: 19,
// //     online: true
// //   }
// // };

// // function getArrayOfUsers(obj) {
// //   return Object.keys(obj)

// // }

// // console.log(getArrayOfUsers(users));

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // We've created an object, users, with some users in it and a function isEveryoneHere, 
// // which we pass the users object to as an argument. 
// // Finish writing this function so that it returns true only if the users object 
// // contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.



// // let users = {
// //   Alan: {
// //     age: 27,
// //     online: true
// //   },
// //   Jeff: {
// //     age: 32,
// //     online: true
// //   },
// //   Sarah: {
// //     age: 48,
// //     online: true
// //   },
// //   Ryan: {
// //     age: 19,
// //     online: true
// //   }
// // };

// // function isEveryoneHere(obj) {
// //   if (
// //     obj.hasOwnProperty("Alan") &&
// //     obj.hasOwnProperty("Jeff") &&
// //     obj.hasOwnProperty("Sarah") &&
// //     obj.hasOwnProperty("Ryan")
// //   ) {
// //     return true
// //   }
  
// //   return false
// //   return ['Alan','Jeff','Sarah','Ryan'].every(el=> obj.hasOwnProperty(el))

// // }

// // console.log(isEveryoneHere(users))
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // function largestOfFour(arr) {
// //   /////////////////////////////////// solution 1///////////////////////////////////////
// //   let result = []
// //   for(let el of arr){
// //     result.push(el.sort((a,b)=>b-a)[0])
// //   }
// //   return result


// // }

// // console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
// // console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))// should return [27, 5, 39, 1001]
// // console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))// should return [9, 35, 97, 1000000]
// // console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))// should return [25, 48, 21, -3]


// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function confirmEnding(str, target) {
// //   let aaa= target.length
// //   let bbb= str.length
// //   let ccc = bbb-aaa
// //   // console.log(aaa,bbb,ccc)
// //   return str.slice(str.length-target.length,str.length)===target
  
// //   // str.slice(target)
  
// //   // return str.slice(str.length-target.length,-target.length)


// // }

// // console.log(confirmEnding("Bastian", "n"))

// // console.log(confirmEnding("He has to give me a new name", "name"))// should return true.

// // console.log(confirmEnding("Open sesame", "same"))// should return true.

// // console.log(confirmEnding("Open sesame", "sage"))// should return false.

// // console.log(confirmEnding("Open sesame", "game"))// should return false.

// // console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"))// should return false.

// // console.log(confirmEnding("Abstraction", "action"))// should return true


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function truncateString(str, num) {
// //   return str.slice(0,num)+'...'



// // }

// // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) //should return the string A-tisket....

// // console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)) //should return the string Peter Piper....

// // console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)) //should return the string A-tisket a-tasket A green and yellow basket.

// // console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)) //should return the string A-tisket a-tasket A green and yellow basket.

// // console.log(truncateString("A-", 1)) //should return the string A....

// // console.log(truncateString("Absolutely Longer", 2)) //should return the string Ab....

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // function titleCase(str) {
// //   str = str.toLowerCase().split(' ')
// //   let result =[]
// //   for(let el of str){
// //     if(el[0]===el[0].toLowerCase()){
// //       result.push(el[0].toUpperCase()+el.slice(1).toLowerCase())
// //     } else {
// //       // result.push(el)
// //     }
// //   }
// //     return result.join(' ')
 
// // }



// // console.log(titleCase("I'm a little tea pot")) //should return the string I'm A Little Tea Pot.
// // console.log(titleCase("sHoRt AnD sToUt")) //should return the string Short And Stout.
// // console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) //should return the string Here Is My Handle Here Is My Spout.



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function frankenSplice(arr1, arr2, n) {
// //   let localArr = arr2.slice()
// //   localArr.splice(n,0,...arr1)
// //   return localArr
   
//   //   let localArr = arr2.slice()
// //   for(let i=0;i<arr1.length;i++){
// //     localArr.splice(n,0,arr1[i])
// //     n++
// //   }
// //   return localArr

// // }


// // console.log(frankenSplice([1, 2, 3], [4, 5], 1)) //should return [4, 1, 2, 3, 5].
// // console.log(frankenSplice([1, 2], ["a", "b"], 1)) //should return ["a", 1, 2, "b"].
// // console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)) //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Remove all falsy values from an array.

// // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// // Hint: Try converting each value to a Boolean.

// // function bouncer(arr) {
// //   let result = []
// //   let falsy = [false, null, 0, "", undefined, NaN]
// //   for(let i=0;i<arr.length;i++){
// //     if(!falsy.includes(arr[i])){
// //       result.push(arr[i])
// //     }
    
// //   }
// //   return result
// // }
  

// // console.log(bouncer([7, "ate", "", false, 9])) //should return [7, "ate", 9].
// // console.log(bouncer(["a", "b", "c"])) //should return ["a", "b", "c"].
// // console.log(bouncer([false, null, 0, NaN, undefined, ""])) //should return [].
// // console.log(bouncer([null, NaN, 1, 2, undefined])) //should return [1, 2].





// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function getIndexToIns(arr, num) {
// // //   if(arr.length===0){return 0}
  
// // //    arr.sort((a,b)=>a-b)
// // //   // if(arr[arr.length-1]>num){return }
// // //   for(let i=0;i<arr.length;i++){
// // //     if(arr[i]>=num){
// // //       return i
// // //     }
// // //   }
// // //   return arr.length
  
// //   return arr.concat(num)
// //   .sort((a,b)=>a-b)
// //   .indexOf(num)

// // }

// // console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) ///should return 3.
// // console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) ///should return 2.
// // console.log(getIndexToIns([40, 60], 50)) ///should return 1.
// // console.log(getIndexToIns([3, 10, 5], 3)) ///should return 0.
// // console.log(getIndexToIns([5, 3, 20, 3], 5)) ///should return 2.
// // console.log(getIndexToIns([2, 20, 10], 19)) ///should return 2.
// // console.log(getIndexToIns([2, 5, 10], 15)) ///should return 3.
// // console.log(getIndexToIns([], 1)) ///should return 0.










// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function mutation(arr) {
// // //   return arr[1].toLowerCase()
// // //   .split('')
// // //   .every(el=> arr[0].toLowerCase().indexOf(el)!==-1)
// //   debugger
// //   let test = arr[1].toLowerCase()
// //   let target=arr[0].toLowerCase()
// //   for(let i=0;i<test.length;i++){
// //     if(target.indexOf(test[i])<0){
// //       return false
// //     }
// //   }
// //   return true
  

// // }

// // console.log(mutation(["hello", "hey"])) //should return false.
// // console.log(mutation(["hello", "Hello"])) //should return true.
// // console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) //should return true.

// // console.log(mutation(["Mary", "Army"])) //should return true.

// // console.log(mutation(["Mary", "Aarmy"])) //should return true.

// // console.log(mutation(["Alien", "line"])) //should return true.

// // console.log(mutation(["floor", "for"])) //should return true.

// // console.log(mutation(["hello", "neo"])) //should return false.

// // console.log(mutation(["voodoo", "no"])) //should return false.

// // console.log(mutation(["ate", "date"])) //should return false.

// // console.log(mutation(["Tiger", "Zebra"])) //should return false.

// // console.log(mutation(["Noel", "Ole"])) //should return true.



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // var watchList = [
// //   {
// //     "Title": "Inception",
// //     "Year": "2010",
// //     "Rated": "PG-13",
// //     "Released": "16 Jul 2010",
// //     "Runtime": "148 min",
// //     "Genre": "Action, Adventure, Crime",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Christopher Nolan",
// //     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
// //     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
// //     "Language": "English, Japanese, French",
// //     "Country": "USA, UK",
// //     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
// //     "Metascore": "74",
// //     "imdbRating": "8.8",
// //     "imdbVotes": "1,446,708",
// //     "imdbID": "tt1375666",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "Interstellar",
// //     "Year": "2014",
// //     "Rated": "PG-13",
// //     "Released": "07 Nov 2014",
// //     "Runtime": "169 min",
// //     "Genre": "Adventure, Drama, Sci-Fi",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Jonathan Nolan, Christopher Nolan",
// //     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
// //     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
// //     "Language": "English",
// //     "Country": "USA, UK",
// //     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
// //     "Metascore": "74",
// //     "imdbRating": "8.6",
// //     "imdbVotes": "910,366",
// //     "imdbID": "tt0816692",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "The Dark Knight",
// //     "Year": "2008",
// //     "Rated": "PG-13",
// //     "Released": "18 Jul 2008",
// //     "Runtime": "152 min",
// //     "Genre": "Action, Adventure, Crime",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
// //     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
// //     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
// //     "Language": "English, Mandarin",
// //     "Country": "USA, UK",
// //     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
// //     "Metascore": "82",
// //     "imdbRating": "9.0",
// //     "imdbVotes": "1,652,832",
// //     "imdbID": "tt0468569",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "Batman Begins",
// //     "Year": "2005",
// //     "Rated": "PG-13",
// //     "Released": "15 Jun 2005",
// //     "Runtime": "140 min",
// //     "Genre": "Action, Adventure",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
// //     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
// //     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
// //     "Language": "English, Urdu, Mandarin",
// //     "Country": "USA, UK",
// //     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
// //     "Metascore": "70",
// //     "imdbRating": "8.3",
// //     "imdbVotes": "972,584",
// //     "imdbID": "tt0372784",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "Avatar",
// //     "Year": "2009",
// //     "Rated": "PG-13",
// //     "Released": "18 Dec 2009",
// //     "Runtime": "162 min",
// //     "Genre": "Action, Adventure, Fantasy",
// //     "Director": "James Cameron",
// //     "Writer": "James Cameron",
// //     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
// //     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
// //     "Language": "English, Spanish",
// //     "Country": "USA, UK",
// //     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
// //     "Metascore": "83",
// //     "imdbRating": "7.9",
// //     "imdbVotes": "876,575",
// //     "imdbID": "tt0499549",
// //     "Type": "movie",
// //     "Response": "True"
// //   }
// // ];

// // // // Only change code below this line

// // var ratings = watchList.map(el=>{
// //   return {
// //     'title':el.Title,
// //     'rating':el.imdbRating
    
// //   }
// // });
// // console.log(ratings)

// // // ratings should equal [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}].


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // var s = [23, 65, 98, 5];

// // Array.prototype.myMap = function(callback) {
// //   var newArray = [];

// //   // Add your code below this line
// //   this.forEach(el=>
// //     newArray.push(callback(el)))

// //   }
// //   // Add your code above this line

// //   return newArray;







// // // };

// // var new_s = s.myMap(function(item) {
// //   return item * 2;
// // });
// // console.log(myMap)

// // new_s should equal [46, 130, 196, 10].



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // The global variable
// // var watchList = [
// //   {
// //     "Title": "Inception",
// //     "Year": "2010",
// //     "Rated": "PG-13",
// //     "Released": "16 Jul 2010",
// //     "Runtime": "148 min",
// //     "Genre": "Action, Adventure, Crime",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Christopher Nolan",
// //     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
// //     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
// //     "Language": "English, Japanese, French",
// //     "Country": "USA, UK",
// //     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
// //     "Metascore": "74",
// //     "imdbRating": "8.8",
// //     "imdbVotes": "1,446,708",
// //     "imdbID": "tt1375666",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "Interstellar",
// //     "Year": "2014",
// //     "Rated": "PG-13",
// //     "Released": "07 Nov 2014",
// //     "Runtime": "169 min",
// //     "Genre": "Adventure, Drama, Sci-Fi",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Jonathan Nolan, Christopher Nolan",
// //     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
// //     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
// //     "Language": "English",
// //     "Country": "USA, UK",
// //     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
// //     "Metascore": "74",
// //     "imdbRating": "8.6",
// //     "imdbVotes": "910,366",
// //     "imdbID": "tt0816692",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "The Dark Knight",
// //     "Year": "2008",
// //     "Rated": "PG-13",
// //     "Released": "18 Jul 2008",
// //     "Runtime": "152 min",
// //     "Genre": "Action, Adventure, Crime",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
// //     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
// //     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
// //     "Language": "English, Mandarin",
// //     "Country": "USA, UK",
// //     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
// //     "Metascore": "82",
// //     "imdbRating": "9.0",
// //     "imdbVotes": "1,652,832",
// //     "imdbID": "tt0468569",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "Batman Begins",
// //     "Year": "2005",
// //     "Rated": "PG-13",
// //     "Released": "15 Jun 2005",
// //     "Runtime": "140 min",
// //     "Genre": "Action, Adventure",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
// //     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
// //     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
// //     "Language": "English, Urdu, Mandarin",
// //     "Country": "USA, UK",
// //     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
// //     "Metascore": "70",
// //     "imdbRating": "8.3",
// //     "imdbVotes": "972,584",
// //     "imdbID": "tt0372784",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "Avatar",
// //     "Year": "2009",
// //     "Rated": "PG-13",
// //     "Released": "18 Dec 2009",
// //     "Runtime": "162 min",
// //     "Genre": "Action, Adventure, Fantasy",
// //     "Director": "James Cameron",
// //     "Writer": "James Cameron",
// //     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
// //     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
// //     "Language": "English, Spanish",
// //     "Country": "USA, UK",
// //     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
// //     "Metascore": "83",
// //     "imdbRating": "7.9",
// //     "imdbVotes": "876,575",
// //     "imdbID": "tt0499549",
// //     "Type": "movie",
// //     "Response": "True"
// //   }
// // ];

// // // Only change code below this line

// var filteredList = watchList.filter(name=>name.Director==='Christopher Nolan')
// .map(el=>{
//   return {
//     'title':el.Title,
//     'rating':el.imdbRating
//   }
// })
// .filter(el => el.Director==='Christopher Nolan')
// // Only change code above this line
//     console.log(filteredList)

// // console.log(filteredList); //filteredList should equal [{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}].
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // The global variable
// // let s = [23, 65, 98, 5];

// // Array.prototype.myFilter = function(callback){
// //   // Only change code below this line
// //   let newArray = [];
// //   this.forEach(function(x) {
// //     if (callback(x) == true) {
// //       newArray.push(x);
// //     }
// //   });
// //   // Only change code above this line
// //   return newArray;
// // };

// // let new_s = s.myFilter(function(item){
// //   return item % 2 === 1;
// // });


// // let s = [23,65,98,5];








// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // The global variable
// // var watchList = [
// //   {
// //     "Title": "Inception",
// //     "Year": "2010",
// //     "Rated": "PG-13",
// //     "Released": "16 Jul 2010",
// //     "Runtime": "148 min",
// //     "Genre": "Action, Adventure, Crime",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Christopher Nolan",
// //     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
// //     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
// //     "Language": "English, Japanese, French",
// //     "Country": "USA, UK",
// //     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
// //     "Metascore": "74",
// //     "imdbRating": "8.8",
// //     "imdbVotes": "1,446,708",
// //     "imdbID": "tt1375666",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "Interstellar",
// //     "Year": "2014",
// //     "Rated": "PG-13",
// //     "Released": "07 Nov 2014",
// //     "Runtime": "169 min",
// //     "Genre": "Adventure, Drama, Sci-Fi",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Jonathan Nolan, Christopher Nolan",
// //     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
// //     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
// //     "Language": "English",
// //     "Country": "USA, UK",
// //     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
// //     "Metascore": "74",
// //     "imdbRating": "8.6",
// //     "imdbVotes": "910,366",
// //     "imdbID": "tt0816692",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "The Dark Knight",
// //     "Year": "2008",
// //     "Rated": "PG-13",
// //     "Released": "18 Jul 2008",
// //     "Runtime": "152 min",
// //     "Genre": "Action, Adventure, Crime",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
// //     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
// //     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
// //     "Language": "English, Mandarin",
// //     "Country": "USA, UK",
// //     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
// //     "Metascore": "82",
// //     "imdbRating": "9.0",
// //     "imdbVotes": "1,652,832",
// //     "imdbID": "tt0468569",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "Batman Begins",
// //     "Year": "2005",
// //     "Rated": "PG-13",
// //     "Released": "15 Jun 2005",
// //     "Runtime": "140 min",
// //     "Genre": "Action, Adventure",
// //     "Director": "Christopher Nolan",
// //     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
// //     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
// //     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
// //     "Language": "English, Urdu, Mandarin",
// //     "Country": "USA, UK",
// //     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
// //     "Metascore": "70",
// //     "imdbRating": "8.3",
// //     "imdbVotes": "972,584",
// //     "imdbID": "tt0372784",
// //     "Type": "movie",
// //     "Response": "True"
// //   },
// //   {
// //     "Title": "Avatar",
// //     "Year": "2009",
// //     "Rated": "PG-13",
// //     "Released": "18 Dec 2009",
// //     "Runtime": "162 min",
// //     "Genre": "Action, Adventure, Fantasy",
// //     "Director": "James Cameron",
// //     "Writer": "James Cameron",
// //     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
// //     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
// //     "Language": "English, Spanish",
// //     "Country": "USA, UK",
// //     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
// //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
// //     "Metascore": "83",
// //     "imdbRating": "7.9",
// //     "imdbVotes": "876,575",
// //     "imdbID": "tt0499549",
// //     "Type": "movie",
// //     "Response": "True"
// //   }
// // ];

// // // function getRating(watchList){
 
// // // }


// const getRating=(arr)=>{
//   return arr.filter(el=>el.Director==='Christopher Nolan')
//   .map(el=>Number(el.imdbRating))
//   .reduce((acc,curr)=>acc+curr)
//   // /arr.filter(el=>el.Director==='Christopher Nolan').length

// }

// // console.log(getRating(watchList))


// // The getRating(watchList) should equal 8.675.




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // const squareList = (arr) => {
// //   return arr.filter(el=> el%1===0 && el>0)
// //   .reduce((acc,cur)=>{
// //     acc.push(cur*cur)
// //     return acc
// //   },[])
 
// // };


// // console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])) //should return [16, 1764, 36].

// // console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])) //should return [9, 100, 49].




// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
// // The function should return a new array, and not mutate the globalArray variable.
// // var globalArray = [5, 6, 3, 2, 9];
// // function nonMutatingSort(arr) {
// //   // Add your code below this line

// // return [].concat(arr).sort((a,b)=>a-b)
// //   // Add your code above this line
// // }



// // console.log(nonMutatingSort(globalArray)) //should return [2, 3, 5, 6, 9].
// // console.log(nonMutatingSort([1, 30, 4, 21, 100000])) //should return [1, 4, 21, 30, 100000].

// // console.log(nonMutatingSort([140000, 104, 99])) //should return [99, 104, 140000].




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function urlSlug(title) {
// //   // let conv= title.toLowerCase().trim().split(' ').join('-')
// //   // return conv
// //   return title.split(' ')
// //   .filter(el=> el!=='')
// //   .join('-')
// //   .toLowerCase()
 
// // }


// // console.log(urlSlug("Winter Is Coming")) //should return the string winter-is-coming.

// // console.log(urlSlug(" Winter Is  Coming")) //should return the string winter-is-coming.

// // console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")) //should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.

// // console.log(urlSlug("Hold The Door")) //should return the string hold-the-door.





// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function sumAll(arr) {
// //   arr.sort((a,b)=>a-b)
// //   let output =0
// //   for(let i=arr[0];i<=arr[1];i++){
// //     output+=i
// //   }
// //   return output
 
// // }


// // console.log(sumAll([1, 4])) //should return 10.

// // console.log(sumAll([4, 1])) //should return 10.

// // console.log(sumAll([5, 10])) //should return 45.

// // console.log(sumAll([10, 5])) //should return 45.



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function diffArray(arr1, arr2) {
//   return arr1.concat(arr2)
//   .filter(el=> !arr1.includes(el) || !arr2.includes(el))
 
// }
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) 
// should return ["diorite", "pink wool"].



// // console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //should return ["pink wool"].

// // console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])) //should return [].
// // console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) //should return [4].
// // console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])) //should return ["piglet", 4].
// // console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])) //should return ["snuffleupagus", "cookie monster", "elmo"].
// // console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])) //should return [1, "calf", 3, "piglet", 7, "filly"].



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function destroyer(arr,...remove) {
// // //   let removal = Object.values(arguments).slice(1)
// // //   let result = []
  
// // //   for(let  i =0;i<arr.length;i++){
// // //     if(!removal.includes(arr[i])){
// // //       result.push(arr[i])
// // //     }
// // //   }
// // //   return result
  
  
// //   return arr.filter(el=>!remove.includes(el))
  
// // }

// // console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) //should return [1, 1].
// // console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)) //should return [1, 5, 1].
// // console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)) //should return [1].
// // console.log(destroyer([2, 3, 2, 3], 2, 3)) //should return [].
// // console.log(destroyer(["tree", "hamburger", 53], "tree", 53)) //should return ["hamburger"].
// // console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")) //should return [12,92,65].





// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function whatIsInAName(collection, source) {
//   let fKeys = Object.keys(source)
//   for(let keys of collection){
//     if(fKeys===keys){
//       return [keys,obj[keys]]
//     }
//   }
  
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   var srcKeys = Object.keys(source);

//   // filter the collection
//   return collection.filter(function(obj) {
//     return srcKeys
//       .map(function(key) {
//         return obj.hasOwnProperty(key) && obj[key] === source[key];
//       })
//       .reduce(function(a, b) {
//         return a && b;
//       });
//   });


//   var srcKeys = Object.keys(source);

//   return collection.filter(function(obj) {
//     return srcKeys.every(function(key) {
//       return obj.hasOwnProperty(key) && obj[key] === source[key];
//     });
//   });

//   var srcKeys = Object.keys(source);

//   // filter the collection
//   return collection.filter(function(obj) {
//     for (var i = 0; i < srcKeys.length; i++) {
//       if (
//         !obj.hasOwnProperty(srcKeys[i]) ||
//         obj[srcKeys[i]] !== source[srcKeys[i]]
//       ) {
//         return false;
//       }
//     }
//     return true;
//   });
// }


// //  //////////get back to this later
// // }


// // console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })) //should return [{ first: "Tybalt", last: "Capulet" }].

// // console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })) //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

// // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

// // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })) //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

// // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

// // console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})) //should return []


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // function spinalCase(str) {
// //   return str.split(' ')
  
// // }



// // console.log(spinalCase("This Is Spinal Tap")) //should return the string this-is-spinal-tap.

// // console.log(spinalCase("thisIsSpinalTap")) //should return the string this-is-spinal-tap.

// // console.log(spinalCase("The_Andy_Griffith_Show")) //should return the string the-andy-griffith-show.

// // console.log(spinalCase("Teletubbies say Eh-oh")) //should return the string teletubbies-say-eh-oh.

// // console.log(spinalCase("AllThe-small Things")) //should return the string all-the-small-things.






// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// // - If a word begins with a vowel, just add way at the end.

// // function translatePigLatin(str) {
// //   let vowels = ['a','e','i','o','u']
// //   let newStr = str.slice(1)
  
// //   if(vowels.includes(str[0])){
// //     return str+'way'
    
// //   } else {
    
// //   return newStr+str[0]+'ay'
// //   }
  
  
  
// // }

// // console.log(translatePigLatin("california")) //should return the string aliforniacay.

// // console.log(translatePigLatin("paragraphs")) //should return the string aragraphspay.

// // console.log(translatePigLatin("glove")) //should return the string oveglay.

// // console.log(translatePigLatin("algorithm")) //should return the string algorithmway.

// // console.log(translatePigLatin("eight")) //should return the string eightway.
// // console.log(translatePigLatin("schwartz")) //should return the string artzschway.

// // console.log(translatePigLatin("rhythm")) //should return the string rhythmay.





// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // function myReplace(str, before, after) {
// //   let obj = {}
// //   obj[before]=after
// //   for(let el in obj){
// //     str=str.replace(el,obj[el])
// //   }
// //   return str
  
  
// // }





// // console.log(myReplace("Let us go to the store", "store", "mall")) //should return the string Let us go to the mall.
// // console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) //should return the string He is Sitting on the couch.
// // console.log(myReplace("I think we should look up there", "up", "Down")) //should return the string I think we should look down there.
// // console.log(myReplace("This has a spellngi error", "spellngi", "spelling")) //should return the string This has a spelling error.
// // console.log(myReplace("His name is Tom", "Tom", "john")) //should return the string His name is John.
// // console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")) //should return the string Let us get back to more Algorithms.

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // function pairElement(str) {
// //   //create object for pair lookup
// //   var pairs = {
// //     A: "T",
// //     T: "A",
// //     C: "G",
// //     G: "C"
// //   };
// //   //split string into array of characters
// //   var arr = str.split("");
// //   //map character to array of character and matching pair
// //   return arr.map(x => [x, pairs[x]]);
// // }

// // // //test here



// // console.log(pairElement("ATCGA")) //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// // console.log(pairElement("TTGAG")) //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// // console.log(pairElement("CTCTA")) //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].




// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function fearNotLetter(str) {
// //     for (var i = 0; i < str.length; i++) {
// //     /* code of current character */
// //     var code = str.charCodeAt(i);

// //     /* if code of current character is not equal to first character + no of iteration
// //         hence character has been escaped */
// //     if (code !== str.charCodeAt(0) + i) {
// //       /* if current character has escaped one character find previous char and return */
// //       return String.fromCharCode(code - 1);
// //     }
// //   }
// //   return undefined;
 
// // }


// // console.log(fearNotLetter("abce")) //should return the string d.

// // console.log(fearNotLetter("abcdefghjklmno")) //should return the string i.

// // console.log(fearNotLetter("stvwx")) //should return the string u.

// // console.log(fearNotLetter("bcdf")) //should return the string e.

// // console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) //should return undefined.





// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function uniteUnique(...arr) {
// //   return arr.reduce((acc,curr)=>{
// //     return acc.concat(curr.filter(num=>!acc.includes(num)))
// //   })
// // }


// // console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) //should return [1, 3, 2, 5, 4].

// // console.log(uniteUnique([1, 2, 3], [5, 2, 1])) //should return [1, 2, 3, 5].

// // console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) //should return [1, 2, 3, 5, 4, 6, 7, 8].






// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function dropElements(arr, func) {
// //   let result = []
// //   let toggle = false
// //   for(let i=0;i<arr.length;i++){
// //     if(func(arr[i])){
// //       toggle = true
// //     }
// //     if(toggle){
// //       result.push(arr[i])
// //     }
    
// //   }
// //   return result
 
// // }



// // console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})) //should return [3, 4].

// // console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})) //should return [1, 0, 1].

// // console.log(dropElements([1, 2, 3], function(n) {return n > 0;})) //should return [1, 2, 3].

// // console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})) //should return [].

// // console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})) //should return [7, 4].

// // console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})) //should return [3, 9, 2].






// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // function truthCheck(collection, pre) {
// //   return collection.every(el=> el[pre])
 
// // }


// // console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")) //should return true.

// // console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")) //should return false.

// // console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")) //should return false.

// // console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")) //should return false.

// // console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")) //should return true.

// // console.log(truthCheck([{"single": "yes"}], "single")) //should return true.

// // console.log(truthCheck([{"single": ""}, {"single": "double"}], "single")) //should return false.

// // console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single")) //should return false.

// // console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single")) //should return false.






// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // function palindrome(str) {
  
// // }

// // console.log(palindrome("eye")) //should return a boolean.

// // console.log(palindrome("eye")) //should return true.

// // console.log(palindrome("_eye")) //should return true.

// // console.log(palindrome("race car")) //should return true.

// // console.log(palindrome("not a palindrome")) //should return false.

// // console.log(palindrome("A man, a plan, a canal. Panama")) //should return true.

// // console.log(palindrome("never odd or even")) //should return true.

// // console.log(palindrome("nope")) //should return false.

// // console.log(palindrome("almostomla")) //should return false.

// // console.log(palindrome("My age is 0, 0 si ega ym.")) //should return true.

// // console.log(palindrome("1 eye for of 1 eye.")) //should return false.

// // console.log(palindrome("0_0 (: /-\ :) 0-0")) //should return true.

// // console.log(palindrome("five|\_/|four")) //should return false.






// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Create an array of objects which hold the denominations and their values
// // var denom = [
// //   { name: "ONE HUNDRED", val: 100.0 },
// //   { name: "TWENTY", val: 20.0 },
// //   { name: "TEN", val: 10.0 },
// //   { name: "FIVE", val: 5.0 },
// //   { name: "ONE", val: 1.0 },
// //   { name: "QUARTER", val: 0.25 },
// //   { name: "DIME", val: 0.1 },
// //   { name: "NICKEL", val: 0.05 },
// //   { name: "PENNY", val: 0.01 }
// // ];

// // function checkCashRegister(price, cash, cid) {
// //   var output = { status: null, change: [] };
// //   var change = cash - price;

// //   // Transform CID array into drawer object
// //   var register = cid.reduce(
// //     function(acc, curr) {
// //       acc.total += curr[1];
// //       acc[curr[0]] = curr[1];
// //       return acc;
// //     },
// //     { total: 0 }
// //   );

// //   // Handle exact change
// //   if (register.total === change) {
// //     output.status = "CLOSED";
// //     output.change = cid;
// //     return output;
// //   }

// //   // Handle obvious insufficient funds
// //   if (register.total < change) {
// //     output.status = "INSUFFICIENT_FUNDS";
// //     return output;
// //   }

// //   // Loop through the denomination array
// //   var change_arr = denom.reduce(function(acc, curr) {
// //     var value = 0;
// //     // While there is still money of this type in the drawer
// //     // And while the denomination is larger than the change remaining
// //     while (register[curr.name] > 0 && change >= curr.val) {
// //       change -= curr.val;
// //       register[curr.name] -= curr.val;
// //       value += curr.val;

// //       // Round change to the nearest hundreth deals with precision errors
// //       change = Math.round(change * 100) / 100;
// //     }
// //     // Add this denomination to the output only if any was used.
// //     if (value > 0) {
// //       acc.push([curr.name, value]);
// //     }
// //     return acc; // Return the current change_arr
// //   }, []); // Initial value of empty array for reduce

// //   // If there are no elements in change_arr or we have leftover change, return
// //   // the string "Insufficient Funds"
// //   if (change_arr.length < 1 || change > 0) {
// //     output.status = "INSUFFICIENT_FUNDS";
// //     return output;
// //   }

// //   // Here is your change, ma'am.
// //   output.status = "OPEN";
// //   output.change = change_arr;
// //   return output;
// // }




// // console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) //should return an object.

// // console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// // console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.







// //1..///////////////////////////////////////////////////////////////////////////////////////////////////////////////////1. Two Sum/////////////////////////////////////////////////////////////////////////////////////////////

// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// // You may assume that each input would have exactly one solution, and you may not use the same element twice.
// // You can return the answer in any order.
// // Example 1:
// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// // Example 2:
// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]

// // Example 3:
// // Input: nums = [3,3], target = 6
// // Output: [0,1]

// // Constraints:
// // 2 <= nums.length <= 103
// // -109 <= nums[i] <= 109
// // -109 <= target <= 109
// // Only one valid answer exists.

// ///////////////////solution 1 //////////////////////////////////
// // let twoSum = function(nums, target) {
// //   for(let i=0;i<nums.length;i++){
// //     for(let j=i+1;j<nums.length;j++){
// //       if(nums[i]+nums[j]===target){
// //         return [nums[i],nums[j]]
// //       }
// //     }
// //   }

// // }


// // console.log(twoSum([2,7,11,15],9))
// // console.log(twoSum([3,2,4],6))
// // console.log(twoSum([3,3],6))



// //////////3.......///////////////////////////////////////////////////////////////////////////////////////9. Palindrome Number///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Given an integer x, return true if x is palindrome integer.
// // An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// // Example 1:
// // Input: x = 121
// // Output: true

// // Example 2:
// // Input: x = -121
// // Output: false
// // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// // Example 3:
// // Input: x = 10
// // Output: false
// // Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// // Example 4:
// // Input: x = -101
// // Output: false
 

// // Constraints:
// // -231 <= x <= 231 - 1
 
// // Follow up: Could you solve it without converting the integer to a string?

// // function isPalindrome(x,bool){
// //   let conv = x.toString()
// //   .split('')
// //   .reverse()
// //   .join('')
// //   return parseInt(conv) * Math.sign(x)

// // }

// // console.log(isPalindrome(121),true)
// // console.log(isPalindrome(-121),false)
// // console.log(isPalindrome(10),false)
// // console.log(isPalindrome(-101),false)


// //////////////////4.....///////////////////////////////////////////////////////////////////////////////////////////////////////13.  Roman to Interger/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// // Symbol       Value
// // I             1
// // V             5
// // X             10
// // L             50
// // C             100
// // D             500
// // M             1000
// // For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// // Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// // I can be placed before V (5) and X (10) to make 4 and 9. 
// // X can be placed before L (50) and C (100) to make 40 and 90. 
// // C can be placed before D (500) and M (1000) to make 400 and 900.
// // // Given a roman numeral, convert it to an integer.

// // Example 1:
// // Input: s = "III"
// // Output: 3

// // Example 2:
// // Input: s = "IV"
// // Output: 4

// // Example 3:
// // Input: s = "IX"
// // Output: 9

// // Example 4:
// // Input: s = "LVIII"
// // Output: 58
// // Explanation: L = 50, V= 5, III = 3.

// // Example 5:
// // Input: s = "MCMXCIV"
// // Output: 1994
// // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// // Constraints:
// // 1 <= s.length <= 15
// // s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// // It is guaranteed that s is a valid roman numeral in the range [1, 3999].

function romanToInt(r) {
  let roman = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  }
  let sum=0
  for(let i=0;i<r.length;i++){
    if(roman[r[i+1]]>roman[r[i]]){
      sum+=roman[r[i+1]] - roman[r[i]]
      i++
    } else {
      sum+=roman[r[i]]
    }
    
  }
  return sum
}

console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))



// ////////////////////////5.......///////////////////////////////////////////////////////////////////////////////////////14. longest common prefix///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Write a function to find the longest common prefix string amongst an array of strings.
// // If there is no common prefix, return an empty string "".

// // Example 1:
// // Input: strs = ["flower","flow","flight"]
// // Output: "fl"

// // Example 2:
// // // Input: strs = ["dog","racecar","car"]
// // // Output: ""
// // // Explanation: There is no common prefix among the input strings.
 
// // // Constraints:
// // // 0 <= strs.length <= 200
// // // 0 <= strs[i].length <= 200
// // // strs[i] consists of only lower-case English letters.



// function longestCommonPrefix(strs){
//   debugger
//   if(!strs.length){return ''}
//   for(let i=0;i<strs[0].length;i++){
//     for(let el of strs){
//       if(el[i]!==strs[0][i]){return el.slice(0,i)}
//     }
//   }
//   return strs[0]

  

// }

// console.log(longestCommonPrefix(["flower","flow","flight"])) // Output: "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // Output: ""


// //6........////////////////////////////////////////////////////////////////////////////////////////////////////////////20. valid parentheses///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// // An input string is valid if:
// // Open brackets must be closed by the same type of brackets.
// // Open brackets must be closed in the correct order.
 
// // Example 1:
// // Input: s = "()"
// // Output: true

// // Example 2:
// // Input: s = "()[]{}"
// // Output: true

// // Example 3:
// // Input: s = "(]"
// // Output: false

// // Example 4:
// // Input: s = "([)]"
// // Output: false

// // Example 5:
// // Input: s = "{[]}"
// // Output: true
 
// // Constraints:
// // 1 <= s.length <= 104
// // s consists of parentheses only '()[]{}'.

// // function isValid(s){
// //   let result = []
// //   let obj = {
// //     '}':'{',
// //     ')':'(',
// //     ']':'['
// //   }
// //   debugger
// //   for (let key of s){
// //     if(!obj[key]){
// //       result.push(key)
// //     } else if (result.pop()!==obj[key]){
// //       return false
// //     }
// //   }
// //   return result.length===0
// // }

// // console.log(isValid("()")) //true
// // console.log(isValid("()[]{}")) // true
// // console.log(isValid("(]")) // false
// // console.log(isValid("([)]")) // false
// // console.log(isValid("{[]}")) // true




// ///////////8..........///////////////////////////////////////////////////////////////26. Remove Duplicates from Sorted Array////////////////////////////////////////////////////////
// // Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// // Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// // Clarification:

// // Confused why the returned value is an integer but your answer is an array?

// // Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// // Internally you can think of this:

// // // nums is passed in by reference. (i.e., without making a copy)
// // int len = removeDuplicates(nums);

// // // any modification to nums in your function would be known by the caller.
// // // using the length returned by your function, it prints the first len elements.
// // for (int i = 0; i < len; i++) {
// //     print(nums[i]);
// // }
 
// // Example 1:
// // Input: nums = [1,1,2]
// // Output: 2, nums = [1,2]
// // Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

// // Example 2:
// // Input: nums = [0,0,1,1,1,2,2,3,3,4]
// // Output: 5, nums = [0,1,2,3,4]
// // Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
 

// // Constraints:

// // 0 <= nums.length <= 3 * 104
// // -104 <= nums[i] <= 104
// // nums is sorted in ascending order.


// // function removeDuplicates(nums){
// //   for(let i=1;i<nums.length;i++){
// //     if(nums[i]===nums[i-1]){
// //       nums.splice(i,1)
// //       i--
// //     }
// //   }
// //   return nums

// // }

// // console.log(removeDuplicates([1,1,2]))
// // console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))




// ////////////9.............////////////////////////////////////////////////////////////////////////////////////////////////////////////27. Remove Element////////////////////////////////////////////////////////////////////////
// // Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// // Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// // The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// // Clarification:

// // Confused why the returned value is an integer but your answer is an array?
// // Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.
// // Internally you can think of this:

// // // nums is passed in by reference. (i.e., without making a copy)
// // int len = removeElement(nums, val);

// // // any modification to nums in your function would be known by the caller.
// // // using the length returned by your function, it prints the first len elements.
// // for (int i = 0; i < len; i++) {
// //     print(nums[i]);
// // }
 

// // Example 1:

// // Input: nums = [3,2,2,3], val = 3
// // Output: 2, nums = [2,2]
// // Explanation: Your function should return length = 2, with the first two elements of nums being 2.
// // It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.

// // Example 2:
// // Input: nums = [0,1,2,2,3,0,4,2], val = 2
// // Output: 5, nums = [0,1,4,0,3]
// // Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
 

// // Constraints:
// // 0 <= nums.length <= 100
// // // 0 <= nums[i] <= 50
// // // 0 <= val <= 100

// // function removeElement(nums, val){
// //   for(let i=0;i<nums.length;i++){
// //     if(nums[i]===val){
// //       nums.splice(i,1)
// //       i--
// //     }
// //   }
// //   return nums


// // }

// // console.log(removeElement([3,2,2,3],3)) //Output: 2, nums = [2,2]
// // console.log(removeElement([0,1,2,2,3,0,4,2],2)) //Output: 5, nums = [0,1,4,0,3]





// //////////10......//////////////////////////////////////////////////////////////////////////////////////28.Implement strStr()////////////////////////////////////////////////////////////////////////
// // Implement strStr().
// // Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// // Clarification:
// // What should we return when needle is an empty string? This is a great question to ask during an interview.
// // For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// // Example 1:
// // Input: haystack = "hello", needle = "ll"
// // Output: 2

// // Example 2:
// // Input: haystack = "aaaaa", needle = "bba"
// // Output: -1

// // Example 3:
// // Input: haystack = "", needle = ""
// // Output: 0
 

// // Constraints:
// // 0 <= haystack.length, needle.length <= 5 * 104
// // haystack and needle consist of only lower-case English characters.

// // function strStr(haystack, needle){
// //   if(haystack===''){return 0}
// //   let i = 0
// //   while(i<haystack.length){
// //     if(haystack.slice(i,i+needle.length)===needle){
// //       return i
// //     }
// //     i++
// //   }
// //   return -1
  


// // }

// // console.log(strStr("hello","ll"))
// // console.log(strStr("aaabba", "bba"))
// // console.log(strStr("",""))




// ///////11.........../////////////////////////////////////////////////////////////////////////////////////////35.  Search Insert Position////////////////////////////////////////////////////////////////////////
// // Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// // If not, return the index where it would be if it were inserted in order.

// // Example 1:
// // Input: nums = [1,3,5,6], target = 5
// // Output: 2

// // Example 2:
// // Input: nums = [1,3,5,6], target = 2
// // Output: 1

// // Example 3:
// // Input: nums = [1,3,5,6], target = 7
// // Output: 4

// // Example 4:
// // Input: nums = [1,3,5,6], target = 0
// // Output: 0

// // Example 5:
// // Input: nums = [1], target = 0
// // Output: 0
 
// // Constraints:
// // 1 <= nums.length <= 104
// // -104 <= nums[i] <= 104
// // nums contains distinct values sorted in ascending order.
// // -104 <= target <= 104

// // function searchInsert(nums, target){
// //   for(let i=0; i<nums.length;i++){
// //     if(nums[i]>=target){
// //       return i
// //     }
// //   }
// //   return nums.length

// // }

// // console.log(searchInsert([1,3,5,6],5)) // Output:2
// // console.log(searchInsert([1,3,5,6],2)) // Output:1
// // console.log(searchInsert([1,3,5,6],7))// Output:4
// // console.log(searchInsert([1,3,5,6],0)) // Output:0
// // console.log(searchInsert([1],0)) // Output:0



// ////////13............////////////////////////////////////////////////////////////////////////////////////////53.  Maximum subarray ////////////////////////////////////////////////////////////////////////
// // Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. 

// // Example 1:
// // Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// // Output: 6
// // Explanation: [4,-1,2,1] has the largest sum = 6.

// // Example 2:
// // Input: nums = [1]
// // Output: 1

// // Example 3:
// // Input: nums = [0]
// // Output: 0

// // Example 4:
// // Input: nums = [-1]
// // Output: -1

// // Example 5:
// // Input: nums = [-100000]
// // // Output: -100000

// // function maxSubarray(nums){
// //   if(!nums) return;
// //   if(nums.length === 1) return nums[0];
// //   let result = nums[0];
// //   for(let i = 1; i < nums.length; i++) {
// //     nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
// //     result = Math.max(result, nums[i]);
// //   }
// //   return result; 

// // }

// // console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])) //6

// // console.log(maxSubarray([5,4,-1,7,8])) //23

// //easy//////////////////////////////////////////////////////////////14............////////////////////////////////////////////////////////////////////////////////////////58. Length of Last Word//////////////////// //////////////////////////////

// // Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// // A word is a maximal substring consisting of non-space characters only.

//  // Example 1:
// // Input: s = "Hello World"
// // Output: 5

// // Example 2:
// // Input: s = " "
// // Output: 0
 

// // Constraints:

// // 1 <= s.length <= 104
// // s consists of only English letters and spaces ' '.


// ////////////split solutino////////////////
// // function lengthOfLastWord(str){


// // };


// // console.log(lengthOfLastWord('Hello World'))
// // console.log(lengthOfLastWord('a '))
// // console.log(lengthOfLastWord(' a'))





// //easy/////////////////////////////////////////////15........////////////////////////////////////       66. Plus one ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// // The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// // You may assume the integer does not contain any leading zero, except the number 0 itself.


// // Example 1:
// // Input: digits = [1,2,3]
// // Output: [1,2,4]
// // Explanation: The array represents the integer 123.

// // Example 2:
// // Input: digits = [4,3,2,1]
// // Output: [4,3,2,2]
// // Explanation: The array represents the integer 4321.

// // Example 3:
// // Input: digits = [0]
// // Output: [1]


// // function plusOne(digits){

// // }

// ///////////////////ask arthur how to debug this?????/////////////////////////
// // function plusOne(digits) {
// //   let result = []
// //   for(let i=0;i<digits.length;i++){
// //     if(digits.length-1===i){
// //       result.push(digits[i]+1)
// //     } else {
// //       result.push(digits[i])
// //     }
// //   }
// //   return result
 
// // };

// // console.log(plusOne([9]))
// // console.log(plusOne([1,2,3]))
// // console.log(plusOne([4,3,2,1]))
// // console.log(plusOne([0]))



// //easy///////////////////////////////////////////////17........////////////////////////////////////       70. Climbing Stairs ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////this one is a little hard
// // You are climbing a staircase. It takes n steps to reach the top.

// // Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// // Example 1:

// // Input: n = 2
// // Output: 2
// // Explanation: There are two ways to climb to the top.
// // 1. 1 step + 1 step
// // 2. 2 steps

// // Example 2:
// // Input: n = 3
// // Output: 3
// // Explanation: There are three ways to climb to the top.
// // 1. 1 step + 1 step + 1 step
// // 2. 1 step + 2 steps
// // 3. 2 steps + 1 step

// // function climbStairs(n){


// // }
// // console.log(climbStairs(2))
// // console.log(climbStairs(3))
// // console.log(climbStairs(4))

// ///////////////end



// //easy////////////////////////////////////////18........////////////////////////////////////       83.  Remove duplicates from sorted lists ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// // Example 1:
// // Input: head = [1,1,2]
// // Output: [1,2]

// // Example 2:
// // Input: head = [1,1,2,3,3]
// // Output: [1,2,3]

// // function deleteDuplicates(head){
// //   for(let i=1;i<head.length;i++){
// //     if(head[i]===head[i-1]){
// //       head.splice(i,1)
// //       i--
// //     }
// //   }
// //   return head
  

// // }

// // console.log(deleteDuplicates([1,1,2])) // [1,2]
// // console.log(deleteDuplicates([1,1,2,3,3])) // [1,2,3]



// /////////////easy/////////////////////////////19.........//////////////////////// 88. Merge Sorted Array//////////////////////////////////////////////////////////////////////////////
// // The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n 
// // such that it has enough space to hold additional elements from nums2.


// // Example 1:
// // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// // Output: [1,2,2,3,5,6]

// // Example 2:
// // Input: nums1 = [1], m = 1, nums2 = [], n = 0
// // Output: [1]
 

// // Constraints:
// // nums1.length == m + n
// // nums2.length == n
// // 0 <= m, n <= 200
// // 1 <= m + n <= 200
// // -109 <= nums1[i], nums2[i] <= 109


// // function merge(nums1, m, nums2, n){


// // }

// // console.log(merge([1,2,3,0,0,0], 3,  [2,5,6], 3))
// // console.log(merge([1],  1,  [],  0))
// // console.log(merge([1,2,3,5,6,5,20,7], 4,  [8,9,11,10], 3))




// /////////////////easy//////////////////////////20.........//////////////////////// 121. best time to buy and sell stock//////////////////////////////////////////////////////////////////////////////


// // You are given an array prices where prices[i] is the price of a given stock on the ith day.

// // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 

// // Example 1:
// // Input: prices = [7,1,5,3,6,4]
// // Output: 5
// // Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// // Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// // Example 2:
// // Input: prices = [7,6,4,3,1]
// // Output: 0
// // Explanation: In this case, no transactions are done and the max profit = 0.
 

// // function maxProfit(prices){
// //   let buy = prices[0]
// //   let max = prices[0]
// //   let profit = 0
// //   for(let i=1;i<prices.length;i++){
// //     if(prices[i]<buy){
// //       buy = prices[i]
// //     }
// //     if(prices[i]>max){
// //       max = prices[i]
      
// //     }
// //     profit = max - buy
    
    
// //   }
// //   return profit

// // }

// // // console.log(maxProfit([7,1,5,3,6,4])) // return 5
// // // console.log(maxProfit([7,6,4,3,1])) // return 0



// ///////////////////////easy////////////////////21.........//////////////////////// 122. best time to buy and sell stock//////////////////////////////////////////////////////////////////////////////
// // Say you have an array prices for which the ith element is the price of a given stock on day i.

// // Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// // Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// // Example 1:
// // Input: [7,1,5,3,6,4]
// // Output: 7
// // Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// //              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// // Example 2:
// // Input: [1,2,3,4,5]
// // Output: 4
// // Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// //              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// //              engaging multiple transactions at the same time. You must sell before buying again.

// // Example 3:
// // Input: [7,6,4,3,1]
// // Output: 0
// // Explanation: In this case, no transaction is done, i.e. max profit = 0.


//         // buyPrice = Math.min(prices[i],buyPrice)
//         // maxProfit = Math.max(prices[i] - buyPrice, maxProfit)


// function maxProfit(prices) {
//   if(prices.length===0){return 0}
//   let buy = prices[0]
//   let profit = 0
//   for(let i=0; i<prices.length;i++){
//     if(prices[i]>buy){
//       profit+=prices[i]-buy
//       buy = prices[i]
//     } else {
//       buy = prices[i]
//     }
//   }
//   return profit
// }

// console.log(maxProfit([7,1,5,3,6,4])) // return 7
// // console.log(maxProfit([1,2,3,4,5])) // return 4
// // console.log(maxProfit([7,6,4,3,1])) // return 0


// //////////////easy////////////////////////////22.........//////////////////////// 136. single number//////////////////////////////////////////////////////////////////////////////

// // Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// // Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

// // Example 1:
// // Input: nums = [2,2,1]
// // Output: 1

// // Example 2:
// // Input: nums = [4,1,2,1,2]
// // Output: 4

// // Example 3:
// // Input: nums = [1]
// // Output: 1

// // function singleNumber(nums){
// //   let obj = {}
// //   for(let el of nums){
// //     if(obj[el]){
// //       obj[el]++
// //     } else {
// //       obj[el]=1
// //     }
// //   }
// //   return Object.keys(obj).reduce((acc,curr)=> obj[acc]<obj[curr] ? acc:curr)

// // }

// // console.log(singleNumber([2,2,1]))
// // console.log(singleNumber([4,1,2,1,2]))
// // console.log(singleNumber([1]))


// /////////////easy/////////////////////////////23.........//////////////////////// 167.  Two Sum II - Input array is sorted//////////////////////////////////////////////////////////////////////////////
// //Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// // Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

// // You may assume that each input would have exactly one solution and you may not use the same element twice.

// // Example 1:
// // Input: numbers = [2,7,11,15], target = 9
// // Output: [1,2]
// // Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

// // Example 2:
// // Input: numbers = [2,3,4], target = 6
// // Output: [1,3]

// // Example 3:
// // Input: numbers = [-1,0], target = -1
// // Output: [1,2]

// // function twoSum(numbers, target){
// //   for(let i=0;i<numbers.length;i++){
// //     for(let j=i+1;j<numbers.length;j++){
// //       if(numbers[i]+numbers[j]===target){
// //         return [i+1,j+1]
// //       }
// //     }
// //   }

// // };

// // console.log(twoSum([2,7,11,15], 9))
// // console.log(twoSum([2,3,4], 6))
// // console.log(twoSum([-1,0], -1))







// //////////////easy/////////////////////////////25.........////////////////////////283.  Move Zeros//////////////////////////////////////////////////////////////////////////////
// // Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// // Example:

// // Input: [0,1,0,3,12]
// // Output: [1,3,12,0,0]


// // function moveZeroes(nums){
// //   let result = []
// //   for(let i=0; i<nums.length;i++){
// //     if(nums[i]===0){
// //       nums.splice(i,1)
// //       nums.push(0)
      
// //     }
// //   }
// //   return nums

// // };

// // console.log(moveZeroes([0,1,0,3,12]))





// //////////////easy/////////////////////////////26.........////////////////////////168 excel shet column title//////////////////////////////////////////////////////////////////////////////

// //https://www.youtube.com/watch?v=gBZY97ECvN0

// //come back to this problem


// // Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// // For example:
// //     1 -> A
// //     2 -> B
// //     3 -> C
// //     ...
// //     26 -> Z
// //     27 -> AA
// //     28 -> AB 
// //     ...

// // Example 1:
// // Input: 1
// // Output: "A"

// // Example 2:
// // Input: 28
// // Output: "AB"

// // Example 3:
// // Input: 701
// // Output: "ZY"

// // function convertToTitle(n) {

// //     };
    

// // console.log(convertToTitle(1)) // A
// // console.log(convertToTitle(28)) // AB
// // console.log(convertToTitle(701)) // ZY





// /////////////////////////////////medium//////////28.........////////////////////////3. longest substring without repeating characters//////////////////////////////////////////////////////////////////////////////
// // Given a string s, find the length of the longest substring without repeating characters.

// // Example 1:
// // Input: s = "abcabcbb"
// // Output: 3
// // Explanation: The answer is "abc", with the length of 3.

// // Example 2:
// // Input: s = "bbbbb"
// // Output: 1
// // Explanation: The answer is "b", with the length of 1.

// // Example 3:
// // Input: s = "pwwkew"
// // Output: 3
// // Explanation: The answer is "wke", with the length of 3.
// // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// // Example 4:
// // Input: s = ""
// // Output: 0


// ////////////reduce solution///////////
// // function lengthOfLongestSubstring(s){
// //   let result = []
// // let conv=s.split('')
// // for(let el of conv){
// //   result.push(conv.indexOf(el))
// // }
// //   return result


// // }


// // console.log(lengthOfLongestSubstring("abcabcbb")) // 3
// // console.log(lengthOfLongestSubstring("bbbb")) // 1
// // console.log(lengthOfLongestSubstring("pwwkew")) // 3




// /////////////////////////////////hard//////////29.........////////////////////////3. Median of Two SOrted Arrays//////////////////////////////////////////////////////////////////////////////
// // Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// // Follow up: The overall run time complexity should be O(log (m+n)).

 

// // Example 1:
// // Input: nums1 = [1,3], nums2 = [2]
// // Output: 2.00000
// // Explanation: merged array = [1,2,3] and median is 2.

// // Example 2:
// // Input: nums1 = [1,2], nums2 = [3,4]
// // Output: 2.50000
// // Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// // Example 3:
// // Input: nums1 = [0,0], nums2 = [0,0]
// // Output: 0.00000

// // Example 4:
// // Input: nums1 = [], nums2 = [1]
// // Output: 1.00000

// // Example 5:
// // Input: nums1 = [2], nums2 = []
// // Output: 2.00000
// ///your solution
// // function findMedianSortedArrays(nums1, nums2){

// // }


// // console.log( findMedianSortedArrays([1,3],[2])) //2
// // console.log( findMedianSortedArrays([1,2],[3,4])) //2.5
// // console.log( findMedianSortedArrays([0,0],[0,0])) // 0
// // console.log( findMedianSortedArrays([],[])) // nan
// // console.log( findMedianSortedArrays([2],[])) // 2

// /////////////////////////////////medium//////////30.........////////////////////////5. Largest Palindromic Substring//////////////////////////////////////////////////////////////////////////////
// // Given a string s, return the longest palindromic substring in s.
 
// // Example 1:
// // Input: s = "babad"
// // Output: "bab"
// // Note: "aba" is also a valid answer.

// // Example 2:
// // Input: s = "cbbd"
// // Output: "bb"

// // Example 3:
// // Input: s = "a"
// // Output: "a"

// // Example 4:
// // Input: s = "ac"
// // Output: "a"

// // function longestPalindrome(s){

// //     }


// // console.log(longestPalindrome("babad")) //aba
// // console.log(longestPalindrome("cbbd")) //bb
// // console.log(longestPalindrome("a")) //a
// // console.log(longestPalindrome("ac")) //a


// /////////////////////////////////easy//////////34.........////////////////////////204.  Count Primes//////////////////////////////////////////////////////////////////////////////

// // Count the number of prime numbers less than a non-negative number, n.

// // Example 1:
// // Input: n = 10
// // Output: 4
// // Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// // Example 2:
// // Input: n = 0
// // Output: 0

// // Example 3:
// // Input: n = 1
// // Output: 0

// // function countPrimes(n) {


// // }

// // console.log(countPrimes(10))  //  4




// /////////////////////////////////////////////easy//////////35.........////////////////////////Isomorphobic Strings//////////////////////////////////////////////////////////////////////////////
// // Given two strings s and t, determine if they are isomorphic.

// // Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// // All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// // Example 1:

// // Input: s = "egg", t = "add"
// // Output: true
// // Example 2:

// // Input: s = "foo", t = "bar"
// // Output: false
// // Example 3:

// // Input: s = "paper", t = "title"
// // Output: true


// // function isIsomorphic(s,t){
// //   let covA = s.split('')
// //   let covB = s.split('')
// //   let resultA = []
// //   let resultB = []
  
// //   for(let i=0;i<s.length;i++){
// //     resultA.push(covA.indexOf(covA[i]))
// //     resultB.push(covB.indexOf(covB[i]))
// //   }
  
// //   // return [resultA, resultB]
// //   return resultA.join('')===resultB.join('')

// // }

// // console.log(isIsomorphic("egg","add"))
// // console.log(isIsomorphic("foo","bar"))
// // console.log(isIsomorphic("paper","title"))


// ///////////////////////////////////////////////////easy//////////36.........////////////////////////217.  contains duplicate//////////////////////////////////////////////////////////////////////////////

// // Given an array of integers, find if the array contains any duplicates.

// // Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// // Example 1:
// // Input: [1,2,3,1]
// // Output: true

// // Example 2:
// // Input: [1,2,3,4]
// // Output: false

// // Example 3:
// // Input: [1,1,1,3,3,4,3,2,4,2]
// // Output: true

// // function containsDuplicate(nums){

// // }

// // console.log(containsDuplicate([1,2,3,1]))
// // console.log(containsDuplicate([1,2,3,4]))
// // console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))


// ////////////////////////////////////////////////////easy//////////37.........////////////////////////228.  summary ranges //////////////////////////////////////////////////////////////////////////////

// // You are given a sorted unique integer array nums.

// // Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// // Each range [a,b] in the list should be output as:

// // "a->b" if a != b
// // "a" if a == b
 

// // Example 1:
// // Input: nums = [0,1,2,4,5,7]
// // Output: ["0->2","4->5","7"]
// // Explanation: The ranges are:
// // [0,2] --> "0->2"
// // [4,5] --> "4->5"
// // [7,7] --> "7"

// // Example 2:
// // Input: nums = [0,2,3,4,6,8,9]
// // Output: ["0","2->4","6","8->9"]
// // Explanation: The ranges are:
// // [0,0] --> "0"
// // [2,4] --> "2->4"
// // [6,6] --> "6"
// // [8,9] --> "8->9"

// // Example 3:
// // Input: nums = []
// // Output: []

// // Example 4:
// // Input: nums = [-1]
// // Output: ["-1"]

// // Example 5:
// // Input: nums = [0]
// // Output: ["0"]

// // function summaryRanges(nums){

// // }

// // console.log(summaryRanges([0,1,2,4,5,7])) // Output: ["0->2","4->5","7"]
// // console.log(summaryRanges([0,2,3,4,6,8,9])) // Output: ["0","2->4","6","8->9"]
// // console.log(summaryRanges([])) // []
// // console.log(summaryRanges([-1])) // -1
// // console.log(summaryRanges([0]))  // 0



// // ////////////////////////////////////////////////////easy//////////39.........////////////////////////234.  Palindrome Linked List //////////////////////////////////////////////////////////////////////////////

// // // Given a singly linked list, determine if it is a palindrome.

// // // Example 1:
// // // Input: 1->2
// // // Output: false

// // // Example 2:
// // // Input: 1->2->2->1
// // // Output: true


// // function isPalindrome(head){


// // }

// // console.log(isPalindrome('1->2')) // false
// // console.log(isPalindrome('1->2->2->1')) // true


// // ////////////////////////////////////////////////////easy//////////40.........////////////////////////237.  Delete Node in a Linked List //////////////////////////////////////////////////////////////////////////////\
// // Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
// // It is guaranteed that the node to be deleted is not a tail node in the list.

// // Example 1:
// // Input: head = [4,5,1,9], node = 5
// // Output: [4,1,9]
// // Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// // Example 2:
// // Input: head = [4,5,1,9], node = 1
// // Output: [4,5,9]
// // Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

// // Example 3:
// // Input: head = [1,2,3,4], node = 3
// // Output: [1,2,4]

// // Example 4:
// // Input: head = [0,1], node = 0
// // Output: [1]

// // Example 5:
// // Input: head = [-3,5,-99], node = -3
// // Output: [5,-99]

// // function deleteNode(node,n){

// // }

// // console.log(deleteNode([4,5,1,9],5)) // node = 5 // Output: [4,1,9]
// // console.log(deleteNode([4,5,1,9],1)) // node = 1 // Output: [4,5,9]
// // console.log(deleteNode([1,2,3,4],3)) // node = 3 // Output: [1,2,4]
// // console.log(deleteNode([0,1]),0) // node = 0 // Output: [1]
// // console.log(deleteNode([-3,5,-99],-3)) // node = -3 // Output: [5,-99]


// /////////////////////////////////////////////////////easy//////////42.........////////////////////////258.  Add Digits //////////////////////////////////////////////////////////////////////////////\

// ///great solution explanation   https://leetcode.com/problems/add-digits/discuss/579918/Javascript-solutions-with-explanation


// // Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// // Example:
// // Input: 38
// // Output: 2 
// // Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
// //              Since 2 has only one digit, return it.


// // function addDigits(num){
// //   if(num<10){return num}
// //   let conv = num.toString()
// //   let convs= conv.split('')
// //   let output = 0
// //   for(let el of convs){
// //     output+=parseInt(el)
// //   }
// //   return addDigits(output)


// // }


// // // functi

// // console.log(addDigits(38))
// // console.log(addDigits(60))
// // console.log(addDigits(45))
// // console.log(addDigits(15064))


// ///////////////////////////////////////////////////easy//////////50.........////////////////////////reverse Vowels of  a String  //////////////////////////////////////////////////////////////////////////////
// // Write a function that takes a string as input and reverse only the vowels of a string.

// // Example 1:
// // Input: "hello"
// // Output: "holle"

// // Example 2:
// // Input: "leetcode"
// // Output: "leotcede"


// // function reverseVowels(s){


// // }

// // console.log(reverseVowels("hello"))// Output: "holle"
// // console.log(reverseVowels("leetcode"))// Output: "leotcede"


// /////////////////////intersection////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Given two arrays, write a function to compute their intersection.

// // Example 1:

// // Input: nums1 = [1,2,2,1], nums2 = [2,2]
// // Output: [2,2]
// // Example 2:

// // Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// // Output: [4,9]
// // Note:

// // Each element in the result should appear as many times as it shows in both arrays.
// // The result can be in any order.


// // function intersect(nums1, nums2){

// // }

// // console.log(intersect([1,2,2,1],[2,2])) // Output: [2,2]
// // console.log(intersect([4,9,5], [9,4,9,8,4]))// Output: [4,9]


// ////////////////////////////////////////////////////easy//////////55.........////////////////////////383.  Ransom Note//////////////////////////////////////////////////////////////////////////////
// // Given an arbitrary ransom note string and another string containing letters from all the magazines, 
// // write a function that will return true if the ransom note can be constructed from the magazines ;
// //  otherwise, it will return false.

// // Each letter in the magazine string can only be used once in your ransom note.

 

// // Example 1:

// // Input: ransomNote = "a", magazine = "b"
// // Output: false
// // Example 2:

// // Input: ransomNote = "aa", magazine = "ab"
// // Output: false
// // Example 3:

// // Input: ransomNote = "aa", magazine = "aab"
// // Output: true

// // function canConstruct(ransomNote, magazine){

// // };




// // console.log(canConstruct("a", magazine = "b")) // Output: false
// // console.log(canConstruct(ransomNote = "aa", magazine = "ab")) // Output: false
// // console.log(canConstruct(ransomNote = "aa", magazine = "aab"))// Output: true




// ////////////////////////////////////////////////////easy//////////56.........////////////////////////387.  First Unique Character in a String//////////////////////////////////////////////////////////////////////////////
// // Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// // Examples:

// // s = "leetcode"
// // return 0.

// // s = "loveleetcode"
// // return 2.

// // function firstUniqChar(s){


// // }
  


// // console.log(firstUniqChar("leetcode")) // return 0.
// // console.log(firstUniqChar("loveleetcode")) // return 2.




// ////////////////////////////////////////////////////easy//////////57.........////////////////////////387.  Find the Difference//////////////////////////////////////////////////////////////////////////////
// // You are given two strings s and t.

// // String t is generated by random shuffling string s and then add one more letter at a random position.

// // Return the letter that was added to t.

 

// // Example 1:
// // Input: s = "abcd", t = "abcde"
// // Output: "e"
// // Explanation: 'e' is the letter that was added.

// // Example 2:
// // Input: s = "", t = "y"
// // Output: "y"

// // Example 3:
// // Input: s = "a", t = "aa"
// // Output: "a"

// // Example 4:
// // Input: s = "ae", t = "aea"
// // Output: "a"
// //////your solution
// // function findTheDifference(s,t){

// // }


// // console.log(findTheDifference("abcd",  "abcde"))// Output: "e"
// // console.log(findTheDifference("",  "y"))// Output: "y"
// // console.log(findTheDifference("a",  "aa"))// Output: "a"
// // console.log(findTheDifference("ae",  "aea"))


// ////////////////////////////////////////////////////easy//////////59.........////////////////////////409.  longest palindrome//////////////////////////////////////////////////////////////////////////////

// // Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// // Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// // Example 1:

// // Input: s = "abccccdd"
// // Output: 7
// // Explanation:
// // One longest palindrome that can be built is "dccaccd", whose length is 7.

// // Example 2:
// // Input: s = "a"
// // Output: 1

// // Example 3:
// // Input: s = "bb"
// // Output: 2

// // function longestPalindrome(s){

// // }

// // console.log(longestPalindrome("abccccdd"))
// // console.log(longestPalindrome("a"))
// // console.log(longestPalindrome("bb"))


// ////////////////////////////////////////////////////easy//////////61.........////////////////////////434.  longest palindrome//////////////////////////////////////////////////////////////////////////////
// // You are given a string s, return the number of segments in the string. 

// // A segment is defined to be a contiguous sequence of non-space characters.

// // Example 1:
// // Input: s = "Hello, my name is John"
// // Output: 5
// // Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// // Example 2:
// // Input: s = "Hello"
// // Output: 1

// // Example 3:
// // Input: s = "love live! mu'sic forever"
// // Output: 4

// // Example 4:
// // Input: s = ""
// // Output: 0

// // function countSegments(s){


// // }



// // console.log(countSegments(s = "Hello, my name is John")) // Output: 5
// // console.log(countSegments(s = "Hello"))// Output: 5
// // console.log(countSegments(s = "love live! mu'sic forever"))// Output: 4
// // console.log(countSegments(s = ""))// Output:0



// ////////////////////////////////////////////////////easy//////////64.........////////////////////////459.  Repeated Substring Pattern//////////////////////////////////////////////////////////////////////////////
// // Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// // Example 1:
// // Input: s = "abab"
// // Output: true
// // Explanation: It is the substring "ab" twice.

// // Example 2:
// // Input: s = "aba"
// // Output: false

// // Example 3:
// // Input: s = "abcabcabcabc"
// // Output: true
// // Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

// // function repeatedSubstringPattern(s){

// // }


// // console.log(repeatedSubstringPattern("abab")) // Output: true
// // console.log(repeatedSubstringPattern("aba")) // Output: false
// // console.log(repeatedSubstringPattern("abcabcabcabc")) // Output: true
// // console.log(repeatedSubstringPattern("abcabcabcab")) // Output: false
// // console.log(repeatedSubstringPattern("abcabcabca")) // Output: false
// // console.log(repeatedSubstringPattern("abcabcabcabcd")) // Output: false





// //1.  ////////////////////  ////////////////////////////////////////////////////// CHALLENGE 19

// // Inspect the commented out test cases carefully if you need help to understand these instructions.

// // Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), 
// // and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
// // On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

// // On the SECOND invocation of the PLAYER function, it will return either:

// // the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
// // the string 'bust' if that sum is over 21.

// // If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

// // the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
// // the string 'bust' if the new sum is over 21.

// // And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
// // You may assume that the given array is long enough to give a 'bust' before running out of numbers.

// // BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.

// // const blackJack = arr =>{
// //   let dCount = 0
// //   return function(cardA,cardB){
// //     let pCount = 0
// //     let total = cardA + cardB
// //     return function(){
// //       if(total==='bust'){
// //         return 'you are done!'
// //       }
// //       dCount++
// //       pCount++
// //       if(pCount===1){
// //         return total
// //       }
// //       total+=arr[dCount-2]
// //       if(total>21){
// //         total = 'bust'
// //         dCount--
// //         return total
// //       }
// //       return total
      
// //     }
// //   }
// // }
  
// //   // /*** Uncomment these to check your work! ***/
  
// //   // /*** DEALER ***/
// //   // write the function for the array[2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
// // const cardArr = [2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]
// // const playerHands = blackJack(cardArr)
  
// //   // /*** PLAYER 1 ***/
// //   const playerOne = playerHands(4, 5);
// //   console.log(playerOne())// // => should log 9
// //   console.log(playerOne())// // => should log 11
// //   console.log(playerOne())// // => should log 17
// //   console.log(playerOne())// // => should log 18
// //   console.log(playerOne())// // => should log 'bust'
// //   console.log(playerOne())// // => should log 'you are done!'
// //   console.log(playerOne())// // => should log 'you are done!'
  
// //   // /*** BELOW LINES ARE FOR THE BONUS ***/
  
// //   // /*** PLAYER 2 ***/
// //   const playerTwo = playerHands(2, 2);
// //   console.log(playerTwo()) //=> should log 4
// //   console.log(playerTwo()) //=> should log 15
// //   console.log(playerTwo()) //=> should log 19
// //   console.log(playerTwo()) //=> should log 'bust'
// //   console.log(playerTwo()) //=> should log 'you are done!
// //   console.log(playerTwo()) //=> should log 'you are done!
  
// //   // /*** PLAYER 3 ***/
// //   const playerThree = playerHands(3, 7);
// //   console.log(playerThree()) //=> should log 10
// //   console.log(playerThree()) //=> should log 13
// //   console.log(playerThree()) //=> should log 'bust'
// //   console.log(playerThree()) //=> should log 'you are done!
// //   console.log(playerThree()) //=> should log 'you are done!



// /////////////////////////////////////////////////

// //   function multiMap(arr,funcsArr){
// //     let obj = {}
// //     for(let el of arr){
// //       obj[el] = []
// //       for(let i=0; i<funcsArr.length;i++)
// //         obj[el].push(funcsArr[i](el))
// //     }
// //     return obj
    
// //   }
// //   // // Uncomment these to check your work!
// //   // write a function called uppercaser(str) 3
// // const upperCase = str => str.toUpperCase()
// //   // write a function called capitalize(str) 
// // const capitalize =str =>str[0].toUpperCase()+str.slice(1)
// //   // write a function called repeater(str) 
// // const repeater = str => str+ str

// //   // create an array for  ['catfood', 'glue', 'beer'];
// // const strArr = ['catfood', 'glue', 'beer']
// // const funcArr = [upperCase,capitalize,repeater]

// //   //write the callback function ];
// // console.log(multiMap(strArr,funcArr))
// //   // log  { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }







// // //2.  ///////////////////////////////////////////////////Challenge 5
// // // Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.

const pathFinder = (obj,arr,index = 0)=>{
// // ///////////   solution 1
// // //   if(arr.length===0){return obj[arr[0]]}
// // //   let newArr = arr.slice(1)
// // //   if(typeof obj[arr[0]]==='string'){
// // //     return obj[arr[0]]
// // //   }
// // //   return pathFinder(obj[arr[0]],newArr)
  
// // //   solution 2
  if(arr[index]===undefined){return obj[arr[index]]}
  let newIndex = index+1
  if(typeof obj[arr[index]]==='string'){
    return obj[arr[index]]
  }
  return pathFinder(obj[arr[index]],arr,newIndex)
  
}
const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"




// // //3.     /////////////////////////////////////////////////////////////////movie selector/////////////////////////////////////////////////////
// // // Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). 
// // // Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. 
// // // The titles should be all uppercase strings.
// // const movieSelector = arr =>{
// //   return arr.map(el=> {
// //     return {
// //       title:el.title.toUpperCase(),
// //       scoro:el.score
      
// //     }
// //   })
// //   .filter(el=> el.scoro>5)
// //   .reduce((acc,curr)=> {
// //     acc.push(curr.title)
// //     return acc
// //   },[])
// // }



// // const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// // console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]

// // console.log(movieSelector(movies))




// // //4.  ////////////////////////////////////////////////////////////////// //CHALLENGE 18

// // // Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). 
// // // The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). 
// // // Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space).
// // //  However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space).
// // //  If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.
// const makeHistory = limit =>{
//   let result = []
//   return function(str){
//     if(str==='undo'){
//       if(!result.length){
//         return 'nothing to undo'
        
//       }
//       let strUndo = result[result.length-1]
//       result=result.slice(0,-1)
//       return strUndo + ' undone'
//     }
//     result = [result,str].slice(limit===result.length?limit-1:0)
//     return str + ' done'
//   }
// }

// // // // /*** Uncomment these to check your work! ***/
// // // // write the callback function w/ a limit of 2
// // const history = makeHistory(2)

// // console.log(history('jump')) // => should log 'jump done'
// // console.log(history('undo'))  // => should log 'jump undone'
// // console.log(history('walk')) // => should log 'walk done'
// // console.log(history('code')) // => should log 'code done'
// // console.log(history('pose')) // => should log 'pose done'
// // console.log(history('undo'))  // => should log 'pose undone'
// // console.log(history('undo'))  // => should log 'code undone'
// // console.log(history('undo'))  // => should log 'nothing to undo'


// // //5.  /////////////////////////////////////arrayChunking//////////////////////////////////////////////////////////////////////////////////
// // // --- Directions
// // // Given an array and chunk size, divide the array into many subarrays
// // // where each subarray is of length size
// // // --- Examples
// // // chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// // // chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// // // chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// // // chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// // // chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// // ////////////////solution using loop
// //
// // const chunk = (arr,target) =>{
// //   let i=0
// //   let result = []
// //   for(let i=0;i<arr.length;i++){
// //     result.push(arr.slice(i,i+target))
// //     i+=target
// //   }
// //   return result
  
// // }


// // //   ///////alternate solution using slice method////////////
  
// // //   }
  
  
// //   console.log(chunk([1, 2, 3, 4], 2)) //--> [[ 1, 2], [3, 4]] 
// //   console.log(chunk([1, 2, 3, 4, 5], 2))// --> [[ 1, 2], [3, 4], [5]])
// //   console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]])
// //   console.log(chunk([1, 2, 3, 4, 5], 4))// --> [[ 1, 2, 3, 4], [5]])
// //   console.log(chunk([1, 2, 3, 4, 5], 10))// --> [[ 1, 2, 3, 4, 5]])
  


            
// // //6.  //////////////////////////////////////////////////Challenge 6
// // // Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.

// //  {
// const flattenRecursively = (arr,result =[],index=0) =>{
  
// // ///////////////   soultion 1
// //   if(arr.length===0){return result}
// //   let newArr = arr.slice(1)
// //   if(Array.isArray(arr[0])){
// //     return flattenRecursively(arr[0].concat(newArr),result,index)
// //   }
// //   result.push(arr[0])
// //   return flattenRecursively(newArr,result,index)
  
// // // //////////////   solution 2
//   if(arr[index]===undefined){return result}
//   let newIndex = index+1
//   if(Array.isArray(arr[index])){
//     return flattenRecursively(arr[index].concat(arr),result,newIndex)
//   }
//   result.push(arr[index])
//   return flattenRecursively(arr[index],result,newIndex)
  
// }
  
// // // // }
// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


// // //7.  //////////////////////////////////////////////////////////////////////Challenge 9
// //     //   Given a collection of distinct integers, write a function getPermutations to return all possible permutations.
// //     //   Input:[1, 2, 3]
// //     //   Output:[
// //     //     [1,2,3],
// //     //     [1,3,2],
// //     //     [2,1,3],
// //     //     [2,3,1],
// //     //     [3,1,2],
// //     //     [3,2,1]
// //     //   ]

// // const getPermutations = (arr,result =[]) => {
// //   if(arr.length===0){return result}
// //   if(arr.length ===1){return [arr]}
// // 	for(let i=0;i<arr.length;i++){
// //     let current = arr[i]
// //     let remainingNum = arr.slice(0,i).concat(arr.slice(i+1))
// //     let remainNumPermuted = getPermutations(remainingNum)
// //     for(let j=0;j<remainNumPermuted.length;j++){
// //       result.push([current].concat(remainNumPermuted[j]))
// //     }
// //   }
// // return result
  
  
// // }



// // //      {

// // //     }
    
// //     console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// //     console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]



// // //8. ////////////////////////////////////////////////////////////////// // CHALLENGE 16
// // // Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). 
// // // When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). 
// // // When the returned function is invoked with no arguments, the current average is outputted.
// // //  If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.


// // // //  {
// //   const average = () =>{
// //     let sum = 0
// //     let count =0
// //     return function(num){
// //       if(!num){
// //         return count===0 ? 0 : sum/count
// //       }
// //       sum+=num
// //       count++
// //       return sum/count
// //     }
    
// //   }

  


// // // // // /*** Uncomment these to check your work! ***/
// // // // /////////////////write the correct console logs

// // // // write the callback function
// //   const avg = average()

// // console.log(avg(0))// => should log 0
// // console.log(avg(4))// => should log 4
// // console.log(avg(8))// => should log 6
// // console.log(avg())// => should log 6
// // console.log(avg(12))// => should log 8
// // console.log(avg())// => should log 8






            
// // //9.  ////////////////////////////////////// Challenge 4
// // // Write a recursive function isPrime that determines if a number is prime and returns true if it is.

// // //  {
// // const isPrime=(num,div=3)=>{
// //   if(num===2){return true}
// //   if(num<2 || num%2===0){return false}
// //   if(div*div>num){return true}
// //   if(num%div===0){return false}
// //   div++
// //   return isPrime(num,div)
// // }


// // // }

// // console.log(isPrime(1)); //-> false
// // console.log(isPrime(2)); //-> true
// // console.log(isPrime(3)); //-> true
// // console.log(isPrime(4)); //-> false



// //  //10.   //////////////////////////////////////////////////////////////////////////////////////


// //  {
// // const poyoyotion = str => {
// //   let conv = str.split('')
// //   for(let i=0;i<conv.length;i++){
// //     if(conv[i]==='A'){
// //       conv.splice(i,1)
// //       conv.splice(i-1,1,Number(conv[i-1])+1)
// //     } else if(conv[i]==='B'){
// //       conv.splice(i,1)
// //       conv.splice(i,1,Number(conv[i])-1)

      
// //     }
// //   }
// //   return conv.join('')
  
// // }


// // // };
// // console.log(poyoyotion('432A452B2')) ///4334521
// // console.log(poyoyotion('7545B4B1')) // 754530



// // //11.  ///////////////////////////////////////////// // CHALLENGE 11
// // // Create a function dateStamp that accepts a function and returns a function. 
// // // The returned function will accept however many arguments the passed-in function accepts, 
// // // and return an object with a date key that contains a timestamp with the time of invocation, 
// // // and an output key that contains the result from invoking the passed-in function.
// // //  HINT: You may need to research how to access information on Date objects.

// // //  {
// // const dateStamp = func =>{
// //   return function(num){
// //     return {
// //       date: Date.now(),
// //       output:func(num)
// //     }
// //   }
  
// // }


// // // // }

// // // // // /*** Uncomment these to check your work! ***/
// // // // assign the function aka  ///dateStamp(n => n * 2);
// // const stamped = dateStamp(n=>n*2)

// // console.log(stamped(4))// => should log { date: (today's date), output: 8 }
// // console.log(stamped(6))// => should log { date: (today's date), output: 12 }


// // //12. ////////////////////////////////////////////// // CHALLENGE 12
// // // // Create a function censor that accepts no arguments. 
// // // censor will return a function that will accept either two strings, or one string. 
// // // // When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
// // // When one string is given, the returned function will return the same string,
// // //  except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).


// // // // }

// // // // // /*** Uncomment these to check your work! ***/
// // // // // write the necessary function for the return value

// // function censor(){
// //   let obj = {}
// //   return function(strOne,strTwo){
// //     if(!strTwo){
// //       for(let key in obj){
// //         strOne = strOne.replace(key,obj[key])
// //       }
// //       return strOne
// //     }
// //     obj[strOne] = strTwo
// //     return obj
// //   }
  
// // }


// // const storage = censor()
// // console.log(storage('dogs', 'cats'));
// // console.log(storage('quick', 'slow'));
// // console.log(storage('The quick, brown fox jumps over the lazy dogs.'))// // 
// // //  // => should log 'The slow, brown fox jumps over the lazy cats.'


// // //13.  ////////////////////////////////////////////////////////////////////nestedEvenSum/////////////////////////////////////////////////////////

// // // return the sum of all even numbers in an object which may contain nested objects;

// // const nestedEvenSum=(obj,sum=0)=>{
// //   for(let key in obj){
// //     if(typeof obj[key]==='object'){
// //       sum+=nestedEvenSum(obj[key])
// //     } else if (typeof obj[key]==='number' && obj[key]%2===0){
// //       sum+=obj[key]
// //     }
// //   }
// //   return sum
  
// // }
  
  
// //   var obj1 = {
// //     outer: 2,
// //     obj: {
// //       inner: 2,
// //       otherObj: {
// //         superInner: 2,
// //         notANumber: true,
// //         alsoNotANumber: "yup"
// //       }
// //     }
// //   }
  
// //   var obj2 = {
// //     a: 2,
// //     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
// //     c: {c: {c: 2}, cc: 'ball', ccc: 5},
// //     d: 1,
// //     e: {e: {e: 2}, ee: 'car'}
// //   };
  
// //   console.log(nestedEvenSum(obj1)); // 6
// //   console.log(nestedEvenSum(obj2)); // 10

// // //14.  //////////////////////////////////////////////prime/////////////////////////////////////////////////


// // // console.log(isPrime(100))
// // // console.log(isPrime(17))

// // // console.log(isPrime(1)); //-> false
// // // console.log(isPrime(2)); //-> true
// // // console.log(isPrime(3)); //-> true
// // // console.log(isPrime(4)); //-> false




// // //15.  ////////////////////////////////////////// // CHALLENGE 13
// // // There's no such thing as private properties on a JavaScript object! But, maybe there are? 
// // // Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. 
// // // getSecret() which returns the secret setSecret() which sets the secret


// const createSecretHolder=(secret)=>{
//   let num = secret
//   return {
//     getSecret(){
//       console.log(num)
//     },
//     setSecret(input){
//       num=input
//       console.log('')
//     }
//     let obj = {}
//     let num = secret 
//     return function(input){
//       return  obj ={
//         getSecret(){
//         console.log(num)
//       },
//       setSecret(input){
//         num=input
//         console.log('')
//       }}
//     }
// //   // return obj
    
    
//   }
  
// // }
// // // // // /*** Uncomment these to check your work! ***/
// // // // // // write the function///// start with secret as 5
// // let obj = createSecretHolder(5)

// // obj.getSecret()// // //  // => returns 5
// // obj.setSecret(2)/// // //  // => shoule return blank
// // obj.getSecret()// // //  // => returns 2


// // //16.  //////////////////////////////////////// // CHALLENGE 14
// // // Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.

// // // //  {
// // const callTimes = () =>{
// //   let count = 0
// //   return function(){
// //     count++
// //     return count
// //   }
  
// // }
  


// // // // // // }
// // const calledFirst = callTimes()
// // const calledSecond = callTimes()
// // // // // // /*** Uncomment these to check your work! ***/
// // // // //assign the functinos ;


// //  console.log(calledFirst()) // 1
// //   console.log(calledFirst()) // 2
// //   console.log(calledSecond()) // 1
// //   console.log(calledSecond()) // 2






// // //16. ////////////////////////////////////// Challenge: flow
// // // Write a function that takes an array of functions and a number that will be piped through all those functions. 
// // // The input number passes through the first function, whose output is passed as input to the second function, 
// // // whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.
// // // ///////////////////////////////////example//////////////////////////////////////////
// // // Input 1: {Number} input - number flowing through all functions
// // // Input 2: {Array} funcArray - array of functions to pass input through
// // // Output: {Number} - final output of final function
// // // ///////////////////////////////////example//////////////////////////////////////////
// // // // add code here////
// // // {
// // const flow = (arr,input,index=0,output=0) =>{
// //   // if(arr[index]===undefined){return input}
// //   // output = arr[index](input)
// //   // let newArr = arr.slice(1)
// //   // return flow(newArr,output)
  
  
// // //   if(arr[index]===undefined){return input}
// // //   output=arr[index](input)
// // //   index++
// // //   return flow(arr,output,index)
  
// // }

// // }

// // // // }
// // // // // To check if you've completed the challenge, uncomment this code!
// // // // // create a function called multiplyBy2(num) 
// // const multiplyBy2 = n => n*2
// // // // //  create a function called add7(num) 
// // const add7 = n => n+7
// // // // //  create a function called modulo4(num) 
// // const modulo4 = n => n%4
// // // // //  create a function called subtract10(num) 
// // const subtract10 = n => n-10


// // // // //  build the callback function 
// // const arrCall = [multiplyBy2,add7,modulo4,subtract10]

// // // // // ->should log  -7   //// use input of 2
// // console.log(flow(arrCall,2))








// // //17.   /////////////////////////////// Challenge 3
// // // Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). 
// // // The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.

// // //  {
// // const palindrome = str => {
// //   let conv = str.toLowerCase()
// //   .split('')
// //   .filter(el=>el.toLowerCase()!==el.toUpperCase())
// //   .join('')
  
  
// //   // if(conv.length===0){return true}
// //   if(conv.length===1){return true}
// //   if(conv.length===2){return conv[0]===conv[1]}
// //   if(conv[0]===conv.slice(-1)){return palindrome(conv.slice(1,-1))}
// //   return false

  

  
  
// // }
// // // // }

// // console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// // console.log(palindrome("llama mall")); //-> true
// // console.log(palindrome("jmoney")); //-> false



// // //18.  ///////////////////////////////////////////// // CHALLENGE 15
// // // Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, 
// // // and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), 
// // // the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.

// // // // {
// // const russianRoulette = num =>{
// //   let count = 0
// //   return function(){
// //     count++
// //     if(count> num){
// //       return 'relaod to play again'
// //     } else if(count===num){
// //       return 'bang'
// //     } else{
// //       return 'click'
// //     }
// //   }
  
// // }


// // // // // // }

// // // // // // /*** Uncomment these to check your work! ***/
// // // // // assign the functions w/ 3 passed in the argumetn
// // const russianGun = russianRoulette(3)

// //   console.log(russianGun()) //should log 'click'
// //   console.log(russianGun()) //should log 'click'
// //   console.log(russianGun()) //should log 'bang'
// //   console.log(russianGun()) //should log 'reload to play again'
// //   console.log(russianGun()) //should log 'reload to play again'




// // //19./////////////////////////////////////////////////////////////////////// // CHALLENGE 17
// // // Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). 
// // // The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array).
// // //  Otherwise, the returned function should return false.

// // // // //  {
// // const makeFuncTester = (arr) =>{
// //   return function(func){
// //     return arr.every(test=>{
// //        let [first,second] = test
// //       return func(first) === second
// //     })
// //   }  
// // }

// // // // // /*** Uncomment these to check your work! ***/
// // // // // write the correct stuff
// // // // ////////////////////////////create an array and create the follwing array pairs

// // const strinArr =[]
// // strinArr.push(['hello', 'hellO']);
// // strinArr.push(['goodbye', 'goodbyE']);
// // strinArr.push(['howdy', 'howdY'])


// // // // //write the callback function
// // const funcTest = makeFuncTester(strinArr)



// // // // // make a function called capLastAttempt1 where you upper case all the letters
// // const capLastAttempt1 = str => str.toUpperCase()
// // // // // make a function called capLastAttempt2 where you upper case the last lettter of the word
// // const capLastAttempt2 = str => str.slice(0,-1) + str.slice(-1).toUpperCase()
// // // // // // => should log false
// // console.log(funcTest(capLastAttempt1))

// // // // // // => should log true
// // console.log(funcTest(capLastAttempt2))

// // //20.  ////////////////////////////////////////////////////////////////////capitalizeFirst/////////////////////////////////////////////////////////

// // // given an array of String, capitlzie the first letter of each string in the array

// // // //  {
// // const capitalizeFirst = (arr,index=0,result=[]) => {
// //   // if(arr.length===0){return result}
// //   // let newArr = arr.slice(1)
// //   // result.push(arr[0][0].toUpperCase()+arr[0].slice(1))
// //   // return capitalizeFirst(newArr,index,result)
  
// // //   if(arr[index]===undefined){return result}
// // //   result.push(arr[index][0].toUpperCase()+arr[index].slice(1))
// // //   index++
// // //   return capitalizeFirst(arr,index,result)
  
// // }
  
// // }
// // // //   }
  
// // console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']



// // //21  ////////////////////////////////////////////////////////////////////capitalize/////////////////////////////////////////////////////////
// // // given an array of words, return an new array conating each word captialzied

// // // //  {
// // const capitalizeFirst = (arr,index=0,result=[]) => {
// //   // if(arr.length===0){return result}
// //   // let newArr = arr.slice(1)
// //   // result.push(arr[0].toUpperCase())
// //   // return capitalizeFirst(newArr,index,result)
  
// //   if(arr[index]===undefined){return result}
// //   result.push(arr[index].toUpperCase())
// //   index++
// //   return capitalizeFirst(arr,index,result)
  
// // } 

// // // // //   }
  
//   // let words = ['i', 'am', 'learning', 'recursion'];
//   // console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']



  
// // //22.   //////////////////////////////////////disemvowle///////////////////////////////////////////
// // // Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

// //    {
// // const disemvowel = str =>{
// //   let vowels = ['a','e','i','o','u']
// //   let newStr = ''
// //   for(let el of str){
// //     if(!vowels.includes(el.toLowerCase())){
// //       newStr+=el
// //     }
// //   }
// //   return newStr
  
// // }
  

// // // //   }
      
// // // // // Uncomment these to check your work!
// // console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// // console.log(disemvowel('BANANA')); // => 'BNN'
// // console.log(disemvowel('hello world')); // => 'hll wrld'




// ///////////////////////////////////////23.    

// const flooredFunc = (array,callback) => {
//   let obj = {}
//   for(let el of array){
//     if(obj[callback(el)]){
//       obj[callback(el)].push(el)
//     } else {
//       obj[callback(el)] = [el]
//     }
//   }
//   return obj
  

// }
    
    
    
    
// //     // // /*** Uncomment these to check your work! ***/
// //     // // write a function that stores these [1.3, 2.1, 2.4];
// // const arr = [1.3, 2.1, 2.4]


// //     // // write a function called  floored  that gives the floored amount aka 1.2 = 1
// const floored = n => Math.floor(n)
// console.log(flooredFunc(arr,floored))
// //     // //  // should log: { 1: [1.3], 2: [2.1, 2.4] }
    
    
//     // //23.  ////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
//     // // write a function called recursiveRange which accepts a number and up all the numbers from 0 to the number passed to the function
    
// //     // // (x){
// //     const recursiveRange = (x,output =0) =>{
// //       if(x===0){return output }
// //       output+=x
// //       x--
// //       return recursiveRange(x,output)
      
// //     }
// //     // // }
    
// //     console.log(recursiveRange(6)) //21
// //     console.log(recursiveRange(10)) //55 
    
    
    
    
//     // //24.   //////////////////////////////////////////////////////////////////////reverse///////////////////////////////////////////////////////////////////
//     // // //write a function called reverse which accepts a string and returns a new string in reverse
    
//     // // {
// //     const reversed = str =>{
// //       if(str.length===0){return ''}
// //       let newStr = str.slice(1)
// //       return reversed(newStr)+str[0]
// //     }
    
// //     console.log(reversed('awesome'))
//     // //   }
      
//     // //    // 'emosewa'
//     // //    // 'loohcsmhtir'
    
    
    
    
     
    
//     // //25.  ////////////////////////////////////////////////////////////////////someRecurseive/////////////////////////////////////////////////////////
    
//     // //write a function which accepts an array and a clalback.  
//     // // the function returns true if a single value in teh array returns true when passed to the callback
//     // // otherwise it is false
    
// //     // // {
// // const funcked = (arr,callback) => {
// //   if(arr.length===0){return false}
// //   if(callback(arr[0])){return true}
// //   let newArr = arr.slice(1)
// //   return funcked(newArr,callback)
  
// // }
    
// //     // //   }
    
    
// //     // //   // SAMPLE INPUT / OUTPUT
// //     // write a function for isOdd;
// // const isOdd = n => n%2!==0
    
// //     console.log(funcked([1,2,3,4], isOdd)) // true
// //     console.log(funcked([4,6,8,9], isOdd)) // true
// //     console.log(funcked([4,6,8], isOdd)) // false
// //     console.log(funcked([4,6,8], val => val > 10)); // false
    
    
    
    
    
    
    
    
//     // //26.  /////////////////////////////////////////////////////// // CHALLENGE 9
//     // //  {
// //     const days = arr =>{
// //       let count = 0
// //       let output = ''
// //       return function(){
// //         count++
// //         if(arr.length<=count){
// //           output = arr[count-1]
// //           count = 0
// //           return output
// //         }
// //         return arr[count-1]
// //       }
// //     }
    
// //     // // }
    
// //     // // // /*** Uncomment these to check your work! ***/
// //     // // //  write array for ['Fri', 'Sat', 'Sun'];
// //     const  daysArr = ['Fri', 'Sat', 'Sun']
    
// //     // // write clalback equqation
// //     const weekend = days(daysArr)
    
// //     console.log(weekend()) // ; // => should log 'Fri'
// //     console.log(weekend()) // ; // => should log 'Sat'
// //     console.log(weekend()) // ; // => should log 'Sun'
// //     console.log(weekend()) // ; // => should log 'Fri'
    
    
//     // //27.   ////////////////////////////////////////////////////// // CHALLENGE 10
//     // Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
//     // defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's 
//     // first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.
//     // //  {
    
//     // //   }
      
// // const defineFirstArg = (func,arg)=>{
// //   return function(...args){
// //     return func(arg,...args)
// //   }
  
// // }
    
// //     // // // /*** Uncomment these to check your work! ***/
// //     // // // write a function w/ 2 arguments for  subtract
// // const subtract = (beg,end) => beg - end
// // const subFrom20 = defineFirstArg(subtract,20)
// //     console.log(subFrom20(5)); // => should log 15
    
    
    
    
//     // ///28.    //////////////////////////////////////////////// Challenge: intersection/////////////////////////////////////**************focus on this  */
//     // // Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
    
//     // // //ADD CODE HERE
//     // // //////////////////answer with reduce
    
// // const intersection = arr =>{
// //   return arr.reduce((acc,curr)=>{
// //     return acc.filter(num=>curr.includes(num))
// //   })
  
// // }
    
    
// //     // // //Do the same problem above but with a loop? 
    
    
    
// //     // // // // // //   // Uncomment these to check your work!
// //       const arr1 = [5, 10, 15, 20];
// //       const arr2 = [15, 88, 1, 5, 7];
// //       const arr3 = [1, 10, 15, 5, 20];
// // const array = [arr1,arr2,arr3]
// // console.log(intersection(array))
// //     // //    // should log: [5, 15]
    
    
//     // //29. ////////////////////////////////// ////////////////////////////////// Challenge: union//////********focus on this  */
//     // // Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. 
//     // // If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 
//     // // BONUS - Use reduce!
//     // // // // ADD CODE HERE
    
// //     // ////////////// //using reduce
// // const union = arr =>{
// //   return arr.reduce((acc,curr)=> {
// //     return acc.concat(curr.filter(num=>!acc.includes(num)))
// //   })
// // }
    
    
// //     // /////////use for each or regular loop to solve
      
      
// //     //     // Uncomment these to check your work!
// //         const arr1 = [5, 10, 15];
// //         const arr2 = [15, 88, 1, 5, 7];
// //         const arr3 = [100, 15, 10, 1, 5];
// // const array = [arr1,arr2,arr3]
// //     //      // should log: [5, 10, 15, 88, 1, 7, 100]
// // console.log(union(array))
    
    
    
//     // //30. ////////////////////////////////////////////Challenge 1
//     // // Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). 
//     // // This function should return a new array containing *only* the functions from the original array that, when invoked with input, return the value output. Use reduce!
    
    
//     // {
// // const functionValidator = (arr,input,output) => {
// //   return arr.reduce((acc,curr)=>{
// //     if(curr(input)===output){
// //       acc.push(curr)
// //     }
// //     return acc
    
// //   },[])
  
// // }
// //     //   }
      
// //     //   // write a function of  addFive
// // const addFive = n => n+5
// //     //   // write a function of  multiplyByTwo ;
// // const multiplyByTwo = n => n*2
// //     //   // write a function  subtractOne
// // const subtractOne = n => n-1
// // const funcArr = [addFive,multiplyByTwo,subtractOne]
      
// //     //   //////////////////////////////////////////// // should log [num => num + 5, num => num * 2]   ////input should be 5 and output should be 10
// // console.log(functionValidator(funcArr,5,10))
      
      
//     // //31.  ////////////////////////////////////////////////////////////////////////////////// Challenge 2
//     // //   Create a function allClear that accepts an array of evaluator functions (each returning a boolean value), and a single value. 
//     // // Using reduce, return a single boolean value indicating whether the value "passes" every single one of the evaluator functions (i.e. returns true).
    
//     //    {
        
//     //   //   ///////solve using loop solution
// // const allClear = (arr,num) =>{
// //   return arr.reduce((acc,curr)=> {
// //     acc.push(curr(num))
// //     return acc
// //   },[])
// //   .every(bool=>bool===true)
// // }
    
      
// //     //   // ///////////////solve using reduce
      
        
      
// //     //   }
      
// //     //   // write a function isOdd 
// // const isOdd = n => n%2!==0
// //     //   // wrtie a function that determines if number  isPositive
// // const isPositive = n => n>0
// //     //   // write a function multipleOfFive 
// // const multipleOfFive = n => n%5===0
    
// //     //   // write the callback function
// // const numFnArr = [isOdd,isPositive,multipleOfFive]
      
      
      
// //       console.log(allClear(numFnArr, 25)) // should log true 
// //       console.log(allClear(numFnArr, -25)) // should log false
       
      
//     // //32.  //////////////////////////////////////////////////////////////////////////////////// Challenge 3
//     // //   Write a function numSelectString that accepts an array of numbers and returns a string.
//     // //  This function should use filter, sort, and reduce to return a string containing only the odd numbers from the array, separated by commas, in ascending order.
    
//     //    {
// //   const numSelectString = arr =>{
// //     return arr.filter(el=>el%2!==0)
// //     .sort((a,b)=>a-b)
// //     .join(', ')
    
// // }
// //     //     // //////////////////use array methods
    
      
// //     //   ///////////////////////usse reduce to solve
// //     //   }
    
// //       const nums = [17, 34, 3, 12]
// //     //   // should log "3, 17"
// //       console.log(numSelectString(nums))
      
    
    
    
    
    
    
//     // //33.  ///////////////////////////////////////////////////////////////////////// //Challenge 7
    
//     // // Write a recursive function findInOrderedSet that determines if a number is in an ordered array. 
//     // // Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.
    
    
// //     // {
// //     const findInOrderedSet = (arr,num,index=0)=>{
// //       // if(arr.length===0){return false}
// //       // if(arr[0]===num){return true}
// //       // let newArr= arr.slice(1)
// //       // return findInOrderedSet(newArr,num)
      
      
// //       if(arr[index]===undefined){return false}
// //       if(arr[index]===num){return true}
// //       index++
// //       return findInOrderedSet(arr,num,index)
// //     }
// //     //   }
      
// //     //   //write the callback variable// [1, 4, 6, 7, 9, 17, 45];
// //     const nums = [1, 4, 6, 7, 9, 17, 45]
    
// //       console.log(findInOrderedSet(nums, 4));  //-> true
// //       console.log(findInOrderedSet(nums, 2));  //-> false
// //       console.log(findInOrderedSet(nums, 1));  //-> true
// //       console.log(findInOrderedSet(nums, 45));  //-> true
// //       console.log(findInOrderedSet(nums, 3));  //-> false
          
//     // //34.  //////////////////////////////////////////////////////////////////////////////////////////////Challenge 8
//     // //There are n stairs. A person standing at the bottom wants to reach the top. 
//     // // The person can climb either 1 or 2 stairs at a time.
//     // //  Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See
//     // //  test cases for examples.
    
//     //        {
          
//     //       }
          
//     //       // console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
//     //       // console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
//     //       // console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
          
          
    
          
          
//     // //35.  ////////////////////////////////////////////////Challenge 10/////////////////////////////////////////////////////////////////////////
//     //     //   Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.
    
    
//     //        {
// //     const getRangeBetween = (x,y,result = [])=>{
// //       if(x>=y-1){return result}
// //       x++
// //       result.push(x)
// //       return getRangeBetween(x,y,result)
      
// //     }
            
// //     //       }
    
// //           console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// //           console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
    
    
//     // //36.  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //     // --- Directions
//     // // Given a string, return a new string with the reversed
//     // // order of characters
//     // // --- Examples
//     //   // reverse('apple') === 'leppa'
//     //   // reverse('hello') === 'olleh'
//     //   // reverse('Greetings!') === '!sgniteerG'
    
    
//     //   ////////////////solve using reverse
    
    
//     // //////////////////////////////solve using a looop///////////////
    
//     // // ////////////////////////////use an array function aka reduce///////////////////////////
    
//     // ///////////////////////do recrusion/////////////////////////////
    
    
//     // // console.log(reverse('apple'))
//     // // console.log(reverse('hello'))
//     // // console.log(reverse('Greetings!'))
    
    
    
//     // //37.  ////////////////////////////////////////////////////////////////////////////////////////palindrome//////////////////////////////////////////////////////////////
      
//     // // --- Directions
//     // // Given a string, return true if the string is a palindrome
//     // // or false if it is not.  Palindromes are strings that
//     // // form the same word if it is reversed. *Do* include spaces
//     // // and punctuation in determining if the string is a palindrome.
//     // // --- Examples:
//     // //   palindrome("abba") === true
//     // //   palindrome("abcdefg") === false
    
//     //  {
    
    
//     //   // ////////////////alternate solution w/every?/////////////////////
    
// //     const palindrome = str =>{
// //       let conv = str.split('')
// //       return conv.every((el,index)=> el)
      
      
// //     }
// //     // }
      
    
    
// //       console.log(palindrome("abba"))// === true)
// //       console.log(palindrome("abcdefg"))// === false)
      
      
//     // //38.   ////////////////////////////////////////////////////////reverseInt/////////////////////////////////////////////////////////////////////////
//     // // --- Directions
//     // // Given an integer, return an integer that is the reverse
//     // // ordering of numbers.
//     // // --- Examples
//     // //   reverseInt(15) === 51
//     // //   reverseInt(981) === 189
//     // //   reverseInt(500) === 5
//     // //   reverseInt(-15) === -51
//     // //   reverseInt(-90) === -9
      
      
// //       const reverseInt = num =>{
// //         let conv = num.toString()
// //         .split('')
// //         .reverse()
// //         .join('')
// //         // return conv
// //         return parseInt(conv) * Math.sign(num)
// //       }
      
      
      
// //       console.log(reverseInt(15))//===51))
// //       console.log(reverseInt(981))// === 189)
// //       console.log(reverseInt(500))// === 5)
// //       console.log(reverseInt(-15))// === -51)
// //       console.log(reverseInt(-90))// === -9)
      
      
      
      
//     // //39.   //////////////////////////////////////////////////////maxChar///////////////////////////////////////////////////////////////////////////////////
//     // // --- Directions
//     // // Given a string, return the character that is most
//     // // commonly used in the string.
//     // // // --- Examples
//     // // // maxChar("abcccccccd") === "c"
//     // // // maxChar("apple 1231111") === "1"
    
//     // // {
// // const maxChar = str =>{
// //   let obj = {}
// //   for(let el of str){
// //     if(obj[el]){
// //       obj[el]++
// //     } else {
// //       obj[el] = 1
// //     }
// //   }
// //   // return obj
// //   return Object.keys(obj).reduce((acc,curr)=> obj[acc]>obj[curr] ? acc:curr)
// // }
    
    
// //     // // }
    
// //     console.log(maxChar("abcccccccd") )
// //     console.log(maxChar("apple 1231111"))
    
//     // //40.  ////////////////////////////////////////fizzBuzz////////////////////////////////////////////////////////////////////////////////////////////
//     // // --- Directions
//     // // Write a program that console logs the numbers
//     // // from 1 to n. But for multiples of three print
//     // // “fizz” instead of the number and for the multiples
//     // // of five print “buzz”. For numbers which are multiples
//     // // of both three and five print “fizzbuzz”.
//     // // --- Example
//     // //   fizzBuzz(5);
//     // //   1
//     // //   2
//     // //   fizz
//     // //   4
//     // //   buzz
    
//     // // function fizzBuzz(n) {
    
    
    
//     // // }
//     // /////////////////////test cases//////////////////////////////////
//     // // console.log('n=1:'+fizzBuzz(1));
//     // // console.log('n=2:'+fizzBuzz(2));
//     // // console.log('n=3:'+fizzBuzz(3));
//     // // console.log('n=4:'+fizzBuzz(4));
//     // // console.log('n=5:'+fizzBuzz(5));
//     // // console.log('n=6:'+fizzBuzz(6));
//     // // console.log(fizzBuzz(30));
      
      
    
    
    
      
//     // //41.  ///////////////////////////////////////////////////////////////// Challenge 19
//     // // Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. 
//     // // rating should return the percentage of functions from the array that return true when the value is used as input.
// // const rating = (arr, value) => {
// //   return arr.reduce((acc,curr)=>{
// //     if(curr(value)){
// //       acc.push(curr(value))
// //     }
// //     return acc
// //   },[]).length/arr.length
// // }
    
        
// //     // /*** Uncomment these to check your work! ***/
// //     // // write a function isEven ;
// // const isEven =n=> n%2 ===0
// //     // // write a function greaterThanFour ;
// // const greaterThanFour = n => n>4
// //     // // write a function isSquare = //////////aka sqrt;
// // const isSquare = n => Math.sqrt(n)%1===0
// //     // // write a function hasSix = ////has contains a 6;
// // const hasSix = n => n.toString().includes('6')
    
// //     const fnArr = [isEven,greaterThanFour,isSquare,hasSix]
// //     //  // should log: 100  use 64
// // console.log(rating(fnArr,64))
// //     //  // should log: 75  use 66
// // console.log(rating(fnArr,66))
// //     //  // should log: 75 use 5
// //  console.log(rating(fnArr,5))           
            
//     // //42.  ////////////////////////////////////////////////////////////////////// Challenge 20
//     // // Create a function pipe that accepts an array (of functions) and a value. 
//     // // pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, 
//     // // and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. 
//     // // pipe should return the final output.
    
    
//     // {
//     // // //   //////////solution 1 using for...of
    
    
//     // //   /////////////solution 2 using reduce method
    
    
//     // ///////////   solutinon 3    using for each method
    
    
//     // }
// // const pipe = (arr,str)=>{
// //   // let output = str
// //   return arr.reduce((acc,curr)=>{
// //     acc=curr(acc)
// //     return acc
// //   },str)
// // }
    
// //     // /*** Uncomment these to check your work! ***/
// //     //write a function called capitalize 
// //       const capitalize = str => str.toUpperCase()
// //     //write a function called addLowerCase ;
// // const addLowerCase = str => str + str.toLowerCase()
// //     //write a function called repeat =; //////aka repeat the string
// // const repeat = str => str+str
// //     //
// // const fnArr = [capitalize,addLowerCase,repeat]
// //     // // should log: 'CATcatCATcat'
// // console.log(pipe(fnArr,'cat'))
            
            
//     // //43.//////////////////////////////////////////////////////////// Challenge 21/////////////////////
//     // // Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). 
//     // // highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, 
//     // // when the subject is given as input.
    
    
//     //  {
// //     const highestFunc = (object,val) =>{
// //       let obj ={}
// //       for(let key in object){
// //         obj[key]=object[key](val)
// //       }
// //       // return obj
// //     return Object.keys(obj).reduce((acc,curr)=>obj[acc]>obj[curr]?acc:curr)
// //     }
    
      
// //     // }
            
// //     // // /*** Uncomment these to check your work! ***/
// //     const groupOfFuncs = {};
// //     // // write a method inside the object called double 
// // groupOfFuncs.double = n => n*2
// //     // // write a method inside the object called addTen 
// // groupOfFuncs.addTen  = n =>n+10
// //     // // write a method inside the object called inverse /// inverse in this case is -1
// // groupOfFuncs.inverse = n => n*(-1)
// //     // // / should log: 'addTen'
// // console.log(highestFunc(groupOfFuncs,0))
// //     // // // should log: 'double'
// // console.log(highestFunc(groupOfFuncs,20))
// //     // //  // should log: 'inverse'
// // console.log(highestFunc(groupOfFuncs,-5))
            
            
//     // //43.////////////// //////////////////////////////Challenge 22///////////////////////////////
//     // // Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. 
//     // // combineOperations should pass the starting value into the first function in the array. 
//     // // combineOperations should pass the value returned by the first function into the second function, 
//     // // and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.
    
    
//     //  {
//     // ///////use reduce to solve 
    
//     // ////////////////use for each to solve
//     // //
    
//     // // use regular loop to solve
    
    
    
    
//     // }
    
// // const combineOperations = (arr,val) =>{
// //   return arr.reduce((acc,curr)=>{
// //     acc = curr(acc)
// //     return acc
// //   },0)
// // }

// //     // // wrtie a function called  add100(num) {
// // const add100 = n => n+100
// //     // //   
// //     // // }
    
// //     // //  wrtie a function called  divByFive(num) {
// //     // //   / }
// //     const divByFive = n=> n/5
// //     // //  wrtie a function called  multiplyByThree(num) {
// //     // //   / }
// //     const multiplyByThree = n => n*3
// //     // //  wrtie a function called  multiplyFive(num) {
// //     // //   / }
// //     const multiplyFive = n => n*5
// //     // //  wrtie a function called  addTen(num) {
// //     // //   // }
// //     const addTen = n => n+10
// //     // // // /*** Uncomment these to check your work! ***/
// //     // //  // Shoculd output 60 --> order should be add100, divByFive, multiplyByThree w/startVal = 0
// //     console.log(combineOperations([add100,divByFive,multiplyByThree],0))
// //     // //  // Should output 10 -->order should be divByFive, multiplyFive, addTen w/startVal = 0
// //     console.log(combineOperations([divByFive,multiplyFive,addTen],0))
            
//     // //44./////////////////////////////////////////////// Challenge 23
//     // // Define a function myFunc that takes an array and a callback. 
//     // // myFunc should pass each element from the array (in order) into the callback. 
//     // // If the callback returns true, myFunc should return the index of the current element. 
//     // // If the callback never returns true, myFunc should return -1;
    
//     // {

    
    
//     // }
    
//     // // const numbers = [2, 2, 77, 64, 10, 8, 12];
//     // // const evens = [2, 4, 6, 8, 10, 12, 64];
    
    
    
//     // // /*** Uncomment these to check your work! ***/
//     //  // Output should be 1
//     //  // Output should be -1
    
    
//     // //45.   /////////// Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.
    
    
// //     //  {
// //     const countdown=(num)=>{
// //       if(num===0){return num}
// //       console.log(num)
// //       num--
// //       return countdown(num)
      
// //     }
    
// //     // }
    
// //     // // To check if you've completed it, uncomment these console.logs!
// //     console.log(countdown(5));
// //     console.log(countdown(10));
                
                
//     // //46.  ///////////// Challenge 2
//     // // Write a recursive function sum that calculates the sum of an array of integers.
//     //  {
// //     const sum = (arr,index=0,output=0)=>{
// //       // if(arr.length===0){return output}
// //       // let newArr = arr.slice(1)
// //       // output+=arr[0]
// //       // return sum(newArr,index,output)
      
// //       if(arr[index]===undefined){return output}
// //       let newArr = arr.slice(1)
// //       output+=arr[index]
// //       index++
// //       return sum(arr,index,output)
// //     }
//     // }
    
//     // // uncomment these to check your work
//     // console.log(sum([1,1,1])); // -> returns 3
//     // console.log(sum([1,2,3,4,5,6])); // -> returns 21
    
                
    
//     // //47.  /////////////////////////////////////////////////////////anagrams///////////////////////////////////////////////////////////////////////////////////////
      
//     //   // --- Directions
//     //   // Check to see if two provided strings are anagrams of eachother.
//     //   // One string is an anagram of another if it uses the same characters
//     //   // in the same quantity. Only consider characters, not spaces
//     //   // or punctuation.  Consider capital letters to be the same as lower case
//     //   // --- Examples
//     //   //   anagrams('rail safety', 'fairy tales') --> True
//     //   //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//     //   //   anagrams('Hi there', 'Bye there') --> False
      
      
//     //   // ///////////////soultion 1=== use helper function to build////////////
//     //   //  {
// // const anagrams = (strA,strB) => {
// //   let convA = strA.toLowerCase()
// //   .split('')
// //   .filter(el=>el.toLowerCase()!==el.toUpperCase())
// //   .sort()
// //   .join('')
// //     let convB = strB.toLowerCase()
// //   .split('')
// //   .filter(el=>el.toLowerCase()!==el.toUpperCase())
// //   .sort()
// //   .join('')
    
// //     return [convA===convB]
// // }
      
// //     //   // }
      
// //       console.log(anagrams('rail safety', 'fairy tales'))///=== True)
// //       console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))// === True)
// //       console.log(anagrams('Hi there', 'Bye there'))// === False)
// //     //   // console.log()
      
// //     //   //48.   ////////////////////////////////////////////////////////////sentenceCapitalization///////////////////////////////////////////////////////////////////
      
//     //   // --- Directions
//     //   // Write a function that accepts a string.  The function should
//     //   // capitalize the first letter of each word in the string then
//     //   // return the capitalized string.
//     //   // --- Examples
//     //   //   capitalize('a short sentence') --> 'A Short Sentence'
//     //   //   capitalize('a lazy fox') --> 'A Lazy Fox'
//     //   //   capitalize('look, it is working!') --> 'Look, It Is Working!'
      
      
      
//     //   /////////solution 1////////////////
//     //   //  {
// //      const capitalize = str =>{
// //        let newStr = str.split(' ')
// //        let result = []
// //        for(let el of newStr){
// //          result.push(el[0].toUpperCase()+el.slice(1))
// //        }
// //        return result.join(' ')
       
// //      }
// //     //   // }
      
      
// //       console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
// //       console.log(capitalize('a lazy fox')) //-> 'A Lazy Fox')
// //       console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'
        
    
    
//     //   //49.  /////////////////////////////////////////////////////////////////////////vowels////////////////////////////////////////////
    
//     // // --- Directions
//     // // Write a function that returns the number of vowels
//     // // used in a string.  Vowels are the characters 'a', 'e'
//     // // 'i', 'o', and 'u'.
//     // // --- Examples
//     // //   vowels('Hi There!') --> 3
//     // //   vowels('Why do you ask?') --> 4
//     // //   vowels('Why?') --> 0
//     // ///////////////////////solution/////////////////////
//     // // {
// //     const vowels = str =>{
// //       let vowel = ['a','e','i','o','u']
// //       let count = 0
// //       for(let el of str){
// //         if(vowel.includes(el.toLowerCase())){
// //           count++
// //         }
// //       }
// //       return count
// //     }
    
// //     // // }
    
    
// //     console.log(vowels('Hi There!')) //--> 3)
// //     console.log(vowels('Why do you ask?'))// --> 4)
// //     console.log(vowels('Why?')) //--> 0)
    
    
//     // //50.   ////////////////////////////////////////////////////////////////////////////////////fibonacci series/////////////////////////////
    
//     // // --- Directions
//     // // Print out the n-th entry in the fibonacci series.
//     // // The fibonacci series is an ordering of numbers where
//     // // each number is the sum of the preceeding two.
//     // // For example, the sequence
//     // //  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//     // // forms the first ten entries of the fibonacci series.
//     // // Example:
//     // //   fib(4) === 3
    
    
//     // ////////////////////solution 1///////////
//     // // function fib(n) {
    
    
//     // // console.log(fib(4)===3)
    
    
    
//     // //51./////////////////////////////////Create a function 'multiplyNumbers' that takes a number as an argument. 'multiplyNumbers' 
//     // // should multiply all the numbers from 1 to the number you passed to the function.  
//     // // For example, if the input is 4 then your function should return 24 because 1 * 2 * 3 * 4 = 24.
//     // // {
// //     const multiplyNumbers =(num,output=1)=>{
// //       if(num===0){return output}
// //       output*=num
// //       num--
// //       return multiplyNumbers(num,output)
// //     }
    
// //     // //   }
      
// //       console.log(multiplyNumbers(3))
// // console.log(multiplyNumbers(4))
    
    
//     // //52. / ////////////////////////////////////////////////////////////////////////////////////factor chain
//     // // A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
    
//     // // [3, 6, 12, 36]
    
//     // // 3 is a factor of 6
//     // // 6 is a factor of 12
//     // // 12 is a factor of 36
//     // // Create a function that determines whether or not an array is a factor chain.
    
//     // // Examples
// // const factorChain = arr =>{
// //   for(let i=1;i<arr.length;i++){
// //     if(arr[i]%arr[i-1]!==0){
// //       return false
// //     }
// //   }
// //   return true
  
// // }
// //     console.log(factorChain([1, 2, 4, 8, 16, 32]))// ➞ true
    
// //     console.log(factorChain([1, 1, 1, 1, 1, 1]))// ➞ true
    
// //     console.log(factorChain([2, 4, 6, 7, 12])) //➞ false
    
// //     console.log(factorChain([10, 1])) //➞ false
    
    
//     //  {
//     //     // ////////////solution 1 / //// using loop
        
    
    
//     //     // //////////////////solution2  //// use reudce and every
        
    
    
//     //     // ////////////////////solution 3  //////////////use reduce
//     //     // })
//     // }
    
//     // // console.log(factorChain([1, 2, 4, 8, 16, 32])) //➞ true
    
//     // // console.log(factorChain([1, 1, 1, 1, 1, 1])) //➞ true
    
//     // // console.log(factorChain([2, 4, 6, 7, 12])) //➞ false
    
//     // // console.log(factorChain([10, 1])) //➞ false
    
    
//     // //53. //////////////////////////////////index multiplier
    
//     // // Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
    
//     // // Examples
//     // // indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
//     // // // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
    
//     // // indexMultiplier([-3, 0, 8, -6]) ➞ -2
//     // // // (-3*0 + 0*1 + 8*2 + -6*3)
    
//     // {
//     //     // ///////////////solution 1  ///////////use loop
        
//     // // //////////////solution 2 //////////use reduce
        
// //     const indexMultiplier = (arr,value) =>{
// //       let output = 0
// //       for(let i=0;i<arr.length;i++){
// //         output+=i * arr[i]
// //       }
// //       return output 
// //     }
    
    
    
// //     console.log(indexMultiplier([9, 3, 7, -7]), -4)
// //     console.log(indexMultiplier([3, 8, 6, -4]), 8)
// //     console.log(indexMultiplier([10, -9, -2, 0, 2]), -5)
// //     console.log(indexMultiplier([4, 4, 2, 2, -4]), -2)
// //     console.log(indexMultiplier([9, 4, 7, 5, -1, -3]), 14)
// //     console.log(indexMultiplier([-9, 5, 9, 5, -7, 7]), 45)
// //     console.log(indexMultiplier([-1, -2, 8, -5]), -1)
// //     console.log(indexMultiplier([7, 10, -5, -4, 6, 2]), 22)
// //     console.log(indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1]), 16)
// //     console.log(indexMultiplier([-2, 5, -7, -23, 0, 14]), -8)
// //     console.log(indexMultiplier([53, -43, 39, -2, -11, 3]), 0)
// //     console.log(indexMultiplier([40, 32, -18, 48, -15]), 80)
// //     console.log(indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34]), 170)
// //     console.log(indexMultiplier([-21, 30, 20, 6, -16]), 24)
// //     console.log(indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20]), -183)
// //     console.log(indexMultiplier([]), 0)
    
    
    
//     // //54.   ////////////////////special arrays
//     // // An array is special if every even index contains an even number and every odd index 
//     // // contains an odd number. 
//     // // Create a function that returns true if an array is special, and false otherwise.
    
//     // // Examples
//     // // isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
//     // // // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
    
//     // // isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
//     // // // Index 2 has an odd number 9.
    
//     // // isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
//     // // // Index 3 has an even number 8.
    
    
// //     // {
// // const isSpecialArray = arr =>{
// //   for(let i=0;i<arr.length;i++){
// //     if(i%2===0){
// //       if(arr[i]%2!==0){return false}
// //     } else{
// //       if(arr[i]%2===0){return false}
// //     }
// //   }
// //   return true
  
// // }
        
    
// //     // }
    
// //     console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true)
// //     console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false)
// //     console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false)
// //     console.log(isSpecialArray([1, 1, 1, 2]), false)
// //     console.log(isSpecialArray([2, 2, 2, 2]), false)
// //     console.log(isSpecialArray([2, 1, 2, 1]), true)
// //     console.log(isSpecialArray([4, 5, 6, 7]), true)
// //     console.log(isSpecialArray([4, 5, 6, 7, 0, 5]), true)
    
    
    
//     // //55.     /////////////////////filter repeating hcaracter strings
//     // // Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
    
//     // // Examples
//     // // identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
//     // // ➞ ["aaaaaa", "d", "eeee"]
    
//     // // identicalFilter(["88", "999", "22", "545", "133"]) 
//     // // ➞ ["88", "999", "22"]
    
//     // // identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
//     // // ➞ []
//     // // Notes
//     // // A string with a single character is trivially counted as a string with repeating identical characters.
//     // // If there are no strings with repeating identical characters, return an empty array (see example #3).
    
//     // {
//     //     // /////////////////solution 1///////////////////
        
//     //     // //////////////////solution 2//////////////////////   use filter to solbe
        
    
    
//     // }
    
// //     const identicalFilter = arr =>{
// //       return arr.filter((el)=>el===el[0].repeat(el.length))
      
// //     }
    
    
// //     console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']))//,['aaaaaa', 'd', 'eeee'])
    
// //     console.log(identicalFilter(['88', '999', '22', '545', '133'])) //['88', '999', '22'])
    
// //     console.log(identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo'])) //[])
    
// //     console.log(identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee'])) //['aa', 'bb', 'cc', 'dd', 'ee'])
    
// //     console.log(identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee'])) //['eee'])
    
// //     console.log(identicalFilter(['1', '2', '3'])) //['1', '2', '3'])
    
//     // //56.   ////////////////////////////////////////the reverser
    
//     // // The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
    
//     // // Examples
//     // // reverse("Hello World") ➞ "DLROw OLLEh"
    
//     // // reverse("ReVeRsE") ➞ "eSrEvEr"
    
//     // // reverse("Radar") ➞ "RADAr"
//     // // Notes
//     // // There will be no punctuation in any of the test cases.
    
//     // {
//     //     // //////////////////solution 1
      
    
    
//     //     // //////////////solution 2   use map function for this 
    
    
//     // }
// // const reversed = str => {
// //   let conv = str.split('')
// //   .reverse()
// //   return conv.map(el=>{
// //     if(el.toLowerCase()===el){
// //       return el.toUpperCase()
// //     } else {
// //       return el.toLowerCase()
// //     }
// //   })
// //   .join('')
// // }
    
// //     console.log(reversed("Hello World")) //, "DLROw OLLEh")
// //     console.log(reversed("ReVeRsE")) //, "eSrEvEr")
// //     console.log(reversed("")) //, "")
// //     console.log(reversed("Radar")) //, "RADAr")
    
    
//     // //57.    /////////////////////////////////replace Vowel with another Character/////////////
    
//     // // Create a function that takes a string and replaces the vowels with another character.
    
//     // // a = 1
//     // // e = 2
//     // // i = 3
//     // // o = 4
//     // // u = 5
//     // // Examples
//     // // replaceVowel("karachi") ➞ "k1r1ch3"
//     // // replaceVowel("chembur") ➞ "ch2mb5r
//     // // replaceVowel("khandbari") ➞ "kh1ndb1r3"
//     // {
    
//     // // // ///////////////solution 1////////////////////  use loop
    
    
    
//     // }
// //     const replaceVowel = str =>{
// //       let vowel = {
// //     a : 1,
// //     e : 2,
// //     i : 3,
// //     o : 4,
// //     u : 5
// //       }
// //       let newStr=''
// //       for(let el of str){
// //         if(vowel[el]){
// //           newStr+=vowel[el]
// //         } else {
// //           newStr+=el
// //         }
// //       }
// //       return newStr
// //     }
    
// //     console.log(replaceVowel("karachi"))//, "k1r1ch3")
// //     console.log(replaceVowel("dang"))//, "d1ng")
// //     console.log(replaceVowel("aen"))//, "12n")
// //     console.log(replaceVowel("chembur"))//, "ch2mb5r")
// //     console.log(replaceVowel("khandbari"))//, "kh1ndb1r3")
// //     console.log(replaceVowel("thamel"))//, "th1m2l")
    
    
//     // //58.    ///////////////////////////multiplying numbers in a string////////////////
    
//     // // Given a string of numbers separated by a comma and space, return the product of the numbers.
    
//     // // Examples
//     // // multiplyNums("2, 3") ➞ 6
    
//     // // multiplyNums("1, 2, 3, 4") ➞ 24
    
//     // // multiplyNums("54, 75, 453, 0") ➞ 0
    
//     // // multiplyNums("10, -2") ➞ -20
    
//     // {
//     //     // ////////////solutin 1  ///////////use reduce
        
    
//     //     // //////////////solution 2   use map and reduce
    
    
    
    
//     //     // ///////////solution 3///////////////  use loop
        
    
//     // }
    
// //     const multiplyNums = str =>{
// //       let conv = str.split(',')
// //       let output = 1
// //       for(let el of conv){
// //         output*=parseInt(el)
// //       }
// //       return output
      
// //     }
    
// //     console.log(multiplyNums("2, 3"), 6)
// //     console.log(multiplyNums("1, 2, 3, 4"), 24)
// //     console.log(multiplyNums("54, 75, 453, 0"), 0)
// //     console.log(multiplyNums("10, -2"), -20)
// //     console.log(multiplyNums("-26, 1, -27, -12, -19"), 160056)
// //     console.log(multiplyNums("16, 8"), 128)
// //     console.log(multiplyNums("-27, -14, -28, 13, -17"), 2339064)
// //     console.log(multiplyNums("-19, -22, -14, 20, -15, -24, -17, 19, 30, -10"), -4082823360000)
// //     console.log(multiplyNums("1, 13, 0, -11, 26, -17, 21"), 0)
// //     console.log(multiplyNums("-25, -19, 7, -26, -26"), 2247700)
// //     console.log(multiplyNums("-4, -16, -22, -3, -6"), -25344)
// //     console.log(multiplyNums("-22, 11, 19, 5, 19, -9, -13, 20, -29"), 29641926600)
// //     console.log(multiplyNums("-25, 22"), -550)
// //     console.log(multiplyNums("-25"), -25)
    
    
//     // //59.   //////////////////Censor words longer than 4 characters
//     // // Create a function that takes a string and censors words over four characters with *.
    
//     // // Examples
//     // // censor("The code is fourty") ➞ "The code is ******"
    
//     // // censor("Two plus three is five") ➞ "Two plus ***** is five"
    
//     // // censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
//     // // Notes
//     // // Don't censor words with exactly four characters.
//     // // If all words have four characters or less, return the original string.
//     // // The amount of * is the same as the length of the word.
    
//     //  {
//     //     // ///////////////solution 1   //////////////use loop
        
    
//     //     /////////////// solution 2  ////////////use map to solve
        
        
//     // }
// // const censor = str=>{
// //   let conv = str.split(' ')
// //   let result = []
// //   for(let el of conv){
// //     if(el.length>4){
// //       result.push('*'.repeat(el.length))
// //     } else {
// //       result.push(el)
// //     }
// //   }
// //   return result.join(' ')
  
// // }
    
// //     console.log(censor("The code is fourty"))//,"The code is ******", "Example #1")
// //     console.log(censor("Two plus three is five"))//,"Two plus ***** is five", "Example #2")
// //     console.log(censor("aaaa aaaaa 1234 12345"))//,"aaaa ***** 1234 *****", "Example #3")
// //     console.log(censor("abcdefghijklmnop"))//,"****************")
// //     console.log(censor("a"))//,"a")
    
//     // //60.    ///////////////////////is the word an isogram?
    
//     // // Is the Word an Isogram?
//     // // An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
    
//     // // Examples
//     // // isIsogram("Algorism") ➞ true
    
//     // // isIsogram("PasSword") ➞ false
//     // // // Not case sensitive.
    
//     // // isIsogram("Consecutive") ➞ false
//     // // Notes
//     // // Ignore letter case (should not be case sensitive).
//     // // All test cases contain valid one word strings.
    
    
//     // {
    
//     //     ////////////////////////// solution 1
    
//     // // /////////////////solution 2  ////////////use filter to solve
    
    
    
//     // ////////////////////////////////////////// solution 3   use reduce to solve
    
    
    
    
// //     // }
// // const isIsogram = str =>{
// //   let conv = str.toLowerCase().split('')
// //   .sort()
// //   .join('')
// //   // return conv
// //   for(let i=1;i<conv.length;i++){
// //     if(conv[i]===conv[i-1]){return false}
// //   }
// //   return true
  
// // }
    
    
// //     console.log(isIsogram("Algorism"))//, true)
// //     console.log(isIsogram("PasSword"))//, false)
// //     console.log(isIsogram("Dermatoglyphics"))//, true)
// //     console.log(isIsogram("Cat"))//, true)
// //     console.log(isIsogram("Filmography"))//, true)
// //     console.log(isIsogram("Consecutive"))//, false)
// //     console.log(isIsogram("Bankruptcies"))//, true)
// //     console.log(isIsogram("Unforgivable"))//, true)
// //     console.log(isIsogram("Unpredictably"))//, true)
// //     console.log(isIsogram("Moose"))//, false)
    
    
    
    
    
      
      
      
//     // //61.   //////////////////////////////////////loops-multiple conditions///////////////////////////////////////////
//     // // Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
//     // // Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
    
//     // // BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
    
//     // // {
    
//     // //   }
      
// //     // //   // Uncomment these to check your work!
// // const addingAllTheWeirdStuff = (arr1,arr2)=>{
// //   let even = 0
// //   let odd = 0
// //   let bonus = 0
// //   for(let el of arr2){
// //     if(el%2!==0 ){
// //       odd+=el
      
// //     } else if (el%2===0){
// //       even+=el
// //     }
// //     if(el>20){
// //       bonus++
// //     }
// //   }
// //   return arr1.map(el=>{
// //     if(el>10){return el+even+bonus}
// //     if(el<10){return el+odd+bonus}
// //   })
// // }
// //       console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
// //       console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
    
    

    
//     // //62.    ///////////////////////////
//     //  {
// //     function commutative(func1,func2,value){
// //       return func1(func2(value))===func2(func1(value))
// //     }
    
// //     // }
    
// //     // // /*** Uncomment these to check your work! ***/
// //     // // write a function called multBy3;
// // const multBy3 = n => n*3
// //     // // write a function called divBy4 
// //       const divBy4 = n => n/4 
// //     // // write a function called subtract5 
// //       const subtract5 = n => n-5
// //     console.log(commutative(multBy3, divBy4, 11)); // should log: true
// //     console.log(commutative(multBy3, subtract5, 10)); // should log: false
// //     console.log(commutative(divBy4, subtract5, 48)); // should log: false
     
//     // //63.    ///////////////////// Challenge 11
//     //  {
// //     const objectFilter = (object,callback)=>{
// //       let obj = {}
// //       for(let key in object){
// //         if(callback(key)===object[key]){
// //           obj[key]=callback(key)
// //         }
// //       }
// //       return obj
// //     }
// //     // }
    
// //     const cities = {
// //     London: 'LONDON',
// //     LA: 'Los Angeles',
// //     Paris: 'PARIS',
// //     };
// //     console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}f
    
    
    
    
    
//     // //64.      // CHALLENGE 6///////////////////////////////////////
//     // //  {
    
//     // // }
    
    
//     // // 65.   ////////////////////////// CHALLENGE 7
//     // //  {
    
    
//     // // }
    
//     // // // /*** Uncomment these to check your work! ***/
// // const names = arr =>{
// //   let count = 0
// //   return function(){
// //     if(count>=arr.length){
// //       return 'everyone'
// //     } 
// //     count++
// //     return arr[count-1]
// //   }
  
// // }
// //     // // // write teh function for (['Victoria', 'Juan', 'Ruth'])
    
// //   const called = names(['Victoria', 'Juan', 'Ruth'])
// //     console.log(called()) //  // => should log 'Victoria'
// //     console.log(called()) //  // => should log 'Juan'
// //     console.log(called()) //  // => should log 'Ruth'
// //     console.log(called()) //  // => should log 'Everyone accounted for'
    
    
//     // //66.  ..................///////////////////// // CHALLENGE 8
//     // //  {
    
//     // // }
    
//     // // // /*** Uncomment these to check your work! ***/
//     // // // write a function for  multiplyBy2 
// // const multiplyBy2 = n => n*2
//     // // // write the function for the callback  aka saveOutput(multiplyBy2, 'boo');
    
//     // const saveOutput = (func,str) =>{
//     //   let obj = {}
//     //   return function(inp){
//     //     if(str===inp){
//     //       return obj
//     //     }
//     //     obj[inp] = func(inp)
//     //     return func(inp)
//     //   }
//     // }
//     // const saved = saveOutput(multiplyBy2,'boo')
//     // console.log(saved(2)) // ; // => should log 4
//     // console.log(saved(9)) // ; // => should log 18
//     // console.log(saved('boo')) // ')); // => should log { 2: 4, 9: 18 }
    
    
//     // // // CHALLENGE 4
//     // //  {
    
//     // // }
//     // Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

//     // // // /*** Uncomment these to check your work! ***/
//     // // // write the callback function
// // const stayPut = (func) =>{
// //   let toggle = false
// //   let result = 0
// //   return function(inp){
// //     if(!toggle){
// //       toggle = true
// //       result = func(inp)
// //     }
// //     return result
    
// //   }
  
// // }
// //     const addByTwo = n =>n+2
// //     const once = stayPut(addByTwo)
// //      console.log(once(4))// => should log 6   include 4,
// //      console.log(once(10))// => should log 6   include  10, 
// //      console.log(once(9001))// => should log 6   include  9001
    
    
//     // // // CHALLENGE 5
//     // //  {
//     // Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
//     // // }
    
//     // // // /*** Uncomment these to check your work! ***/
//     // // // write a function that will console log hello 
// // function after(count, func) {
// // //   decalre variable and assign as value of 0
// //   let counter = 0
// // //   declare vairable and assign as empty string
// //   let result = ''
// // //   create new function 
// //   function print(){
// // 	//   increment count
// //     counter++
// // 	//   intiate cond stmt, where if count >= 3,.....
// //     if(counter>=count){
// // 		//   	update/reassign result
// //       result = func() 
      
// // 	//   otherwise...
// //     } else {
// // 		//   	udpate/reassign result..
// //       result = console.log('nothing')
// //     }
// // 	//   return result
// //     return result
// //   }
// // //   return new function
// //   return print
// // }

// // // /*** Uncomment these to check your work! ***/
// // const called = function() { console.log('hello') };
// // const afterCalled = after(3, called);
// // afterCalled(); // => nothing is printed
// // afterCalled(); // => nothing is printed
// // afterCalled(); // => 'hello' is printed

    
    
    
//     // /////////////////////////////////callbacks
//     // // Type JavaScript here and click "Run Code" or press Ctrl + s
    
    
        
        
//     //     // Challenge 12
// //     //  {
// //     const majority = (arr,callback) =>{
// //       let tCount = 0
// //       let fCount = 0
// //       for(let el of arr){
// //         if(callback(el)){
// //           tCount++
// //         } else {
// //           fCount++
// //         }
// //       }
// //       return tCount>fCount
      
// //     }
// //     // }
    
// //     // // /*** Uncomment these to check your work! ***/
// //     const isOdd = function(num) { return num % 2 === 1; };
// //     console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// //     console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
        
        
//     //     // Challenge 13
//     //  {
    
//     // }
    
//     // // /*** Uncomment these to check your work! ***/
//     //   // write a function called  startsWithS ;
// // const prioritize = (arr,callback) =>{
// //   let sResult = []
// //   let rResult = []
// //   for(let el of arr){
// //     if(callback(el)){
// //       sResult.push(el)
// //     } else {
// //       rResult.push(el)
// //     }
// //   }
// //   return sResult.concat(rResult)
  
// // }
// // const startsWithS = str => str[0]==='s'
    
// //       console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log: // ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
        
        
//     //     // Challenge 14
//     //  {
    
//     // }
    
//     // // /*** Uncomment these to check your work! ***/
//     // // console.log(countBy([1, 2, 3, 4, 5], function(num) {
//     // // if (num % 2 === 0) return 'even';
//     // // else return 'odd';
//     // // })); // should log: { odd: 3, even: 2 }
    
        
//     //     // Challenge 15
    
        
        
//     //     // Challenge 16
//     //  {
    
//     // }
    
//     // // /*** Uncomment these to check your work! ***/
//     // // create an object that contains the following { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// // const goodKeys = (obj,callback) =>{
// //   let result  = []
// //   for(let key in obj){
// //     if(callback(obj[key])){
// //       result.push(key)
// //     }
// //   }
// //   return result
// // }
// //     let sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' }
    
// //     // // writea function called  startsWithBird, where you determine if the first part of the word has 'bird'
// //     const startsWithBird = str => str.slice(0,4)==='bird'
    
// //     console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
    
        
//     //     // Challenge 17
    
    
    
// //     // // Challenge 18
// //     //  {
// //     const objFilter =(obj,callback) =>{
// //       let object = {}
// //       for(let key in obj){
// //         if(callback(key)===obj[key]){
// //           object[key]=obj[key]
// //         }
// //       }
// //       return object
      
// //     }
    
// //     // }
    
// //     // // /*** Uncomment these to check your work! ***/
// //     const startingObj = {};
// //     // write a an object that contains {6:3,2:1,12:4}
// // startingObj[6]=3
// // startingObj[2]=1
// // startingObj[12]=4
// //     const half = n => n / 2;
// //     console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }
        
        
    
        
    
    
    
    
    
    
    
    
    
//     // //////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // // Write a function that takes an input character and returns that character repeated 5 times using recursion. 
//     // // For example, if the input is 'g', then the output should be 'ggggg'.
//     // //////////////////////////////example////////////////////////////
//     // // Input: {String} char
//     // // Output: {String}
//     // ////////////////////////////example///////////////////////////////
    
//     // // console.log('Hello, world!');
//     // // // add code here////
//     // // function repeater(char, num=0, output =""){
    
//     // // }
    
//     // // // To check if you've completed the challenge, uncomment these console.logs!
//     // // console.log(repeater('g'));
//     // // console.log(repeater('j'));
    
    
//     // /////////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
//     // // Write a function that returns the factorial of a number.
    
//     // // EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
//     // ///////////////////////////////////example//////////////////////////////////////////
//     // // Input: {Number} num - number whose factorial is sought
//     // // Output: {Number}
//     // ///////////////////////////////////example//////////////////////////////////////////
//     // // // add code here////
    // function factorial(num, product=1){
    //   // base: if num===0; return product
    //   if(num===0){return product}
    //   // update/reassign product
    //   product*=num
    //   // decrement num
    //   num--
    //   // recurse function
    //   return factorial(num,product)
    
    // }
    // // To check if you've completed the challenge, uncomment these console.logs!
    // console.log(factorial(4)); // -> 24
    // console.log(factorial(6)); // -> 720
    // console.log(factorial(0)); // -> 1
    
    
    
    
//     // ////////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
//     // // Get the length of an array using recursion without accessing its length property.
//     // // ///////////////////////////////////example//////////////////////////////////////////
//     // // Input: {Array} array - array whose length is sought
//     // // Output: {Number}
//     // // ///////////////////////////////////example//////////////////////////////////////////
//     // // // add code here////
    function getLength(arr,index=0,count=0){
      // base: if arr[index]===undefined; return count
      if(arr[index]===undefined){return count}
      // incrment index
      index++
      // increment count
      count++
      // recurse function
      return getLength(arr,index,count)

    
    
    }
    // To check if you've completed the challenge, uncomment these console.logs!
    // console.log(getLength([1])); // -> 1
    // console.log(getLength([1, 2])); // -> 2
    // console.log(getLength([1, 2, 3, 4, 5])); // -> 5
    // console.log(getLength([])); // -> 0
    
//     // ////////////////////////////////////////////////// Challenge: POW///////////////////////////////////////////////////////////////////////////////////
//     // // Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. 
//     // // For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.
    
//     // // ///////////////////////////////////example//////////////////////////////////////////
//     // // Input 1: {Number} base - base number raised to the exponent
//     // // Input 2: {Number} exponent - exponent the base is raised to
//     // // Output: {Number} - expected value of base raised to exponent
//     // // ///////////////////////////////////example//////////////////////////////////////////
//     // // // add code here////
    function pow(base, exponent,output = 1){
      // base: if exponent ===0; return output
      if(exponent===0){return output}
      // update output 
      output*=base
      // decrement exponenet
      exponent--
      // recurse function
      return pow(base,exponent,output)
    }
    // To check if you've completed the challenge, uncomment these console.logs!
    // console.log(pow(2, 4)); // -> 16
    // console.log(pow(3, 5)); // -> 243
    
    
    
    
    
//     // //////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // // Write a function that takes an input character and returns that character repeated 5 times using recursion. 
//     // // For example, if the input is 'g', then the output should be 'ggggg'.
//     // //////////////////////////////example////////////////////////////
//     // // Input: {String} char
//     // // Output: {String}
//     // ////////////////////////////example///////////////////////////////
    
//     // // console.log('Hello, world!');
//     // // // // add code here////
//     // // function repeater(char,num=0,output=""){
    
    
    
//     // // }
//     // // // To check if you've completed the challenge, uncomment these console.logs!
//     // // console.log(repeater('g'));
//     // // console.log(repeater('j'));
    
    
//     // /////////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
//     // // Write a function that returns the factorial of a number.
    
//     // // EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
//     // ///////////////////////////////////example//////////////////////////////////////////
//     // // Input: {Number} num - number whose factorial is sought
//     // // Output: {Number}
//     // ///////////////////////////////////example//////////////////////////////////////////
//     // // // // add code here////
//     // // function factorial(num, product=1){
    
    
//     // // }
    
    
//     // // // // To check if you've completed the challenge, uncomment these console.logs!
//     // // console.log(factorial(4)); // -> 24
//     // // console.log(factorial(6)); // -> 720
//     // // console.log(factorial(0)); // -> 1
    
    
    
    
//     // ////////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
//     // // Get the length of an array using recursion without accessing its length property.
//     // // ///////////////////////////////////example//////////////////////////////////////////
//     // // Input: {Array} array - array whose length is sought
//     // // Output: {Number}
//     // // ///////////////////////////////////example//////////////////////////////////////////
//     // // // // add code here////
    
//     // // function getLength(array, length=0){
    
        
    
    
//     // // }
    
//     // // // // To check if you've completed the challenge, uncomment these console.logs!
//     // // console.log(getLength([1])); // -> 1
//     // // console.log(getLength([1, 2])); // -> 2
//     // // console.log(getLength([1, 2, 3, 4, 5])); // -> 5
//     // // console.log(getLength([])); // -> 0
    
    
    
function recursiveFlattener(arr, index=0, results=[])
{
  if (arr[index] === undefined) return results;
  if (!Array.isArray(arr[index])) {
    results.push(arr[index]);
    return recursiveFlattener(arr, index+1, results);
  } else {
    return results.concat(recursiveFlattener(arr[index])).concat(recursiveFlattener(arr, index+1));
  }
}


console.log(recursiveFlattener([1 ,[], [{}],[[[2],3]], 7, 9]));


function getPermutations(nums) {
  debugger
//   declare variable and assign as empty array
  let result = [];
//   base:
  if(nums.length ===0){return []}
  if(nums.length ===1){return [nums]}
//iterate through array w/ for loop
  for(let i=0; i<nums.length;i++){
    let currentNum = nums[i]
    let remainingNums = nums.slice(0,i).concat(nums.slice(i+1))
    let remaiingNumsPermuted = getPermutations(remainingNums)
	//     iterate thorough remaining permutated
    for(let j=0; j<remaiingNumsPermuted.length;j++){
      let permutedArray = [currentNum].concat(remaiingNumsPermuted[j])
      result.push(permutedArray)
    }
  }
  return result
}
// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]




/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
// */



// const sumAllElements =(arr,output=val,index=0)=>{
// //   base: arr[index]===udefined ; return output
//   if(arr[index]===undefined){return output}
// //   update/reasisign output
//   output+=arr[index]
// //   increment the index
//   index++
// //   recurse the function
//   return sumAllElements(arr,output,index)
// }

// console.log(sumAllElements([1,2,3,4], 10)) ///20
// console.log(sumAllElements([1,2,3,4], 20)) ///203
// // 10 +2 +3 +4 




/*
Create a function "fastCache" that takes one argument (a function) and returns a function. When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.

example: SINGLE ARGUMENT CASE
*/
const fastCache =(func)=>{
  //   decalre a varaible and assign it as a key/valu ppair
    let obj = {}
  //   return and create a  new inner fucntion w/ a two argumennt
    return function(num1,num2){
    //   update/reassing key value pairs
      obj[num1] = func(num1)
    //   return object
      return obj[num1]
      
    }
    
  }
  
  const multiplyBy2 = num => num * 2;
  const cachedMultiplyBy2 = fastCache(multiplyBy2);
  console.log(cachedMultiplyBy2(100)); // -> 200
  console.log(cachedMultiplyBy2(150)); // -> 300
  console.log(cachedMultiplyBy2(100)); // -> 200 // from the cache object
  
  // // example: MULTIPLE ARGUMENTS CASE
  const fastCacheMult = (func) =>{
    //   decalre a varaible and assign it as a key/valu ppair
    let obj = {}
  //   return and create a  new inner fucntion w/ a two argumennt
    return function(num1,num2){
    //   update/reassing key value pairs
      obj[num1] = func(num1,num2)
    //   return object
      return obj[num1]
      
    }
  }
  
  
  const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
  const cachedSumMultiplyBy2 = fastCacheMult(sumMultiplyBy2);
  console.log(cachedSumMultiplyBy2(5, 10)); // -> 30
  console.log(cachedSumMultiplyBy2(1, 2)); // -> 6
  console.log(cachedSumMultiplyBy2(5, 10)); // -> 30 // from the cache object
  
  
  
  
  /*
    Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
    is represented as an array of numbers.
    https://en.wikipedia.org/wiki/Pascal%27s_triangle
    e.g.
  */
  
  const pascalTriangle = num =>{
  // //   base: if num <=2 return num
  //   if(num<=2){return num}
  // //   recurse the function
  //   return pascalTriangle(num-1)+pascalTriangle(num-2)
    
    if(num===1){return [num]}
    // if(num===2)
  //   decalre a variable and assign as a empty aarrray
    
    
    let result = []
    
  //   iterate through num w/ a for loop
    for(let i=0;i<=num;i++){
      let sResult =[]
      for(let j=i+1;j<=num;j++){
      result.push(i+1,i+j+1)
      // console.log(result)
        
      }
      result.push(sResult)
      
      
    }
    //   
    return result
  }
  // 1
  // 1,1
  // 1,2,1
  // 1,3,3,1
    // console.log(pascalTriangle(1))
    // [[1]]
    // console.log(pascalTriangle(2))
  //   // [
  //   //   [1],
  //   //   [1, 1]
  //   // ]
    console.log(pascalTriangle(3)) 
  //   // [
  //   //   [1],
  //   //   [1,1],
  //   //   [1,2,1]
  //   // ]
    // console.log(pascalTriangle(6)) s
    [
      [1],
      [1,1],
      [1,2,1],
      [1,3,3,1],
      [1,4,6,4,1],
      [1,5,10,10,5,1]
    ]
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  