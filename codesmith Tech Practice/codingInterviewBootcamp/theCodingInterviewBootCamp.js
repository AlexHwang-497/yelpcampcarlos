// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
  // reverse('apple') === 'leppa'
  // reverse('hello') === 'olleh'
  // reverse('Greetings!') === '!sgniteerG'


  ////////////////solve using reverse
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');

// }


// function reverse(str) {
// return str
// .split('')
// .reverse()
// .join('');

// }

//////////////////////////////solve using a looop///////////////
// function reverse(str){
//   let result = '';
//   for(let character of str){
//     console.log('character: ' + character, 'result: '+result);
//     result = character + result;

//   }
//   return result;
// }

// ////////////////////////////use an array function aka reduce///////////////////////////
// function reverse(str){
//   debugger;
//   return str.split('').reduce((reversed,character)=>{
//     return character + reversed;
//   }, '');
// }
// reverse('apple')


// console.log(reverse('apple'))
// console.log(reverse('hello'))
// console.log(reverse('Greetings!'))


//const reverse = require('./index');

// test('Reverse function exists', () => {
//   expect(reverse).toBeDefined();
// });

// test('Reverse reverses a string', () => {
//   expect(reverse('abcd')).toEqual('dcba');
// });

// test('Reverse reverses a string', () => {
//   expect(reverse('  abcd')).toEqual('dcba  ');
// });

//////////////////////////////////////////////////////////////////////////////////////////palindrome//////////////////////////////////////////////////////////////
  
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  
  let reverse =  str.split('').reverse().join('');
  // console.log("reverse: "+reverse, "str: "+str)
  return str == reverse;
 }

// ////////////////alternate solution?/////////////////////
// function palindrome(str){
//   return str.split('').every((char, i) => {
//     return char === str[str.length-i-1];

//   })
// }

// console.log(palindrome("abba") === true)
// console.log(palindrome("abcdefg") === false)


//////////////////////////////////////////////////////////reverseInt/////////////////////////////////////////////////////////////////////////
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reverse =n.toString().split('').reverse().join('');
  
  if(n<0){
    // return parseInt(reverse) * -1;
  }
  return parseInt(reverse) * Math.sign(n);


}
// console.log(reverseInt(15)===51)
// console.log(reverseInt(981) === 189)
// console.log(reverseInt(500) === 5)
// console.log(reverseInt(-15) === -51)
// console.log(reverseInt(-90) === -9)




////////////////////////////////////////////////////////maxChar///////////////////////////////////////////////////////////////////////////////////
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// // --- Examples
// // maxChar("abcccccccd") === "c"
// // maxChar("apple 1231111") === "1"

// function maxChar(str){
//   const charMap ={};
//   let max = 0;
//   let maxChar = '';
// //for of loop is used for iterating though an array or string
//   for(let char of str){
//     if(charMap[char]){
//       charMap[char]++
//     } else{
//       charMap[char]=1;
//     }
//     //return charMap;
//   }
//   //for in loop is used for iterating through an object
//   for(let char in charMap){
//     if(charMap[char]>max){
//       max = charMap[char];
//       maxChar=char;
//     }
//   }
//   return maxChar;

// }

// console.log(maxChar("abcccccccd") )
// console.log(maxChar("apple 1231111"))

//////////////////////////////////////////fizzBuzz////////////////////////////////////////////////////////////////////////////////////////////
// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// function fizzBuzz(n) {

//   for (i=1; i<=n; i++){
//     // is the number a mutliple of 3 and 5?
//     if(i%3===0 && i%5===0){
//       console.log("fizzbuzz")
//     } else if (i%5===0){
//       console.log("buzz")
//     } else if(i%3===0){
//       console.log('fizz')
//     } else {
//       console.log(i);
//     }
//   }
// }
/////////////////////test cases//////////////////////////////////
// console.log('n=1:'+fizzBuzz(1));
// console.log('n=2:'+fizzBuzz(2));
// console.log('n=3:'+fizzBuzz(3));
// console.log('n=4:'+fizzBuzz(4));
// console.log('n=5:'+fizzBuzz(5));
// console.log('n=6:'+fizzBuzz(6));
// console.log(fizzBuzz(30));


