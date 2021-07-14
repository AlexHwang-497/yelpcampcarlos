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
//   return str.split('').reverse().join('')


// }

// //////////////////////////////solve using a for looop///////////////
// function reverse(str){
//   let newStr=''
//   for(let i = str.length-1;i>=0;i--){
//     newStr+=str[i]
//   }
//   return newStr;

// }

// ////////////////////////////// using for of loop///////////////
// function reverse(str){
//   let newStr = ''
//   for(let i of str){
//     newStr = i + newStr;
//   }

// return newStr
// }



// // ////////////////////////////use an array function aka reduce///////////////////////////
// function reverse(str){
//   return str.split('').reduce((acc,cur) =>{
//     return cur + acc
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
//   let newStr = '';
//   for(let i =str.length-1; i>=0; i--){
//     newStr+=str[i]
//   }
//   return newStr === str
//  }


// ///////////////////using reverse str
// function palindrome(str){
//   return str.split('').reverse().join('') === str
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
//   let reversed=n.toString().split('').reverse().join('')
  
  
//     return parseInt(reversed) * Math.sign(n) 


// }

//////////////////////////////////get back to this one.  you can't figure out how to do the negative;  
////////////////////loop
// function reverseInt(n){

// }

// console.log(reverseInt(15)===51)  // true
// console.log(reverseInt(981)===189) // true
// console.log(reverseInt(500)===5) // true
// console.log(reverseInt(-15)===-51) // true
// console.log(reverseInt(-90)===-9) // true   === -9


/////4///////////////////////////////////////////////////maxChar///////////////////////////////////////////////////////////////////////////////////
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// // --- Examples
// // maxChar("abcccccccd") === "c"
// // maxChar("apple 1231111") === "1"

///find 
// function maxChar(str){
//   let obj = {}
//   let maxChar = ''
//   for(let i=0;i<str.length;i++){
//     obj[str[i]]= obj[str[i]]+1 || 1
//   }
//   let max = 0;
//   for(let char in obj){
//     if(obj[char]>max){
//       max = obj[char]
//       maxChar = char;
//     }
//   }
//   return maxChar;

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
//     if(!last || last.length === size){
//       chunked.push([element])
//     } else {
//       last.push(element)
//     }
//   }
//   return chunked;

// }

///////////alternate solution///////////////
// function chunk(array,size){
//   let chunked = [];
//   let index = 0
//   while (index <array.length){
//     chunked.push(array.slice(index,index+size));
//     index+=size;
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
//   let strA = stringA.trim().split('').sort().join('').toLowerCase()
//   let strB = stringB.trim().split('').sort().join('').toLowerCase()
//   let result=[];
//   for(let i = 0; i<stringB.length; i++){
//     if(strA[i]===strB[i]){
//       result.push(strA[i])
//     }
//   }
//   console.log(strA,strB)
//   // return result.join('') === strA

// }


// console.log(anagrams('rail safety', 'fairy tales'))///=== True)
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))// === false)
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



// /////////solution 1////////////////
// function capitalize(str) {
//   debugger
// //  let arr = str.split(' ')
//   let result = [];
//   for(let i of str.split(' ')){
//     result.push(i[0].toUpperCase() + i.slice(1))
//   }
//   return result.join(' ')
// }


// ////solution 2---using loop
// function capitalize(str){
//   let result = str[0].toUpperCase()
//   for(let i=1; i<str.length;i++){
//     if(str[i-1]===' '){
//       result+=str[i].toUpperCase()
//     }else {
//       result+=str[i]
//     }
//   }
//   return result;

// }


// console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
// console.log(capitalize('a lazy fox')) //-> 'A Lazy Fox')
// console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'






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
//   let vowels =['a','e','i','o','u']
//   let count = 0
//   // let strLower = str.toLowerCase()

//   let  obj= {};
//   for(let i=0; i<str.length;i++){
//     if(vowels.includes(str[i].toLowerCase())){
//       count++
//       obj[str[i]] = obj[str[i]]+1 || 1
      
//     }
//   }
//   return count
// }


// console.log(vowels('Hi There!')) //--> 3)
// console.log(vowels('Why do you ask?'))// --> 4)
// console.log(vowels('Why?')) //--> 0)




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
//   let start = nums[0];
//   let output =[];
//   for(let i=0; i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//       if(nums[j] === target - nums[i]){
//         output.push(i)
//         output.push(j)
//       }
//     }
//   }
//   return output;
// }


// console.log(twoSum([2,7,11,15],9)) // Output: [0,1]
// console.log(twoSum([3,2,4],6)) // Output: [1,2]
// console.log(twoSum([3,3],6)) // Output: [0,1]

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
//   let reversed = x.toString().split('').reverse().join('')
//   return parseInt(reversed) * Math.sign(x)

