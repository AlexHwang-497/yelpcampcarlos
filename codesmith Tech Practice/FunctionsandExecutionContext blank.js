//////////////////// Challenge: lastLetter
// Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

// Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]'

// function lastLetter(word) {
//     // INSERT CODE HERE




  
//   // Uncomment the lines below to test your code
//   // console.log(lastLetter("hello")); //=> "o"
//   // console.log(lastLetter("goodbye!")); //=> "!"
//   // console.log(lastLetter("ZeltoiD")); //=> "D"
//   // console.log(lastLetter("I love Javascript")); //=> "t"



////////////////// Challenge: Passing Arguments
// Examine the code given to you. Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true for both, and pass in the arguments accordingly.

// const x = 3;

// function isX1(num) {
//     const x = 5;
//     return num === x;
// }

// function isX2(num) {
//     return num === x;
// }

// const one = isX1(/* ADD CODE HERE */);
// const two = isX2(/* ADD CODE HERE */);

// // Uncomment these to check your work!
// // console.log(one); // should log: true
// // console.log(two); // should log: true



///////////////// Challenge: Invoking Functions
// Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.
// let calls = "";

// function jerry(str) {

// }

// function george(str) {

// }

// function elaine(str) {

// }

// function kramer(str) {

// }


// // Uncomment these to check your work!
// // calls = jerry(calls);
// // console.log(calls); // should log: 'JerryKramerGeorgeElaine'



/////////////////////// Challenge: droids////////////////
// Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. 
// Update the variable result to "Found Droids!" if the array contains the string "Droids". 
// Otherwise update the variable result to "These are not the droids you're looking for." 
// Return your updated result.

// function droids(arr) {
//     let result = '';
//     // ADD CODE HERE
//    
  
//   // Uncomment these to check your work! 
//   const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
//   const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
//   console.log(droids(starWars)) // should log: "Found Droids!"
//   console.log(droids(thrones)) // should log: "These are not the droids you're looking for."


//////////////////////////////////////////////// Challenge: Using forEach
// Recreate the function droids from the previous challenge, but instead of using a FOR loop, use the built-in forEach method.

// function droids(arr) {
//     let result = '';
//     // ADD CODE HERE
  
//   // Uncomment these to check your work! 
//   // const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
//   // const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
//   // console.log(droids(starWars)) // should log: "Found Droids!"
//   // console.log(droids(thrones)) //should log: "These are not the droids you're looking for."



/////////////////////////////// Challenge: For Loops - Updating Array Elements
// Using a FOR loop, write a function addN which adds the argument n to each number in the array arr and returns the updated arr.

// function addN(arr, n){
//     // ADD CODE HERE
  
//   // Uncomment these to check your work!
//   console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
//   console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]




 
////////////////////////////Challenge: For Loops - Summing Array Elements
// Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.

// function getTheSum(arr){
//     // ADD CODE HERE
  
//   // Uncomment these to check your work!
//   console.log(getTheSum([3, 6, 9])); // expected log 18
//   console.log(getTheSum([10, 11, 12])); // expected log 33




////////////////// Challenge: multiplyAll
// Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, and returns the result.

// // ADD CODE HERE 

//   // Uncomment these to check your work!
//    console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
//   // console.log(multiplyAll(5, 5, 5, 3)) // should log: 375



// ////////////////////////Challenge: Loops - Summing Two Arrays
// Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array.

// function mergingElements(array1, array2){
//     // ADD CODE HERE
  
//   // Uncomment these to check your work!
//   console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
//   console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]


//////////////////////////////////////// Challenge: While Loops - Counters
// Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. 
// When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' 
// When it's at 3, print 'I'm about to explode with excitement!' When the counter is finished, print 'That was kind of a let down'.

// function imAboutToExplodeWithExcitement(n){
//     // ADD CODE HERE
  
//   // Uncomment the line below to check your work!
//   //imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'
  

// ////////////////////////////////// Challenge: Loops - Range
// Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned should be an array with the low, high, and range.

// function getTheRange(arr){
//     // ADD CODE HERE
  
//   // Uncomment these to check your work!
//    console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]


////////////////////////////////// Challenge: Loops - Multiple Conditions
// // Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
// // Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
// // BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.


// function addingAllTheWeirdStuff(array1, array2){
//     // ADD CODE HERE
  
//   // Uncomment these to check your work!
//    console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
//    console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]



/////////////////////////// Challenge: disemvowel
// Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

// function disemvowel(string) {
//     // ADD CODE HERE
  
//   // Uncomment these to check your work!
//   console.log(disemvowel('CodeSmith')); // => 'CdSmth'
//   console.log(disemvowel('BANANA')); // => 'BNN'
//   console.log(disemvowel('hello world')); // => 'hll wrld'
  


////////////////////////////////////// Challenge: arrayBuilder
// Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. 
// // The order of the elements in the array does not matter, but repeated elements should be grouped.
// function arrayBuilder(obj) {
//     // ADD CODE HERE


//   // Uncomment these to check your work!
//   console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
//   console.log(arrayBuilder({})); // => []



///////////////////////////////// Challenge: addWaldo
// Create a function addWaldo that accepts an object with keys being first names and values being last names. 
// For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.
// ADD CODE HERE 



//   // Uncomment these to check your work!
//   const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
//   console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }


/////////////////////////////////////// Challenge: findWaldo
// Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. 
// If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

// // ADD CODE HERE



//   // Uncomment these to check your work!
//   const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
//   const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
//   console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
//   console.log(findWaldo(supernatural)) // should log: 'unknown'
