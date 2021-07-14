///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////coding interview bootcamp////////////////////////////////////////////////////////////////

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
  // reverse('apple') === 'leppa'
  // reverse('hello') === 'olleh'
  // reverse('Greetings!') === '!sgniteerG'


  ////////////////solve using reverse
// function reverse(str) {


// }

//////////////////////////////solve using a looop///////////////
// function reverse(str){

// }

// ////////////////////////////use an array function aka reduce///////////////////////////
// function reverse(str){

// }

// console.log(reverse('apple'))
// console.log(reverse('hello'))
// console.log(reverse('Greetings!'))


//////////////////////////////////////////////////////////////////////////////////////////palindrome//////////////////////////////////////////////////////////////
  
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
  
//  }


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

// function reverseInt(n) {


// }
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
// function chunk(array, size) {

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

//  }

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


  
// }

//////////////////////////////////solution2 recursion//////////////////////////////
// function steps(n,row=0, stair=''){
  
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

// }


// console.log(twoSum([2,7,11,15],9))
// console.log(twoSum([3,2,4],6))
// console.log(twoSum([3,3],6))

/////2....////////////////////////////////////////////////////////////////////////////////////////////////7. Reverse Integer///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
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

    
// };
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
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

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

//   }
   
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


// }

// console.log(longestCommonPrefix(["flower","flow","flight"])) // Output: "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // Output: ""

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

// }

// console.log(isValid("()")) //true
// console.log(isValid("()[]{}")) // true
// console.log(isValid("(]")) // false
// console.log(isValid("([)]")) // false
// console.log(isValid("{[]}")) // true


//////////////7.........////////////////////////////////////////////////////////////////////////////////////////////////21.  Merge Two sorted Lists //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
 
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

    
// }

// console.log(mergeTwoLists([1,2,4],[1,3,4]))
// console.log(mergeTwoLists([],[]))
// console.log(mergeTwoLists([],[0]))


///////////8..........///////////////////////////////////////////////////////////////26. Remove Duplicates from Sorted Array////////////////////////////////////////////////////////
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

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

// }

// console.log(removeDuplicates([1,1,2]))
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))


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

// }

// console.log(strStr("hello","ll"))
// console.log(strStr("aaaaa", "bba"))
// console.log(strStr("",""))

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

// }

// console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])) //6


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

// };


// console.log(lengthOfLastWord('Hello World'))
// console.log(lengthOfLastWord('a '))
// console.log(lengthOfLastWord(' a'))

//easy/////////////////////////////////////////////15........////////////////////////////////////       66. Plus one ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

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

// };

// console.log(plusOne([9]))
// console.log(plusOne([1,2,3]))
// console.log(plusOne([4,3,2,1]))
// console.log(plusOne([0]))
///////////////////end


////easy//////////////////////////////////////////////////////16........////////////////////////////////////       67. Add Binary ///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////you need to understand the binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
 
// Constraints:
// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// function addBinary(a,b){

// }

// console.log(addBinary(11,1))
// console.log(addBinary(1010,1011))


//easy///////////////////////////////////////////////17........////////////////////////////////////       70. Climbing Stairs ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////this one is a little hard
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// function climbStairs(n){

// }
// console.log(climbStairs(2))
// console.log(climbStairs(3))
// console.log(climbStairs(4))

///////////////end

//easy////////////////////////////////////////18........////////////////////////////////////       83.  Remove duplicates from sorted lists ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// function deleteDuplicates(head){

//   }

// console.log(deleteDuplicates([1,1,2])) // [1,2]
// console.log(deleteDuplicates([1,1,2,3,3])) // [1,2,3]

//////////////easy/////////////////////////////19.........//////////////////////// 88. Merge Sorted Array//////////////////////////////////////////////////////////////////////////////
// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n 
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

// console.log(merge([1,2,3,0,0,0], 3,  [2,5,6], 3))
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

// }

// console.log(isSameTree(  [1,2,3], [1,2,3]))
// console.log(isSameTree(  [1,2], [1,null,2]))
// console.log(isSameTree(  [1,2,1], [1,1,2]))

