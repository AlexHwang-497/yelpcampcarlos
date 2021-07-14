// Type JavaScript here and click "Run Code" or press Ctrl + s




// Challenge 1
function countdown(n) {
    //   base: if n === 0; return output
          if(n === 0){ return 0}
    //   console.log the n?
        console.log(n)
      let newN = n-1
    //   recursive function
      return countdown(newN)
    
    }
    
    // To check if you've completed it, uncomment these console.logs!
    // countdown(5)
    // countdown(10)
    
    
    // Challenge 2
    
    // input:array of integers
    // output: a sum of the input arrays
    
    // we are declaring our function body/skeleton w/ a single parmaeter----'passed in'
    function sum(array,result =0) {
    
      // base: if the length of our array=0, then we return 0
      if(array.length === 0) {return result}
      
     
      // slice array
      let newArray = array.slice(1)
      
    //   update result
      result+=array[0] 
      
      //recursive function
      return sum(newArray,result)
      
      
    }
    
    // uncomment these to check your work
    //  console.log(sum([1,1,1])); // -> returns 3      ///passing in an array w/ all ones
    //  console.log(sum([1,2,3,4,5,6])); // -> returns 21  // passsing in an  array of .....
    //  console.log(sum([2,4,6]))  ///passin in an arrray of 246.... and expect to get a value of 12
    
    
    
    // input:string
    // output: true or false
    
    // Challenge 3
    function palindrome(str) {
      
     //declare a new variable and assign it the value of the input string without punctuations
      
      
    // //   base: if the string's length === 1; return true
    //   if(str.length ===1) { return true}
    // //   base: if the strings length ===2; we want to see if letter in index 0 vs index 1 are the same
    //   if(str.length === 2){ return str[0] === str[1]}
    // //   base: if str[0] strictly equale to str.slice(-1) return the recuresive function
    //   if(str[0] === str.slice(-1)){ return palindrome(str.slice(1,-1))}
    //   // return false
    //   
      str = str.replace(/[, ' ' -]/g, "").toLowerCase();
      // str=str.replace(/[^A-Za-z]/g,'').toLowerCase()
      if (str.length === 1) return true;
      if (str.length === 2) return str[0] === str[1];
      if (str[0] === str.slice(-1)) return palindrome(str.slice(1, -1));
      return false;
      
      
    }
    // palindrome("Anne, I vote more cars race Rome-to-Vienna")
    console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
    console.log(palindrome("llama mall")); //-> true
    console.log(palindrome("jmoney")); //-> false
    
    
    // Challenge 4
    
    function isPrime(num) {
    
    }
    
    // console.log(isPrime(1)); //-> false
    // console.log(isPrime(2)); //-> true
    // console.log(isPrime(3)); //-> true
    // console.log(isPrime(4)); //-> false
    
    
    //Challenge 5
    function pathFinder(obj, arr) {
    
    }
    
    // const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
    // const arr = ["first", "second", "third"];
    // console.log(pathFinder(obj, arr));   //-> "finish"
    
    
    //Challenge 6
    function flattenRecursively(arr) {
    
    }
    
    // console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
    // console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
    
    
    //Challenge 7
    function findInOrderedSet(arr, target) {
    
    }
    
    // const nums = [1, 4, 6, 7, 9, 17, 45];
    // console.log(findInOrderedSet(nums, 4));  //-> true
    // console.log(findInOrderedSet(nums, 2));  //-> false
    
    
    //Challenge 8
    function countWaysToReachNthStair(n) {
    
    }
    
    // console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
    // console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
    // console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
    
    
    //Challenge 9
    function getPermutations(arr) {
    
    }
    
    // console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
    // console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
    
    
    //Challenge 10
    function getRangeBetween(x, y) {
    
    }
    
    // console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
    // console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
    