// /////////////////////////////////////////////////flow

// 1. write a function multiply by two


// 2.  write a function that add's an element by 7


// 3.  create a function that measure modulo 4


// Write a function that takes an array of functions and a number that will be piped through all those functions. 
// The input number passes through the first function, whose output is passed as input to the second function, 
// whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.







//   ///////////////////////////////////////////////////combine operations


// 1.  write a function that adds 100 to the variable

// 2.  write a function where it will divides the number by 5

// 3.  write a function where you multiply the number by 3

// 4.  write a function wehre you multiply the number by 5



// 5.  write a function where you add by 10

// 6.  Create a function, combineOperations, that takes two parameters: a starting value and an array of functions.
//  combineOperations should pass the starting value into the first function in the array. 
// combineOperations should pass the value returned by the first function into the second function, 
// and so on until every function in the array has been called. 
// combineOperations should return the final value returned by the last function in the array.


// console.log(combineOperations(0,[add100,divByFive,multipByThree])) //60
// console.log(combineOperations(0,[divByFive,multiplyByFive,addTen])) //10



//   ///////////////////////////////////////////////////highest func

// 1.  write an object that contains nested  methods where one will double the variable, 
// add ten to variable and the inverse/negative value of the variable


// Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). 
// highestFunc should return the key of the object whose associated value (which will be a function)
//  returns the largest number, when the subject is given as input.

//   ///////////////////////////////////////////////////pipe

// 1.  write a function that capitlizes the string

// 2.  write a function that add to  the lower case of  the string

// 3.  write a function that rpeats the string

// Create a function pipe that accepts an array (of functions) and a value. 
// pipe should input the value into the first function in the array,
//  and then use the output from that function as input for the second function,
//  and then use the output from that function as input for the third function,
//  and so forth, until we have an output from the last function in the array. pipe should return the final output.



//   ///////////////////////////////////////////////////commutative

// 1. write a function where you multipy the variable by 3

// 2. write a function where you divde the variable by 4

// 3. write a function where you divde the variable by 4


// Create a function commutative that accepts two callbacks and a value. 
// commutative will return a boolean indicating if the passing the value into the first function, 
// and then passing the resulting output into the second function, 
// yields the same output as the same operation with the order of the functions reversed 
// (passing the value into the second function, and then passing the output into the first function).


// /*** Uncomment these to check your work! ***/
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


//   ///////////////////////////////////////////////////all clear

// 1.  create a function that determine's t/f where the number is odd

// 2.  create a function that determine's t/f where the number is positive

// 3.  create a function that determine's t/f where the number is a multiple of 5

// Create a function allClear that accepts an array of evaluator functions (each returning a boolean value), and a single value.
//  Using reduce, return a single boolean value indicating whether the value "passes" every single one of the evaluator functions (i.e. returns true).
 

//   ///////////////////////////////////////////////////function validator

// 1.  create a function where you add 5
function addFive(num){
  return num+5
}

console.log(addFive(5))
console.log(addFive(2))
console.log(addFive(10))


// 2.  create a function where you multipy the variable by 2
function multiplyByTwo(num){
  return num*2
}

console.log(multiplyByTwo(5))
console.log(multiplyByTwo(2))
console.log(multiplyByTwo(10))

// 3.  create a function wheere you subtract by one
// 3.  create a function wheere you subtract by one
function subtractOne(num){
  return num+-1
}

console.log(subtractOne(5))
console.log(subtractOne(2))
console.log(subtractOne(10))

// 4. Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). 
// This function should return a new array containing *only* the functions from the original array that, 
// when invoked with input, return the value output. Use reduce!

const functionValidator = (funcArr, input, output) => {
  return funcArr.reduce((acc,curr)=>{
    if(curr(input) === output){
      acc.push(curr)
    }
    return acc
  },[])

}

// const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]