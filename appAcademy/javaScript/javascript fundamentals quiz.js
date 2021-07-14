//  1.   We want the above function to return true only if the item is equal to the string "0". Why will the code not work?
function isStringZero (item) {
    return item == "0";
  }

    //   The code will throw an error because javascript does not have a == operator.  
    // The function will work as expected.
    //   The code will throw an error because item is not declared as a var
    //   Because the == operation is used instead of ===, isStringZero will return true for the integer 0. ----


   ////////////////// // EXPLANATION
// Double equals (==) does not check for type matching. 
// JS will attempt to coerce the two things into a common type before comparing them. 
// Tripe equals (===) will verify that the two things being compared have the same type without doing any coercing.


//2.   Which of the following are valid ways to iterate over and print out each element in an array?
    // A. With an anonymous callback that takes no arguments
    [1,2,3,4,5].forEach(function() {
        console.log(el);
        });

    // B. With an anonymous callback that takes an element as an argument -----
    [1,2,3,4,5].forEach(function(el) {
    console.log(el);
    });

    // C. Using a block 
    [1,2,3,4,5].forEach( |el| { console.log(el); } );

    // D. Passing in a pre-defined function as a callback ----
    function printEl (el) {
    console.log(el);
    };
    [1,2,3,4,5].forEach(printEl);

    // E. Passing in an arrow function that takes an argument ------
    [1,2,3,4,5].forEach((el) => console.log(el));
    
    
    // ////EXPLANATION
    // forEach takes a callback as an argument. 
    // The callback needs to take an argument for the element in the array well be looking at.
    //  There are no blocks in JS!


// 3.  Consider the below code. The anonymous function that prints out the dog trick is a:

function times(n, callback) {
    let i = 0;
  
    while (i < n) {
      callback();
      i++;
    }
  };
  
  function dogTrick(dogName, trickVerb) {
    times(3, function () {
      console.log(`${dogName} is ${trickVerb}!`);
    });
  };


//   closure ---

//   function that captures dogName and trickVerb ----
  
//   callback   ----

EXPLANATION
// The anonymous function passed into the invokation of times closes over and captures the dogName and trickVerb arguments 
// so that JS knows what they are inside of a new context. The function is also a callback because it is being passed in as an argument. 
// The times function will handle invoking the function that we are passing in.




//4.     We want a function that prints each number from 0 to n, except those which are divisible by 3.
//  Why will the above function not work as planned?

function printNSkip3(n) {
    let i = 0;
  
    while(i < n) {
      if(i % 3 === 0) {
        i += 1;
        break;
      }
  
      console.log(i);
      i += 1;
    }
  }

  
// There is a syntax error in the if statement - javascript if statements must include an else clause.

// The break statement will break out of the entire while loop and should be replaced with continue, so that it instead carries on to the next iteration. ----

// The function will not actually skip numbers divisible by 3 since the break will only break out of the if statement.

// The function will work as expected.


// EXPLANATION
// break kicks us out of the loop completely instead of simply skipping an iteration!





// 5.  What is logged when we run testFn?

function testFn () {
    const favoriteFood = "pizza";
  
    if (true) {
      let favoriteFood = "ramen";
      console.log(favoriteFood);
    }
  
    console.log(favoriteFood);
  }

//   "ramen", "ramen"

// "pizza", "pizza"

// The code will throw an error because favoriteFood was defined using const and cannot be overwritten in the scope of the function.

// "ramen", "pizza"


// EXPLANATION
// When the first console.log runs, JS will look inside of the current scope for a variable called favoriteFood. 
// One exists in that scope itself so the "ramen" gets printed out. 
// When the second console.log runs, JS does the same thing and finds a favoriteFood variable that is set to "pizza".