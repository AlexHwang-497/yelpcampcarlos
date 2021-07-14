// Declare a variable 'number' and set it to the value 10.
const number = 10;
// console.log(number);//10
/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
//create func addNumbers with param num
function addNumbers(num) {
  //declare a sum variable and set it to 0
  let sum = 0;
//for loop to iterate from 1 to num and including num
  for (let i = 1; i <= num; i++) {
// sum i to sum
    sum += i;
//return sum
  }
return sum;
}
// console.log(addNumbers(4));//10
// console.log(addNumbers(5));//15
/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
function between50And500(num) {
  return (num > 50 && num < 500)
}
// console.log(between50And500(45)); //false
// console.log(between50And500(472)); //true
/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/
function divBy100(num) {
  return (num % 100 === 0)
}
// console.log(divBy100(120));//false
// console.log(divBy100(600));//true
/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/
function negativeOrEven(num) {
  return (num < 0 || num % 2 == 0)
}
// console.log(negativeOrEven(-3));//true
// console.log(negativeOrEven(7));//false
/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/
//input: array and a num
//output: boolean
//create func passAllTests with params arr and num
function passAllTests(arr, num) {
//for loop to iterate through the arr
  for (let i = 0; i < arr.length; i++) {
    // condition: if arr at the index with the arg num is false
    if (arr[i](num) === false) {
//return false
      return false;
    }
  }
//outside for loop: return true
  return true;
}
// console.log(passAllTests([between50And500,divBy100,negativeOrEven], 300));//true
// console.log(passAllTests([between50And500,divBy100,negativeOrEven], 250));//false
// console.log(passAllTests([between50And500,divBy100,negativeOrEven], 75));//false
/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally passed to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/
//create func add with param num1
function add(num1) {
  //create innerFunc with a param num2
  return function innerFunc(num2) {
    //in innerFunc; return num1 + num2;
    return num1 + num2;
  }
}
const addBy10 = add(10)
// console.log(addBy10(20));// -> 30
// Create a function "addOne" that takes a number as and argument and returns that number plus one
function addOne(num) {
  return num + 1;
}
// console.log(addOne(5));//6
// Create a function "subtractOne" that takes a number as and argument and returns that number minus one
function subtractOne(num) {
  return num - 1;
}
// console.log(subtractOne(5));//4
/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.
Example:
usePotions("3A78B51") ➞ "47751"
  3 grows to 4, 8 shrinks to 7
usePotions("9999B") ➞ "9998"
usePotions("9A123") ➞ "10123"
usePotions("567") ➞ "567"
*/
//input: str with nums and letters
//output: str with only nums
//create func usePotions with param str
function usePotions(str) {
  //declare an empty arr called result
  let result = [];
//for loop to iterate through the str
  for (let i = 0; i < str.length; i++) {
   // if elem in str equals A
    if (str[i] === 'A') {
 // take the last el in te result arr and set it equal to the same elemement with addOne and we have to convert the element to a number 
      result[result.length - 1] = addOne(Number(result[result.length -1]));
    }
// if elem in str equals B
// take the last el in te result arr and set it equal to the same elemement with subtrctOne and we have to convert the element to a number 
    else if(str[i] === 'B') {
      result[result.length - 1] = subtractOne(Number(result[result.length -1]));
    }
//if elem is neither A or B, push elem to result
    else {
      result.push(str[i]);
    }
  }
//return result and convert to string
  return result.join('');
}
// console.log(usePotions("3A78B51"));// ➞ "47751"
// console.log(usePotions("9999B"));// ➞ "9998"
// console.log(usePotions("9A123"));// ➞ "10123"
// console.log(usePotions("567"));// ➞ "567"
// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
//create func geLength with params str, index set to 0, count set to 0
function getLength(str, index = 0, count = 0) {
  //basecase: str at index is und return count
  if (str[index] === undefined) return count;
// if str at index is def incrememnt count by 1
  if (str[index]) count += 1;
// recurisve case: return getLength and incrememnt index by 1
  return getLength(str, index +1, count)
}
// console.log(getLength('12345'));//5
/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/
//input: array of arrays
//output: an array of two arrays
//create func transpose takes an arr
function transpose(arr) {
 //declare res1 and set to empty arr
  let res1 = [];
//declare res2 and set to empty arr
  let res2 = [];
//declare result and set to empty arr
  let result = [];
//for loop to iterate through the array of arrays
  for (let i = 0; i < arr.length; i++) {
 //nested for loop to iterate through each subarray
    for (let j = 0; j < arr[i].length; j++) {
      // push the first element to res1
      if (j === 0) {
        res1.push(arr[i][j])
      }
      else {
        res2.push(arr[i][j])
      }
    }
  }
//outside of th nested loops: push res1 and res2 into our result array
  result.push(res1,res2);
//return result 
  return result;
}
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
// You are given coins of different denominations and a total amount of money. Write a function to compute the fewest number of coins that you need to make up that amount.
//  If that amount of money cannot be made up by any combination of the coins, return -1.
//   You may assume that you have an infinite number of each kind of coin.
// function coinChange(arr, amount) {
//   let count = 0;
//   let sum = amount; 
//   for (let i=0; i<arr.length; i++){
//     count += Math.floor(amount/arr[i])
//     amount %= arr[i]
//   }
//   return count;
// }
// //test cases
// console.log(coinChange([25, 10, 5, 1], 5));      // 1
// console.log(coinChange([25, 10, 5, 1], 20));     // 2
// console.log(coinChange([25, 10, 5, 1], 90));     // 5
/*
Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the same grid rotated 90 degrees clockwise.
Example:
const sampleGrid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(rotateGrid(sampleGrid)); // -> [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]
*/
/*
Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
Non-bracket characters should not affect the logic.Make your solution work for all types of brackets: () [] {}
Examples:
balancedBrackets(" { }    n");                           // -> true
balancedBrackets("hi][  ");                              // -> false
balancedBrackets("[{random words and such}]");           // -> true
balancedBrackets("[The]Rains(In){Spain}");               // -> true
balancedBrackets("[({}Call me Ishmael)]");               // -> true
balancedBrackets("[(]{)}");                              // -> false
balancedBrackets(" gibberish { howdy: partner() }");     // -> true
balancedBrackets(" isThisAFunction?() { notReally();");  // -> false
*/


