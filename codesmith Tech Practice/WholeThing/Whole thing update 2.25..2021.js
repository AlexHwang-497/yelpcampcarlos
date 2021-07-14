//1/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////coding interview bootcamp////////////////////////////////////////////////////////////////

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
  // reverse('apple') === 'leppa'
  // reverse('hello') === 'olleh'
  // reverse('Greetings!') === '!sgniteerG'


// //   ////////////////solve using reverse
// function reverse(str) {
//   // use spli to return a new array
//   //use reverse method to reverse the new created array
//   //use join to join all elements of array into a string
//    revStr = str.split('').reverse().join('')
//    return revStr


// }

// //////////////////////////////solve using a for looop///////////////
// function reverse(str){
//   //create empty string
//   let newStr = ''
//   //create for loop, 
//   //with starting point will be str.length-1 which corresponds to the last character of string

//   for(let i=str.length-1; i>=0;i--){
//     newStr+=str[i]
//   }
//   //return new string
//   return newStr;  
// }

// ////////////////////////////// using for of loop///////////////
// function reverse(str){
//   //create empty string
//   let newStr =''
// //initialize for of loop with 
// for(let character of str){
//   console.log(newStr)
//   newStr = character + newStr;
// }
// return newStr;


// }



// // ////////////////////////////use an array function aka reduce///////////////////////////
// function reverse(str){
//   return str.split('').reduce((acc,curr) => {
//     return curr+ acc
//   })

// }

// console.log(reverse('apple'))  // reverse('apple') === 'leppa'
// console.log(reverse('hello')) // reverse('hello') === 'olleh'
// console.log(reverse('Greetings!'))   // reverse('Greetings!') === '!sgniteerG'


///2///////////////////////////////////////////////////////////////////////////////////////palindrome//////////////////////////////////////////////////////////////
  
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

////////////////////////////////////////using loop
// function palindrome(str) {
//   //create an empty string
//   let newStr  = '';

//   for(let i = str.length-1; i>=0; i--){
//     newStr+=str[i]
//   }
//   return newStr === str
  
//  }


///////////////////using reverse str
// function palindrome(str){
//   let newStr = str.split('').reverse().join('') 
//   return newStr === str;
// }




// console.log(palindrome("abba")) // true
// console.log(palindrome("abcdefg")) // false


////3//////////////////////////////////////////////////////reverseInt/////////////////////////////////////////////////////////////////////////
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
////////////////////////////////
// function reverseInt(n) {
//   let reversed = n.toString().split('').reverse().join('')
//   return Math.sign(n) * reversed
// }

////////////////////////////////////get back to this one.  you can't figure out how to do the negative;  
//////////////////////loop
// function reverseInt(n){
//   let arr = n.toString().split('')
//   // return n.length;
//   // return arr;
  
//   let newArr = ''
//   for(let i=arr.length-1; i>=0; i--){
//     // console.log(newArr)
//     newArr+=arr[i]

//   }
//   return Math.sign(n) * newArr

// }

// console.log(reverseInt(15))  // true
// console.log(reverseInt(981)) // true
// console.log(reverseInt(500)) // true
// console.log(reverseInt(-15)) // false
// console.log(reverseInt(-90)) // false   === -9


/////4///////////////////////////////////////////////////maxChar///////////////////////////////////////////////////////////////////////////////////
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// // --- Examples
// // maxChar("abcccccccd") === "c"
// // maxChar("apple 1231111") === "1"

// function maxChar(str){
//   debugger;
//   const charMap ={};
//   let max = 0;
//   let maxChar = '';
// //for of loop is used for iterating though an array or string
// for(let char of str){
//   if(charMap[char]){
//     charMap[char]++
//   }else {
//     charMap[char] = 1
//   }
// }

// //for loop to iterate through the object;
// for(let char in charMap){
//   if(charMap[char]>max){
//     max = charMap[char]
//     maxChar = char;
//   }
// }
// return maxChar


// }

// console.log(maxChar("abcccccccd") ) // c
// console.log(maxChar("apple 1231111")) // 1

//////5////////////////////////////////////fizzBuzz////////////////////////////////////////////////////////////////////////////////////////////
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
//   for(let i=1; i<=n; i++){
//     if(i%3===0 && i%5===0){
//       console.log('fizzbuzz')
//     } else if (i%5===0){
//       console.log('buzz')
//     } else if (i%3===0){
//       console.log('fizz')
//     } else {
//       console.log(i);
//     }
//   }
// }
// /////////////////////test cases//////////////////////////////////
// console.log('n=1:'+fizzBuzz(1));
// console.log('n=2:'+fizzBuzz(2));
// console.log('n=3:'+fizzBuzz(3));
// console.log('n=4:'+fizzBuzz(4));
// console.log('n=5:'+fizzBuzz(5));
// console.log('n=6:'+fizzBuzz(6));
// console.log(fizzBuzz(30));


///////6////////////////////////////////arrayChunking//////////////////////////////////////////////////////////////////////////////////
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
// function chunk(array, size) {
//   debugger;
//   let chunked = [];
//   for(let element of array){
    
//     let last = chunked[chunked.length-1]
//     console.log('last:'+last)
//     if(!last || last.length === size){
//       chunked.push([element])
//     } else{
//       last.push(element)
//     }
//   }
//   return chunked;

// }

///////////alternate solution///////////////
// function chunk(array,size){
//   debugger;
//   let chunked =[];
//   let index = 0
//   while(index<array.length){
//     chunked.push(array.slice(index,index+size))
//     index+=size
//   }
//   return chunked;
// }

// console.log(chunk([1, 2, 3, 4], 2)) //--> [[ 1, 2], [3, 4]] 
// console.log(chunk([1, 2, 3, 4, 5], 2))// --> [[ 1, 2], [3, 4], [5]])
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]])
// console.log(chunk([1, 2, 3, 4, 5], 4))// --> [[ 1, 2, 3, 4], [5]])
// console.log(chunk([1, 2, 3, 4, 5], 10))// --> [[ 1, 2, 3, 4, 5]])