// };

/////////////////loop//////////

// function reverse(x){
//   debugger;
//   let xx = x.toString()
//   let result = [];
//   for(let i=xx.length-1;i>=0;i--){
//     result.push(xx[i]);
//   }
//   return parseInt(result.join('')) * Math.sign(x);

// }


// console.log(reverse(123)) // Output: 321
// console.log(reverse(-123)) // Output: -321
// console.log(reverse(120)) // Output: 21
// console.log(reverse(0)) // Output: 0


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
//   debugger;
//   let result = []
//   let xx = x.toString();
//   let i=0
//   let j = xx.length-1;

//   while (i<=j){
//     if(xx[i++]!==xx[j--]){
//       return false;
//     }
//   }
//   return true;
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
//   let arr = r.split('')
//   let romans = {
//     'I': 1,
//     'V':5,
//     'X':10,
//     'L':50,
//     'C':100,
//     'D':500,
//     'M':1000
// }
// let sum = 0;
// for(let i=0;i<r.length;i++){
//   if(romans[arr[i]]<romans[arr[i+1]]){
//     sum+=romans[arr[i+1]]-romans[arr[i]];
//     i++
//   }else {
//     sum+=romans[arr[i]]
//   }
// }
// return sum;
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
//   debugger;
//   let longest = '';
//   if(strs.length === 0){
//     return longest;
//   }
//   let comparisonWord = strs[0]
//   let comparisonIndex = 0
//   for(let comparisonLetter of comparisonWord){
//     for(let i=1; i<strs.length;i++){
//       let currentWord = strs[i]
//       let currentLetter = currentWord.charAt(comparisonIndex)
//       if(comparisonIndex>currentWord.length || comparisonLetter!==currentLetter){
//         return longest;
//       }
//     }
//     comparisonIndex++
//     longest+=comparisonLetter
//   }
//   return longest;

// }

// console.log(longestCommonPrefix(["flower","flow","flight"])) // Output: "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // Output: ""
// console.log(longestCommonPrefix(["anticlimax","antibody","antiseptic"])) // Output: "anti"

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
//   let left=[];
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
//////////////////soluve using loop
// function mergeTwoLists(l1,l2){
//   let result = l1;
//   for(let i of l2){
//     result.push(i)
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
//   debugger
//   if(nums.length ===0) return 0

//   let i = 0;
//   for(let j=1; j<nums.length; j++){
//     if(nums[i] !== nums[j]){
//       i++
//       nums[i] = nums[j]
//     }
//   }
//   return i+1
// }


// function removeDuplicates(nums){
//   debugger;
//     //since array is already sorted, all ocurences will appear next to each other
//     //if the next element is same as the current element splice it
//     //otherwise just move to the next element
//     //For instance in array [1, 1, 2]
//     //Since nums[0] === nums[1]; splice nums[1]
//     //Splice alters the array in place so length will become now 2
//     // Dont increment i; compare nums[0] with nums[0+1] (i.e. 2 now)
//     //Since nums[0]!==nums[1] (1!==2) so increment i
//     for(let i=0; i<nums.length; ) {
//       if(nums[i] === nums[i+1]) {
//           nums.splice(i+1, 1);
//       }
//       else {
//           i += 1;
//       }
      
//   }
//   return nums.length
// };

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
//   for(let i of nums){
//     if(i !== val){
//       result.push(i)
//     }
//   }
//   return result.length;


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
//   if(haystack === null || needle === null) return -1
//   if(haystack === needle) return 0;
//   let lengths = haystack.length - needle.length;
//   for(let i=0; i<lengths;i++){
//     if(haystack.substring(i,i+needle.length)===needle){
//       return i
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
//   for(let i=0; i<nums.length;i++){
//     if(nums[i]>= target){
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



//easy//////////////////////////////////////////////////////////////14............//////////////////////////////////////////////////////////58. Length of Last Word//////////////////// //////////////////////////////

// Given a string s consists of some words separated by spaces, return the length of the last word in the string. 
// If the last word does not exist, return 0.

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
//   return b[b.length-1].length;

// };


////////////////////////////////loop solution;
// function lengthOfLastWord(str){
//   debugger;
//   let lastCount=0
//   let count = 0
  
//   for(let i=0; i<str.length;i++){
//     if(str.charAt(i) !== ' '){
//       count++
//     } else{
//       lastCount = count || lastCount;
//       count = 0
//     }
//   }
//     return count || lastCount

// }