function usePotions(str) {
    debugger
    let result = []
    let conv = str.split('')
    for(let i=0;i<conv.length;i++){
      if(conv[i]==='A'){
        let current = conv[i]
        conv.splice(i,1)
        conv.splice(i-1,1,addOne(Number(conv[i-1])))
        // let next = conv[i]next)
      } else if(conv[i]==='B'){
              conv.splice(i,1)
        conv.splice(i-1,1,subtractOne(Number(conv[i-1])))
      } 
    }
    return conv.join('')
    
    
  }
  console.log(usePotions("3A78B51"));// ➞ "47751"
  console.log(usePotions("9999B"));// ➞ "9998"
  console.log(usePotions("9A123"));// ➞ "10123"




  const transpose = arr =>{
    //   declare vrialbe and assign as empty array;fArray
      let fArray = []
    //   declare varialbe and assign empty array;sArray
      let sArray = []
    //   itearte through arr w/for...of loop
      for(let el  of arr){
                //   push 0 index elements of all sub arrays into fArray
          fArray.push(el[0])
                //   push 1 index elements into sArray
          sArray.push(el[1])
        
    //   return fResult concatenated w/ sReult
        
      }
        return [fArray].concat([sArray])
    }
    
    
    
    const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
    console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]

    const denominations = (arr,amt)=>{
        //   declare varialbe and assign it as 0
          let count = 0
        //   iterate through teh arr w/ for loop
          for(let i=0;i<arr.length;i++){
            //   update/reassign count w/ floored amt of amt/current elemment
            count+= Math.floor(amt/arr[i])
            //   modulo on a cumulative bvasis amt%current element
            amt%=arr[i]
          }
        //   return count
          return count>0 ? count:-1 
          
        }
        
        console.log(denominations([25,10,5,1],5))
        console.log(denominations([25,10,5,1],50))
        console.log(denominations([25,10,5,1],55))
        console.log(denominations([25,10,5,1],0))



const balancedBrackets =(str)=>{
    //   declare a varaible and assign it as key/value pairs
        let bracks = {
        ']':'[',
        '}':'{',
        ')':'('
        }
    //   declare another vraible and assign as empty array; result
        let result = []
    //   itereate through the str w/ for...of loop
        for(let el of str){
        //   initae a cond stmt, where if any of the left brackets exist in our current element.....
        if(el==='[' || el==='{' || el==='('){
            //   push the current element into the reuslt array
            result.push(el)
        }
        //   intaate cond stmt where if key/value pair exists....
        if(bracks[el]){
            //   intate cond stmsmt, where if the popped element from the result array does not equa, key/value pair...
            if(result.pop()!==bracks[el]){
                //   return false
            return false
            }
        }
        }
    //   return true if the length of the result array is 0
        return result.length===0
    }
    console.log(balancedBrackets(" { }    n"));                           // -> true
    console.log(balancedBrackets("hi][  "));                              // -> false
    console.log(balancedBrackets("[{random words and such}]"));           // -> true
    console.log(balancedBrackets("[The]Rains(In){Spain}"));               // -> true
    console.log(balancedBrackets("[({}Call me Ishmael)]"));               // -> true
    console.log(balancedBrackets("[(]{)}"));                              // -> false
    console.log(balancedBrackets(" gibberish { howdy: partner() }"));     // -> true
    console.log(balancedBrackets(" isThisAFunction?() { notReally()"));  // -> false