// write a function called aperature, 
//Write a function called aperture which accepts a number and an array and returns a new array. The new array should be composed of subarrays the size of the number with consecutive elements. If the number passed to this function is greater than the length of the array or less than 1, an empty array is returned.\par
//Examples:
//aperture(0, [1, 2, 3, 4, 5]); // []\par
//aperature (2, [1,2,3,4]); // [[1,2],[3,4]]


// const aperature =(num,arr)=>{
// //   declare a varaible and assign as an empty array
//   let result = []
// //   declare a varialbe and assign as a 0;  use this as a incrementer
//   let i=0
// //   intiate a cond stamten...where if num>arr.length or num ====0
//   if(num>arr.length || num <1 ){
// 	//   return reuslt
//     return result
//   }
// //   iterate through the array w/ a while loop
//   while(i<arr.length){
// 	//   push the sliced value of the array
//     result.push(arr.slice(i,i+num))
// 	//   increment the incrementor based off of the value of num
//     i+=num
    
//   }
// //   return result
//   return result
  
  
  
// }

// console.log(aperature(0,[1,2,3,4,5]))
// console.log(aperature(6,[1,2,3,4,5]))
// console.log(aperature(2,[1,2,3,4,5,6]))
// console.log(aperature(1,[1,2,3,4,5,6]))
// console.log(aperature(-1,[1,2,3,4,5,6]))



// write a function acalled scheduleer, that 
//[ [1,3], [4,6] ], [ [3-5] ], [4,5] //false
// [[1-2], [5,6]], [[1,2],[4-5]], [3-4] //true

// we want to create a scheudler where we have no conflicting times
// 

// const scheduler =(perA, perB,meetArr) =>{
//   if()
//   for(let )
// }
// const proposedStartTime = meetArr[0];
// const proposedEndTime = meetArr[1];
// const currentStartTime = perA[0][0];
// const currentEndTime = perA[0][1];
// (currentStartTime < proposedStartTime  && proposedStartTime < currentEndTime) || (1 < 4 && 4 < 2)
// ([1,2], [3,4])
  
// console.log(scheduler([ [1,3], [4,6] ], [ [3,5] ], [4,5]))  // false
// console.log(scheduler([ [1,2], [5,6] ], [ [1,2],[4,5]], [3,4]))  // true




// Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
// Non-bracket characters should not affect the logic.Make your solution work for all types of brackets: () [] {}




//"()"  ( [ { 
//array = ['(']
const balancedBrackets = str =>{
    let result =[]
    let obj = {
      '}':'{',
      ')':'(',
      ']':'['
    }
    for(let el of str){
      if(el === '(' || el === '{' || el === '[' ){
        result.push(el)
      }
      if(obj[el]){
        let current = result.pop(); 
        if (obj[el] !== current) { 
          return false;
        }
      }
    }
    return result.length === 0;
    
  }
  // Examples:
  console.log(balancedBrackets(" { }    n"))                           // -> true
  console.log(balancedBrackets("hi][  "))                              // -> false
  console.log(balancedBrackets("[{random words and such}]"))           // -> true
  console.log(balancedBrackets("[The]Rains(In){Spain}"))               // -> true
  console.log(balancedBrackets("[({}Call me Ishmael)]"))               // -> true
  console.log(balancedBrackets("[(]{)}"))                              // -> false
  console.log(balancedBrackets(" gibberish { howdy: partner() }"))     // -> true
  console.log(balancedBrackets(" isThisAFunction?() { notReally())"))  // -> false
  
  
  
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
  //   let result = []
  //   let obj = {
  //     '}':'{',
  //     ')':'(',
  //     ']':'['
  //   }
  //   debugger
  //   for (let key of s){
  //     if(!obj[key]){
  //       result.push(key)
  //     } else if (result.pop()!==obj[key]){
  //       return false
  //     }
  //   }
  //   return result.length===0
  // }
  
  // console.log(isValid("()")) //true
  // console.log(isValid("()[]{}")) // true
  // console.log(isValid("(]")) // false
  // console.log(isValid("([)]")) // false
  // console.log(isValid("{[]}")) // true
  
  
  