////////7//////////////////////////////anagrams///////////////////////////////////////////////////////////////////////////////////////

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// // ///////////////soultion 1=== use helper function to build////////////
// function anagrams(stringA, stringB) {
//   debugger;
//   let aCharMap = buildCharMap(stringA)
//   let bCharMap = buildCharMap(stringB)
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
// function buildCharMap(str){
//   let charMap = {};
//   for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
//     charMap[char] = charMap[char]+1 || 1
//   }
//   return charMap
// }



// //////alternate solution
// function anagrams(stringA, stringB){
//   return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(str){
//   return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join();
// }


// console.log(anagrams('rail safety', 'fairy tales'))///=== True)
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))// === True)
// console.log(anagrams('Hi there', 'Bye there'))// === False)


/////////8/////////////////////sentenceCapitalization///////////////////////////////////////////////////////////////////

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
//   debugger;
//   let words = [];
//   for(let word of str.split(' ')){
//     //what this is doing is taking element aka word and uppercasing the fist letter and then including the rest of the word from the slice;
//     words.push(word[0].toUpperCase()+ word.slice(1))
//   }
//   return words.join(' ')

// }


////solution 2
// function capitalize(str){
//   debugger;
//   let result = str[0].toUpperCase();
//   for(let i=1; i<str.length;i++){
//     if(str[i-1] === ' '){
//       result+= str[i].toUpperCase();
//     }else{
//       result+= str[i]
//     }
//   }
//   return result;
// }


// console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
// console.log(capitalize('a lazy fox')) //-> 'A Lazy Fox')
// console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'




//////////9/////////////////////////Steps///////////////////////////////////////////////
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
//   for(let row = 0;row<n;row++){
//     let stair = ''
//     for(let column=0;column<n;column++){
//       if(column <= row){
//         stair+= '#';
//       } else {
//         stair+= ' ';
//       }
//     }
//     console.log(stair)
//   }
// }

//////////////////////////////////solution2 recursion//////////////////////////////
// function steps(n,row=0, stair=''){
//   debugger
//   if(n===row){
//     return;
//   }
//   if(n===stair.length){
//     console.log(stair)
//     return(n,row+1)
//   }
//   if(stair.length<=row){
//     stair+='#'
//   } else {
//     stair+=' '
//   }
//   return steps(n,row,stair)
  
// }
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

// }

// //////////////////solution 2    - recursion
// function pyramid(n,row=0, level=''){

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
//   debugger;
//   let count = 0;
//   let check =['a','e','i','o','u']

//   for(let char of str.toLowerCase()){
//     if(check.includes(char)){
//       count++
//     }
//   }
//   return count;
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
//
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

// }



// console.log(fib(4)===3)







///////////////////////////////////////////////////////////////////////////leetCode//////////////////////////////////////////////////////////////////////////////////////////






//1..///////////////////////////////////////////////////////////////////////////////////////////////////////////////////1. Two Sum/////////////////////////////////////////////////////////////////////////////////////////////

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

///////////////////solution 1 //////////////////////////////////

// function twoSum(nums,target){
//   debugger;
//   let result = [];
//   for(let i=0; i<nums.length;i++){
//     for(let j=i+1; j<nums.length; j++){
//       if(nums[j] == target -nums[i]){
//         return {i,j}
//       }
//     }
//   }
// }


// console.log(twoSum([2,7,11,15],9))
// console.log(twoSum([3,2,4],6))
// console.log(twoSum([3,3],6))

/////2....////////////////////////////////////////////////////////////////////////////////////////////////7. Reverse Integer///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes 
// the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0
 
// Constraints:
// -231 <= x <= 231 - 1

// let reverse = function(x) {
//   debugger;
//   reversed = x.toString().split('').reverse().join('');
//   if(x<0){
//     return parseInt(reversed) * -1
//   } else {
//     return parseInt(reversed) * Math.sign(x)
//   }
// };

/////////////////loop//////////

// function reverse(x){
//   let result = [];
//   for(let char of x.toString()){
//     result = char+result;
//   }
//   return parseInt(result) * Math.sign(x);
// }




// console.log(reverse(321))
// console.log(reverse(-123))
// console.log(reverse(120))
// console.log(reverse(0))


//////////3.......///////////////////////////////////////////////////////////////////////////////////////9. Palindrome Number///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false
 

// Constraints:
// -231 <= x <= 231 - 1
 
// Follow up: Could you solve it without converting the integer to a string?

// function isPalindrome(x,bool){
//   let xx=x.toString().split('').reverse().join('')
//   return xx == x ? true:false


// }

// console.log(isPalindrome(121),true)
// console.log(isPalindrome(-121),false)
// console.log(isPalindrome(10),false)
// console.log(isPalindrome(-101),false)



//////////////////4.....///////////////////////////////////////////////////////////////////////////////////////////////////////13.  Roman to Interger/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. 
// The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// // Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3

// Example 2:
// Input: s = "IV"
// Output: 4

// Example 3:
// Input: s = "IX"
// Output: 9

// Example 4:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 5:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// function romanToInt(r) {
//   debugger;
//   arr = r.split('')
//   let val = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }
//   let sum = 0;
//   for(let i=0; i<r.length;i++){
//     if(val[arr[i]]<val[arr[i+1]]){
//       sum+=val[arr[i+1]]-val[arr[i]]
//       i++
//     } else {
//       sum+=val[arr[i]]
//     }
//   }
//   return sum;
// }
   
// console.log(romanToInt('III')) //3
// console.log(romanToInt('IV')) //4
// console.log(romanToInt('IX')) // 9
// console.log(romanToInt('LVIII')) // 58
// console.log(romanToInt('MCMXCIV')) //1994

