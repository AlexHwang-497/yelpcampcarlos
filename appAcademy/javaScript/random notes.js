// let result = [];
// for (let i = 1; i < 10; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   result.push(i);
// }

// console.log(result); // [1, 2, 4, 5, 7, 8]



// ////////////////////////////////data types
// JS objects
// var cat = {
//     name: "Breakfast",
//     age: 8,
//     purr: function () {
//       console.log("meow!");
// }

// name, age and purr are properties of cat


// ////////////////////////////variables
// var - to declare a functionally scoped vriable

// > var myVar;
// undefined

// > myVar; // We now can access myVar without error because we declared it.
// undefined // Evaluates to undefined because we did not assign myVar a value

// > myVar = 5; // Assign it a value of 5
// 5


// let - we use let to decalr a block-scoped function

// function blockScope() {
//   if (true) {
//     var x = 'var';
//     let y = 'let';
//     console.log(x); // 'var'
//     console.log(y); // 'let'
//   }
//   console.log(x); // 'var'
//   console.log(y); // ReferenceError: y is not defined
// }

// blockScope(); // evoking the function

// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
// console.log(blockScope(x,y)); // ReferenceError: y is not defined
// console.log('stirngs are cool')



// const - we use to declare constsnts.  should be used for constructs that will not be re-declared ore reassigned
  // const are block scoped like let
  // trying to redeclare a constat with a var or let by the same name will also raise an error

// const favFood = "cheeseboard pizza"; // Initializes a constant
// // undefined

// const favFood = "some inferior food"; // Re-initialization raises an error
// // TypeError: Identifier 'favFood' has already been declared

// let favFood = "some other inferior food"; // Re-initialization raises an error
// // TypeError: Identifier 'favFood' has already been declared

// favFood = "deep-dish pizza"; // Re-assignment raises an error
// // TypeError: Assignment to constant variable.

// // constants are not immutable, only the binding is immutable.  for example we seta constat equal to an object, but can still modify
// const animals = {};
// animals.cetacea = 'beluga whale';
// animals.rodent = 'capybara'; // This works!

// animals = {cetacea: 'beluga whale'}; // Raises an error

// // constants cannot be reassigned but new constnts of the same names can be declred in nested scopes
// const favFood = "cheeseboard pizza"
// console.log(favFood);

// if (true) {  
//   const favFood = "noodles"; // This works! Declaration is scoped to the `if` block
//   console.log(favFood); // Prints "noodles"
// }


// //////////////////////////globals/////////////////////////////////

// if you leave off a declaration when initalizing the varialbe, it will become a global
// function good() {
//   let x = 5;
// }

// function bad() {
//   y = "Expect the unexpected (eg. globals)";  //this will be the globabl vaariable
// }

// function why() {
//   console.log(y); // "Expect the unexpected (eg. globals)""
//   console.log(x); // Raises an error
// }

// good();
// bad();
// why();


/////////////////////////// closure and scope/////////////////////////

// scope - of method is the set of variables that are available for use within the method
  //  scope of a function includes:
    // 1.  function's arguments
    // 2.  any local variables declared inside the function
    // 3.  any variables that were already decalred when the function was defined

    // function sayHelloNTimes(name, n) {
    //   function greet() {
    //     console.log( `Hi, ${name}!`);
    //   }
    
    //   for (let i = 0; i < n; i++) {
    //     greet();
    //   }
    // }
    
    // sayHelloNTimes("Bob", 3); // logs 'Hi, Bob!' x3
    // sayHelloNTimes("Sally", 6); // logs 'Hi, Sally!' x6
  // in this example, the variable name is refernced by greet, even though it was never declared within greet
    // this is possible because a neted functin's scope infludes variables declared in the scope where the function was nested


    // ////////closures

    // Functions such as greet that use (ie. capture) such variables (ie. free variables) are called closures.

    // Free variables can be modified by closures. Consider this function:
    // function sum(nums) {
    //   let count = 0;
    
    //   function addNum(num) {
    //     count += num;
    //   }
    
    //   for (let i = 0; i < nums.length; i++){
    //     addNum(nums[i]);
    //   }
    
    //   return count;
    // }
    
    // console.log(sum([1, 3, 5])) // => 9

// ///////////////////////////closure applicatinos

// wwe ccan use closure to pass down arguments to helper function with explicity listing them ar arguments
// function isPalindrome(string) {
//   function reverse() {
//     return string.split('').reverse().join('');
//   }

//   return string === reverse();
// }


// ///////////private state///////////////
// function createCounter() {
//   let count = 0;

//   // here ++count means increment the value of the count variable by 1 and then the count variable is evaluated in the statement.
//   // count++ means the count variable is evaluated in the statement and then the value is incremented by 1. 
//   // If we used count++ our counter would be off by 1.
//   return () => ++count;
// }

// let counter = createCounter();
// console.log(counter()); // => 1
// console.log(counter()); // => 2
// counter.count; // undefined
// let counter2 = createCounter();
// console.log(counter2()); // => 1


// by closing or capturing the cout variable, each function that is return from createCounter has private, mutable state that cannot be 
// accessed exertanlly

// function Counter () {
//   this._count = 0;
// }

// Counter.prototype.fire = function () {
//   this._count += 1;
//   return this._count;
// }

// let counter = new Counter();
// counter.fire(); // 1
// counter.fire(); // 2
// counter._count // 2
// counter._count = 0 // 0 (this works);

// advantage of the closue way is that the count is truly private
// in the first example, there is no way any method beside the closure itself can access the count state

// in the second example, a foolilsh user might set counter._count inadvertently


// ///////////////////////global scope///////////////////////////

// javascript has global scope represented by the 'window' boject in the browser and the 'global' object in node.js
// adding attributes to these objects, makes them availbe thorugh a program

function theBest() {
  window.realMVP = 'you';
}

theBest(); // initializes realMVP on the global scope

window.realMVP; // 'you'

function whoDaBest() {
  return realMVP; // 'you'
}

whoDaBest(); // 'you'

// While useful on occasion, global variables are usually best avoided, 
// as they give too much code access to their values, increasing the likelihood of bugs.




