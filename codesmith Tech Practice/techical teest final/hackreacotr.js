
// Convert Array To Object 1
// 1
// Convert Array To Object 1
// Submitted on Yesterday at 8:24 PM
// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:

// 1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.

// Example input:

// var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// Function's return value (output):

// {
//   Queen : 'Beyonce'
// }
// Do not change the input array. Assume all elements in the input array will be of type 'string'.

// Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

// E.g. it should handle input like:

// ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']
// Function's return value (output):

// {
//   Kevin : 'Coleman'
// }


//////////////////////////////////////////////////////



// Convert Object To Array 1
// 2
// Convert Object To Array 1
// Submitted on 04/26/2021
// Write a function called "getAllKeys" which returns an array of all the input object's keys. Example input:

// var input = {
//   name : 'Sam',
//   age : 25,
//   hasPets : true
// };
// Function's return value (output) :

// ['name', 'age', 'hasPets']
// Do not use "Object.keys" to solve this prompt.

// Note that your function should be able to handle any object passed in it.

// E.g. it should also handle an input like:

// var alternativeInput = {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// };
// Function's return value (output):

// ['a', 'number', 'hungry', 'grammyWins']

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convert Array To Object 2
// 3
// Convert Array To Object 2
// Submitted on 04/01/2021
// Write a function 'transformArrayToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// Example input:

// var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// Function's return value (output):

// {
//   make : 'Ford',
//   model : 'Mustang',
//   year : 1964
// }
// Do not change the input string. Assume that all elements in the array will be of type 'string'.

// Note that the input may have a different number of elements than the given sample. For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

/////////////////////////////////////////////////////////////////////////


// Convert Object To Array 2
// 4
// Convert Object To Array 2
// Submitted on Today at 7:47 AM
// Write a function called "listAllValues" which returns an array of all the input object's values. Example input:

// var input = {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// };
// Function's return value (output):

// ['Krysten', 33, false]
// Do not use "Object.values" to solve this prompt.

// Note that the input may have a different number of keys and values than the given sample. E.g. it should also handle an input like:

// var alternativeInput = {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// };
// Function's return value (output):

// ['a', 11, true, 1]
/////////////////////////////////////////////////////////////////////////////////////////////


// Convert Array To Object 3
// 5
// Convert Array To Object 3
// Submitted on Today at 8:01 AM
// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

// The argument will look like this:

// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];
// Given that input, the return value should look like this:

// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows or different keys than the given sample.

// For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.


//////////////////////////////////////////////////////////////////////////////////////////////////////


// Convert Object To Array 3
// 6
// Convert Object To Array 3
// Submitted on Today at 8:01 AM
// Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

// Argument:

// var input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// };
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Find Shortest Element
// 7
// findShortestElement
// Submitted on Today at 8:07 AM
// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear.
// If the given array is empty, it should return an empty string.
// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Filter Odd Length Words
// 8
// filterOddLengthWords
// Submitted on Today at 8:07 AM
// Write a function called "filterOddLengthWords".

// Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Get Largest Element
// 9
// getLargestElement
// Submitted on Today at 8:08 AM
// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:

// It should return 0 if the array is empty.
// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;


///////////////////////////////////////////////////////////////////////////////////////////////////////


// Compute Sum of All Elements
// 10
// computeSumOfAllElements
// Submitted on Today at 8:08 AM
// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// var output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Calculate Bill Total
// 11
// calculateBillTotal
// Submitted on Today at 8:08 AM
// Write a function called "calculateBillTotal".

// Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.

// Notes:

// Assume that sales tax is 9.5% and tip is 15%.
// Do NOT tip on the sales tax, only on the pre tip amount.
// var output = calculateBillTotal(20);
// console.log(output); // --> 24.9

//////////////////////////////////////////////////////////////////////////////////////////////////

// Get String Length
// 12
// getStringLength
// Submitted on Today at 8:08 AM
// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:

// Do NOT use any native 'length' methods.
// You might consider using 'substring' or 'slice' as alternatives.
// var output = getStringLength('hello');
// console.log(output); // --> 5

////////////////////////////////////////////////////////////////////////////////////////////////////


// Join Array of Arrays
// 13
// joinArraysOfArrays
// Submitted on Today at 8:08 AM
// Write a function called "joinArrayOfArrays".

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']
// You should be familiar with the "concat" method for this problem.

/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Get Product of All Elements at Property
// 14
// getProductOfAllElementsAtProperty
// Submitted on Today at 8:36 AM
// Write a function called "getProductOfAllElementsAtProperty".

// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

// Notes:

// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.
// var obj = {
//   key: [1, 2, 3, 4]
// };
// var output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24


/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Sum Digits
// 15
// sumDigits
// Submitted on Today at 8:44 AM
// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4
// Notes:

// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Get Sum of All Elements at Property
// 16
// getSumOfAllElementsAtProperty
// Submitted on Today at 8:54 AM
// Write a function called "getSumOfAllElementsAtProperty".

// Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

// Notes:

// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the key, it should return 0.
// var obj = {
//   key: [4, 1, 8]
// };
// var output = getSumOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 13

///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Find Shortest Word Amongst Mixed Elements
// 17
// findShortestWordAmongMixedElements
// Submitted on Today at 8:58 AM
// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear in the given array.
// Expect the given array to have values other than strings.
// If the given array is empty, it should return an empty string.
// If the given array contains no strings, it should return an empty string.
// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'
///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Find Smallest Number Amongst Mixed Elements
// 18
// findSmallestNumberAmongMixedElements
// Submitted on Today at 9:02 AM
// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:

// If the given array is empty, it should return 0.
// If the array contains no numbers, it should return 0.
// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Get Longest Word Of Mixed Elements
// 19
// getLongestWordOfMixedElements
// Submitted on Today at 9:25 AM
// Write a function called "getLongestWordOfMixedElements".

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// Notes:

// If the array is empty, it should return an empty string ("").
// If the array contains no strings; it should return an empty string.
// var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 'word'
////////////////////////////////////////////////////////////////////////////////////////////////////////


// Get Largest Number Among Mixed Elements
// 20
// getLargestNumberAmongMixedElements
// Submitted on Today at 9:28 AM
// Write a function called "getLargestNumberAmongMixedElements".

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// Notes:

// The array might contain values of a type other than numbers.
// If the array is empty, it should return 0.
// If the array contains no numbers, it should return 0.
// var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 5

////////////////////////////////////////////////////////////////////////////////////////////////////////


// Compute Summation to N
// 21
// computeSummationToN
// Submitted on Today at 9:30 AM
// Write a function called "computeSummationToN".

// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:

// If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
// var output = computeSummationToN(6);
// console.log(output); // --> 21

///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convert Score To Grade
// 22
// convertScoreToGrade
// Submitted on Today at 9:36 AM
// Write a function called "convertScoreToGrade".

// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// Notes:

// (100 - 90) --> 'A'
// (89 - 80) --> 'B'
// (79 - 70) --> 'C'
// (69 - 60) --> 'D'
// (59 - 0) --> 'F'
// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'

/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convert Score to Grade with Plus/Minus
// 23
// convertScoreToGradeWithPlusAndMinus
// Submitted on Today at 9:43 AM
// Write a function called "convertScoreToGradeWithPlusAndMinus".

// Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

// Notes:

// (100 - 90) --> 'A'
// (89 - 80) --> 'B'
// (79 - 70) --> 'C'
// (69 - 60) --> 'D'
// (59 - 0) --> 'F'
// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
// If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
// There are is no F+ and there is no F-.
// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'

/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Repeat String
// 24
// repeatString
// Submitted on Today at 9:44 AM
// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Get Longest of Three Words
// 25
// getLongestOfThreeWords
// Submitted on Today at 9:46 AM
// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

// Notes:

// If there is a tie, it should return the first word in the tie.
// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Find Shortest of Three Words
// 26
// findShortestOfThreeWords
// Submitted on Today at 9:48 AM
// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:

// If there are ties, it should return the first word in the parameters list.
// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Compute Compound Interest
// 27
// computeCompoundInterest
// Submitted on Today at 9:50 AM
// Write a function called "computeCompoundInterest".

// Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

// var output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output); // --> 438.8368221341061
// Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest  This shows the formula used to calculate the total compound interest generated.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Modulo
// 28
// modulo
// Submitted on Today at 9:51 AM
// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_() 

// Notes:

// Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// 0 % ANYNUMBER = 0.
// ANYNUMBER % 0 = NaN.
// If either operand is NaN, then the result is NaN.
// Modulo always returns the sign of the first number, even if the remainder is 0.
// var output = modulo(25, 4);
// console.log(output); // --> 1

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Multiply
// 29
// multiply
// Submitted on Today at 9:54 AM
// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:

// It should not use the multiply operator - *
// var output = multiply(4, 7);
// console.log(output); // --> 28

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Is Odd without Modulo
// 30
// isOddWithoutModulo
// Submitted on Today at 9:56 AM
// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:

// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isOddWithoutModulo(17);
// console.log(output); // --> true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Is Even without Modulo
// 31
// isEvenWithoutModulo
// Submitted on Today at 9:56 AM
// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even.

// Notes:

// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Multiply Between
// 32
// multiplyBetween
// Submitted on Today at 9:57 AM
// Write a function called "multiplyBetween".

// Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:

// The product between 1 and 4 is 1 * 2 * 3 = 6.
// If num2 is not greater than num1, it should return 0.
// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Compute Sum Between
// 33
// computeSumBetween
// Submitted on Today at 9:57 AM
// Write a function called "computeSumBetween".

// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

// Notes:

// The sum between 1 and 4 is 1 + 2 + 3 = 6.
// If num2 is not greater than num1, it should return 0.
// var output = computeSumBetween(2, 5);
// console.log(output); // --> 9

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Greet Customer
// 34
// Greet Customer
// Submitted on Today at 10:06 AM
// Write a function called "greetCustomer".

// Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.

// The greeting should be different, depending on the name on their reservation.

// Case 1 - Unknown customer ( Name is not present in customerData ):

// var output = greetCustomer('Terrance');
// console.log(output); // --> 'Welcome! Is this your first time?'
// Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

// var output = greetCustomer('Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
// Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
// Notes:

// Your function should not alter the customerData object to update the number of visits.
// Do not hardcode to the exact sample data. This is a BAD IDEA:
// if (firstName === 'Joe') {
//   // do something
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Detect Outlier Value
// 35
// Detect Outlier Value
// Submitted on Today at 10:17 AM
// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// Example:

// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

////////////////////////////////////////////////////////////////////////////////////////////////////////


// Find Pair for Sum
// 36
// Find the Pair
// Submitted on Today at 12:01 PM
// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

////////////////////////////////////////////////////////////////////////////////////////////////////////


// Is Rotated
// 37
// Is Rotated
// Submitted on Today at 12:06 PM
// Is the first input string a rotated version of the second input string?

// Example:

// var string_1 = 'hello world';
// var string_2 = 'orldhello w';

// var result = isRotated(string_1, string_2);
// console.log(result); // --> true

// /////////////////////////////////////////////////////////////////////////////////////////////////


// Binary Search with Divide and Conquer (exceeds difficulty of interview)
// 38
// Divide and Conquer
// PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.
// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this: [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22. 2) The value is higher than 22, so now consider only the right half of the previous array: [...31, 33, 34] 3) Pick the midpoint: 33 4) The value is lower than 33, so now consider only the left half of the previous array: [...31...] 5) Pick the midpoint: 31 6) You've hit the value. 7) Return the index of the value.

// Notes:

// If you don't find the value, you can return null.
// If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
// Example:

// var arr = [1, 3, 16, 22, 31, 33, 34]
// var result = search(arr, 31);
// console.log(result); //--> 4

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Average Integers
// 39
// Average
// Submitted on Today at 12:08 PM
// Use the skeleton provided to complete the sum and average functions described below.

////////////////////////////////////////////////////////////////////////////////////////////////////


// Isogram
// 40
// isIsogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Your task is to write and test a function that determines whether a string is an isogram, following the format of the previous problems. It should return true if the input string is an isogram, and should return false otherwise.

// While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.

// Notes:

// Assume your input is only letters.
// Assume the empty string is an isogram.
// Ignore case.
// Follow the pseudocode exactly!
/////////////////////////////////////////////////////////////////////////////////////////////




// Find Longest Palindrome
// 41
// findLongestPalindrome
// Submitted on Today at 12:09 PM
// Your task is to write a function that will find the longest single-word palindrome within an input phrase (string). The phrase inputted will only contain letters (no symbols, punctuation, or numbers). Your palindrome detection should be case-insensitive. If there are multiple palindromes of equal length, return the last one.

// Ideally, your solution will use a native method (built into the language) called .sort(). Essentially, when called, this method takes a function that tells the sorting operation how it should order the resulting sorted array. We have supplied a function inside of the skeleton. Please consult this MDN documentation, and read it carefully: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 

//////////////////////////////////////////////////////////////////////////////////////////




// Fashion Inventory - Part A
// 42
// Fashion Inventory Part-A
// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

// //...console output:
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
// // and so on...
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

// Hint: the return value is a string.

//////////////////////////////////////////////////////////////////////////////////////////




// Fashion Inventory - Part B
// 43
// Fashion Inventory Part-B
// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// Your function should return the average cost of all shoes per designer in this format:

// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };
// There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

//////////////////////////////////////////////////////////////////////////////////////////




// Fashion Inventory - Part C
// 44
// Fashion Inventory Part-C
// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A. Here is an example of the console output:

// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Gucci, black leather laced sneakers, 900
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

//////////////////////////////////////////////////////////////////////////////////////////




// Fashion Inventory - Part D
// 45
// Fashion Inventory Part-D
// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this:

// var expectedResult = [
//   {
//     "nameWords": [
//       "tasselled",
//       "black",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "tasselled",
//       "green",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "red",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   },
//   {
//     "nameWords": [
//       "black",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   }
// ];




