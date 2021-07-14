/*
Declare a variable 'myNums' and set it to an object.
On that object you will have two key-value pairs. One key will be 'favoriteNumber' and its value will be your favorite number.
The other key will be 'randomNumber' and its value will be 12.
*/

// const myNums = object=> {
//   let obj ={
// //   update/creating  favorite number
//   'favoriteNumber': 45,
// //   update/crating randomNumber
//   'randomNumber':12
    
//   }
//   return obj
// }

// let myNums = {
//    //   update/creating  favorite number
//   'favoriteNumber': 45,
// // //   update/crating randomNumber
//   'randomNumber':12
  
// }


//  console.log(myNums)

/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps. 'largestSwap' should return a boolean.
For example, if 27 is our our input, we should return false because swapping the digits gives us 72, and 72 > 27.
Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.
*/
// const largestSwap = (num) => {
// //   convert the num toString()
//   let convert = num.toString()
// //   intiate the split method
//   .split('')
// //   reversementhod
//   .reverse()
// //   join method
//   .join('')
// //   convert then string back to a number
// //   return t/F boolean
//   return parseInt(convert)>num
  
  
// }


// console.log(largestSwap(72)) // faslse
// console.log(largestSwap(34)) // true
// console.log(largestSwap(62)) /// false



// Check that your 'largestSwap' function is working correctly by passing the value of 'randomNumber' on your 'myNums' object to your 'largestSwap' function

// const randomNumber = myNums['randomNumber']

// console.log(largestSwap(randomNumber))

/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.

Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/


const countTimes = (array,searchValue) => {
//   decalre a varialbe and assign as value of 0;  this will repesent our counter
  let count = 0
//   itereate through the array w/ a for...of looop
  for(let el of array){
	//   intitilize a cond stmt, where if the current element === searchValue
    if(el===searchValue){
		//   increment our counter
      count++
    }
    
  }
//   return counter
  return count
  
}

console.log(countTimes([1, 8, 9, 9, 10], 9))   // 2
console.log(countTimes([1, 8, 8, 8, 8], 8))   // 4

/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.

Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/


const wordSearchLetterCounter = (array,letter) => {
//   decalre  a varaible and assign as value of 0
let counter = 0
// loop through the array
for(let i=0; i<array.length;i++) {
  let subArray = array[i]
  counter += countTimes(subArray,letter)
  
}
    
//   return counter
  return counter
  
  
  
}
// const callback = countTimes()


console.log(wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], 'D'))


console.log(wordSearchLetterCounter([
  ["S", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "S"))



/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.

Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.




*/



const countChar = (str,targLetter,index=0,count=0) =>{
    // base: str.length ===0 ; return count  
      if(index === str.length){return count}
    //   intiate if statment where. if current element === targletter, increment count
      if(str[index]===targLetter){count++}
      
    //   increemnt the index
      index++
    //   recursae the fucntion with/ update inputs
      return countChar(str,targLetter,index,count)
    //   
    }
    
    console.log(countChar('hello world', 'o'))//; -> 2
    console.log(countChar('javascript', 'j'))//; -> 1
    
    
    /*
    Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe". "passwordSafe" should return a function that takes in a password as a string.
    If that password doesn’t match the one originally provided, return the string “You have entered the wrong password”. If the passwords do match, return the safe.
    
    
    
    Example:
    const mySafe = passwordSafe('myPassword', 'My Super Secret');
    mySafe('wrongPassword') -> "You have entered the wrong password"
    mySafe('myPassword') -> "My Super Secret"
    */
    
    
    const passwordSafe = (pass,value) => {
    //   decalre a varaible and assign as and empty 
    //   create a new inner function /pass in a single argument = input
    return function(input){
      //   intaite a codn stamt, where if the input === password
      if(input === 'wrongPassword'){
        return "You have entered the wrong password"
      } else if(input === 'myPassword'){
        return 'My Super Secret'
      }
  
              //   return 'my super secret'
          //   intiate anoother else if stmtm, input ===value
              //   return "You have entered the wrong password"
        

    }
    }
    
    
    
    // const mySafe = passwordSafe('myPassword', 'My Super Secret');
    console.log(mySafe('wrongPassword')) //-> "You have entered the wrong password"
    console.log(mySafe('myPassword')) //-> "My Super Secret"
    
    



// 1.  Declare a variable 'number' and set it to the value 10.
const number = 10;
// console.log(number);//10
/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
//2.  create func addNumbers with param num
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
3.  Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
function between50And500(num) {
  return (num > 50 && num < 500)
}
// console.log(between50And500(45)); //false
// console.log(between50And500(472)); //true
/*
4. Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/
function divBy100(num) {
  return (num % 100 === 0)
}
// console.log(divBy100(120));//false
// console.log(divBy100(600));//true
/*
5.  Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/
function negativeOrEven(num) {
  return (num < 0 || num % 2 == 0)
}
// console.log(negativeOrEven(-3));//true
// console.log(negativeOrEven(7));//false
/*
6.  Create a function "passAllTests" that takes an array of functions and another value as arguments.
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
7.  Create a function "add" that takes an argument (a number) and returns a function.
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


//8.   Create a function "addOne" that takes a number as and argument and returns that number plus one
function addOne(num) {
  return num + 1;
}
// console.log(addOne(5));//6
//9.   Create a function "subtractOne" that takes a number as and argument and returns that number minus one
function subtractOne(num) {
  return num - 1;
}
// console.log(subtractOne(5));//4
/*
10.  There are two types of potions:
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


//11.   Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
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
12.  Write a function called 'transpose' that accepts a two dimensional array and 
// returns a transposed version of that array.
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


//13.   You are given coins of different denominations and a total amount of money. 
// Write a function to compute the fewest number of coins that you need to make up that amount.
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
14.  Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the same grid rotated 90 degrees clockwise.
Example:
const sampleGrid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(rotateGrid(sampleGrid)); // -> [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]
*/
/*


15.  Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
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
