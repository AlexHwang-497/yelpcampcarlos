///////Challenge: ForLoops Fundamentals//////////

// Challenge
// Using a for loop, decrement countDown by one each time the loop runs until it equals 0, making use of looping functionality instead of logging each number separately.

// let countDown = 10;
// // ADD CODE HERE

// //Uncomment the below line to check your work
//  console.log("we print the following number",countDown) // -> should print 0;


// ////////// Challenge: For Loops and Array Indices///////////////////
// You are given 3 different arrays, one of first names, last names and places. Imagine that each array element at a certain index corresponds to one user.
// For example, my friends are Mary Snow, Kris Bowles, and Janelle Wong. I have two arrays, one of first names and one of last names. 
//In order to get the full name of my friend, I need to access both arrays

// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];


// const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE






////////// Challenge: For Loops - Calculating Array Elements
// You are given an array of five numbers called increaseByTwo. Use a for loop to iterate through the array and increase each number by two.

// const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE



// // Uncomment the line below to check your work!
//  console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];


////////////// Challenge: While Loops - Fundamentals
// Use a while loop to increment count by 2 on each repetition of the block of code. Run the code block of your while loop until count is 8.

// let count = 2;
// // ADD CODE HERE


// // Uncomment these to check your work!
//  console.log(count); 



/////////// Challenge: While Loops - Conditional Expression
// Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. 
// In the code block, add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.


// ADD CODE HERE


// // Uncomment the line below to check your work!
// console.log(sum);
// console.log(addThis)




//////////// Challenge: fizzbuzz////////////
// Use a loop to iterate through the numbers 1 through 16. 
// Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5,
//  and "fizzbuzz" in place of numbers divisible by both 3 and 5.

// Log fb to the console to see the output.

// const fb = [];
// // ADD CODE HERE

// // should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]



/////////////// Challenge: Objects - Examining Properties/////////////
//You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the property foundNum. If it exists, reassign the value of found to 1.

// let checkObj = {
//     oddNum: 1,
//     evenNum: 2,
//     foundNum: 5,
//     randomNum: 18
//   };
  
//   let found = 0;
//   // ADD CODE HERE
  
//   console.log(Object.keys(checkObj))
//   console.log(Object.values(checkObj))
//   console.log(Object.values(found))



// Challenge: Objects - Iterating with for... in
// You are provided with an empty array called objToArray. 
//Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.

// const checkObj = {
//     oddNum: 1,
//     evenNum: 2,
//     foundNum: 5,
//     randomNum: 18
//   };
  
//   const objToArray = [];
//   // ADD CODE HERE


//   console.log(Object.values(checkObj))
//   console.log(Object.values(objToArray))


/////////////////////////Challenge: Objects - Iterating with a for loop
// This time, use the Object.values() method to return an array of checkObj's values, and assign this array to a constant called objToArray. 
// Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. If so, reassign the value of divBy6 to true.

// const checkObj = {
//     oddNum: 1,
//     evenNum: 2,
//     foundNum: 5,
//     randomNum: 18
//   };
//   let objToArray = [];
//   let divBy6 = false;
  
//   // ADD CODE HERE



//   console.log(objToArray)
//   console.log(divBy6)
  

/////////////// Challenge: Objects - Adding Properties//////////
// You are provided with an array, possibleIterable. 
// Using a for loop, build out the object divByThree so that each key is an element of possibleIterable that is divisible by three.
//  The value of each key should be the array index at which that key can be found in possibleIterable.

// const possibleIterable = [4, 3, 9, 6, 23];
// const divByThree = {};
// // ADD CODE HERE



// console.log(divByThree)



///////////////////////// Challenge: Objects - Evaluating Keys//////////////
// You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0. 
// Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total.

// const sumMe = {
//     hello: 'there',
//     you: 8,
//     are: 7,
//     almost: '10',
//     done: '!'
//   };
//   let total = 0;
//   // ADD CODE HERE