////////////////////////5.......///////////////////////////////////////////////////////////////////////////////////////14. longest common prefix///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// // Input: strs = ["dog","racecar","car"]
// // Output: ""
// // Explanation: There is no common prefix among the input strings.
 

// // Constraints:
// // 0 <= strs.length <= 200
// // 0 <= strs[i].length <= 200
// // strs[i] consists of only lower-case English letters.



// function longestCommonPrefix(strs){
//   debugger
//   let longest = ''
//   if(strs.length === 0 ){
//     return longest;
//   }

//   let comparisonWord = strs[0];
//   let comparisionIndex = 0;
//   for(let comparisonLetter of comparisonWord){
//     for(let i=1; i<strs.length;i++){
//       let currentWord = strs[i]
//       let currentLetter = currentWord.charAt(comparisionIndex)
//       if(comparisionIndex>currentWord.length || comparisonLetter !== currentLetter){
//         return longest;
//       }
//     }
//     comparisionIndex++
//     longest +=comparisonLetter
//   }
//   return longest
// }

// console.log(longestCommonPrefix(["flower","flow","flight"])) // Output: "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // Output: ""
// console.log(longestCommonPrefix(["anticlimax","antibody","antiseptic"]))

//6........////////////////////////////////////////////////////////////////////////////////////////////////////////////20. valid parentheses///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true
 
// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// function isValid(s){
//   debugger;
//   let left = [];
//   for(let i=0; i<s.length;i++){
//     if (s[i] === '(' || s[i] === '[' || s[i]  === '{'){
//       left.push(s[i])
//     } else if (s[i] === ')' && left.length !==0 && left[left.length-1]==='('){
//       left.pop()
//     } else if(s[i] === ']' && left.length !==0 && left[left.length-1] === '['){
//       left.pop();
//     } else if (s[i] === '}' && left.length !==0 && left[left.length-1] === '{'){
//       left.pop()
//     }else {
//       return false;
//     }
//   }
//   return left.length===0
// }

// console.log(isValid("()")) //true
// console.log(isValid("()[]{}")) // true
// console.log(isValid("(]")) // false
// console.log(isValid("([)]")) // false
// console.log(isValid("{[]}")) // true


//////////////7.........////////////////////////////////////////////////////////////////////////////////////////////////21.  Merge Two sorted Lists //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Merge two sorted linked lists and return it as a sorted list. 
// The list should be made by splicing together the nodes of the first two lists.
 
// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.
//////////////////////////solution 1/////////////
// function mergeTwoLists(l1,l2){
//   return l1.concat(l2).sort()

    
// }

// function mergeTwoLists(l1,l2){
//   let result = [];
//   for(let i=0; i<l1.length;i++){
//     result.push(l1[i])
//   }

//   for(let i=0;i<l2.length;i++){
//     result.push(l2[i])
//   }
//   return result.sort()

// }

// console.log(mergeTwoLists([1,2,4],[1,3,4]))
// console.log(mergeTwoLists([],[]))
// console.log(mergeTwoLists([],[0]))


///////////8..........///////////////////////////////////////////////////////////////26. Remove Duplicates from Sorted Array////////////////////////////////////////////////////////
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means a modification to the input array 
// will be known to the caller as well.

// Internally you can think of this:
// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }
 
// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
 

// Constraints:

// 0 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in ascending order.


// function removeDuplicates(nums){
//   debugger;
//   if(nums.length === 0){return 0}

//   let point1 = 0;
//   for(let point2=1; point2<nums.length;point2++){
//     if(nums[point1]!==nums[point2]){
//       point1++;
//       nums[point1] = nums[point2]
//     }
//   }
//   return point1+1

// }

// function removeDuplicates(nums){
//   debugger;
//   for(let i=0; i<nums.length;i++){
//     if(nums[i]==nums[i+1]){
//       nums.splice(i,1);
//       i--
//     }
//   }

// }

// console.log(removeDuplicates([1,1,2])) // Output: 2, nums = [1,2]
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // Output: 5, nums = [0,1,2,3,4]


////////////9.............////////////////////////////////////////////////////////////////////////////////////////////////////////////27. Remove Element////////////////////////////////////////////////////////////////////////
// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.
// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeElement(nums, val);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }
 

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3]
// Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
 

// Constraints:
// 0 <= nums.length <= 100
// // 0 <= nums[i] <= 50
// // 0 <= val <= 100

// function removeElement(nums, val){
//   let result = [];
//   for(let digit of nums){
//     if(digit !== val){
//       result.push(digit)
//     }
//   }
//   return result;

// }

// console.log(removeElement([3,2,2,3],3)) //Output: 2, nums = [2,2]
// console.log(removeElement([0,1,2,2,3,0,4,2],2)) //Output: 5, nums = [0,1,4,0,3]


//////////10......//////////////////////////////////////////////////////////////////////////////////////28.Implement strStr()////////////////////////////////////////////////////////////////////////
// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0
 

// Constraints:
// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

// function strStr(haystack, needle){
//   debugger;
//   if(haystack=== null || needle === null){
//     return -1
//   }
//   debugger;
//   let ppp=haystack.length - needle.length+1;
//   if(haystack === needle) return 0
//   for(let i=0; i<ppp; i++){
//     if(haystack.substring(i,i+needle.length)===needle){
//       return i;
//     }
//   }
//   return -1

// }

// console.log(strStr("hello","ll")) // Output: 2
// console.log(strStr("aaaaa", "bba")) // Output: -1
// console.log(strStr("","")) // Output: 0

///////11.........../////////////////////////////////////////////////////////////////////////////////////////35.  Search Insert Position////////////////////////////////////////////////////////////////////////
// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:
// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:
// Input: nums = [1], target = 0
// Output: 0
 
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// function searchInsert(nums, target){
//   debugger;
//   for(let i=0; i<nums.length;i++){
//     if(nums[i] >= target){
//       return i;
//     }
//   }
//   return nums.length;