///////////////////////////////////////arrayChunking//////////////////////////////////////////////////////////////////////////////////
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
////////////////solution using loop
function chunk(array, size) {
  let chunked = [];
  for(let element of array){
    const last = chunked[chunked.length-1];
    if(!last || last.length === size){
      chunked.push([element]);
    } else{
      last.push(element);
    }
  }
  return chunked;
// }
///////alternate solution////////////
// function chunk(array, size){
//   const chunked =[];
//   let index = 0;
//   while(index<array.length){
//     chunked.push(array.slice(index, index+size));
//     index+=size;
//   }
//   return chunked;
// }

// console.log(chunk([1, 2, 3, 4], 2)) //--> [[ 1, 2], [3, 4]] 
// console.log(chunk([1, 2, 3, 4, 5], 2))// --> [[ 1, 2], [3, 4], [5]])
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]])
// console.log(chunk([1, 2, 3, 4, 5], 4))// --> [[ 1, 2, 3, 4], [5]])
// console.log(chunk([1, 2, 3, 4, 5], 10))// --> [[ 1, 2, 3, 4, 5]])


//////////////////////////////////////anagrams///////////////////////////////////////////////////////////////////////////////////////

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// ///////////////soultion 1=== use helper function to build////////////
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false;
//   } 
//   for(let char in aCharMap){
//     if(aCharMap[char] !== bCharMap[char]){
//       return false;
//     }
//   }
//   return true;

// }
// ////this is a helper function
// function buildCharMap(str){
//   const charMap = {};
//   for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
//     charMap[char]=charMap[char]+1 || 1;
//   }
//   return charMap;
// }

// ///////////////alternate solution//////////////////

// // function anagrams(stringA, stringB){
// //   return cleanString(stringA) === cleanString(stringB);
// // }

// // function cleanString(str){
// //   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// // }

// console.log(anagrams('rail safety', 'fairy tales'))///=== True)
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))// === True)
// console.log(anagrams('Hi there', 'Bye there'))// === False)
// console.log()

//////////////////////////////sentenceCapitalization///////////////////////////////////////////////////////////////////

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



/////////solution 1////////////////
// function capitalize(str) {
//   const words = [];
//   for(let word of str.split(' ')){
//     words.push(word[0].toUpperCase()+ word.slice(1))
//   }
//   return words.join(' ');
// }

// ///////////solution 2//////////////////
// function capitalize(str){
//   let result = str[0].toUpperCase();
//   for(let i=1; i<str.length;i++){
//     if(str[i-1]===' '){
//       result+=str[i].toUpperCase();
//     }else{
//       result+=str[i];
//     }
//   }
//   return result;
// }


// console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
// console.log(capitalize('a lazy fox')) //-> 'A Lazy Fox')
// console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'




///////////////////////////////////Steps///////////////////////////////////////////////
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
/////////////////////////////////solution 1
// function steps(n) {
//   for(let row=0; row<n; row++){
//     let stair = ''
//     for(let column =0; column<n; column++){
//       if(column<=row){
//         stair+= '#';
//       }else{
//         stair+=' ';
//       }
//     }
//     console.log(stair);
//   }
  
// }

//////////////////////////////////solution2 recursion//////////////////////////////
// function steps(n,row=0, stair=''){
//     if(n===row){
//     return;
//   }
//   if(n===stair.length){
//     console.log(stair);
//     return steps(n,row+1);
//   }

//   if(stair.length <=row){
//     stair+='#'
//   }else{
//     stair+=' ';
//   }
//   return steps(n,row,stair)

  
// }

// /////////soultion 3 recurdsion///////
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//   console.log('#'.repeat(i).padEnd(n));
//   }
//  }

