// // given an array, write a function, remove all the duplicates from the array,keep unique values

// const removeDup=(array)=>{
//   // [].concat(array)
// //   sort the array
// //   declare varaible and assign as empty array
// //   iterate through the array w/ for...loop
// 	//   initate a cond stmtm where, if the previous element === current elmeent....
// 		//   push the the element into the empty array
// 		//   increment the   i 
// //   return updated array 
//   // array.includes(2);
  
//   //////////////carlos recommeneded solution
//   let result = []
// const obj = {};
// //   iterate through the array w/ for...of loop
//   for(let el of array){
// 	//   initae a cond stmt where... i will check to see if the key/value pair property exists
//     if(!obj.hasOwnProperty(el)){
//       result.push(el)
// 	//       update/reassign key value pair as value of 1
//       obj[el]=1
//     }
    
//   }
// 		//   return result
//   return result
	 
// //if (!obj.hasOwnProperty(array[i]))
// // then add array[i] to our new array
// //     obj[array[i]] = 1;
  
// }



// // console.log(removeDup([1,1,2,2,3,3]))  //[1,2,3]
// // console.log(removeDup([1,5,2,2,6,7,7])) // [1,2,5,6,7]

// // write a function, given an array, 
// // obj = {1:2, 2:2, 3:1}
// const unique = arr =>{
// //   decalre a varailbe and assign an empty object
//   let obj = {}
// //   iterate throught the array w/ for...of loop
//   for(let el of arr){
// 	//   intiate a cond stmt where if the key/value pair exists....
//     if(obj.hasOwnProperty(el)){
// 		//   increment the key/value pair
//       obj[el]++
// 	//   othwerise.... key/value pair doesnt exist
//     } else {
// 		//   create the key/value pair and assign it as a value of 1
//       obj[el] = 1
      
//     }
    
//   }
// //   return the obj
//   // /utilizing an object constructor, and sort throgh the values and return the unique key
//   return Object.keys(obj).reduce((acc,curr)=> obj[acc]<obj[curr] ? acc : curr)
  
// }

// console.log(unique([0,2,3,0,2]))//= 3
// console.log(unique([1,2,2,4,1,2]))//= 4
//tacocat
//lt rt

// write a function, to determine if a string is a palindrome


// Write a function called isOddString which returns true if the sum of each character's position in the alphabet is odd. For example, 'a' is in the first position, 'b' is in the second position, and so on. If the sum is even, return false.\par
// Examples:\par
// isOddString('a') // true\par
// isOddString('ac') // false
//'a'.chatCodeAt() // 55 
// a.CharcodeAt - 54; //1

// const isOddString = (str) =>{
// //   decalre varaible and assign as 0
//   const OFFSET = 96;
//   let output = 0
// //   iterate through str w/for...of loop
//   for(let i=0;i<str.length;i++){
// 	//   add to the cumulative total w/ charCodAt - 54
//     output+=str.charCodeAt(i)-OFFSET;
    
//   }
// //   return true if value is odd and false if even
//   return output%2!==0 ? true:false
  
// }

// console.log(isOddString('a')) // true\par
// console.log(isOddString('ac')) // false
// console.log(isOddString('b')) //false
// console.log(isOddString('ab')) // false



// Write a function called forEach, which accepts an array and a callback. forEach should iterate through the array and run a callback function for each value in the array. The callback should accept as its first argument the current array element, and as its second element the current array index. Also, forEach should always return undefined.\par
// Do not use the built in forEach function, the tests will fail!\par
// Examples:\par
// var emptyArr = []\par
// forEach([1,2,3,4], function(val)\{\par
// emptyArr.push(val*10);\par
// \});\par
// // emptyArr; // [10,20,30,40]\par
// const forEach=(arr,callback)=>{
// //   decalre a variable and assign as value of 0 for output
//   let output = []
// //   iterate through  the array w/ for..of loop
//   for(let i=0;i<arr.length;i++){
// 	//   update/reassign the output variable w/invoked callback value of the current element
//     output.push(callback(arr[i],i))

//   }
// //   return output
//   return output
// }


// function timesTen(el, idx){
//   return el * 10;
// }

// const array = [1,2,3,4]

// console.log(forEach(array,timesTen))



// Given a collection of distinct integers, write a function getPermutations to return all possible permutations.
// Input:[1, 2, 3]
// Output:[
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

//[3] 
//[2,3] => [2,3], [3,2]

// function getPermutations(nums) {
//   debugger
// //   declare variable and assign as empty array
//   let result = [];
// //   base:
//   if(nums.length ===0){return []}
//   if(nums.length ===1){return [nums]}
// //iterate through array w/ for loop
//   for(let i=0; i<nums.length;i++){
//     let currentNum = nums[i]
//     let remainingNums = nums.slice(0,i).concat(nums.slice(i+1))
//     let remaiingNumsPermuted = getPermutations(remainingNums)
// 	//     iterate thorough remaining permutated
//     for(let j=0; j<remaiingNumsPermuted.length;j++){
//       let permutedArray = [currentNum].concat(remaiingNumsPermuted[j])
//       result.push(permutedArray)
//     }
//   }
//   return result
  

// }

// console.log(getPermutations([1, 2, 3,4]).length) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]

// const arr = [1,2,3]
// // i=0
// console.log(arr.slice(0,0).concat(arr.slice(1)))
// // i=1
// console.log('remaning Nums:',arr.slice(0,1).concat(arr.slice(2)))



// Growing potion: "A"
// Shrinking potion: "B"
// If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
// If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
// Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.



// const subtractOne = num =>  num-1
// const addOne = num =>  num+1

// // Example:
// // */
// // input: str with nums and letters
// // output: str with only nums
// const usePotions = str => {
//   let conv = str.split('')
//   for(let i=0;i<conv.length;i++){
//     if(conv[i]==='A'){
//       conv.splice(i,1)
//       conv.splice(i-1,1,addOne(parseInt(conv[i-1])))
//     } else if (conv[i]==='B'){
//       conv.splice(i,1)
//       conv.splice(i-1,1,subtractOne(parseInt(conv[i-1])))
//     }
//   }
//   return conv.join('')
// }

// console.log(usePotions("3A70B51")) //➞ "47751" 3 grows to 4, 8 shrinks to 7
// console.log(usePotions("9990B")) //➞ "9998"
// console.log(usePotions("9A123")) //➞ "10123"
// console.log(usePotions("567")) //➞ "567"



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



