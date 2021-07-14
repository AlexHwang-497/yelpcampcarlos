//Create a function 'multiplyNumbers' that takes a number as an argument. 'multiplyNumbers' 
// should multiply all the numbers from 1 to the number you passed to the function.  
// For example, if the input is 4 then your function should return 24 because 1 * 2 * 3 * 4 = 24.
// function multiplyNumbers(num){
//     //declare a variable called result and assign it a value of 0
//     let result = 1
//     // iterate through the number utilizing a for loop
//     for(let i=num; i>=1;i--){
//       //update our result which will the accumulated values multiplied by the current element  /// we can also so mentiion as re-assigning
//       result = i*result ;
      
//     }
    
//     //return our result;  
//     return result;
//   }
  
//   console.log(multiplyNumbers(3))
  
  
  /*
  Create a function "isOdd" that takes a number as an argument.
  "isOdd" should return a true if the number passed to it is odd.
  For example, if the input is 45 then your function should return true and if the input is 472 it should return false.
  */
  // function isOdd(n){
  //   //intialzie conditional if statement; where if the number is divisble by 2 then it is even and we return false
  //   if(n%2 ===0) return false;
      
  //   //initilaize a contional else statement; where if the number is not divisble by 2, the it is an odd number and reutrn true
  //   // } else {
  //     return true;
  //   // }
    
  // }
  
  // console.log(isOdd(472))
  // console.log(isOdd(45))
  
  
  /*
  Create a function "isGreaterThan100" that takes a number as an argument.
  "isGreaterThan100" should return a true if the number passed to it is greater than 100.
  For example, if the input is 120 then your function should return true and if the input is -1 it should return false.
  */
  // function isGreaterThan100(n){
  //   // initiate a if conditional statmeent;  
  //   if(n>100){return true}
  //   //initiate a else conditoanl stamenet  ////probably don't need the else statment
  //   else{return false};
    
  // }
  
  // console.log(isGreaterThan100(120))
  // console.log(isGreaterThan100(-1))
  // console.log(isGreaterThan100(100))
  
  
  /*
  Create a function "isPrime" that takes a number as an argument.
  "isPrime" should return a true if the number passed to it is a prime number.
  For example, if the input is 7 then your function should return true and if the input is 44 it should return false.
  
  -- A prime number is defined as only being able to be divided by itself or 1
  -- think about how you can dynamically test if a number is prime
  */
 
  // function isPrime(n){
  //   if(n<2){
  //     return false
  //   }

  //   for(let i=2; i<n; i++){
  //     if(n%i === 0){
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  
  // console.log(isPrime(7))
  // console.log(isPrime(6))
  // console.log(isPrime(44))
  // console.log(isPrime(5))



  function findShortestElement(arr) {
    // your code here
    let result =[];
    for(let str of arr){
        result.push(str.length)
    }
    return result.sort((a,b)=>a-b)[0];
  }
  
  var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
  
  
  
  
  