// console.log(lengthOfLastWord('Hello World')) //Output: 5
// console.log(lengthOfLastWord('a ')) // Output: 0
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
//   let result = []
//   for(let i=0; i<digits.length; i++){
//     if(i === digits.length-1){
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

// function deleteDuplicates(head){
//   let result = []
//   for (let i=0; i<head.length;i++){
//     if(head[i]===head[i-1]){
//       result.push(head[i])
//     }else 
//   }
//   return result;

// }

// console.log(deleteDuplicates([1,1,2])) // [1,2]
// console.log(deleteDuplicates([1,1,2,3,3])) // [1,2,3]

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

/////use loop
// function isSameTree(p,q){
//   let result =  [];
//   for(let i=0; i<p.length;i++){
//     if(p[i]===q[i]){
//       result.push(true)

//     } else {
//       result.push(false)
//     }
//   }
//   return result.every(v=>v==true)

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
 

// function maxProfit(prices){
//   buy = prices[0]
//   let profit = 0
  
//   for(let i of prices){
//     buy = Math.min(i,buy)
//     profit = Math.max(i-buy,profit)
//   }
//   return profit;

// }

// function maxProfit(prices){
//   let min = prices[0];
//   let max = 0;
//   for(let i=1;i<prices.length;i++){
//     if(prices[i]-min>max){
//       max = prices[i]-min
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
//   if(prices.length === 0) return 0;
//   let buyingPrice = prices[0];
//   let totalProfit = 0
//   for(let i=1; i<prices.length;i++){
//     if(prices[i]>buyingPrice){
//       totalProfit+= prices[i]-buyingPrice;
//       buyingPrice=prices[i]
//     }else{
//       buyingPrice=prices[i]
//     }
//   }
//   return totalProfit
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
//   let obj = {}
//   for(let i of nums){
//     obj[i] = obj[i]+1 || 1
//   }
//   // return Object.keys(obj).find(key=>obj[key]===1);

//   return Object.values(obj).reduce((acc,curr)=> acc+curr)

// }

