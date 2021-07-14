////////////////////////////
//     Challenge 1
////////////////////////////

// function repeater(char, n = 5, output="") {
//   // initiate if statement (n=5) 
//   if(n === 0){
//     return output;
//   }else{
//     output +=char;
//     n --;
//     return repeater(char, n, output);
//   }
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j'));// -> 'jjjjj'


////////////////////////////
//     Challenge 2
////////////////////////////

// function isEven(n) {
//   debugger;
// if(n%2 ===0){
//   return true;
// } else {
//   return false;
// }
//   return isEven(n)
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(isEven(0)); // -> true
// console.log(isEven(5)); // -> false
// console.log(isEven(10)); // -> true



////////////////////////////
//     Challenge 3
////////////////////////////


// function factorial(num, product=1) {
//   if(num===0){
//     return product;
//   }
  // return factorial(num-1, product* num)

// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1




////////////////////////////
//     Challenge 4
////////////////////////////


// function getLength(array, i = 0) {
//   // basecase when we don't find any item in the array
//   if (array[0] === undefined){
//     return i;
//   }
//   // on each recursion we pop one item in the array
//   // increment i++  
//   array.pop();
//   i ++;
//   // call the array with the smaller array,
// 	return getLength(array, i);
// }

// function getLength(array, length = 0){
//   if(array[0] === undefined) return length;
//   length ++
//   return getLength(array.slice(1), length)
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5


////////////////////////////
//     Challenge 5
////////////////////////////


// function pow(base, exponent) {
//   if (exponent === 0){
//     return 1;
//   } else {
//     return base * pow(base,exponent-1)
//   }

// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

////////////////////////////
//     Challenge 6
////////////////////////////


// function flow(input, funcArray) {
// 	// bascase: funcArray.length === 0, return input
//   if (funcArray.length === 0) return input;
//   // run the function of funcArray[0] => result is going to be the next input
//   input = funcArray[0](input);
//   // shift the array 
//   //funcArray.shift();
//   // return call flow with the (input, funcArray)
//   return flow(input, funcArray.slice(1));
// }

// // To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7



////////////////////////////
//     Challenge 7
////////////////////////////
// fib(n) = fin(n-2) + fib(n-1) 
// 8 + 7 + 
// =8+13

// n=6 ; 8
// n=5 ; 5

function fib(n) {
    //base case
    
    if (n <= 2) return 1;
  
    return fib(n - 1) +fib(n - 2);
  }
  
               
  // function factorial(num, product=1) {
  //   if(num===0){
  //     return product;
  //   }
  //   return factorial(num-1, product* num)
  
  // }
  
  // // To check if you've completed the challenge, uncomment these console.logs!
  // console.log(factorial(4)); // -> 24
  // console.log(factorial(6)); // -> 720
  // console.log(factorial(0)); // -> 1
               
               
  // To check if you've completed the challenge, uncomment this code!
  console.log(fib(1)); // -> 1
  console.log(fib(2)); // -> 1
  console.log(fib(7)); // -> 13
  
  ////////////////////////////
  //     Challenge 8
  ////////////////////////////
  
  function headsOrTails(n) {
  
  }
  
  // To check if you've completed the challenge, uncomment this code!
  // console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
  // console.log(headsOrTails(3));
  // -> [
  //   ['heads', 'heads', 'heads'],
  //   ['heads', 'heads', 'tails'],
  //   ['heads', 'tails', 'heads'],
  //   ['heads', 'tails', 'tails'],
  //   ['tails', 'heads', 'heads'],
  //   ['tails', 'heads', 'tails'],
  //   ['tails', 'tails', 'heads'],
  //   ['tails', 'tails', 'tails'],
  // ]
  
  ////////////////////////////
  //     Challenge 9
  ////////////////////////////
  
  function getAllCombos(arr) {
  
  }
  
  // To check if you've completed the challenge, uncomment this code!
  // console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
  // console.log(getAllCombos(['a', 'b', 'c']));
  // -> [
  //   ['a', 'b', 'c'],
  //   ['a', 'b'],
  //   ['a', 'c'],
  //   ['a'],
  //   ['b', 'c'],
  //   ['b'],
  //   ['c'],
  //   [],
  // ]
  

  //http://csbin.io/cs-prep-recursion/yokoalex