// /////////////////////////////////////////////////flow

// 1. write a function multiply by two
function multiplyBy2(num){
    return num * 2
}

// console.log(multiplyBy2(2))
// console.log(multiplyBy2(4))
// console.log(multiplyBy2(6))


// 2.  write a function that add's an element by 7

function add7(num){
    return num+7
}

// console.log(add7(7))
// console.log(add7(14))
// console.log(add7(21))

// 3.  create a function that measure modulo 4

function modulo4(num){
    return num%4
}

// console.log(modulo4(4))
// console.log(modulo4(20))
// console.log(modulo4(21))

// create a function that subtracts by 10

function subtract10(num){
    return num - 10;
}

// Write a function that takes an array of functions and a number that will be piped through all those functions. 
// The input number passes through the first function, whose output is passed as input to the second function, 
// whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.


function flow(input, funcArray) {
  
    if (funcArray.length === 0){
      return input;
    } else{
      let output = funcArray[0](input);
      return flow(output, funcArray.slice(1))
    }
  
  }
  
  // To check if you've completed the challenge, uncomment this code!
  
//   const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
//   console.log(flow(2, arrayOfFunctions)); // -> -7
//   console.log(flow(5, arrayOfFunctions)); // -> -9





//   ///////////////////////////////////////////////////combine operations


// 1.  write a function that adds 100 to the variable
function add100(num){
    return num + 100
}

// console.log(add100(100))
// console.log(add100(102))
// console.log(add100(200))

// 2.  write a function where it will divides the number by 5
function divByFive(num){
  return num/5
}

// console.log(divByFive(5))
// console.log(divByFive(10))
// console.log(divByFive(15))

// 3.  write a function where you multiply the number by 3
function multipByThree(num){
  return num * 3
}
// console.log(multipByThree(3))
// console.log(multipByThree(6))
// console.log(multipByThree(4))

// 4.  write a function wehre you multiply the number by 5

function multiplyByFive(num){
  return num * 5
}
// console.log(multiplyByFive(3))
// console.log(multiplyByFive(6))
// console.log(multiplyByFive(4))


// 5.  write a function where you add by 10


function addTen(num){
  return num + 10
}
// console.log(addTen(3))
// console.log(addTen(6))
// console.log(addTen(4))

// 6.  Create a function, combineOperations, that takes two parameters: a starting value and an array of functions.
//  combineOperations should pass the starting value into the first function in the array. 
// combineOperations should pass the value returned by the first function into the second function, 
// and so on until every function in the array has been called. 
// combineOperations should return the final value returned by the last function in the array.

function combineOperations(startVal,arrOfFuncs){

  //////////solution 1
  // return arrOfFuncs.reduce((acc,func)=> {
  //   return func(acc)
  // },startVal)

  ///////////solution 2
  // let output = startVal
  // arrOfFuncs.forEach(element=>{
  //   output = element(output)
  // })
  // return output
}

// console.log(combineOperations(0,[add100,divByFive,multipByThree])) //60
// console.log(combineOperations(0,[divByFive,multiplyByFive,addTen])) //10



//   ///////////////////////////////////////////////////highest func

// 1.  write an object that contains nested  methods where one will double the variable, 
// add ten to variable and the inverse/negative value of the variable
const groupOfFuncs={}

groupOfFuncs.double = n=>n*2
groupOfFuncs.addTen = n=>n+10
groupOfFuncs.inverse = n=>n*-1

// return groupOfFuncs

// Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). 
// highestFunc should return the key of the object whose associated value (which will be a function)
//  returns the largest number, when the subject is given as input.

function highestFunc(objOfFuncs, subject) {
  let highest = 0;
  let label;
  for (let callback in objOfFuncs) {
    const fn = objOfFuncs[callback];
    if (objOfFuncs[callback](subject) > highest) {
      highest = objOfFuncs[callback](subject);
      label = callback;
    }
  }
  return label;

}


// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


//   ///////////////////////////////////////////////////pipe

// 1.  write a function that capitlizes the string
function capitalize(str){
  return str.toUpperCase()
}