/////////////////easy//////////////////////////20.........//////////////////////// 121. best time to buy and sell stock//////////////////////////////////////////////////////////////////////////////


// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

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

// }

// console.log(singleNumber([2,2,1]))
// console.log(singleNumber([4,1,2,1,2]))
// console.log(singleNumber([1]))


//////////////easy/////////////////////////////23.........//////////////////////// 167.  Two Sum II - Input array is sorted//////////////////////////////////////////////////////////////////////////////
//Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

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

// };

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([2,3,4], 6))
// console.log(twoSum([-1,0], -1))

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


// function majorityElement(nums){ // without sort

// }

// console.log(majorityElement([3,2,3]))
// console.log(majorityElement([2,2,1,1,1,2,2]))


//////////////easy/////////////////////////////25.........////////////////////////283.  Move Zeros//////////////////////////////////////////////////////////////////////////////
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]


// function moveZeroes(nums){

// };

// console.log(moveZeroes([0,1,0,3,12]))

///end

//////////////easy/////////////////////////////26.........////////////////////////168 excel shet column title//////////////////////////////////////////////////////////////////////////////

//https://www.youtube.com/watch?v=gBZY97ECvN0

//come back to this problem


// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:
//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
//     ...

// Example 1:
// Input: 1
// Output: "A"

// Example 2:
// Input: 28
// Output: "AB"

// Example 3:
// Input: 701
// Output: "ZY"

// function convertToTitle(n) {

// } 

// console.log(convertToTitle(1)) // A
// console.log(convertToTitle(28)) // AB
// console.log(convertToTitle(701)) // ZY


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


////////////reduce solution///////////
// function lengthOfLongestSubstring(s){


// }


// console.log(lengthOfLongestSubstring("abcabcbb")) // 3
// console.log(lengthOfLongestSubstring("bbbb")) // 1
// console.log(lengthOfLongestSubstring("pwwkew")) // 3

/////////////////////////////////hard//////////29.........////////////////////////3. Median of Two SOrted Arrays//////////////////////////////////////////////////////////////////////////////
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// Follow up: The overall run time complexity should be O(log (m+n)).

 

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:
// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Example 4:
// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Example 5:
// Input: nums1 = [2], nums2 = []
// Output: 2.00000
///your solution
// function findMedianSortedArrays(nums1, nums2){

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

//     }


// console.log(longestPalindrome("babad")) //aba
// console.log(longestPalindrome("cbbd")) //bb
// console.log(longestPalindrome("a")) //a
// console.log(longestPalindrome("ac")) //a


/////////////////////////////////medium//////////31.........////////////////////////6. ZigZag Conversation//////////////////////////////////////////////////////////////////////////////

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// function convert(s,numRows){

// // return original string if can't zigzag
// if(numRows === 1  || s.length<numRows){
//     return s;
// }

// let rows = [];
// let converted ='';
// let reverse = false;
// let count = 0;

// //prepare rows
// for(let i=0; i<numRows;i++){
//      rows[i]=[]  
// }
// //reverse the push flow when reaching turning points
// for(let i=0; i<s.length; i++){
//     rows[count].push(s[i]);
//     reverse ? count--: count++
//     if(count===numRows-1 || count===0) reverse = !reverse;
// }
// //put together converted string
// return rows.reduce((converted,cur) => converted + cur.join(''), '')

// }

// function convert(s,n){


// }

 
// console.log(convert('PAYPALISHIRING',3)) //PAHNAPLSIIGYIR
// console.log(convert('PAYPALISHIRING',4)) //PINALSIGYAHRPI


/////////////////////////////////easy//////////32.........////////////////////////190.reverse bits//////////////////////////////////////////////////////////////////////////////

// Reverse bits of a given 32 bits unsigned integer.

// Note:

// Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
// Follow up:

// If this function is called many times, how would you optimize it?

 

// Example 1:

// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

// function reverseBits(n){

// }