// }

// console.log(searchInsert([1,3,5,6],5)) // Output:2
// console.log(searchInsert([1,3,5,6],2)) // Output:1
// console.log(searchInsert([1,3,5,6],7))// Output:4
// console.log(searchInsert([1,3,5,6],0)) // Output:0
// console.log(searchInsert([1],0)) // Output:0


////////12............////////////////////////////////////////////////////////////////////////////////////////38.  Count and Say ////////////////////////////////////////////////////////////////////////

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. 
// Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, 
// replace the counts with a number and concatenate every saying.

// For example, the saying and conversion for digit string "3322251":

// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:
// Input: n = 1
// Output: "1"
// Explanation: This is the base case.

// Example 2:
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

///////////////////////////you didn't understand this one.  re read it again;

// function countAndSay(n){

// }
// console.log(countAndSay(1))
// console.log(countAndSay(2))
// console.log(countAndSay(3))
// console.log(countAndSay(4))


////////13............////////////////////////////////////////////////////////////////////////////////////////53.  Maximum subarray ////////////////////////////////////////////////////////////////////////
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. 

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [0]
// Output: 0

// Example 4:
// Input: nums = [-1]
// Output: -1

// Example 5:
// Input: nums = [-100000]
// // Output: -100000

// function maxSubarray(nums){
//   debugger;
//   let prev = 0
//   let max = nums[0];
//   for(let i=0; i<nums.length;i++){
//     aa = prev + nums[i]
//     prev = Math.max(aa,nums[i])
//     max = Math.max(max,prev)
//   }
//   return max;

// }

// console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])) //6
// console.log(maxSubarray([1])) //1
// console.log(maxSubarray([0])) //0
// console.log(maxSubarray([-1])) //-1
// console.log(maxSubarray([-100000])) //-100000


//easy//////////////////////////////////////////////////////////////14............////////////////////////////////////////////////////////////////////////////////////////58. Length of Last Word//////////////////// //////////////////////////////

// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

 // Example 1:
// Input: s = "Hello World"
// Output: 5

// Example 2:
// Input: s = " "
// Output: 0
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.


////////////split solutino////////////////
// function lengthOfLastWord(str){
//   let b = str.trim().split(' ')
//   return b.length;

// };

// function lengthOfLastWord(str){
//   debugger;
//   debugger;
//   let lastcount = 0
//   let count =0
//   for(let i=0; i<str.length;i++){
//     if(str.charAt(i) !== ' '){
//       count++
//     }else {
//       lastcount = count || lastcount;
//       count = 0
//     }
//   }
//   return count || lastcount;
// }

// console.log(lengthOfLastWord('Hello World'))
// console.log(lengthOfLastWord('a '))
// console.log(lengthOfLastWord(' a'))

//easy/////////////////////////////////////////////15........////////////////////////////////////       66. Plus one ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, 
// and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.


// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:
// Input: digits = [0]
// Output: [1]


// function plusOne(digits){
//   let result = [];
//   for(let i=0; i<digits.length;i++){
//     if(i===digits.length-1){
//       result.push(digits[i]+1)
//     }else {
//       result.push(digits[i])
//     }
//   }
//   return result;

// };

// console.log(plusOne([9]))
// console.log(plusOne([1,2,3]))
// console.log(plusOne([4,3,2,1]))
// console.log(plusOne([0]))
// ///////////////////end





//easy////////////////////////////////////////18........////////////////////////////////////       83.  Remove duplicates from sorted lists ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

function deleteDuplicates(head){
  let result = []
  let dupResult = [];
  // let start = head[i];
  for(let i=0;i<head.length;i++){
    if(head[i]===head[i+1]){
      dupResult.push(head[i])
    }else{
      start = head[i+1]
    }
  }
  return dupResult;
}

console.log(deleteDuplicates([1,1,2])) // [1,2]
console.log(deleteDuplicates([1,1,2,3,3])) // [1,2,3]

//////////////easy/////////////////////////////19.........//////////////////////// 88. Merge Sorted Array//////////////////////////////////////////////////////////////////////////////
// The number of elements initialized in nums1 and nums2 are m and n respectively. 
// You may assume that nums1 has a size equal to m + n 
// such that it has enough space to hold additional elements from nums2.


// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
 

// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109


// function merge(nums1, m, nums2, n){
//   debugger;
//   for(let i=m;i<nums1.length;i++){
//     nums1[i] = nums2[i-m]

//   }
//   return nums1.sort((a,b) => a-b)

// }

// console.log(merge([1,2,3,0,0,0], 3,  [2,5,6], 3)) // Output: [1,2,2,3,5,6]
// console.log(merge([1],  1,  [],  0))
// console.log(merge([1,2,3,5,6,5,20,7], 4,  [8,9,11,10], 3))


/////////////////easy//////////////////////////20.........//////////////////////// 100. same tree//////////////////////////////////////////////////////////////////////////////

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

////*** note that because this is a tree problem, your answer is differnt from waht was submitted */ 

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// function isSameTree(p,q){
//   pp = p.toString().split('').join('')
//   qq = q.toString().split('').join('')
//   return pp === qq;
// }

// function isSameTree(p,q){
//   let result = [];
//   for(let i=0; i<p.length;i++){
//     if(p[i]===q[i]){
//       return result.push(true);
//     } else {
//       return result.push(false);
//     }
//   }
//   return result.every(v=>v===true)
// }

// console.log(isSameTree(  [1,2,3], [1,2,3]))
// console.log(isSameTree(  [1,2], [1,null,2]))
// console.log(isSameTree(  [1,2,1], [1,1,2]))

/////////////////easy//////////////////////////20.........//////////////////////// 121. best time to buy and sell stock//////////////////////////////////////////////////////////////////////////////


// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day 
// in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

function maxProfit(prices){
  let buy = prices[0];
  let profit = 0;
  for(let i=1;i<prices.length;i++){
    buy = Math.min(prices[i],buy)
    profit = Math.max(prices[i]-buy,profit)
  }
  return profit;
}

// function maxProfit(prices){
//   let min = prices[0]
//   let max = 0;
//   for(let i =1; i<prices.length;i++){
//     if(prices[i]-min>max){
//       max = prices[i]-min;
//     }
//     if(prices[i]<min){
//       min = prices[i]
//     }
//   }
//   return max;
// }

// console.log(maxProfit([7,1,5,3,6,4])) // return 5
// console.log(maxProfit([7,6,4,3,1])) // return 0


///////////////////////easy////////////////////21.........//////////////////////// 122. best time to buy and sell stock//////////////////////////////////////////////////////////////////////////////
// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// Example 2:
// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.

// Example 3:
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


        // buyPrice = Math.min(prices[i],buyPrice)
        // maxProfit = Math.max(prices[i] - buyPrice, maxProfit)


// function maxProfit(prices) {
//   debugger;
//   let buy = prices[0];
//   let profit = 0;
//   for(let i=1; i<prices.length;i++){
//     if(prices[i]>buy){
//       profit+=prices[i]-buy;
//       buy = prices[i];
//     } else {
//       buy = prices[i]
//     }
//   }
//   return profit

// }

// console.log(maxProfit([7,1,5,3,6,4])) // return 7
// console.log(maxProfit([1,2,3,4,5])) // return 4
// console.log(maxProfit([7,6,4,3,1])) // return 0
///////////////easy////////////////////////////22.........//////////////////////// 136. single number//////////////////////////////////////////////////////////////////////////////

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// function singleNumber(nums){
  
//   for(let i=0; i<nums.length;i+=2){
//     if(nums[i]!==nums[i+1]){
//       return nums[i]
//     }
//   }
// }

// console.log(singleNumber([2,2,1]))
// console.log(singleNumber([4,1,2,1,2]))
// console.log(singleNumber([1]))


//////////////easy/////////////////////////////23.........//////////////////////// 167.  Two Sum II - Input array is sorted//////////////////////////////////////////////////////////////////////////////
//Given an array of integers numbers that is already sorted in ascending order, 
// find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, 
// where 1 <= answer[0] < answer[1] <= numbers.length.

// You may assume that each input would have exactly one solution and you may not use the same element twice.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]

// function twoSum(numbers, target){
//   let start = numbers[0];
//   let result = [];
//   for(let i of numbers){
//     if(target - i === start){
//       result.push(start,i)
//     }
//   }
//   return result;

// }

// function twoSum(numbers,target){
//   debugger;
//   for(let i=0; i<numbers.length;i++){
//     for(let j=i+1;j<numbers.length;j++){
//       if(numbers[i]+numbers[j]==target){
//         return [i+1,j+1]
//       }
//     }
//   }
// }





// console.log(twoSum([2,7,11,15], 9)) // Output: [1,2]
// console.log(twoSum([2,3,4], 6)) // Output: [1,3]
// console.log(twoSum([-1,0], -1)) // Output: [1,2]

/////////////easy//////////////////////////////24.........//////////////////////// 169.  Majority Element//////////////////////////////////////////////////////////////////////////////
// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// function majorityElement(nums){ 
//   debugger;
//   let obj ={};
//   for(let i=0; i<nums.length;i++){
//     obj[nums[i]] = obj[nums[i]]+1 || 1
//     if(obj[nums[i]]>nums.length/2) return nums[i]
//   }

// }

// console.log(majorityElement([3,2,3])) // 3
// console.log(majorityElement([2,2,1,1,1,2,2])) //2


// //////////////easy/////////////////////////////25.........////////////////////////283.  Move Zeros//////////////////////////////////////////////////////////////////////////////
// // Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
////////////////////////////come back
// // Example:

// // Input: [0,1,0,3,12]
// // Output: [1,3,12,0,0]


// function moveZeroes(nums) {       
//   for(var i = nums.length;i--;){
//       if(nums[i]===0){
//           nums.splice(i,1)
//           nums.push(0);
//       }
//   }
// };

// console.log(moveZeroes([0,1,0,3,12]))

// ///end



//////easy/////////////////////////////////////27.........////////////////////////172. factorial trailing zero//////////////////////////////////////////////////////////////////////////////
// Given an integer n, return the number of trailing zeroes in n!.
// Follow up: Could you write a solution that works in logarithmic time complexity?

// Example 1:
// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Example 3:
// Input: n = 0
// Output: 0
 


//// this soulition is because of the 2's and 5's you count for.  
//https://leetcode.com/problems/factorial-trailing-zeroes/discuss/355808/JavaScript-solution-with-explanation
// function trailingZeroes(n){


// }

// console.log(trailingZeroes(3))
// console.log(trailingZeroes(5))
// console.log(trailingZeroes(0))
// console.log(trailingZeroes(7))
// console.log(trailingZeroes(10))
// console.log(trailingZeroes(13))
// console.log(trailingZeroes(16))



/////////////////////////////////medium//////////28.........////////////////////////3. longest substring without repeating characters//////////////////////////////////////////////////////////////////////////////
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0


// ////////////reduce solution///////////
// function lengthOfLongestSubstring(s){
//   debugger;
//   let longest = 0;
//   let current ='';

//   for(let i=0; i<s.length;i++){
//     indexesOf=current.indexOf(s[i])+1
//     current = current.substring(indexesOf)
//     current+=s[i];
//     if(current.length>longest){
//       longest = current.length;
//     }
//   }
//   return longest;
// }