// console.log(capitalize('cat')); // should log: 'addTen'
// console.log(capitalize('poop')); // should log: 'double'
// console.log(capitalize('yup')); // should log: 'inverse'


// 2.  write a function that add to  the lower case of  the string
function addLowerCase(str){
  return str + str.toLowerCase()
}

// console.log(addLowerCase('cat')); // should log: 'addTen'
// console.log(addLowerCase('poop')); // should log: 'double'
// console.log(addLowerCase('yup')); // should log: 'inverse'


// 3.  write a function that rpeats the string
function repeats(str){
  return str + str
}

// console.log(addLowerCase('cat')); // should log: 'addTen'
// console.log(addLowerCase('poop')); // should log: 'double'
// console.log(addLowerCase('yup')); // should log: 'inverse


// Create a function pipe that accepts an array (of functions) and a value. 
// pipe should input the value into the first function in the array,
//  and then use the output from that function as input for the second function,
//  and then use the output from that function as input for the third function,
//  and so forth, until we have an output from the last function in the array. pipe should return the final output.

// function pipe(arrOfFuncs,value){
  // // solution 1
  // let result = value
  // for(let i=0; i<arrOfFuncs.length;i++){
  //   result=arrOfFuncs[i](result)
  // }
  // return result

  // soolution 2
  // return arrOfFuncs.reduce((acc,callBack)=> callBack(acc),value)

  // solution 3
  // let output = value
  // arrOfFuncs.forEach(callback =>{
  //   output = callback(output)

  // })
  // return output

// }
// const capAddLowRepeat = [capitalize,addLowerCase,repeats]
// console.log(pipe(capAddLowRepeat,'cat')) // should log: 'CATcatCATcat'


//   ///////////////////////////////////////////////////commutative

// 1. write a function where you multipy the variable by 3
function multBy3(num){
  return num*3

}
// console.log(multBy3(3))
// console.log(multBy3(2))
// console.log(multBy3(1))

// 2. write a function where you divde the variable by 4
function divBy4(num){
  return num/4

}
// console.log(divBy4(16))
// console.log(divBy4(12))
// console.log(divBy4(8))

// 3. write a function where you divde the variable by 4
function subtract5(num){
  return num-5

}
// console.log(subtract5(16))
// console.log(subtract5(12))
// console.log(subtract5(8))


// Create a function commutative that accepts two callbacks and a value. 
// commutative will return a boolean indicating if the passing the value into the first function, 
// and then passing the resulting output into the second function, 
// yields the same output as the same operation with the order of the functions reversed 
// (passing the value into the second function, and then passing the output into the first function).
function commutative(func1, func2, value) {
  return func1(func2(value)) === func2(func1(value))

}

// /*** Uncomment these to check your work! ***/
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


//   ///////////////////////////////////////////////////all clear

// 1.  create a function that determine's t/f where the number is odd
function isOdd(num){
  return num%2 === 1
}

// console.log(isOdd(1))
// console.log(isOdd(2))
// console.log(isOdd(3))

// 2.  create a function that determine's t/f where the number is positive
function isPositive(num){
  return num>0 
}

// console.log(isPositive(1))
// console.log(isPositive(-2))
// console.log(isPositive(3))

// 3.  create a function that determine's t/f where the number is a multiple of 5
function multipleOfFive(num){
  return num%5 === 0 
}

// console.log(multipleOfFive(5))
// console.log(multipleOfFive(-10))
// console.log(multipleOfFive(3))

// Create a function allClear that accepts an array of evaluator functions (each returning a boolean value), and a single value.
//  Using reduce, return a single boolean value indicating whether the value "passes" every single one of the evaluator functions (i.e. returns true).
const allClear = (funcArr, value) => {
  
  ///////loop solution
  // let result = []
  // for(let i=0; i<funcArr.length;i++){
  //   result.push(funcArr[i](value))
  // }
  
  // return result.every(bool =>bool===true)
  
  
  // return funcArr.reduce((acc,curr)=>{
  //   if(acc) return curr(value)
  //   return acc
  // })

}

const numFnArr = [isOdd, isPositive, multipleOfFive];
console.log(allClear(numFnArr, 25)) // should log true 
console.log(allClear(numFnArr, -25)) // should log false
 

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