// console.log(reverseBits(00000010100101000001111010011100)) //964176192 (00111001011110000010100101000000)
// console.log(reverseBits(11111111111111111111111111111101)) // Output:   3221225471 (10111111111111111111111111111111)

/////////////////////////////////easy//////////33.........////////////////////////191.number of 1 bits//////////////////////////////////////////////////////////////////////////////

////ask arthur how this works

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note:

// Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 
/////////////////////////////////easy//////////33.........////////////////////////191.number of 1 bits//////////////////////////////////////////////////////////////////////////////

// Example 1:
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Example 2:
// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// Example 3:
// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.


// function hammingWeight(n){

// }
// console.log(hammingWeight(00000000000000000000000000001011))// Output: 3
// console.log(hammingWeight(00000000000000000000000010000000))// Output: 1
// console.log(hammingWeight(11111111111111111111111111111101))// Output: 31

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

// }

// console.log(isIsomorphic("egg","add"))
// console.log(isIsomorphic("foo","bar"))
// console.log(isIsomorphic("paper","title"))

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

// }

// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4]))
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))


////////////////////////////////////////////////////easy//////////37.........////////////////////////228.  summary ranges //////////////////////////////////////////////////////////////////////////////

// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Example 2:
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

// Example 3:
// Input: nums = []
// Output: []

// Example 4:
// Input: nums = [-1]
// Output: ["-1"]

// Example 5:
// Input: nums = [0]
// Output: ["0"]

// function summaryRanges(nums){

// }

// console.log(summaryRanges([0,1,2,4,5,7])) // Output: ["0->2","4->5","7"]
// console.log(summaryRanges([0,2,3,4,6,8,9])) // Output: ["0","2->4","6","8->9"]
// console.log(summaryRanges([])) // []
// console.log(summaryRanges([-1])) // -1
// console.log(summaryRanges([0]))  // 0

////////////////////end

////////////////////////////////////////////////////easy//////////38.........////////////////////////231.  Power of Two //////////////////////////////////////////////////////////////////////////////

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Example 3:
// Input: n = 3
// Output: false

// Example 4:
// Input: n = 4
// Output: true

// Example 5:
// Input: n = 5
// Output: false

// function isPowerOfTwo(n){

// }


// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(16))
// console.log(isPowerOfTwo(3))
// console.log(isPowerOfTwo(4))
// console.log(isPowerOfTwo(5))


// ////////////////////////////////////////////////////easy//////////39.........////////////////////////234.  Palindrome Linked List //////////////////////////////////////////////////////////////////////////////

// // Given a singly linked list, determine if it is a palindrome.

// // Example 1:
// // Input: 1->2
// // Output: false

// // Example 2:
// // Input: 1->2->2->1
// // Output: true


// function isPalindrome(head){

// }

// console.log(isPalindrome('1->2')) // false
// console.log(isPalindrome('1->2->2->1')) // true

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


// ////////////////////////////////////////////////////easy//////////41.........////////////////////////242.  Valid anagram //////////////////////////////////////////////////////////////////////////////\
// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// function isAnagram(s,t){

// }
// console.log(isAnagram("anagram", "nagaram"))
// console.log(isAnagram("rat", "car"))


// ////////////////////////////////////////////////////easy//////////42.........////////////////////////258.  Add Digits //////////////////////////////////////////////////////////////////////////////\

///great solution explanation   https://leetcode.com/problems/add-digits/discuss/579918/Javascript-solutions-with-explanation


// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:
// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.


// function addDigits(num){

// }


// console.log(addDigits(38))
// console.log(addDigits(60))
// console.log(addDigits(45))
// console.log(addDigits(15064))


// ////////////////////////////////////////////////////easy//////////43.........////////////////////////263. Ugly Number   //////////////////////////////////////////////////////////////////////////////\

////recursion solution :   https://leetcode.com/problems/ugly-number/discuss/713352/Javascript-solution-using-recursion

// Write a program to check whether a given number is an ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example 1:
// Input: 6
// Output: true
// Explanation: 6 = 2 × 3

// Example 2:
// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2

// Example 3:
// Input: 14
// Output: false 
// Explanation: 14 is not ugly since it includes another prime factor 7.