// console.log(singleNumber([2,2,1]))
// console.log(singleNumber([4,1,2,1,2]))
// console.log(singleNumber([1]))




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
//   let obj={}
//   for(let i of nums){
//     obj[i]=obj[i]+1 ||1
//   }
//   // return obj;
//   return Object.keys(obj).reduce((acc,curr)=> obj[acc]>obj[curr]?acc:curr)

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
//   debugger;
//   // let result = nums;
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]===0){
//       nums.splice(i,1)
//       nums.push(0)
//     }
//   }
//   return nums
// };

// console.log(moveZeroes([0,1,0,3,12])) // // Output: [1,3,12,0,0]

// // ///end





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



// function lengthOfLongestSubstring(s){
//   let obj ={};
//   let left = 0
//   return s.split('').reduce((max,v,i)=>{
//     left = obj[v]>=left ? obj[v]+1:left
//     obj[v]=i
//     return Math.max(max,i-left+1)
//   },0)

// }

// function lengthOfLongestSubstring(s){
//   debugger;
//   let maxLen =0
//   let maxStr = ''
//   let tmpStr;
//   let posIndex;
//   for(let i=0;i<s.length;i++){
//     tmpStr = s[i];
//     posIndex=maxStr.indexOf(tmpStr)
//     if(posIndex >-1){
//       maxStr = maxStr.substring(posIndex+1)
//     }
//     maxStr+=tmpStr;
//     maxLen = Math.max(maxLen,maxStr.length)
//   }
//   return maxLen
// }


// console.log(lengthOfLongestSubstring("abcabcbb")) // 3 ; abc
// console.log(lengthOfLongestSubstring("bbbb")) // 1; b
// console.log(lengthOfLongestSubstring("pwwkew")) // 3; wke



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

// }


// console.log(longestPalindrome("babad")) //aba
// console.log(longestPalindrome("cbbd")) //bb
// console.log(longestPalindrome("a")) //a
// console.log(longestPalindrome("ac")) //a






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
//  let sResult = []
//  let tResult =[]
//   for(let i=0; i<s.length;i++){
//     sResult.push(s.indexOf(s[i],i+1))
//     tResult.push(t.indexOf(t[i],i+1))
//   }
// console.log(sResult,tResult)

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
//   nums.sort()
//   for(let i=0; i<nums.length;i++){
//     if(nums[i]===nums[i+1]){
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// function containsDuplicate(nums){
//   let obj = {};
//   for(let i of nums){
//     obj[i] = obj[i]+1 || 1
//   }
//   return Object.keys(obj).filter(el => obj[el]>1)
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
  
//   for(let i=0; i<node.length; i++){
//     if(node[i] === n){
//       node.splice(i,1)
//     }

//   }
//   return node

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
//   debugger;
//   let sum = 0
//   for(let i=0; i<nums.length;i++){
//     sum = i+1-nums[i]
//   }
//   return sum;

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
//   return s.reverse()

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
//   // let joined = nums1.concat(nums2)
//   // let obj = {}
//   // for (let i of joined){
//   //    obj[i] = obj[i]+1 || 1
//   // }
//   // return obj
//   return nums1.filter(num =>nums2.includes(num))

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
//   let obj ={};
//   for(let i of s){
//     obj[i] = obj[i]+1 || 1

//   }
//   return obj;
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
function findTheDifference(s,t){
  //   return nums1.filter(num =>nums2.includes(num))
  ss=s.split('')
  tt = t.split('')

  return tt.filter((str,i) => str!==ss[i])

  

}


console.log(findTheDifference("abcd",  "abcdef"))// Output: "e"
console.log(findTheDifference("",  "y"))// Output: "y"
console.log(findTheDifference("a",  "aa"))// Output: "a"
console.log(findTheDifference("ae",  "aea"))

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
// function repeater(str,num=0,output=''){
 
//   if(num === 5){
//     return output
//   }else {
//     output+=str
//     num++


//     return repeater(str,num,output)

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
// function factorial(num,output){
//   if(num === 0){
//     return 1;
//   } else {
//     return num * factorial(num-1,output)
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
// function getLength(array,length=0){
//   if(array[0]===undefined){
//     return length;
//   } else {
//     length++
//     return getLength(array.slice(1),length)
//   }

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
//     return 1;
//   } else {
//     return base * pow(base,exponent-1)
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
//   if(funcArray.length === 0){
//     return input;
//   } else {
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
// // write a function called productOfArray which takes in an array of of numbers and returns the product of them all.
// function productOfArray(arr){
//   if(arr.length === 0 ){
//     return 1
//   } else {
//     let i=0
//     return arr[i] * productOfArray(arr.slice(1))

//   }

// }


// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60



//////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
// write a function called recursiveRange which accepts a number and sum of all the numbers 
// from 0 to the number passed to the function

// function recursiveRange(x){
//   if(x === 1){
//     return 1
//   } else {
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
//   if (n <=2){
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

// function reverse(str){
//   if(str.length ===0){
//     return str;
//   } else {
//     return reverse(str.slice(1)) + str[0]
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
//   if(str[0] === str.slice(-1)){
//     return isPalindrome(str.slice(1,-1))
//   }
//   return false;
// }


// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false

 

//////////////////////////////////////////////////////////////////////someRecurseive/////////////////////////////////////////////////////////

//write a function which accepts an array and a callback.  
// the function returns true if a single value in teh array returns true when passed to the callback
// otherwise it is false

// function someRecursive(array, callback){
//   if(array.length===0){
//     return false
//   }else if(callback(array[0])){
//     return true
//   } else{
//     return someRecursive(array.slice(1),callback)
//   } 
// }


//   // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false


//////////////////////////////////////////////////////////////////////flatten/////////////////////////////////////////////////////////
// write a function taht acceps an array of arrays and returns a new array with all value flattneed

// function flatten(array, result) {
//   if (array.length === 0) {
//     return result
//   }
//   var head = array[0]
//   var rest = array.slice(1)
//   if (Array.isArray(head)) {
//     return flatten(head.concat(rest), result)
//   }
//   result.push(head)
//   return flatten(rest, result)
// }

// function flatten(oldArr){
//   var newArr = []
//   	for(var i = 0; i < oldArr.length; i++){
//     	if(Array.isArray(oldArr[i])){
//       		newArr = newArr.concat(flatten(oldArr[i]))
//     	} else {
//       		newArr.push(oldArr[i])
//     	}
//   } 
//   return newArr;
// }
  
  // console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  // console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  // console.log(flatten([[1],[2],[3]])) // [1,2,3]
  // console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3


//////////////////////////////////////////////////////////////////////capitalizeFirst/////////////////////////////////////////////////////////

// given an array of String, capitlzie the first letter of each string in the array

// function capitalizeFirst (array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }
  
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


    //////////////////////////////////////////////////////////////////////getRangeBetween/////////////////////////////////////////////////////////
    // Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.

    // function rangeOfNumbers(startNum, endNum) {
    //   if (startNum - endNum === 0) {
    //    return [startNum];
    //   } else {
    //    const numbers = rangeOfNumbers(startNum +1, endNum);    
    //    numbers.unshift(startNum+1);
    //    return numbers;
    //   }
    //  };
    
    // console.log(rangeOfNumbers(2, 9)) //-> [3, 4, 5, 6, 7, 8]
    // console.log(rangeOfNumbers(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]