// console.log(lengthOfLongestSubstring("abcabcbb")) // 3
// console.log(lengthOfLongestSubstring("bbbb")) // 1
// console.log(lengthOfLongestSubstring("pwwkew")) // 3

// /////////////////////////////////hard//////////29.........////////////////////////3. Median of Two SOrted Arrays//////////////////////////////////////////////////////////////////////////////
// // Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// // Follow up: The overall run time complexity should be O(log (m+n)).

 

// // Example 1:
// // Input: nums1 = [1,3], nums2 = [2]
// // Output: 2.00000
// // Explanation: merged array = [1,2,3] and median is 2.

// // Example 2:
// // Input: nums1 = [1,2], nums2 = [3,4]
// // Output: 2.50000
// // Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// // Example 3:
// // Input: nums1 = [0,0], nums2 = [0,0]
// // Output: 0.00000

// // Example 4:
// // Input: nums1 = [], nums2 = [1]
// // Output: 1.00000

// // Example 5:
// // Input: nums1 = [2], nums2 = []
// // Output: 2.00000
// ///your solution
// function findMedianSortedArrays(nums1, nums2){
//   sorted = nums1.concat(nums2).sort((a,b)=>a-b)
//   sortedLength = sorted.length;

// let half = Math.floor(sortedLength/2)
// if()

// }


// console.log( findMedianSortedArrays([1,3],[2])) //2
// console.log( findMedianSortedArrays([1,2],[3,4])) //2.5
// console.log( findMedianSortedArrays([0,0],[0,0])) // 0
// console.log( findMedianSortedArrays([],[])) // nan
// console.log( findMedianSortedArrays([2],[])) // 2


/////////////////////////////////medium//////////30.........////////////////////////5. Largest Palindromic Substring//////////////////////////////////////////////////////////////////////////////
// Given a string s, return the longest palindromic substring in s.
 
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Example 3:
// Input: s = "a"
// Output: "a"

// Example 4:
// Input: s = "ac"
// Output: "a"

// function longestPalindrome(s){
//   debugger;
//   for(let j=s.length-1; j>=0; j--){
//     let i=0;
//     let k=j;
//     while(k<s.length){
//       let substr = s.substring(i,k+1)
//       if(isPalindrome(substr)) return substr;
//       i++
//       k++
//     }
//   }
//   return ''
// }
// function isPalindrome(str){
//   let l=0
//   let r=str.length-1
//   while(l<r){
//     if(str[l]!==str[r]) return false
//     l++
//     r--
//   }
//   return true;
// }


// console.log(longestPalindrome("babad")) //aba
// console.log(longestPalindrome("cbbd")) //bb
// console.log(longestPalindrome("a")) //a
// console.log(longestPalindrome("ac")) //a





/////////////////////////////////easy//////////34.........////////////////////////204.  Count Primes//////////////////////////////////////////////////////////////////////////////

// Count the number of prime numbers less than a non-negative number, n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

// function countPrimes(n) {

// }

// console.log(countPrimes(10))  //  4

////////////////////////////////////////////////////easy//////////35.........////////////////////////Isomorphobic Strings//////////////////////////////////////////////////////////////////////////////
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// function isIsomorphic(s,t){
//   debugger;
//   let obj = {};
//   for(let i=0; i<s.length;i++){
//     if(!obj['s'+s[i]]){
//       obj['s'+s[i]] = t[i];
//     }
//     if(!obj['t'+t[i]]){
//       obj['t'+t[i]] = s[i];
//     }
//     if([t[i]] !=obj['s'+s[i]] || s[i] != obj['t'+t[i]]) return false
//   }
//   return true;
// }

// function isIsomorphic(s,t){
//   debugger;
//   for(let i=0;i<s.length;i++){
//     let ss=s.indexOf(s[i],i+1)
//     let tt=t.indexOf(t[i],i+1)
//     if(s.indexOf(s[i],i+1)!==t.indexOf(t[i],i+1))return false;
//   }
//   return true;
// }

// console.log(isIsomorphic("egg","add")) // Output: true
// console.log(isIsomorphic("foo","bar")) // Output: false
// console.log(isIsomorphic("paper","title")) // Output: true

////////////////////////////////////////////////////easy//////////36.........////////////////////////217.  contains duplicate//////////////////////////////////////////////////////////////////////////////

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// function containsDuplicate(nums){
//   let obj = {};
//   for(let i=0; i<nums.length;i++){
//     obj[nums[i]] = obj[nums[i]]+1 || 1
//     if(obj[nums[i]]>1) return true;
//   }
//   return false;
// }

// console.log(containsDuplicate([1,2,3,1])) // Output: true
// console.log(containsDuplicate([1,2,3,4])) // Output: false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // Output: true








// ////////////////////////////////////////////////////easy//////////40.........////////////////////////237.  Delete Node in a Linked List //////////////////////////////////////////////////////////////////////////////\
// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list.

// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

// Example 3:
// Input: head = [1,2,3,4], node = 3
// Output: [1,2,4]

// Example 4:
// Input: head = [0,1], node = 0
// Output: [1]

// Example 5:
// Input: head = [-3,5,-99], node = -3
// Output: [5,-99]

// function deleteNode(node,n){

// }

// console.log(deleteNode([4,5,1,9],5)) // node = 5 // Output: [4,1,9]
// console.log(deleteNode([4,5,1,9],1)) // node = 1 // Output: [4,5,9]
// console.log(deleteNode([1,2,3,4],3)) // node = 3 // Output: [1,2,4]
// console.log(deleteNode([0,1]),0) // node = 0 // Output: [1]
// console.log(deleteNode([-3,5,-99],-3)) // node = -3 // Output: [5,-99]











// ////////////////////////////////////////////////////easy//////////43.........////////////////////////268. missing number   //////////////////////////////////////////////////////////////////////////////\
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Example 4:
// Input: nums = [0]
// Output: 1
// Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.

// function missingNumber(nums){