// function isUgly(num){

//   };
// console.log(isUgly(6)) // true
// console.log(isUgly(8)) // true
// console.log(isUgly(14)) // false


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


// ////////////////////////////////////////////////////easy//////////44.........////////////////////////290. word pattern   //////////////////////////////////////////////////////////////////////////////

/////////// read up     https://leetcode.com/problems/word-pattern/discuss/?currentPage=1&orderBy=most_votes&query=


// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false
 

// function wordPattern(pattern,str){


// }

// console.log(wordPattern("abba", "dog cat cat dog"))
// console.log(wordPattern("abba", "dog cat cat fish"))

///////////end

// ////////////////////////////////////////////////////easy//////////45.........////////////////////////278. First bad version   //////////////////////////////////////////////////////////////////////////////

////////////////////////you asekd arthur in regards to this questino

////// explanation of  code https://leetcode.com/problems/first-bad-version/discuss/874486/Commented-O(log(N))-JS-Solution


// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

// Example 1:
// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Example 2:
// Input: n = 1, bad = 1
// Output: 1

// function solution(isBadVersion){

// }

// console.log(solution(3)())//false
// console.log(solution(5)()) // true
// console.log(solution(4)()) // true



// ////////////////////////////////////////////////////easy//////////46.........////////////////////////292. Nim Game   //////////////////////////////////////////////////////////////////////////////

// explantion: https://leetcode.com/problems/nim-game/discuss/688742/JavaScript-1-liner-with-expaination

// You are playing the following Nim Game with your friend:

// Initially, there is a heap of stones on the table.
// You and your friend will alternate taking turns, and you go first.
// On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
// The one who removes the last stone is the winner.
// Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

 

// Example 1:

// Input: n = 4
// Output: false
// Explanation: These are the possible outcomes:
// 1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
// 2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
// 3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
// In all outcomes, your friend wins.
// Example 2:

// Input: n = 1
// Output: true
// Example 3:

// Input: n = 2
// Output: true

// function canWinNim(n){

// }


// console.log(canWinNim(4)) // false
// console.log(canWinNim(1)) // true
// console.log(canWinNim(2)) // treu
// console.log(canWinNim(8))



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

////////////////////////////////////////////////////easy//////////50.........////////////////////////reverse Vowels of  a String  //////////////////////////////////////////////////////////////////////////////
// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Input: "hello"
// Output: "holle"

// Example 2:
// Input: "leetcode"
// Output: "leotcede"


// function reverseVowels(s){


// }

// console.log(reverseVowels("hello"))// Output: "holle"
// console.log(reverseVowels("leetcode"))// Output: "leotcede"


////////////////////////////////////////////////////easy//////////52.........////////////////////////349.  Intersection of two Arrays//////////////////////////////////////////////////////////////////////////////
// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]


// function intersection(nums1,nums2){


// }

// console.log(intersection([1,2,2,1], [2,2]))
// console.log(intersection([4,9,5], [9,4,9,8,4]))

////end
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


////////////////////////////////////////////////////easy//////////55.........////////////////////////383.  Ransom Note//////////////////////////////////////////////////////////////////////////////
// Given an arbitrary ransom note string and another string containing letters from all the magazines, 
// write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// function canConstruct(ransomNote, magazine){

// };




// console.log(canConstruct("a", magazine = "b")) // Output: false
// console.log(canConstruct(ransomNote = "aa", magazine = "ab")) // Output: false
// console.log(canConstruct(ransomNote = "aa", magazine = "aab"))// Output: true


////////////////////////////////////////////////////easy//////////56.........////////////////////////387.  First Unique Character in a String//////////////////////////////////////////////////////////////////////////////
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// function firstUniqChar(s){

// }
  


// console.log(firstUniqChar("leetcode")) // return 0.
// console.log(firstUniqChar("loveleetcode")) // return 2.
//////////////////////end

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


////////////////////////////////////////////////////easy//////////58.........////////////////////////392.  is subsequence//////////////////////////////////////////////////////////////////////////////
// Given two strings s and t, check if s is a subsequence of t.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// function isSubsequcne(s,t){


