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


  
    
    // /*** Uncomment these to check your work! ***/
    
    // /*** DEALER ***/
    // write the function for the array[2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
  
 
    
    
  //   // /*** PLAYER 1 ***/
  //   (4, 5);
  //   // => should log 9
  //   // => should log 11
  //   // => should log 17
  //   // => should log 18
  //   // => should log 'bust'
  //   // => should log 'you are done!'
  //   // => should log 'you are done!'
    
  //   // /*** BELOW LINES ARE FOR THE BONUS ***/
    
  //   // /*** PLAYER 2 ***/
  //   (2, 2);
  //   // => should log 4
  //   // => should log 15
  //   // => should log 19
  //   // => should log 'bust'
  //   // => should log 'you are done!
  //   // => should log 'you are done!
    
  //   // /*** PLAYER 3 ***/
  //   (3, 7);
  //     // => should log 10
  //     // => should log 13
  //     // => should log 'bust'
  //     // => should log 'you are done!
  //     // => should log 'you are done!
  
  
  
  
  // //2.  ///////////////////////////////////////////////////Challenge 5
  // // Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
  // // const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
  // // const arr = ["first","second","third"];
  // // pathFinder(obj,arr);   //-> "finish"
  
  
  
  // const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
  // const arr = ["first", "second", "third"];
  // console.log(pathFinder(obj, arr));   //-> "finish"
  
  
  
  
  // //3.     /////////////////////////////////////////////////////////////////movie selector/////////////////////////////////////////////////////
  // // Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). 
  // // Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. 
  // // The titles should be all uppercase strings.

  
  
  
  // const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
  // console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]






  // const poyoyotion 
  
  
  // // };
  // console.log(poyoyotion('432A452B2')) ///4334521
  // console.log(poyoyotion('7545B4B1')) // 754530
  // console.log(poyoyotion('7545B4B1')) // 754530