// }

// console.log(missingNumber([3,0,1])) // Output: 2
// console.log(missingNumber([0,1])) // Output: 2
// console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // Output: 8
// console.log(missingNumber([0])) // Output: 1







// ////////////////////////////////////////////////////easy//////////47 and 48.........////////////////////////326. Power of Three and four  //////////////////////////////////////////////////////////////////////////////


// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
// Example 4:

// Input: n = 45
// Output: false
 

// function isPowerofThree(n){

// }

// console.log(isPowerofThree(27))
// console.log(isPowerofThree(0))
// console.log(isPowerofThree(9))
// console.log(isPowerofThree(45))
// ////////////////////////////////////////////////////easy//////////49.........////////////////////////reverse string  //////////////////////////////////////////////////////////////////////////////
// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// // Example 2:
// // Input: ["H","a","n","n","a","h"]
// // Output: ["h","a","n","n","a","H"]

// function reverseString(s){


// }

// console.log(reverseString(["h","e","l","l","o"])) //["o","l","l","e","h"]
// console.log(reverseString(["H","a","n","n","a","h"])) //["h","a","n","n","a","H"]




////////////////////////////////////////////////////easy//////////53.........////////////////////////350.  Intersection of two Arrays II//////////////////////////////////////////////////////////////////////////////

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.


// function intersect(nums1, nums2){

// }

// console.log(intersect([1,2,2,1],[2,2])) // Output: [2,2]
// console.log(intersect([4,9,5], [9,4,9,8,4]))// Output: [4,9]


////////////////////////////////////////////////////easy//////////54.........////////////////////////367.  Valid PErfect Square//////////////////////////////////////////////////////////////////////////////

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

// Example 1:
// Input: num = 16
// Output: true

// Example 2:
// Input: num = 14
// Output: false

// function isPerfectSquare(num){

// }

// console.log(isPerfectSquare(16))
// console.log(isPerfectSquare(14))



////////////////////////////////////////////////////easy//////////56.........////////////////////////387.  First Unique Character in a String//////////////////////////////////////////////////////////////////////////////
// Given a string, find the first non-repeating character in it 
// and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// function firstUniqChar(s){
//   debugger;
//   let obj = {};
//   for(let char of s){
//     obj[char] ? obj[char]++ : obj[char] = 1
//   }
//   for(let i=0; i<s.length;  i++){
//     if(obj[s[i]]===1) return i;
//   }
//   return -1

// }

// function firstUniqChar(s){
//   for(i=0; i<s.length; i++)
//   if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
// return -1
// }
  


// console.log(firstUniqChar("leetcode")) // return 0.
// console.log(firstUniqChar("loveleetcode")) // return 2.
// //////////////////////end

////////////////////////////////////////////////////easy//////////57.........////////////////////////387.  Find the Difference//////////////////////////////////////////////////////////////////////////////
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

 

// Example 1:
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// Example 2:
// Input: s = "", t = "y"
// Output: "y"

// Example 3:
// Input: s = "a", t = "aa"
// Output: "a"

// Example 4:
// Input: s = "ae", t = "aea"
// Output: "a"
//////your solution
// function findTheDifference(s,t){

// }


// console.log(findTheDifference("abcd",  "abcde"))// Output: "e"
// console.log(findTheDifference("",  "y"))// Output: "y"
// console.log(findTheDifference("a",  "aa"))// Output: "a"
// console.log(findTheDifference("ae",  "aea"))

////////////////////////////////////////////////////easy//////////59.........////////////////////////409.  longest palindrome//////////////////////////////////////////////////////////////////////////////

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1

// Example 3:
// Input: s = "bb"
// Output: 2

// function longestPalindrome(s){
//   let ans = 0
//   let obj = {}
//   for(let char of s){
//     obj[char] = (obj[char] || 0)+1;
//     if(obj[char]%2===0){
//       ans+=2
//     }
//   }
//   return s.length>ans?ans+1:ans;
// }

// console.log(longestPalindrome("abccccdd")) // Output: 7
// console.log(longestPalindrome("a")) // Output: 1
// console.log(longestPalindrome("bb")) // Output: 2


////////////////////////////////////////////////////easy//////////61.........////////////////////////434.  longest palindrome//////////////////////////////////////////////////////////////////////////////
// You are given a string s, return the number of segments in the string. 

// A segment is defined to be a contiguous sequence of non-space characters.

// Example 1:
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Example 2:
// Input: s = "Hello"
// Output: 1

// Example 3:
// Input: s = "love live! mu'sic forever"
// Output: 4

// Example 4:
// Input: s = ""
// Output: 0

// function countSegments(s){
//   if(s.trim().length===0){
//     return 0
//   }
//   let arr=s.split(' ')
//   return arr.length;
  
//   // for(let i=0; i<arr.length;i++){
//   //   if(arr[i]===''){
//   //     arr.splice(i,1)
//   //     i--
//   //   }
//   // }
//   // return arr.length;
// }



// console.log(countSegments(s = "Hello, my name is John")) // Output: 5
// console.log(countSegments(s = "Hello"))// Output: 1
// console.log(countSegments(s = "love live! mu'sic forever"))// Output: 4
// console.log(countSegments(s = ""))// Output:0






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////recursion exercises//////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// For example, if the input is 'g', then the output should be 'ggggg'.
//////////////////////////////example////////////////////////////
// Input: {String} char
// Output: {String}
////////////////////////////example///////////////////////////////

// console.log('Hello, world!');
// // add code here////
// function repeater(char, num=0, output =""){
//   if(num===5){
//     return output;
//   }else{
//     output+=char;
//     num++

//     return repeater(char,num,output)
//   }

// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g'));
// console.log(repeater('j'));