// }


// console.log(isSubsequcne(s = "abc", t = "ahbgdc"))// Output: true
// console.log(isSubsequcne(s = "axc", t = "ahbgdc"))// Output: false


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

// console.log(longestPalindrome("abccccdd"))
// console.log(longestPalindrome("a"))
// console.log(longestPalindrome("bb"))


////////////////////////////////////////////////////easy//////////60.........////////////////////////409.  longest palindrome//////////////////////////////////////////////////////////////////////////////
// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation: The third maximum is 1.

// Example 2:
// Input: nums = [1,2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: nums = [2,2,3,1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.
 
// function thirdMax(nums){

// }

// console.log(thirdMax([3,2,1])) // Output: 1
// console.log(thirdMax([1,2])) // Output: 2
// console.log(thirdMax([2,2,3,1])) // Output: 1


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
// console.log(countSegments(s = "Hello"))// Output: 5
// console.log(countSegments(s = "love live! mu'sic forever"))// Output: 4
// console.log(countSegments(s = ""))// Output:0


////////////////////////////////////////////////////easy//////////62.........////////////////////////441.  Arranging Coins//////////////////////////////////////////////////////////////////////////////
// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:
// n = 5
// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤
// Because the 3rd row is incomplete, we return 2.

// Example 2:
// n = 8
// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.

// function arrangingCoing(n){
//   let stairs = 0;
//   while(stairs<=n){
//     n-= stairs;
//     stairs++
//   }
//   return stairs-1;  
// }

// console.log(arrangingCoing(5))
// console.log(arrangingCoing(8))

////////////////////////////////////////////////////easy//////////63.........////////////////////////453.  Minimum moves to equal array elements//////////////////////////////////////////////////////////////////////////////
// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, 
// where a move is incrementing n - 1 elements by 1.

// Example:

// Input:
// [1,2,3]

// Output:
// 3

// Explanation:
// Only three moves are needed (remember each move increments two elements):

// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

// function minMoves(nums){

// }

// console.log(minMoves([1,2,3]))


////////////////////////////////////////////////////easy//////////63.........////////////////////////453.  Assign Cookies//////////////////////////////////////////////////////////////////////////////

// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. 
// If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. 
// Your goal is to maximize the number of your content children and output the maximum number.

// Example 1:
// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.

// Example 2:
// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
// You have 3 cookies and their sizes are big enough to gratify all of the children, 
// You need to output 2.

// function findContentChildren(g,s){

// }

// console.log(findContentChildren(g = [1,2,3], s = [1,1])) // Output: 1
// console.log(findContentChildren(g = [1,2], s = [1,2,3])) // Output: 2

////////////////////////////////////////////////////easy//////////64.........////////////////////////459.  Repeated Substring Pattern//////////////////////////////////////////////////////////////////////////////
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:
// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Example 2:
// Input: s = "aba"
// Output: false

// Example 3:
// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

// function repeatedSubstringPattern(s){

// }


// console.log(repeatedSubstringPattern("abab")) // Output: true
// console.log(repeatedSubstringPattern("aba")) // Output: false
// console.log(repeatedSubstringPattern("abcabcabcabc")) // Output: true
// console.log(repeatedSubstringPattern("abcabcabcab")) // Output: false
// console.log(repeatedSubstringPattern("abcabcabca")) // Output: false
// console.log(repeatedSubstringPattern("abcabcabcabcd")) // Output: false

////////////////////////////////////////////////////easy//////////65.........////////////////////////459.  Repeated Substring Pattern//////////////////////////////////////////////////////////////////////////////
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

// function hammingDistance(x,y){
//   return (x^y).toString(2).replace(/0/g,"").length;

//   //create a function with parameters x an y(the two numbers)


// }

// Explanation

// let hammingDistance = (x, y) =>
// Creates a function with parameters x and y (the two numbers)

// (x^y)
// Does XOR between the two numbers to turn all the differing bits into 1's and the same bits into 0's