// console.log(steps(2))
// console.log(steps(3))
// console.log(steps(4))

///////////////////////////pyramd/////////////////////////////////////////////////////////////
  
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//////////////////solution 1
// function pyramid(n) {
//   const midpoint = Math.floor((2*n-1)/2);
//   //from 0 to n, iterate through rows
//   for(let row = 0; row<n; row++){
//     let level = '';
//     //from 0 to n, iterate through the columns
//     for(let column = 0; column<2 * n-1; column++){
//       // if the column should have a #, add a # to level
//       if(midpoint-row<=column && midpoint + row>=column){
//         level += '#';
//         // add a space to level 
//       }else {
//         level +=' '
//       }
//     }
//     //console log level
//     console.log(level)
//   }
// }

// //////////////////solution 2    - recursion
// function pyramid(n,row=0, level=''){
//   //base case
//   if(row===n){
//     return;
//   }

//   if(level.length === 2*n-1){
//     console.log(level);
//     return pyramid(n,row+1)
//   }

//   const midpoint = Math.floor((2*n-1)/2);
//   let add;
//   if(midpoint - row <= level.length && midpoint + row>= level.length){
//     add = '#'
//   } else {
//     add = ' ';
//   }
//   pyramid(n,row, level+add);
// }

// console.log(pyramid(1))
// console.log(pyramid(2))
// console.log(pyramid(3))
// console.log("pyramid4: "+pyramid(4))

/////////////////////////////////////////////////vowels////////////////////////////////////////////

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
///////////////////////solution/////////////////////
// function vowels(str) {
//   let count = 0;
//   const check = ['a','e','i','o','u']

//   for(let char of str.toLowerCase()){
//     if(check.includes(char)){
//       count++
//     }
//   }
//   return count;
// }

///////solution 2////////////////////////
// function vowels(str){
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length:0
// }


// console.log(vowels('Hi There!')) //--> 3)
// console.log(vowels('Why do you ask?'))// --> 4)
// console.log(vowels('Why?')) //--> 0)

///////////////////////////////////////////matrix///////////////////////////////////////////////

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   //create an empty array of arrays called resutls
//   const results = [];
//   //create for loop to push in empty arrays in array
//   for(let i=0;i<n;i++){
//     results.push([]);
//   }
//   //creaate a counter variable = 1
//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n-1;
//   let startRow = 0;
//   let endRow = n-1;

//   //as long as start column <= end column and start row <=end row
//   while(startColumn <= endColumn && startRow<=endRow){
//       //loop from start column to end column --- this deals wit the top row
//       for(let i=startColumn; i<= endColumn; i++){
//         //at results[start_row] and assign counter varialbe
//         results[startRow][i] = counter;
//         //incement counter
//         counter++
//       }
//       startRow++;

//       //right column
//       for(let i=startRow;i<= endRow; i++){
//         results[i][endColumn] = counter;
//         counter++
//       }
//       endColumn--

//       //bottom row
//       for(let i = endColumn; i>=startColumn; i--){
//         results[endRow][i] = counter;
//         counter++
//       }
//       endRow--
//       //start column
//       for(let i=endRow; i>=startRow; i--){
//         results[i][startColumn] = counter;
//         counter++
//       }
//       startColumn++
//   }
//   return results;
    
      
      
//     //increment start row
//     //loop from start row to end row
//       //at results[endcolumn] assign counter variable
//       //increment counter
//     //decrement end row

  
// }
// console.log(matrix(2))
// console.log(matrix(3))
// console.log(matrix(4))


//////////////////////////////////////////////////fibonacci series/////////////////////////////

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


////////////////////solution 1///////////
// function fib(n) {
//   const result = [0,1];
//   for(let i=2; i<=n; i++){
//     const a = result[i-1];
//     const b = result[i-2];
//     result.push(a+b);
//   }
//   return result[result.length-1]
// }

//////////////recursion solution
// function fib(n){

// }



// console.log(fib(4)===3)