/////////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
///////////////////////////////////example//////////////////////////////////////////
// Input: {Number} num - number whose factorial is sought
// Output: {Number}
///////////////////////////////////example//////////////////////////////////////////
// // add code here////
// function factorial(num, product=1){
//   if(num === 0){
//     return product;
//   } else{
//     return factorial(num-1,product*num)
//   }

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1




////////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
// Get the length of an array using recursion without accessing its length property.
// ///////////////////////////////////example//////////////////////////////////////////
// Input: {Array} array - array whose length is sought
// Output: {Number}
// ///////////////////////////////////example//////////////////////////////////////////
// // add code here////
// function getLength(arr,length=0){
//   if(arr[0]===undefined){
//     return length;
//   } 
//     length++
//     return getLength(arr.slice(1),length)

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0



////////////////////////////////////////////////// Challenge: POW///////////////////////////////////////////////////////////////////////////////////
// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. 
// For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

// ///////////////////////////////////example//////////////////////////////////////////
// Input 1: {Number} base - base number raised to the exponent
// Input 2: {Number} exponent - exponent the base is raised to
// Output: {Number} - expected value of base raised to exponent
// ///////////////////////////////////example//////////////////////////////////////////
// // add code here////
// function pow(base, exponent){
//   if(exponent === 0){
//     return 1
//   } else {
//     return base * pow(base, exponent-1)
//   }

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243


// Challenge: flow
// Write a function that takes an array of functions and a number that will be piped through all those functions. 
// The input number passes through the first function, whose output is passed as input to the second function, 
// whose output is passed as input to the third function, and so on. Use recursion to return the final output 
// of the last function in the array.
// ///////////////////////////////////example//////////////////////////////////////////
// Input 1: {Number} input - number flowing through all functions
// Input 2: {Array} funcArray - array of functions to pass input through
// Output: {Number} - final output of final function
// ///////////////////////////////////example//////////////////////////////////////////
// // add code here////
// function flow(input, funcArray){
//   if(funcArray.length ===0){
//     return input;
//   } else{
//     let output = funcArray[0](input)
//     return flow(output, funcArray.slice(1))
//   }

// }
// // To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
//  function add7(num) { return num + 7; }
//  function modulo4(num) { return num % 4; }
//  function subtract10(num) { return num - 10; }
//  const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
//  console.log(flow(2, arrayOfFunctions)); // -> -7


//////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
// write a function called productOfArray which takes in an array of of numbers and returns the product of them all.
// function productOfArray(arr) {
//   if(arr.length === 0){
//     return 1
//   }
//   let i=0;
//   return arr[i]*productOfArray(arr.slice(1))
// }


// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60



//////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
// write a function called recursiveRange which accepts a number and up all the numbers from 0 to the number passed to the function

// function recursiveRange(x){
//   if(x===0){
//     return 0
//   } else{
//     return x + recursiveRange(x-1)
//   }
   
// }

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 

//////////////////////////////////////////////////////////////////////fibonacci//////////////////////////////////////

// write a recursive funcation called fib which accepts a number and returns the nth number in the fibonacci sequence.
// Recall that the fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8... which starts with 1 and 1 and where every number thereafter 
// is equal to the sum of the previous two numbers;


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(n){
//   if(n<=2){
//     return 1
//   } else {
//     return fib(n-1) + fib(n-2)
//   }

// }


// console.log(fib(4))// 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465


// //////////////////////////////////////////////////////////////////////reverse///////////////////////////////////////////////////////////////////
// //write a function called reverse which accepts a string and returns a new string in reverse

// function reverse(str,output=''){
//   debugger;
//   let i=str.length
//   if(str.length <= 0){
//     return str
//   } else {
    
//     return reverse(str.slice(1))+str[0]
//   }
// }
  
//   console.log(reverse('awesome')) // 'emosewa'
//   console.log(reverse('rithmschool')) // 'loohcsmhtir'



// //////////////////////////////////////////////////////////////////////isPalindrome/////////////////////////////////////////////////////////
// write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same foward and backward)
// otherwise returns false.



// function isPalindrome(str){
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//   console.log(str.slice(-1))
//   return false;

// }


// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false

 

//////////////////////////////////////////////////////////////////////someRecurseive/////////////////////////////////////////////////////////

//write a function which accepts an array and a clalback.  
// the function returns true if a single value in teh array returns true when passed to the callback
// otherwise it is false

// function someRecursive(array, callback){
//   if(array.length ===0) return false;
//   if(callback(array[0])) return true
//   return someRecursive(array.slice(1),callback)

//   }


//   // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false


//////////////////////////////////////////////////////////////////////flatten/////////////////////////////////////////////////////////
// write a function taht acceps an array of arrays and returns a new array with all value flattneed

// function flatten(oldArr){

//   }
  
//   console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
//   console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
//   console.log(flatten([[1],[2],[3]])) // [1,2,3]
//   console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3


//////////////////////////////////////////////////////////////////////capitalizeFirst/////////////////////////////////////////////////////////

// given an array of String, capitlzie the first letter of each string in the array

// function capitalizeFirst (array) {

    
//   }
  
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


//////////////////////////////////////////////////////////////////////nestedEvenSum/////////////////////////////////////////////////////////

// return the sum of all even numbers in an object which may contain nested objects;

// function nestedEvenSum (obj, sum = 0) {


//   }
  
  
//   var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }
  
//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };
  
//   console.log(nestedEvenSum(obj1)); // 6
//   console.log(nestedEvenSum(obj2)); // 10

  //////////////////////////////////////////////////////////////////////capitalize/////////////////////////////////////////////////////////
// given an array of words, return an new array conating each word captialzied

// function capitalizeFirst (array) {

//   }
  
//   let words = ['i', 'am', 'learning', 'recursion'];
//   console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


    //////////////////////////////////////////////////////////////////////stringifyNumbers/////////////////////////////////////////////////////////

    //write a function which akes an object and finds all of the values which are numbers and converts them to strings.  