// .toString(2)
// Convert to binary so we can count the number of 1's

// .replace(/0/g,"").length
// Replace all the 0's with nothing using a regex with the global flag, then take the length, which is just the number of 1's remaining and therefore the number of differing bits, which is implicitly returned.


// function hammingDistance(x,y){

// }

// console.log(hammingDistance(1,6)) // Output: 3
////////////////////////////////////////////////////easy//////////66.........////////////////////////463.  Island Perimieter//////////////////////////////////////////////////////////////////////////////
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). 
// The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. 
// One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
// Input: grid = [[1]]
// Output: 4

// Example 3:
// Input: grid = [[1,0]]
// Output: 4

// function islandPerimeter(grid){

// }

// console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])) // Output: 16
// console.log(islandPerimeter([[1]])) // Output: 4
// console.log(islandPerimeter([[1,0]])) // Output: 4






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////recrsion exercises//////////////////////////////////////////////////////





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
// function getLength(arr){

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

// }
// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243


// Challenge: flow
// Write a function that takes an array of functions and a number that will be piped through all those functions. 
// The input number passes through the first function, whose output is passed as input to the second function, 
// whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.
// ///////////////////////////////////example//////////////////////////////////////////
// Input 1: {Number} input - number flowing through all functions
// Input 2: {Array} funcArray - array of functions to pass input through
// Output: {Number} - final output of final function
// ///////////////////////////////////example//////////////////////////////////////////
// // add code here////
// function flow(input, funcArray){

// }
// // To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
//  function add7(num) { return num + 7; }
//  function modulo4(num) { return num % 4; }
//  function subtract10(num) { return num - 10; }
//  const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
//  console.log(flow(2, arrayOfFunctions)); // -> -7


//////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// For example, if the input is 'g', then the output should be 'ggggg'.
//////////////////////////////example////////////////////////////
// Input: {String} char
// Output: {String}
////////////////////////////example///////////////////////////////

// console.log('Hello, world!');
// // // add code here////
// function repeater(char,num=0,output=""){

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
// // // add code here////
// function factorial(num, product=1){

// }


// // // To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1




////////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
// Get the length of an array using recursion without accessing its length property.
// ///////////////////////////////////example//////////////////////////////////////////
// Input: {Array} array - array whose length is sought
// Output: {Number}
// ///////////////////////////////////example//////////////////////////////////////////
// // // add code here////

// function getLength(array, length=0){

// }

// // // To check if you've completed the challenge, uncomment these console.logs!
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
// // ///////////////////////////////////example//////////////////////////////////////////
// // // add code here////
// function pow(base, exponent){

// }

// // // // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(pow(2, 4)); // -> 16
// // console.log(pow(3, 5)); // -> 243


////////////////////////////////////////// Challenge: flow////////////////////////////////////////////////////////
// Write a function that takes an array of functions and a number that will be piped through all those functions. 
// The input number passes through the first function, whose output is passed as input to the second function, 
// whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.
// ///////////////////////////////////example//////////////////////////////////////////
// Input 1: {Number} input - number flowing through all functions
// Input 2: {Array} funcArray - array of functions to pass input through
// Output: {Number} - final output of final function
// ///////////////////////////////////example//////////////////////////////////////////
// add code here////
// function flow(input, funcArray){

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

// }


// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60



//////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
// write a function called recursiveRange which accepts a number and up all the numbers from 0 to the number passed to the function

// function recursiveRange(x){
   
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

//   }


// console.log(fib(4))// 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465


// //////////////////////////////////////////////////////////////////////reverse///////////////////////////////////////////////////////////////////
// //write a function called reverse which accepts a string and returns a new string in reverse

// function reverse(str){

//   }
  
//   console.log(reverse('awesome')) // 'emosewa'
//   console.log(reverse('rithmschool')) // 'loohcsmhtir'



// //////////////////////////////////////////////////////////////////////isPalindrome/////////////////////////////////////////////////////////
// write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same foward and backward)
// otherwise returns false.



// function isPalindrome(str){

//   }


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

