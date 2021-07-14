//1.  ////////////////////  ////////////////////////////////////////////////////// CHALLENGE 19

// Inspect the commented out test cases carefully if you need help to understand these instructions.

// Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), 
// and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
// On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

// On the SECOND invocation of the PLAYER function, it will return either:

// the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
// the string 'bust' if that sum is over 21.

// If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

// the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
// the string 'bust' if the new sum is over 21.

// And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
// You may assume that the given array is long enough to give a 'bust' before running out of numbers.

// BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.

const blackJack = decks => {
  //   declare empty variable and assign value of 0
    let dealerCount = 0
      //   create new function w/ a two parameters
    function dealer(cardA,cardB){
          //   declare empty varaible and assign value of 0
      let playerCount = 0
          //	declare empty variable and assign value of two cards
      let total = cardA + cardB
              //   create new function
      function player(){
                  //  initiate cond stmt where if total = bust....
        if(total === 'bust'){
                      //  return 'you are done'
          return 'you are done'
        }
          //   increment dealer
        dealerCount++
                  //   increment player
        playerCount++
                  //   inittiate cond stmt, where if player count = 1 then.....
        if(playerCount===1){
                      //   return total
          return total
        }
                  //   update/reasssing total as 
        total+=decks[dealerCount-2]
                  //         initiate cond stmt where if total > 21....
        if(total>21){
                  //         update/reassign total = 'bust'
          total = 'bust'
                  //         decremetn dealer
          dealerCount-- 
        }
                  //   return total
        return total    
      }
  //     return player
      return player
    
    }
  //   return dealer
    return dealer
  }
  
    
    // /*** Uncomment these to check your work! ***/
    
    // /*** DEALER ***/
    // write the function for the array[2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
  
  // const playerHands = blackJack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11])
    
  //   // /*** PLAYER 1 ***/
  //   const playerOne = playerHands(4, 5);
  //   console.log(playerOne())// // => should log 9
  //   console.log(playerOne())// // => should log 11
  //   console.log(playerOne())// // => should log 17
  //   console.log(playerOne())// // => should log 18
  //   console.log(playerOne())// // => should log 'bust'
  //   console.log(playerOne())// // => should log 'you are done!'
  //   console.log(playerOne())// // => should log 'you are done!'
    
  //   // /*** BELOW LINES ARE FOR THE BONUS ***/
    
  //   // /*** PLAYER 2 ***/
  //   const playerTwo = playerHands(2, 2);
  //   console.log(playerTwo())// // => should log 4
  //   console.log(playerTwo())// // => should log 15
  //   console.log(playerTwo())// // => should log 19
  //   console.log(playerTwo())// // => should log 'bust'
  //   console.log(playerTwo())// // => should log 'you are done!
  //   console.log(playerTwo())// // => should log 'you are done!
    
  //   // /*** PLAYER 3 ***/
  //   const playerThree = playerHands(3, 7);
  //   console.log(playerThree())//  // => should log 10
  //   console.log(playerThree())//  // => should log 13
  //   console.log(playerThree())//  // => should log 'bust'
  //   console.log(playerThree())//  // => should log 'you are done!
  //   console.log(playerThree())//  // => should log 'you are done!
  
  
  
  
  // //2.  ///////////////////////////////////////////////////Challenge 5
  // // Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
  // // const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
  // // const arr = ["first","second","third"];
  // // pathFinder(obj,arr);   //-> "finish"
  
  // const pathFinder = (objects,array,index=0) =>{
  // // base:  initiate cond stmt where, if array.length === 0, return key value pair
  //   if(array.length===0){ return objects[array[0]]}
  // //   decalre a new variable and assign as sliced arrray
  //   let newArr = array.slice(1)
  // //   initate cond stmtt where, if key/value pair is a string, return key value pair
  //   if(typeof objects[array[0]]==='string'){
  // //     
  //     return objects[array[0]]
  //   }
  // //   reccurse function
  //   return pathFinder(objects[array[0]],newArr)
    
    
    
  // }
  
  
  // const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
  // const arr = ["first", "second", "third"];
  // console.log(pathFinder(obj, arr));   //-> "finish"
  
  
  
  
  // //3.     /////////////////////////////////////////////////////////////////movie selector/////////////////////////////////////////////////////
  // // Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). 
  // // Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. 
  // // The titles should be all uppercase strings.
  // const movieSelector = arr =>{
  // //   utilzie map method on array
  //   return arr.map(el=> {
  // 	//   return new key/value pair
  //     return {
  // 			// capitalize title key/value pair
  //       'title': el.title.toUpperCase(),
  // 		//       score
  //       'score': el.score
        
  //     }
  //   })
  // // utlize filter method
  // 	//   return score value > 5
  //   .filter(el=> el.score>5)
  // //   utilize reduce method
  //   .reduce((acc,curr)=> {
  // 	//   push title into accumulator
  //     acc.push(curr.title)
  // 	//   return accumulator
  //     return acc
      
  //   },[])
  // }
  
  
  // const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
  // console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]
  
  
  
  
  
  // //4.  ////////////////////////////////////////////////////////////////// //CHALLENGE 18
  
  // // Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). 
  // // The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). 
  // // Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space).
  // //  However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space).
  // //  If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.
  
  
  // // /*** Uncomment these to check your work! ***/
  // const makeHistory = limit =>{
  // //   declare variable and assign as empty array
  //   let result = []
  // //   return and create new function/w single parameter
  //   return function(str){
  // 	//   initate cond stmt if str === undo....
  //     if(str==='undo'){
  // 		//   iintitate a cond stmt where if array.length is empty/undefined....
  //       if(!result.length){
  // 			//   return 'nothing to undo'
  //         return 'nothing to undo'
  //       }
  // 		// decalre new variable as for strTo Undo and assign as value of last remaiing str in array avaialble
  //       let strUndo = result[result.length-1]
  // 		//   slice array
  //       result = result.slice(0,-1)
  // 		//   return w/ strToundo 'undone'
  //       return strUndo + ' undone'
  //     }
  // 	//   update/reassign array with sliced  array
  //     result = [...result,str].slice(limit===result.length ? limit-1:0)
  // 	//   return str done
  //     return str + ' done'
      
  //   }
    
  // }
  
  // // // write the callback function w/ a limit of 2
  // const historyMaking = makeHistory(2)
  
  // console.log(historyMaking('jump'))// // // => should log 'jump done'
  // console.log(historyMaking('undo'))// //  // => should log 'jump undone'
  // console.log(historyMaking('walk'))// // // => should log 'walk done'
  // console.log(historyMaking('code'))// // // => should log 'code done'
  // console.log(historyMaking('pose'))// // // => should log 'pose done'
  // console.log(historyMaking('undo'))// //  // => should log 'pose undone'
  // console.log(historyMaking('undo'))// //  // => should log 'code undone'
  // console.log(historyMaking('undo'))// //  // => should log 'nothing to undo'
  
  
  // //5.  /////////////////////////////////////arrayChunking//////////////////////////////////////////////////////////////////////////////////
  // // --- Directions
  // // Given an array and chunk size, divide the array into many subarrays
  // // where each subarray is of length size
  // // --- Examples
  // // chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
  // // chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
  // // chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
  // // chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
  // // chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
  // ////////////////solution using loop
  // 
  // const chunk = (arr,size)=>{
  // // //   declare variable and assign as empty array
  // //   let result = []
  // // //   iterate through array with for...of loop
  // //   for(let el of arr){
  // // 	//   declare new variable and assign as value of last index element of array
  // //     let last = result[result.length-1]
  // // 	//   intite cond stmt where if last is falsy or last.length ==== size....
  // //     if(!last || last.length === size){
  // // 		//   push nested array into result
  // //       result.push([el])
  // // 	//   otherswise.....
  // //     } else {
  // // 		//   push element into last
  // //       last.push(el) 
  // //     }
  // //   }
  // // //   return result
  // //   return result
  // // }
  
  // //   ///////alternate solution using slice method////////////
  // //   declare variable and assign as empty arrray
  //   let result = []
  // //   declare variable and assign as 0
  //   let index = 0
  // //   iterate throug array w/ while loop
  //   while(index<arr.length){
  // 	//   push sliced array into reuslt
  //     result.push(arr.slice(index,index+size))
  // 	//   increment index by value of size
  //     index+=size
      
  //   }
  // //   return reuslt
  //   return result
    
  // }
    
    
  //   console.log(chunk([1, 2, 3, 4], 2)) //--> [[ 1, 2], [3, 4]] 
  //   console.log(chunk([1, 2, 3, 4, 5], 2))// --> [[ 1, 2], [3, 4], [5]])
  //   console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]])
  //   console.log(chunk([1, 2, 3, 4, 5], 4))// --> [[ 1, 2, 3, 4], [5]])
  //   console.log(chunk([1, 2, 3, 4, 5], 10))// --> [[ 1, 2, 3, 4, 5]])
    
  
  
              
  // //6.  //////////////////////////////////////////////////Challenge 6
  // // Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.
  
  //  {
  //   const flattenRecursively = (arr,result = []) =>{
  // //     base: if arr.length === 0; reutrn result
  //     if(arr.length ===0){return result}
  // //     decalre variable and assign as sliced array
  //     let newArr = arr.slice(1)
  // //     intiate if stmtm, where if arr[0] is a array......
  //     if(Array.isArray(arr[0])){
  // 	//     recurse the function
  //       return flattenRecursively(arr[0].concat(newArr),result)
  //     }
  // //     push arr[0] into result
  //     result.push(arr[0])
  // //     recurse function
  //     return flattenRecursively(newArr,result)
      
  //   }
  // // }
  // console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
  // console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
  
  
  // //7.  //////////////////////////////////////////////////////////////////////Challenge 9
  //     //   Given a collection of distinct integers, write a function getPermutations to return all possible permutations.
  //     //   Input:[1, 2, 3]
  //     //   Output:[
  //     //     [1,2,3],
  //     //     [1,3,2],
  //     //     [2,1,3],
  //     //     [2,3,1],
  //     //     [3,1,2],
  //     //     [3,2,1]
  //     //   ]
  
  
  
  
  //      {
  
  //     }
      
  //     // console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
  //     // console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
  
  
  
  // //8. ////////////////////////////////////////////////////////////////// // CHALLENGE 16
  // // Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). 
  // // When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). 
  // // When the returned function is invoked with no arguments, the current average is outputted.
  // //  If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.
  
  
  // // //  {
    
  // const average = () => {
  // //   decalre varialbe and assgn as 0
  //   let count = 0 
  // //   decalre varialbe and assgn as 0
  //   let sum = 0
  // //   create new function w/  single parameter
  //   return function(num){
  // 	//   intiatte cond stmtm, where if num is falsy.....
  //     if(!num){
  // 		//   return sum/count====0..... 0 if true and sum/count if falsy
  //       return sum/count===0 ? 0 : sum/count
        
  //     }
  // //   increment counter
  //     count++
  // //   update sum total
  //     sum+=num
  // //     return average
  //     return sum/count 
  //   }
  // }
    
  
  
  // // // // /*** Uncomment these to check your work! ***/
  // // // /////////////////write the correct console logs
  
  // // // write the callback function
  // const findAvg = average()
  
  // console.log(findAvg(0))//  // => should log 0
  // console.log(findAvg(4))//  // => should log 4
  // console.log(findAvg(8))//  // => should log 6
  // console.log(findAvg())// // => should log 6
  // console.log(findAvg(12))//  // => should log 8
  // console.log(findAvg())// // => should log 8
  
  
  
  
  
  
              
  // //9.  ////////////////////////////////////// Challenge 4
  // // Write a recursive function isPrime that determines if a number is prime and returns true if it is.
  //prime number can only have two factors; itself and and a number
  // numbers have more then two factors are composite numbers
  
  //////////////////////////////////////
  //  0 is not a prime number; false
  // 1 is not a prime number,  false; because you can devide one by itself and
  // 2 is a prime number because, you can devide by one and two;  hence it only has two factors
  // 3 is a prime number becasue of only 1 and 3
  // 4 is a not a prime number; you can divide by 1,2,4
  //if you get a 0 remainer, it is not a prime number
  /////////////////////////////////////////////////
  
  // hence always reemmber 0 and 1 are not prime; 2 is prime and all other even number are not prime 
  // //  {
  // const isPrime = (num,div=3) =>{
  //   debugger
  // //   base: if num ===2; return true
  //   if(num===2){return true}
  // //   base: if num <2 || num%2 ===0; return false
  //   if(num<2 || num%2===0){return false}
  // //   /////
  //   if(div*div>num){return true}
  // //   base if num%div===0 return false
  //   if(num%div===0){return false}
  // //   increment div
  //   let newDiv = div+1
  // //   recurse function
  //   return isPrime(num,newDiv)
  // //   
  // }
  
  // // }
  
  // console.log(isPrime(1)); //-> false
  // console.log(isPrime(2)); //-> true
  // console.log(isPrime(3)); //-> true
  // console.log(isPrime(4)); //-> false
  
  
  
  //  //10.   //////////////////////////////////////////////////////////////////////////////////////
  
  
  // //  {
  // const poyoyotion = str =>{
  // //   decalre variable and assign converted string into array
  //   let convert = str.split('')
  // //   iterate through array/str w/ for loop
  //   for(let i=0; i<convert.length;i++){
  // //     initiate cond stmt wher if current element = A....
  //     if(convert[i]==='A'){
  // //     splice and delete current eleement
  //       convert.splice(i,1)
  // //     splice previuos element and insert value of prev element + 1
  //       convert.splice(i-1,1,parseInt(convert[i-1])+1)
        
  // //     other wise, if cureent element = B....
  //     } else if(convert[i]==='B'){
  // //     splice and delete current lemenet
  //       convert.splice(i,1)
  // //     splice and delete current element and replace with current element value -1
  //       convert.splice(i,1,parseInt(convert[i])-1)
        
  //     }
  //   }
  // //   return and convert array back to string
  //   return convert.join('')
      
     
  // }
  
  // // };
  // console.log(poyoyotion('432A452B2')) ///4334521
  // console.log(poyoyotion('7545B4B1')) // 754530
  
  
  
  // //11.  ///////////////////////////////////////////// // CHALLENGE 11
  // // Create a function dateStamp that accepts a function and returns a function. 
  // // The returned function will accept however many arguments the passed-in function accepts, 
  // // and return an object with a date key that contains a timestamp with the time of invocation, 
  // // and an output key that contains the result from invoking the passed-in function.
  // //  HINT: You may need to research how to access information on Date objects.
  
  // //  {
  // const dateStamp = func => {
  // //   decalre new function w/a passed in parameter
  //   return function(num){
  // 	//   return new and create new object
  //    return {
  // 		//   update key/value pair of date
  //     'date': Date.now(),
  // 		//   udpate key value pair w/ method/clalback
  //       'output': func(num)
  //   }
      
  //   }
  // }
  
  
  
  
  // // // // /*** Uncomment these to check your work! ***/
  // // // assign the function aka  ///dateStamp(n => n * 2);
  // const stampDate =dateStamp(n=>n*2)
  
  // //  // => should log { date: (today's date), output: 8 }
  // console.log(stampDate(4))
  // //  // => should log { date: (today's date), output: 12 }
  // console.log(stampDate(6))
  
  // //12. ////////////////////////////////////////////// // CHALLENGE 12
  // // // Create a function censor that accepts no arguments. 
  // // censor will return a function that will accept either two strings, or one string. 
  // // // When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
  // // When one string is given, the returned function will return the same string,
  // //  except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
  
  
  // //  {
  // const censor = () =>{
  // //   declare variable and assign as empty object
  //   let obj = {}
  // //   create new function w/two parameters
  // return function(strOne,strTwo){
  // 	//   intiate cond stmt where, is strTwo doesn't exist...
  //   if(!strTwo){
  // 		//   iterate through object w/for...in loop
  //     for(let key in obj){
  // 			//   replace strOne w/ value of key value pair aka strTwo
  //       strOne = strOne.replace(key,obj[key])
  // 		//   return strOne
  //     }
  //     return strOne
      
  // 	//  otherwise....
  //   } else {
  // 	//   update key/value pair
  //   obj[strOne] = strTwo
  // 	//   return key/value piars
  //   return obj
      
  //   }
    
  // }
    
  
  
  // }
  
  // // // // /*** Uncomment these to check your work! ***/
  // // // // write the necessary function for the return value
  // const converter = censor()
  
  
  // console.log(converter('dogs', 'cats'));
  // console.log(converter('quick', 'slow'));
  // console.log(converter('The quick, brown fox jumps over the lazy dogs.'))
  
  
  // //13.  ////////////////////////////////////////////////////////////////////nestedEvenSum/////////////////////////////////////////////////////////
  
  // // return the sum of all even numbers in an object which may contain nested objects;
  
  //  {
  // const nestedEvenSum = (obj,sum=0) =>{
  // //   iterate through object w/for...in loop
  //   for(let key in obj){
  // 	//base: if current key/value  is a string....return obj
  //     if(typeof obj[key]==='object'){
  // 		//   recurse function/update sum
  //       sum+=nestedEvenSum(obj[key])
  // 	//  base/else if: object === object and is even number....
  //     } else if(typeof obj[key]==='number' && obj[key]%2===0){
  // 		//    add key-value pair to sum
  //       sum+=obj[key]
  //     }
      
  //   }
  // //   return sum
  //   return sum
  // }
  
  // // }
    
    
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
  
  // //14.  //////////////////////////////////////////////prime/////////////////////////////////////////////////
  
  // // ) {
  // //   debugger
  
  // // //num divide it by an incrementing number
  // // //base: 
  // //   if(num===1){return false}
  // //   if(num<3){
  // //     return true}
   
    
  // //   if((num/2)<div){return true}
  // //   else if(num%div===0){
  // //     return false
  // //   } else{
  // //     return isPrime(num,div+1)
  // //   }
    
  //   /// if at any time it is divisible by that incrementing number, return false
  //   //// if the incrementing number is == half of num, return true
  //   /////if there is a remainder, return isPrime and incrementing the increment number
    
    
    
  //   // //   base: wehre if element is less then 2 or doesn't have a remainder then return false
  // //       if(num === 2) return true;
  // //       if(num < 2 || num % 2 === 0)  return false;
  // //       // if(div * div > num) return true;
  // //       if(num % div === 0) return false;
  // //       return isPrime(num, div + 1);
  // // }
  
  // // console.log(isPrime(100))
  // // console.log(isPrime(17))
  
  // // console.log(isPrime(1)); //-> false
  // // console.log(isPrime(2)); //-> true
  // // console.log(isPrime(3)); //-> true
  // // console.log(isPrime(4)); //-> false
  
  
  
  
  // //15.  ////////////////////////////////////////// // CHALLENGE 13
  // // There's no such thing as private properties on a JavaScript object! But, maybe there are? 
  // // Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. 
  // // getSecret() which returns the secret setSecret() which sets the secret
  
  // //  {
  // function createSecretHolder(secret){
  //   let num = secret
  //   let obj = {
  //     getSecret(){
  //       console.log(num)
  //     },
  //     setSecret(n){
  //       num = n
  //       console.log('blank')
  //     }
      
  //   }
  //   return obj
    
  // }
  
  // // // }
  
  // // // /*** Uncomment these to check your work! ***/
  // // // // write the function///// start with secret as 5
  // let obj = createSecretHolder(5)
  // obj.getSecret()// // //  // => returns 5
  // obj.setSecret(2)// // //  // => shoule return blank
  // obj.getSecret()// // //  // => returns 2
  
  
  // //16.  //////////////////////////////////////// // CHALLENGE 14
  // // Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.
  
  // // //  {
  //   const callTimes = () =>{
  // //     declare variable and assign as 0
  //     let count = 0
  // //     declare new function
  //     return function(){
  // //     increment count
  //       count++
  // //     console log count
  //       console.log(count)
        
  //     }
      
  //   }
  
    
  // // // // }
  
  // // // // /*** Uncomment these to check your work! ***/
  // // //assign the functinos ;
  //   const calledFirst = callTimes()
  //   const calledSecond = callTimes()
  
  // calledFirst()// // => 1
  // calledFirst()//  // => 2
  // calledSecond()//  // => 1
  // calledSecond()//  // => 2
  
  
  
  
  
  
  // //16. ////////////////////////////////////// Challenge: flow
  // // Write a function that takes an array of functions and a number that will be piped through all those functions. 
  // // The input number passes through the first function, whose output is passed as input to the second function, 
  // // whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.
  // // ///////////////////////////////////example//////////////////////////////////////////
  // // Input 1: {Number} input - number flowing through all functions
  // // Input 2: {Array} funcArray - array of functions to pass input through
  // // Output: {Number} - final output of final function
  // // ///////////////////////////////////example//////////////////////////////////////////
  // // // add code here////
  // // // {
  // const flow = (funcArr,input) =>{
  // //   base: if funcArr length ====0, return input
  //   if(funcArr.length===0){return input}
  // //   decalre variable and assign as sliced array
  //   let newArr = funcArr.slice(1)
  // //   update output/input with current element/callback invoked value w/ input
  //   let output=funcArr[0](input)
  // //   recurse function
  //   return flow(newArr,output)
  // }
  
  // // // }
  // // // // To check if you've completed the challenge, uncomment this code!
  // // // create a function called multiplyBy2(num) 
  // const multiplyBy2 = n => n*2
  // // //  create a function called add7(num) 
  // const add7 = n => n+7
  // // //  create a function called modulo4(num) 
  // const modulo4 = n => n%4
  // // //  create a function called subtract10(num) 
  // const  subtract10 = n =>n-10
  
  
  // // //  build the callback function 
  // const arrFunc = [multiplyBy2,add7,modulo4,subtract10]
  // // // ->should log  -7   //// use input of 2
  // console.log(flow(arrFunc,2))
  
  
  
  
  
  
  
  
  // //17.   /////////////////////////////// Challenge 3
  // // Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). 
  // // The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.
  
  //  {
  // const palindrome = str => {
  // //   decalre variable and split string to array
  //   let convert = str.toLowerCase().split('')
  // //   utilize filter method and return elements that uppercase and lowercase don't equal each other
  //   .filter(el=>  el.toLowerCase()!==el.toUpperCase())
  // //   utilize join method to convert back to string
  //   .join('')
  //   // return convert
    
  // //   base: if convertngth=== 0; return false
  //   if(convert.length===0){return false}
  // //   base/terminal: if convert.length === 1; return true
  //   if(convert.length===1){return true}
  // //   base/termianl: if convert.lenth ===2; return index 0 vs 1
  //   if(convert.length===2){return convert[0]===convert[1]}
  // //   bse/termainal: if convert[0] === last letter of string.. recurse function
  //   if(convert[0]===convert.slice(-1)){ return palindrome(convert.slice(1,-1))}
  // //   return false
  //   return false
  // }
  
  // // }
  
  // console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
  // console.log(palindrome("llama mall")); //-> true
  // console.log(palindrome("jmoney")); //-> false
  
  
  
  // //18.  ///////////////////////////////////////////// // CHALLENGE 15
  // // Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, 
  // // and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), 
  // // the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.
  
  // // // {
  // const russianRoulette = num => {
  // //   decalre variable and assign as 0 for counting
  //   let count = 0
  // //   create and return new function
  //   return function(){
  // 	//   increment counter
  //     count++
  // 	//   intiate cond stmtm, where if count > num....
  //     if(count>num){
  // 		//   return 'reload to play....'
  //       return 'reload to play again'
        
  // 	//   otherwise, if count === num.....
  //     } else if (count === num){
  // 		//   return 'bang'
  //       return 'bang'
  // 	//   otherwise,.... 
  //     } else {
  // 		//   return click
  //       return 'click' 
  //     }
  //   }
    
  // }
  // // // // }
  
  // // // // /*** Uncomment these to check your work! ***/
  // // // assign the functions w/ 3 passed in the argumetn
  // const gun = russianRoulette(3)
  
  
  // console.log(gun())//  // => should log 'click'
  // console.log(gun())//  // => should log 'click'
  // console.log(gun())//  // => should log 'bang'
  // console.log(gun())//  // => should log 'reload to play again'
  // console.log(gun())//  // => should log 'reload to play again'
  
  
  
  
  // //19./////////////////////////////////////////////////////////////////////// // CHALLENGE 17
  // // Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). 
  // // The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array).
  // //  Otherwise, the returned function should return false.
  
  // // // //  {
  // const makeFuncTester = (array) =>{
  // //   create new function w/ a single paramter for callback
  //   return function(callback){
  // //   utilize every method on array
  //     return array.every(test=> {
  // 	//   	declare new variable as new array
  //       let [first,second] = test
  // 		//   return boolean where invoked value/element of first element should equal second element
  //       return callback(first) === second
        
  //     })
      
  //   }
    
  // }
  // // // // }
  
  // // // /*** Uncomment these to check your work! ***/
  // // // write the correct stuff
  // // ////////////////////////////create an array and create the follwing array pairs
  // const capLastTestCases = [];
  // capLastTestCases.push(['hello', 'hellO']);
  // capLastTestCases.push(['goodbye', 'goodbyE']);
  // capLastTestCases.push(['howdy', 'howdY']);
  
  
  // // //write the callback function
  // const funcTester = makeFuncTester(capLastTestCases)
  
  
  // // // make a function called capLastAttempt1 where you upper case all the letters
  // const capLastAttempt1 = str => str.toUpperCase()
  // // // make a function called capLastAttempt2 where you upper case the last lettter of the word
  // const capLastAttempt2 = str => str.slice(0,-1) + str.slice(-1).toUpperCase()
  // // // // => should log false
  // console.log(funcTester(capLastAttempt1))
  // // // // => should log true
  // console.log(funcTester(capLastAttempt2))
  
  
  // //20.  ////////////////////////////////////////////////////////////////////capitalizeFirst/////////////////////////////////////////////////////////
  
  // // given an array of String, capitlzie the first letter of each string in the array
  
  // //  {
  // function capitalizeFirst(arr,result=[]){
  // //   base: if array.length ===0; return result
  //   if(arr.length===0){return result}
  // //   slice array
  //   let newArr = arr.slice(1)
  // //   push uppercase array[0] into result
  //   result.push(arr[0][0].toUpperCase()+arr[0].slice(1))
  // //   recurse function
  //   return capitalizeFirst(newArr,result)
  // }
  
  
  // // //   }
    
  // console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  
  
  
  // //21  ////////////////////////////////////////////////////////////////////capitalize/////////////////////////////////////////////////////////
  // // given an array of words, return an new array conating each word captialzied
  
  // //  {
  
  // function capitalizeFirst(arr,result=[]){
  // //   base: if array.length ===0; return result
  //   if(arr.length===0){return result}
  // //   slice array
  //   let newArr = arr.slice(1)
  // //   push uppercase array[0] into result
  //   result.push(arr[0].toUpperCase())
  // //   recurse function
  //   return capitalizeFirst(newArr,result)
  // }
  // // //   }
    
  //   let words = ['i', 'am', 'learning', 'recursion'];
  //   console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
  
  
  
    
  // //22.   //////////////////////////////////////disemvowle///////////////////////////////////////////
  // // Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
  
  //    {
    
  //   const disemvowel = str => {
  // //     decalre variable and assign lower as an array of lower case vowels
  //     let vowels = ['a','e','i','o','u']
  // //     declare variable and assign as empty string
  //     let newStr= ''
  // //     iterate through str w/for looop
  //     for(let i=0;i<str.length;i++){
  // 	//     initiate cond stmt, where if lowercase of element is not included in the array of vowels
  //       if(!vowels.includes(str[i].toLowerCase())){
  // 		//     concatentate newStr
  //         newStr+=str[i]
  //       }
        
  //     }
  // //     return newStr
  //     return newStr
  //   }
    
  // //   }
        
  // // // Uncomment these to check your work!
  // console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  // console.log(disemvowel('BANANA')); // => 'BNN'
  // console.log(disemvowel('hello world')); // => 'hll wrld'
  
  
  
  
  // //23.    {
  
  // const  objectFloor = (arr,callback) => {
  // //   decalre variable and assign as empty object
  //   let obj ={}
  // //   iterate through array
  //   for(let key of arr){
  // 	//   if key/value pair is truthy of invoked callback value....
  //     if(obj[callback(key)]){
  // 		//   push value into object's nested array
  //       obj[callback(key)].push(key)
  // 	//   otherwise
  //     } else 
  // 		//   update/reassign key value pair with array 
  //       obj[callback(key)] = [key]
      
  //   }
  // //   return object
  //   return obj
    
  // }
  // // }
  
  // // // /*** Uncomment these to check your work! ***/
  // // // write a function that stores these [1.3, 2.1, 2.4];
  // const array = [1.3, 2.1, 2.4]
  
  // // // write a function called  floored  that gives the floored amount aka 1.2 = 1
  // const floored = n => Math.floor(n)
  // // //  // should log: { 1: [1.3], 2: [2.1, 2.4] }
  // console.log(objectFloor(array,floored))
  
  
  // //23.  ////////////////////////////////////////////////////////////////////product of array//////////////////////////////////////
  // // write a function called recursiveRange which accepts a number and up all the numbers from 0 to the number passed to the function
  
  // // (x){
  // const recursiveRange = (x,output=0) =>{
  // //   base: if x===0; return output
  //   if(x===0){return output}
  // //   add x to cumulative total of output
  //   output+=x
  // //   decrement x
  //   x--
  // //   recurse function
  //   return recursiveRange(x,output)
    
  // }
  
  // // // }
  
  // console.log(recursiveRange(6))// //  // 21
  // console.log(recursiveRange(10))// //  // 55 
  
  
  
  
  // //24.   //////////////////////////////////////////////////////////////////////reverse///////////////////////////////////////////////////////////////////
  // // //write a function called reverse which accepts a string and returns a new string in reverse
  
  // // // {
  // const reverse = str =>{
  // //   base: is str.length===0; return ''
  //   if(str.length===0){return''}
  // //   declare variable and slice str
  //   let newStr = str.slice(1)
  // //   recurse function
  //   return reverse(newStr) + str[0]
    
  // }
  // // //   }
    
  // console.log(reverse('awesome'))// //    // 'emosewa'
  // console.log(reverse('rithmschool'))// //    // 'loohcsmhtir'
  
  
  
  
   
  
  // //25.  ////////////////////////////////////////////////////////////////////someRecurseive/////////////////////////////////////////////////////////
  
  // //write a function which accepts an array and a clalback.  
  // // the function returns true if a single value in teh array returns true when passed to the callback
  // // otherwise it is false
  
  // // {
  // const recuOdd = (arr,callback) => {
  // //   base: if arr.length === 0 ; reutrn false
  //   if(arr.length===0){return false}
  // //   base/termainl: callback(arr[0]); return true
  //   if(callback(arr[0])) {return true}
  // //   slice array
  //   let newArr = arr.slice(1)
  // //   recurse function
  //   return recuOdd(newArr,callback)
    
  // }
  // // //   }
  
  
  // // //   // SAMPLE INPUT / OUTPUT
  // // // write a function for isOdd;
  // const isOdd = n => n%2!==0
  
  // console.log(recuOdd([1,2,3,4], isOdd)) // true
  // console.log(recuOdd([4,6,8,9], isOdd)) // true
  // console.log(recuOdd([4,6,8], isOdd)) // false
  // console.log(recuOdd([4,6,8], val => val > 10)); // false
  
  
  
  
  
  
  
  
  // //26.  /////////////////////////////////////////////////////// // CHALLENGE 9
  // // //  {
  // const weekDay = array =>{
  // //   decalre varialbe and assign as 0
  //   let count = 0
  // //   decalre varaible and assign as empty str
  //   let str =''
  // //   create new function
  //   return function(){
  // 	//   increment counter
  //     count++
  // 	//   initiate cond stmt, where if count > array.length,.....
  //     if(array.length===count){
  // 		//   update/reassign newStr
  //       str = array[count-1]
  // 		//   count = 0
  //       count = 0
  // 		//   return newStr
  //       return str
  //     }
    
      
  // 		//   update /reassign newStr
  //     return array[count-1]
      
  //   }
    
  // }
  
  // // // }
  
  // // // // /*** Uncomment these to check your work! ***/
  // // // //  write array for ['Fri', 'Sat', 'Sun'];
  // const dayArr = ['Fri', 'Sat', 'Sun']
  
  // // // write clalback equqation
  // const daysOfWeek = weekDay(dayArr)
  
  // console.log(daysOfWeek())// // // ; // => should log 'Fri'
  // console.log(daysOfWeek())// // // ; // => should log 'Sat'
  // console.log(daysOfWeek())// // // ; // => should log 'Sun'
  // console.log(daysOfWeek())// // // ; // => should log 'Fri'
  
  
  // //27.   ////////////////////////////////////////////////////// // CHALLENGE 10
  // //  {
  // function defineFirstArg(callback, arg){
  //   return function(...args){
  //     return callback(arg,...args)
  //   }
  // }
  
  // // //   }
    
    
  
  // // // // /*** Uncomment these to check your work! ***/
  // const subtract = function(big, small) { return big - small; };
  // const subFrom20 = defineFirstArg(subtract, 20);
  // console.log(subFrom20(5)); // => should log 15
  
  
  
  
  // ///28.    //////////////////////////////////////////////// Challenge: intersection/////////////////////////////////////**************focus on this  */
  // // Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
  
  // // //ADD CODE HERE
  // const intersection = arrays =>{
  // // //////////////////answer with reduce
  //   utlize reduce method
  //   return arrays.reduce((acc,curr)=> {
  // 	//   utilze filter method
  //     return acc.filter(num=> 
  // 		//   utlize includes method
  //           curr.includes(num))
      
  //   })
  
  
  
  
  // // //Do the same problem above but with a loop? 
    
  //   decalre variable and assign as array[0]
  //   let compArr = arrays[0]
  // //   iterate through arrays w/ for...of
  //   for(let el of arrays){
  // 	//   iterate through compArr w/ for loop
  //     for(let i=0;i<compArr.length;i++){
  // 		//   	intitae cond stmt, where if current element is in the array....
  //       if(!el.includes(compArr[i]))
  // 			//   splice the comparray
  //         compArr.splice(i,1)
        
  //     }
      
  //   }
  // //   return compArr
  //   return compArr
    
  // }
  
  
  
  // // // // // // //   // Uncomment these to check your work!
  //   const arr1 = [5, 10, 15, 20];
  //   const arr2 = [15, 88, 1, 5, 7];
  //   const arr3 = [1, 10, 15, 5, 20];
  // const array = [arr1,arr2,arr3]
  // console.log(intersection(array))
  // // //    // should log: [5, 15]
  
  
  // //29. ////////////////////////////////// ////////////////////////////////// Challenge: union//////********focus on this  */
  // // Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. 
  // // If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 
  // // BONUS - Use reduce!
  // // // // ADD CODE HERE
  // const union =arr => {
  // // ////////////// //using reduce
  // //   intiate reduce method
  //   return arr.reduce((acc,curr)=> {
  // //   intiate concat method
  //     return acc.concat(
  // //   initate filter method
  //       curr.filter(num=>
  // //   intieate includes methhod
  //                   !acc.includes(num)))
      
  //   },[])
  
  
  
  // /////////use for each or regular loop to solve
    
  //   initiate reduce method
  //   return arr.reduce((acc,curr)=> {
  // //   initiate and iterate through array w/forEach method
  //     curr.forEach(el=> {
  // 	//   intiate cond sttmt, where if elment is included
  //       if(!acc.includes(el)){
  // 	//   push elemenet/value into accmulator
  //         acc.push(el) 
  //       } 
  //     })
  // 	//   return accumulator
  //     return acc
  //   },[])
    
  // }
    
  // //     // Uncomment these to check your work!
  //     const arr1 = [5, 10, 15];
  //     const arr2 = [15, 88, 1, 5, 7];
  //     const arr3 = [100, 15, 10, 1, 5];
  //   const arrays = [arr1,arr2,arr3]
  //   console.log(union(arrays))
  //      // should log: [5, 10, 15, 88, 1, 7, 100]
  
  
  
  // //30. ////////////////////////////////////////////Challenge 1
  // // Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). 
  // // This function should return a new array containing *only* the functions from the original array that, when invoked with input, return the value output. Use reduce!
  
  
  // // {
  //   const functionValidator = (arr,input, output) => {
  // //     initialize reduce method
  //     return arr.reduce((acc,curr)=> {
  // 	//     initate cond stmt, where if invoked callback value === output
  //       if(curr(input)===output){
  // 		//     push curr into accumulator
  //         acc.push(curr)
  //       }
  // 		//     return accumulator
  //       return acc
        
  //     },[])
      
  //   }
  // //   }
    
  // //   // write a function of  addFive
  //   const addFive = n => n+5
  // //   // write a function of  multiplyByTwo ;
  //   const multiplyByTwo = n => n*2
  // //   // write a function  subtractOne 
  //   const subtractOne = n=> n-1
    
  //   const arrayofCalls = [addFive,multiplyByTwo,subtractOne]
    
  //   console.log(functionValidator(arrayofCalls,5,10))
    
    
  //   //////////////////////////////////////////// // should log [num => num + 5, num => num * 2]   ////input should be 5 and output should be 10
    
    
  // //31.  ////////////////////////////////////////////////////////////////////////////////// Challenge 2
  // //   Create a function allClear that accepts an array of evaluator functions (each returning a boolean value), and a single value. 
  // // Using reduce, return a single boolean value indicating whether the value "passes" every single one of the evaluator functions (i.e. returns true).
  
  // //    {
  //     const allClear =(arr,input) => {
  // //   //   ///////solve using loop solution
  
    
  // //   // ///////////////solve using reduce
  // //       intiate reduce method
  //       return arr.reduce((acc,curr)=> {
  // 	//       push invoked callback value into accumulator
  //         acc.push(curr(input))
  // 	//       return accumulator
  //         return acc
          
  //       },[])
  //   //       initiate every method
  // 		//       utilze bool to check if evey element in the array is true
  //       .every(bool=>bool===true)
        
  //     }
    
      
    
  // //   }
    
  // //   // write a function isOdd 
  // const isOdd = n => n%2!==0
  // //   // wrtie a function that determines if number  isPositive 
  // const isPositive = n=> n>0
  // //   // write a function multipleOfFive 
  // const multipleOfFive =n => n%5===0
  // //   // write the callback function
  // const numFnArr = [isOdd,isPositive,multipleOfFive]
    
    
    
  //   console.log(allClear(numFnArr, 25)) // should log true 
  //   console.log(allClear(numFnArr, -25)) // should log false
     
    
  // //32.  //////////////////////////////////////////////////////////////////////////////////// Challenge 3
  // //   Write a function numSelectString that accepts an array of numbers and returns a string.
  // //  This function should use filter, sort, and reduce to return a string containing only the odd numbers from the array, separated by commas, in ascending order.
  
  //    {
  // const numSelectString =(arr) =>{
    
  // //     // //////////////////use array methods
  // // //   utilze sort method
  // //   return arr.sort((a,b)=>a-b)
  // // //   utilze filter method
  // // 	//   filter all numers that are oddd
  // //   .filter(el=> el%2!==0)
  // // //   utilize join method
  // //   .join(', ')
  
  // //   ///////////////////////usse reduce to solve
  // //   utilize sort method
  //   return arr.sort((a,b)=>a-b)
  // //   utilze reduce method
  //   .reduce((acc,curr)=> {
  // 	//   initae cond stmt, where if element is odd....
  //     if(curr%2!==0){
  // 		//   push elmenet into accumulator
  //       acc.push(curr)
  //     }
  // 	//   return acc
  //     return acc
      
  //   },[])
  // 	//   utilize join methdo
  //   .join(", ")
    
  // }
  // //   }
  
  //   const nums = [17, 34, 3, 12]
  //   console.log(numSelectString(nums))
  // //   // should log "3, 17"
    
  
  
  
  
  
  
  // //33.  ///////////////////////////////////////////////////////////////////////// //Challenge 7
  
  // // Write a recursive function findInOrderedSet that determines if a number is in an ordered array. 
  // // Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.
  
  
  // // {
  // function findInOrderedSet(arr,target){
  // //   base: if arr.length ===0, retur nfalse
  //   if(arr.length===0){return false}
  // //   base/termainal: if arr[0]===target{ return true}
  //   if(arr[0]===target){return true}
  // //   slice arr
  //   let newArr = arr.slice(1)
  // //   recurse function
  //   return findInOrderedSet(newArr,target)
  // }
  
  // //   }
    
  // //   //write the callback variable// [1, 4, 6, 7, 9, 17, 45];
  // const nums = [1, 4, 6, 7, 9, 17, 45]
  
  //   console.log(findInOrderedSet(nums, 4));  //-> true
  //   console.log(findInOrderedSet(nums, 2));  //-> false
  //   console.log(findInOrderedSet(nums, 1));  //-> true
  //   console.log(findInOrderedSet(nums, 45));  //-> true
  //   console.log(findInOrderedSet(nums, 3));  //-> false
        
  // //34.  //////////////////////////////////////////////////////////////////////////////////////////////Challenge 8
  // //There are n stairs. A person standing at the bottom wants to reach the top. 
  // // The person can climb either 1 or 2 stairs at a time.
  // //  Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See
  // //  test cases for examples.
  
  //        {
        
  //       }
        
  //       // console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
  //       // console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
  //       // console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
        
        
  
        
        
  // //35.  ////////////////////////////////////////////////Challenge 10/////////////////////////////////////////////////////////////////////////
  //     //   Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.
  
  
  // //        {
  //       function getRangeBetween(x,y,result =[]){
  // //         base: if x>y-1; return result
  //         if(x>=y-1){return result}
  // //         incremetn x
  //         x++
  // //         push element into result
  //         result.push(x)
  // //         recurse function
  //         return getRangeBetween(x,y,result)
          
  //       }
  
          
  // //       }
  
  //       console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
  //       console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
  
  
  // //36.  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //     // --- Directions
  // // Given a string, return a new string with the reversed
  // // order of characters
  // // --- Examples
  //   // reverse('apple') === 'leppa'
  //   // reverse('hello') === 'olleh'
  //   // reverse('Greetings!') === '!sgniteerG'
  
  // const reverse = str => {
  //   ////////////////solve using reverse
  // // intiate split method
  //   return str.split('')
  // //   intieate reverse method
  //   .reverse()
  // //   initae join method
  //   .join('')
  
  
  
  // //////////////////////////////solve using a looop///////////////
  // //   decalre variable and assign as empty str
  //   let newStr= ''
  // //   iterate throgh str w/ for...of loop
  //   for(let el of str){
  // 	//   update newStr w/ current element
  //     newStr=el + newStr
  //   }
  // //   return newStr
  //   return newStr
  
  // // ////////////////////////////use an array function aka reduce///////////////////////////
  // //   intiate split method
  //   return str.split('')
  // //   initea reduc method
  //   .reduce((acc,curr)=> {
  // 	//   update/reassign acc w/ current leement
  //     acc= curr+ acc
  // 	//   return acculator
  //     return acc
  //   },[])
  // //join method
  //   // .join('')
    
    
  // }
  
  // // ///////////////////////do recrusion/////////////////////////////
  
  
  // console.log(reverse('apple'))
  // console.log(reverse('hello'))
  // console.log(reverse('Greetings!'))
  
  
  
  // //37.  ////////////////////////////////////////////////////////////////////////////////////////palindrome//////////////////////////////////////////////////////////////
    
  // // --- Directions
  // // Given a string, return true if the string is a palindrome
  // // or false if it is not.  Palindromes are strings that
  // // form the same word if it is reversed. *Do* include spaces
  // // and punctuation in determining if the string is a palindrome.
  // // --- Examples:
  // //   palindrome("abba") === true
  // //   palindrome("abcdefg") === false
  
  //  {
  
  
  //   // ////////////////alternate solution w/every?/////////////////////
  
  
  // }
    
  
  
  //   // console.log(palindrome("abba") === true)
  //   // console.log(palindrome("abcdefg") === false)
    
    
  // //38.   ////////////////////////////////////////////////////////reverseInt/////////////////////////////////////////////////////////////////////////
  // // --- Directions
  // // Given an integer, return an integer that is the reverse
  // // ordering of numbers.
  // // --- Examples
  // //   reverseInt(15) === 51
  // //   reverseInt(981) === 189
  // //   reverseInt(500) === 5
  // //   reverseInt(-15) === -51
  // //   reverseInt(-90) === -9
    
  //    {
  //   const reverseInt = num => {
  // //     convert num to string
  //     let convert = num.toString()
  // //     split method
  //     .split('')
  // //     reverse method
  //     .reverse()
  // //     join method
  //     .join('')
  // //     retrun w/
  //     // return convert
      
  //     return parseInt(convert) * Math.sign(num)
      
  //   }
    
  //   }
  //   console.log(reverseInt(15))//===51)
  //   console.log(reverseInt(981))// === 189)
  //   console.log(reverseInt(500))// === 5)
  //   console.log(reverseInt(-15))// === -51)
  //   console.log(reverseInt(-90))// === -9)
    
    
    
    
  // //39.   //////////////////////////////////////////////////////maxChar///////////////////////////////////////////////////////////////////////////////////
  // // --- Directions
  // // Given a string, return the character that is most
  // // commonly used in the string.
  // // // --- Examples
  // // // maxChar("abcccccccd") === "c"
  // // // maxChar("apple 1231111") === "1"
  
  // // {
  // const maxChar = str => {
  // //   declare varialbe and assign as empty object
  //   let obj ={}
  // //   iterate through str w/ for..of loop
  //   for(let el of str){
  // 	//   initate cond stmtm, where if key/value pair exists....
  //     if(obj[el]){
  // 		//   increment key value pair
  //       obj[el]++
  // 	//   otherwisee.... update/create key value apir
  //     } else {
  //       obj[el] = 1
        
  //     }
  //   }
  // //   return w/ Object Constructr and reduce method to determine largest key
  //     return Object.keys(obj).reduce((acc,curr)=> obj[acc]>obj[curr] ? acc:curr)
  // }
  
  // // // }
  
  // console.log(maxChar("abcccccccd") )
  // console.log(maxChar("apple 1231111"))
  
  // //40.  ////////////////////////////////////////fizzBuzz////////////////////////////////////////////////////////////////////////////////////////////
  // // --- Directions
  // // Write a program that console logs the numbers
  // // from 1 to n. But for multiples of three print
  // // “fizz” instead of the number and for the multiples
  // // of five print “buzz”. For numbers which are multiples
  // // of both three and five print “fizzbuzz”.
  // // --- Example
  // //   fizzBuzz(5);
  // //   1
  // //   2
  // //   fizz
  // //   4
  // //   buzz
  
  // // function fizzBuzz(n) {
  
  
  
  // // }
  // /////////////////////test cases//////////////////////////////////
  // // console.log('n=1:'+fizzBuzz(1));
  // // console.log('n=2:'+fizzBuzz(2));
  // // console.log('n=3:'+fizzBuzz(3));
  // // console.log('n=4:'+fizzBuzz(4));
  // // console.log('n=5:'+fizzBuzz(5));
  // // console.log('n=6:'+fizzBuzz(6));
  // // console.log(fizzBuzz(30));
    
    
  
  
  
    
  // /0/41.  ///////////////////////////////////////////////////////////////// Challenge 19
  // // Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. 
  // // rating should return the percentage of functions from the array that return true when the value is used as input.
  
  // function rating(arrOfFuncs, value) {
  // //   intiale reduce method
  //   return arrOfFuncs.reduce((acc,callback)=>{
  // 	//   if curr/callback is true....
  //     if(callback(value)){
  // 		//   push true value into acc array
  //       acc.push(callback(value))
        
  //     }
      
  // 		//   return acc
  //     return acc
      
  //   },[]).length
  // //   divide by arrOfFuncs.length and multiply by 100
  //   /arrOfFuncs.length*100
   
  // }
      
  // // /*** Uncomment these to check your work! ***/
  // // // write a function isEven ;
  // const isEven = n => n%2===0
  // // // write a function greaterThanFour ;
  // const greaterThanFour = n => n>4
  // // // write a function isSquare = //////////aka sqrt;
  // const isSquare = n => Math.sqrt(n)%1===0
  // // // write a function hasSix = ////has contains a 6;
  // const hasSix = n => n.toString().includes('6')
  
  
  // const funcArr = [isEven,greaterThanFour,isSquare,hasSix]
  
  // //  // should log: 100  use 64
  // console.log(rating(funcArr,64))
  // //  // should log: 75  use 66
  // console.log(rating(funcArr,66))
  // //  // should log: 75 use 5
  // console.log(rating(funcArr,5))
          
          
  // //42.  ////////////////////////////////////////////////////////////////////// Challenge 20
  // // Create a function pipe that accepts an array (of functions) and a value. 
  // // pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, 
  // // and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. 
  // // pipe should return the final output.
  
  
  // {
  // const pipe = (arr,str) => {
  // // // //   //////////solution 1 using for...of
  // //declare varialbe and assign as str
  //   let newStr = str
  // //   iterate through arr w/ for..of loop
  //   for(let callback of arr){
  // 	//   concat newStr
  //     newStr = callback(newStr)
  //   }
  // //   return newStr
  //   return newStr
  
  // //   /////////////solution 2 using reduce method
  // // utilize reduce method
  //   return arr.reduce((acc,curr)=> {
  // //   update/reassign accmumulator
  //     acc=curr(acc)
  // //   return acc
  //     return acc
      
  //   },str)
  
  // ///////////   solutinon 3    using for each method
    
  // }
  
  
  // }
  
  // // /*** Uncomment these to check your work! ***/
  // // //write a function called capitalize
  // const capitalize = str => str.toUpperCase()
  // // //write a function called addLowerCase ;
  // const addLowerCase = str => str + str.toLowerCase()
  // // //write a function called repeat =; //////aka repeat the string
  // const repeats = str => str.repeat(2)
  // // //
  
  // const arrays = [capitalize,addLowerCase,repeats]
  // // // // should log: 'CATcatCATcat'
  // console.log(pipe(arrays,'cat'))
          
          
  // //43.//////////////////////////////////////////////////////////// Challenge 21/////////////////////
  // // Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). 
  // // highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, 
  // // when the subject is given as input.
  
  
  //  {
  // const highestFunc = (object,value) => {
  // //   decalre varaible and assign as empty object
  //   let obj = {}
  // //   iterate through object w/for..in loop
  //   for(let key in object){
  // 	//   update  key value pair...
  //     obj[key] = object[key](value)
  //   }
  // 		//   return w/ object constructor and reduce functino
  //   return Object.keys(obj).reduce((acc,curr)=>obj[acc]>obj[curr]? acc:curr)
  // 	//   
  // }
  
    
  // // }
          
  // // // /*** Uncomment these to check your work! ***/
  // const groupOfFuncs = {};
  // groupOfFuncs.double = n => n*2// // write a method inside the object called double 
  // groupOfFuncs.addTen = n => n+10// // write a method inside the object called addTen 
  // groupOfFuncs.inverse = n => n*-1// // write a method inside the object called inverse /// inverse in this case is -1
  // // // / should log: 'addTen'   ---5
  //   console.log(highestFunc(groupOfFuncs,5))
  // // // // should log: 'double'  ---11
  //   console.log(highestFunc(groupOfFuncs,11))
  // // //  // should log: 'inverse'  -----20
  //   console.log(highestFunc(groupOfFuncs,20))
          
          
  // //43.////////////// //////////////////////////////Challenge 22///////////////////////////////
  // // Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. 
  // // combineOperations should pass the starting value into the first function in the array. 
  // // combineOperations should pass the value returned by the first function into the second function, 
//     // // and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.
    const combineOperations = (arr,input) =>{
    ///////use reduce to solve 
      // intiate reduce method
      return arr.reduce((acc,callback)=> {
    //   update/reassign acc w/ curr
        acc=callback(acc)
    //   return acc
        return acc
      
      },input)
      
  
    // ////////////////use for each to solve
    // //
    
  
    // // use regular loop to solve
    
    }
  
    //  {
  
  
  
  
    // }
  
    // // wrtie a function called  add100(num) {
    // //   
    // // }
    const add100 = n => n+100
  
    // //  wrtie a function called  divByFive(num) {
    // //   / }
    const divByFive = n => n/5
    // //  wrtie a function called  multiplyByThree(num) {
    // //   / }
    const multiplyByThree = n => n*3
    // //  wrtie a function called  multiplyFive(num) {
    // //   / }
    const multiplyFive = n => n*5
  
    // //  wrtie a function called  addTen(num) {
    // //   // }
    const addTen = n => n+10
          
    // // // /*** Uncomment these to check your work! ***/
    // //  // Shoculd output 60 --> order should be add100, divByFive, multiplyByThree w/startVal = 0
    console.log(combineOperations([add100, divByFive, multiplyByThree],0))
    // //  // Should output 10 -->order should be divByFive, multiplyFive, addTen w/startVal = 0
    console.log(combineOperations([divByFive, multiplyFive, addTen],0))
          
  // //44./////////////////////////////////////////////// Challenge 23
  // // Define a function myFunc that takes an array and a callback. 
  // // myFunc should pass each element from the array (in order) into the callback. 
  // // If the callback returns true, myFunc should return the index of the current element. 
  // // If the callback never returns true, myFunc should return -1;
  
  // {
//     const myFunc = (arr,callback) =>{
//       return arr.sort((a,b)=>a-b)
//     }
  
//     // }
  
//     const numbers = [2, 2, 77, 64, 10, 8, 12];
//     const evens = [2, 4, 6, 8, 10, 12, 64];
  
// // write a function isOdd
// const isOdd = n => n%2!==0
  
  
//     // // /*** Uncomment these to check your work! ***/
//     //  // Output should be 1
// console.log(myFunc(numbers,isOdd))
//     //  // Output should be -1
//     console.log(myFunc(evens,isOdd))
  
  // //45.   /////////// Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.
  
  
  //  {
//     const countdown = n => {
// //       console.log n
//       console.log(n)
// //       base: if n===0; return 0
//       if(n===0){return 0}
// //       decrement n
//       n--
// //       recurse function
//       return countdown(n)
//     }
  
//     // }
  
//     // // To check if you've completed it, uncomment these console.logs!
//     countdown(5);
//     countdown(10);
              
              
  // //46.  ///////////// Challenge 2
  // // Write a recursive function sum that calculates the sum of an array of integers.
  //  {
//     const sum = (arr,total=0) =>{
// //       base: if arr.length ===0 {return total}
//       if(arr.length===0){return total}
// //       add to total
//       total+=arr[0]
// //       slice arr
//       let newArr = arr.slice(1)
// //       recurse function
//       return sum(newArr,total)
    
//     }
//     // }
  
//     // // uncomment these to check your work
//     console.log(sum([1,1,1])); // -> returns 3
//     console.log(sum([1,2,3,4,5,6])); // -> returns 21
  
              
  
  // //47.  /////////////////////////////////////////////////////////anagrams///////////////////////////////////////////////////////////////////////////////////////
    
  //   // --- Directions
  //   // Check to see if two provided strings are anagrams of eachother.
  //   // One string is an anagram of another if it uses the same characters
  //   // in the same quantity. Only consider characters, not spaces
  //   // or punctuation.  Consider capital letters to be the same as lower case
  //   // --- Examples
  //   //   anagrams('rail safety', 'fairy tales') --> True
  //   //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  //   //   anagrams('Hi there', 'Bye there') --> False
    
    
  //   // ///////////////soultion 1=== use helper function to build////////////
  //   //  {
// const anagrams = (stringA,stringB) => {
// //   declare variable and initate toLowerCase method
//   let convertA = stringA.toLowerCase()
// //   intiate split method
//   .split('')
// //   intiate filter method ..... where we will filter/return elments where upper and lower case do not equal
//   .filter(el => el.toLowerCase()!==el.toUpperCase())
// //   initea sort method
//   .sort()
// //   initate join method
//   .join('')


//     let convertB = stringB.toLowerCase()
// //   intiate split method
//   .split('')
// //   intiate filter method ..... where we will filter/return elments where upper and lower case do not equal
//   .filter(el => el.toLowerCase()!==el.toUpperCase())
// //   initea sort method
//   .sort()
// //   initate join method
//   .join('')
  
//     return convertB === convertA
// }
    
//     //   // }
    
//       console.log(anagrams('rail safety', 'fairy tales'))///=== True)
//       console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))// === True)
//       console.log(anagrams('Hi there', 'Bye there'))// === False)
  //   // console.log()
    
  //   //48.   ////////////////////////////////////////////////////////////sentenceCapitalization///////////////////////////////////////////////////////////////////
    
  //   // --- Directions
  //   // Write a function that accepts a string.  The function should
  //   // capitalize the first letter of each word in the string then
  //   // return the capitalized string.
  //   // --- Examples
  //   //   capitalize('a short sentence') --> 'A Short Sentence'
  //   //   capitalize('a lazy fox') --> 'A Lazy Fox'
  //   //   capitalize('look, it is working!') --> 'Look, It Is Working!'
    
    
    
  //   /////////solution 1////////////////
  //   //  {
//      const capitalize = str =>{
// //        decalre  varaible named result and assign as empty array
//        let result = []
// //        utlize split method on arr
//        let convert = str.split(' ')
// //        iterate through split str/arr w/ for...of loop
//        for(let el of convert){
// 	//        push uppercase into result array    ----- focus with arthur
//          result.push(el[0][0].toUpperCase()+el.slice(1))
       
//        }
// //        return result and join
//        return result.join(' ')
     
//      }
//     //   // }
    
    
//       console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
//       console.log(capitalize('a lazy fox')) //-> 'A Lazy Fox')
//       console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'
      
  
  
  //   //49.  /////////////////////////////////////////////////////////////////////////vowels////////////////////////////////////////////
  
  // // --- Directions
  // // Write a function that returns the number of vowels
  // // used in a string.  Vowels are the characters 'a', 'e'
  // // 'i', 'o', and 'u'.
  // // --- Examples
  // //   vowels('Hi There!') --> 3
  // //   vowels('Why do you ask?') --> 4
  // //   vowels('Why?') --> 0
  // ///////////////////////solution/////////////////////
  // // {
//     const vowels = string => {
// //       declare variable and assign as array of vowels
//       let vowels = ['a','e','i','o','u']
// //       declare varaible and assign as value of 0
//       let count = 0
// //       iterate through string w/ for...of loop
//       for(let el of string){
// 	//       initate cond stmt, where if lowercase element is included in array.....   ----- talk to arthu
//         if(vowels.includes(el)){
// 		//       increment count
//           count++ 
//         }
//       }
// //       return count
//       return count
//     }
  
//     // // }
  
  
//     console.log(vowels('Hi There!')) //--> 3)
//     console.log(vowels('Why do you ask?'))// --> 4)
//     console.log(vowels('Why?')) //--> 0)
  
  
  // //50.   ////////////////////////////////////////////////////////////////////////////////////fibonacci series/////////////////////////////
  
  // // --- Directions
  // // Print out the n-th entry in the fibonacci series.
  // // The fibonacci series is an ordering of numbers where
  // // each number is the sum of the preceeding two.
  // // For example, the sequence
  // //  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  // // forms the first ten entries of the fibonacci series.
  // // Example:
  // //   fib(4) === 3
  
  
  // ////////////////////solution 1///////////
  // // function fib(n) {
  
  
  // // console.log(fib(4)===3)
  
  
  
  // //51./////////////////////////////////Create a function 'multiplyNumbers' that takes a number as an argument. 'multiplyNumbers' 
  // // should multiply all the numbers from 1 to the number you passed to the function.  
  // // For example, if the input is 4 then your function should return 24 because 1 * 2 * 3 * 4 = 24.
  // // {
// const multiplyNumbers = (n,output=1) => {
// //   base: if n===0,return output
//   if(n===0){return output}
// //   multiply to output
//   output*=n
// //   decrement n
//   n--
// //   recurse function
//   return multiplyNumbers(n,output)
// }
  
  
//     // //   }
    
//       console.log(multiplyNumbers(3))
  
  
  // //52. / ////////////////////////////////////////////////////////////////////////////////////factor chain
  // // A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
  
  // // [3, 6, 12, 36]
  
  // // 3 is a factor of 6
  // // 6 is a factor of 12
  // // 12 is a factor of 36
  // // Create a function that determines whether or not an array is a factor chain.
  
  // // Examples
  // // factorChain([1, 2, 4, 8, 16, 32]) ➞ true
  
  // // factorChain([1, 1, 1, 1, 1, 1]) ➞ true
  
  // // factorChain([2, 4, 6, 7, 12]) ➞ false
  
  // // factorChain([10, 1]) ➞ false
  
  
  //  {
// const factorChain = arr => {
//     //     // ////////////solution 1 / //// using loop
// //   iterate through arr w/ for loop
//   for(let i=1;i<arr.length;i++){
// 	//   if current element/index % previous index has a remainder, return false
//     if(arr[i]%arr[i-1]!==0){return false}
//   }
// //   return true
//   return true
      
  
  
//     //     // //////////////////solution2  //// use reudce and every
      
  
  
//     //     // ////////////////////solution 3  //////////////use reduce


// }

  
//     console.log(factorChain([1, 2, 4, 8, 16, 32])) //➞ true
//     console.log(factorChain([1, 1, 1, 1, 1, 1])) //➞ true
//     console.log(factorChain([2, 4, 6, 7, 12])) //➞ false
//     console.log(factorChain([10, 1])) //➞ false
  
  
  // //53. //////////////////////////////////index multiplier
  
  // // Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
  
  // // Examples
  // // indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
  // // // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
  
  // // indexMultiplier([-3, 0, 8, -6]) ➞ -2
  // // // (-3*0 + 0*1 + 8*2 + -6*3)
  
  // {
// const indexMultiplier = arr => {
// //     //     // ///////////////solution 1  ///////////use loop
// // //   declare variable and assign as 0
// //   let output = 0
// // //   iterate trough array w/ for loop
// //   for(let i=0;i<arr.length;i++){
// // 	//   update/reassign output w/ current index * current ellement
// //     output+=i * arr[i]
  
// //   }
// // //   return output
// //   return output
      
//     // // //////////////solution 2 //////////use reduce
// //   intialie reduce method
//   return arr.reduce((acc,curr,i)=> {
// //   update accumulator with acc + curr * index
//     acc = acc+curr*i
// //   return acc
//     return acc
  
//   },0)
// }
      
  
  
  
//     console.log(indexMultiplier([9, 3, 7, -7]), -4)
//     console.log(indexMultiplier([3, 8, 6, -4]), 8)
//     console.log(indexMultiplier([10, -9, -2, 0, 2]), -5)
//     console.log(indexMultiplier([4, 4, 2, 2, -4]), -2)
//     console.log(indexMultiplier([9, 4, 7, 5, -1, -3]), 14)
//     console.log(indexMultiplier([-9, 5, 9, 5, -7, 7]), 45)
//     console.log(indexMultiplier([-1, -2, 8, -5]), -1)
//     console.log(indexMultiplier([7, 10, -5, -4, 6, 2]), 22)
//     console.log(indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1]), 16)
//     console.log(indexMultiplier([-2, 5, -7, -23, 0, 14]), -8)
//     console.log(indexMultiplier([53, -43, 39, -2, -11, 3]), 0)
//     console.log(indexMultiplier([40, 32, -18, 48, -15]), 80)
//     console.log(indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34]), 170)
//     console.log(indexMultiplier([-21, 30, 20, 6, -16]), 24)
//     console.log(indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20]), -183)
//     console.log(indexMultiplier([]), 0)
  
  
  
  // //54.   ////////////////////special arrays
  // // An array is special if every even index contains an even number and every odd index 
  // // contains an odd number. 
  // // Create a function that returns true if an array is special, and false otherwise.
  
  // // Examples
  // // isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
  // // // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
  
  // // isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
  // // // Index 2 has an odd number 9.
  
  // // isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
  // // // Index 3 has an even number 8.
  
  
  // {
        const isSpecialArray = arr =>{
//           iterate through arr w/ for loop
          for(let i=0;i<arr.length;i++){
	//           intiate cond stmt where if current index is  even....
            if(i%2===0){
		//           intiate cond stmt where if current element is not even....return false
              if(arr[i]%2!==0) {return false}
            
	//           otherwies.....
            } else {
		//           if current eleemnt is even.... return false
              if(arr[i]===0) {return false}
            
            }
          
          }
		//           return true
          return true
        }
  
    // }
  
    console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true)
    console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false)
    console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false)
    console.log(isSpecialArray([1, 1, 1, 2]), false)
    console.log(isSpecialArray([2, 2, 2, 2]), false)
    console.log(isSpecialArray([2, 1, 2, 1]), true)
    console.log(isSpecialArray([4, 5, 6, 7]), true)
    console.log(isSpecialArray([4, 5, 6, 7, 0, 5]), true)
  
  
  
  // //55.     /////////////////////filter repeating hcaracter strings
  // // Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
  
  // // Examples
  // // identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
  // // ➞ ["aaaaaa", "d", "eeee"]
  
  // // identicalFilter(["88", "999", "22", "545", "133"]) 
  // // ➞ ["88", "999", "22"]
  
  // // identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
  // // ➞ []
  // // Notes
  // // A string with a single character is trivially counted as a string with repeating identical characters.
  // // If there are no strings with repeating identical characters, return an empty array (see example #3).
  
  // {
// const identicalFilter = arr => {
//     //     // /////////////////solution 1///////////////////
//     // /////////////////solution 1///////////////////
//     // decalre variable and assign as empty array
//     // /////////////////solution 1///////////////////
//     // decalre variable and assign as empty array
//     let result = [];
//     // iterate over array w/ for loop
//     for(let i=0;i<arr.length;i++){
//         // convert current string to an array
//         let converted = arr[i].split('')
//         // iterate over coverted array
//         let repeatedChar = true
//         for(let j=0;j<converted.length;j++){
//             // compare element with converted @ [0] index
//             if(converted[0]!==converted[j]){
//                 repeatedChar = false
//                 break
//             }
//         }
//         if(repeatedChar){
//             result.push(arr[i])
//         }
//     }
//     return result
//     //     // //////////////////solution 2//////////////////////   use filter to solbe
// //   intiate filer method where if first letter repeated all the way to the length of the word
//   // return arr.filter(el => el[0].repeat(el.length)===el)
// }
      
  
  
//     // }
  
  
  
  
//     console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']))//,['aaaaaa', 'd', 'eeee'])
  
//     console.log(identicalFilter(['88', '999', '22', '545', '133'])) //['88', '999', '22'])
  
//     console.log(identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo'])) //[])
  
//     console.log(identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee'])) //['aa', 'bb', 'cc', 'dd', 'ee'])
  
//     console.log(identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee'])) //['eee'])
  
//     console.log(identicalFilter(['1', '2', '3'])) //['1', '2', '3'])
  
  // //56.   ////////////////////////////////////////the reverser
  
  // // The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
  
  // // Examples
  // // reverse("Hello World") ➞ "DLROw OLLEh"
  
  // // reverse("ReVeRsE") ➞ "eSrEvEr"
  
  // // reverse("Radar") ➞ "RADAr"
  // // Notes
  // // There will be no punctuation in any of the test cases.
  
  // {
const reversed = str =>{
  //     // //////////////////solution 1
// //   decalre var and assign as empty str
//   let newStr = ''
// //   iterate through str w/for...of
//   for(let el of str){
// 	//   intiate cond stmt, where if element is lowercase....
//     if(el === el.toLowerCase()){
// 		//   concatatenate str w/ uppercase element
//       newStr+=el.toUpperCase()
// 	//   othwersie....
//     } else {
// 		//   cocnatenate with lowerCase
//       newStr+=el.toLowerCase()
    
//     }
//   }
// //   split newStr
//   return newStr.split('')
// //   reverse str
//   .reverse()
// //   join
//   .join('')
    
  
  
  //     // //////////////solution 2   use map function for this 

//   // initate split method
//   return str.split('')
// 	//   initiate reverse method
//   .reverse()
// 	//   initate map method
//   .map(el=> {
//     if(el===el.toUpperCase()){
//       return el.toLowerCase()
//     } else {
//       return el.toUpperCase()
//     }
//   })
// 	//   initate join method
//   .join('')
  

// }
  
//     // }
  
//     console.log(reversed("Hello World")) //, "DLROw OLLEh")
//     console.log(reversed("ReVeRsE")) //, "eSrEvEr")
//     console.log(reversed("")) //, "")
//     console.log(reversed("Radar")) //, "RADAr")
  
  
  // //57.    /////////////////////////////////replace Vowel with another Character/////////////
  
  // // Create a function that takes a string and replaces the vowels with another character.
  
  // // a = 1
  // // e = 2
  // // i = 3
  // // o = 4
  // // u = 5
  // // Examples
  // // replaceVowel("karachi") ➞ "k1r1ch3"
  // // replaceVowel("chembur") ➞ "ch2mb5r
  // // replaceVowel("khandbari") ➞ "kh1ndb1r3"
  // {
  
  // // // ///////////////solution 1////////////////////  use loop
const replaceVowel = str => {
//     decalre obj and assign as key value pair of vowels
  let obj = {
  'a': 1,
  'e': 2,
  'i': 3,
  'o': 4,
  'u': 5
}
 

//     declare varabial empty array as result
let result = []
//     iterate through string w/ for...of loop
for(let el of str){
//     intiate cond stmtm, where if key value pair exists/truthy.....
  if(obj[el]){
  //     push key/value pair into array
    result.push(obj[el])
//     otherwise...
  } else {
  //     push element into array
  result.push(el)
    
  }
  
}
//     return array w/join
return result.join('')

}
  
  
  
  
  
  
  console.log(replaceVowel("karachi"))//, "k1r1ch3")
  console.log(replaceVowel("dang"))//, "d1ng")
  console.log(replaceVowel("aen"))//, "12n")
  console.log(replaceVowel("chembur"))//, "ch2mb5r")
  console.log(replaceVowel("khandbari"))//, "kh1ndb1r3")
  console.log(replaceVowel("thamel"))//, "th1m2l")
  
  
  // //58.    ///////////////////////////multiplying numbers in a string////////////////
  
  // // Given a string of numbers separated by a comma and space, return the product of the numbers.
  
  // // Examples
  // // multiplyNums("2, 3") ➞ 6
  
  // // multiplyNums("1, 2, 3, 4") ➞ 24
  
  // // multiplyNums("54, 75, 453, 0") ➞ 0
  
  // // multiplyNums("10, -2") ➞ -20
  
  // {
  //     // ////////////solutin 1  ///////////use reduce
      
  
  //     // //////////////solution 2   use map and reduce
  
  
  
  
  //     // ///////////solution 3///////////////  use loop
      
  
  // }
  
  
  
  // // console.log(multiplyNums("2, 3"), 6)
  // // console.log(multiplyNums("1, 2, 3, 4"), 24)
  // // console.log(multiplyNums("54, 75, 453, 0"), 0)
  // // console.log(multiplyNums("10, -2"), -20)
  // // console.log(multiplyNums("-26, 1, -27, -12, -19"), 160056)
  // // console.log(multiplyNums("16, 8"), 128)
  // // console.log(multiplyNums("-27, -14, -28, 13, -17"), 2339064)
  // // console.log(multiplyNums("-19, -22, -14, 20, -15, -24, -17, 19, 30, -10"), -4082823360000)
  // // console.log(multiplyNums("1, 13, 0, -11, 26, -17, 21"), 0)
  // // console.log(multiplyNums("-25, -19, 7, -26, -26"), 2247700)
  // // console.log(multiplyNums("-4, -16, -22, -3, -6"), -25344)
  // // console.log(multiplyNums("-22, 11, 19, 5, 19, -9, -13, 20, -29"), 29641926600)
  // // console.log(multiplyNums("-25, 22"), -550)
  // // console.log(multiplyNums("-25"), -25)
  
  
  // //59.   //////////////////Censor words longer than 4 characters
  // // Create a function that takes a string and censors words over four characters with *.
  
  // // Examples
  // // censor("The code is fourty") ➞ "The code is ******"
  
  // // censor("Two plus three is five") ➞ "Two plus ***** is five"
  
  // // censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
  // // Notes
  // // Don't censor words with exactly four characters.
  // // If all words have four characters or less, return the original string.
  // // The amount of * is the same as the length of the word.
  
  //  {
  //     // ///////////////solution 1   //////////////use loop
      
  
  //     /////////////// solution 2  ////////////use map to solve
      
      
  // }
  
  // // console.log(censor("The code is fourty"))//,"The code is ******", "Example #1")
  // // console.log(censor("Two plus three is five"))//,"Two plus ***** is five", "Example #2")
  // // console.log(censor("aaaa aaaaa 1234 12345"))//,"aaaa ***** 1234 *****", "Example #3")
  // // console.log(censor("abcdefghijklmnop"))//,"****************")
  // // console.log(censor("a"))//,"a")
  
  // //60.    ///////////////////////is the word an isogram?
  
  // // Is the Word an Isogram?
  // // An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
  
  // // Examples
  // // isIsogram("Algorism") ➞ true
  
  // // isIsogram("PasSword") ➞ false
  // // // Not case sensitive.
  
  // // isIsogram("Consecutive") ➞ false
  // // Notes
  // // Ignore letter case (should not be case sensitive).
  // // All test cases contain valid one word strings.
  
  
  // {
  
  //     ////////////////////////// solution 1
  
  // // /////////////////solution 2  ////////////use filter to solve
  
  
  
  // ////////////////////////////////////////// solution 3   use reduce to solve
  
  
  
  
  // }
  
  
  // // console.log(isIsogram("Algorism"))//, true)
  // // console.log(isIsogram("PasSword"))//, false)
  // // console.log(isIsogram("Dermatoglyphics"))//, true)
  // // console.log(isIsogram("Cat"))//, true)
  // // console.log(isIsogram("Filmography"))//, true)
  // // console.log(isIsogram("Consecutive"))//, false)
  // // console.log(isIsogram("Bankruptcies"))//, true)
  // // console.log(isIsogram("Unforgivable"))//, true)
  // // console.log(isIsogram("Unpredictably"))//, true)
  // // console.log(isIsogram("Moose"))//, false)
  
  
  
  
  
    
    
    
  // //61.   //////////////////////////////////////loops-multiple conditions///////////////////////////////////////////
  // // Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
  // // Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
  
  // // BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
  
  // // {
  
  // //   }
    
  // //   // Uncomment these to check your work!
  // //   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
  // //   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  
  
  // //   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  
  // //62.    ///////////////////////////
  //  {
  
  
  // }
  
  // // /*** Uncomment these to check your work! ***/
  // // write a function called multBy3;
  // // write a function called divBy4 
  // // write a function called subtract5 
  // // console.log(commutative(multBy3, divBy4, 11)); // should log: true
  // // console.log(commutative(multBy3, subtract5, 10)); // should log: false
  // // console.log(commutative(divBy4, subtract5, 48)); // should log: false
   
  // //63.    ///////////////////// Challenge 11
  //  {
  
  // }
  
  // // const cities = {
  // // London: 'LONDON',
  // // LA: 'Los Angeles',
  // // Paris: 'PARIS',
  // // };
  // // console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}f
  
  
  
  
  
  // //64.      // CHALLENGE 6///////////////////////////////////////
  // //  {
  
  // // }
  
  
  // // 65.   ////////////////////////// CHALLENGE 7
  // //  {
  
  
  // // }
  
  // // // /*** Uncomment these to check your work! ***/
  // // // write teh function for (['Victoria', 'Juan', 'Ruth'])
  
  
  // // //  // => should log 'Victoria'
  // // //  // => should log 'Juan'
  // // //  // => should log 'Ruth'
  // // //  // => should log 'Everyone accounted for'
  
  
  // //66.  ..................///////////////////// // CHALLENGE 8
  // //  {
  
  // // }
  
  // // // /*** Uncomment these to check your work! ***/
  // // // write a function for  multiplyBy2 
  // // // write the function for the callback  aka saveOutput(multiplyBy2, 'boo');
  
  
  // // // ; // => should log 4
  // // // ; // => should log 18
  // // // ')); // => should log { 2: 4, 9: 18 }
  
  
  // // // CHALLENGE 4
  // //  {
  
  // // }
  
  // // // /*** Uncomment these to check your work! ***/
  // // // write the callback function
  
  
  // // //  // => should log 6   include 4,
  // // //  // => should log 6   include  10, 
  // // //  // => should log 6   include  9001
  
  
  // // // CHALLENGE 5
  // //  {
  
  // // }
  
  // // // /*** Uncomment these to check your work! ***/
  // // // write a function that will console log hello 
  
  
  // // //write the callback function
  
  
  // // // // => nothing is printed
  // // // // => nothing is printed
  // // // // => 'hello' is printed
  
  
  
  
  // /////////////////////////////////callbacks
  // // Type JavaScript here and click "Run Code" or press Ctrl + s
  
  
      
      
  //     // Challenge 12
  //  {
  
  // }
  
  // // /*** Uncomment these to check your work! ***/
  // // const isOdd = function(num) { return num % 2 === 1; };
  // // console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  // // console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
      
      
  //     // Challenge 13
  //  {
  
  // }
  
  // // /*** Uncomment these to check your work! ***/
  //   // write a function called  startsWithS ;
  
  //   // console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log: // ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
      
      
  //     // Challenge 14
  //  {
  
  // }
  
  // // /*** Uncomment these to check your work! ***/
  // // console.log(countBy([1, 2, 3, 4, 5], function(num) {
  // // if (num % 2 === 0) return 'even';
  // // else return 'odd';
  // // })); // should log: { odd: 3, even: 2 }
  
      
  //     // Challenge 15
  
      
      
  //     // Challenge 16
  //  {
  
  // }
  
  // // /*** Uncomment these to check your work! ***/
  // // create an object that contains the following { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
  
  
  // // writea function called  startsWithBird, where you determine if the first part of the word has 'bird'
  
  // // console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
  
      
  //     // Challenge 17
  
  
  
  // // Challenge 18
  //  {
  
  
  // }
  
  // // /*** Uncomment these to check your work! ***/
  // // const startingObj = {};
  // // write a an object that contains {6:3,2:1,12:4}
  // // const half = n => n / 2;
  // // console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }
      
      
  
      
  
  
  
  
  
  
  
  
  
  // //////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
  // // Write a function that takes an input character and returns that character repeated 5 times using recursion. 
  // // For example, if the input is 'g', then the output should be 'ggggg'.
  // //////////////////////////////example////////////////////////////
  // // Input: {String} char
  // // Output: {String}
  // ////////////////////////////example///////////////////////////////
  
  // // console.log('Hello, world!');
  // // // add code here////
  // // function repeater(char, num=0, output =""){
  
  // // }
  
  // // // To check if you've completed the challenge, uncomment these console.logs!
  // // console.log(repeater('g'));
  // // console.log(repeater('j'));
  
  
  // /////////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
  // // Write a function that returns the factorial of a number.
  
  // // EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
  // ///////////////////////////////////example//////////////////////////////////////////
  // // Input: {Number} num - number whose factorial is sought
  // // Output: {Number}
  // ///////////////////////////////////example//////////////////////////////////////////
  // // // add code here////
  // // function factorial(num, product=1){
  
  // // }
  // // // To check if you've completed the challenge, uncomment these console.logs!
  // // console.log(factorial(4)); // -> 24
  // // console.log(factorial(6)); // -> 720
  // // console.log(factorial(0)); // -> 1
  
  
  
  
  // ////////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
  // // Get the length of an array using recursion without accessing its length property.
  // // ///////////////////////////////////example//////////////////////////////////////////
  // // Input: {Array} array - array whose length is sought
  // // Output: {Number}
  // // ///////////////////////////////////example//////////////////////////////////////////
  // // // add code here////
  // // function getLength(arr){
  
  
  // // }
  // // // To check if you've completed the challenge, uncomment these console.logs!
  // // console.log(getLength([1])); // -> 1
  // // console.log(getLength([1, 2])); // -> 2
  // // console.log(getLength([1, 2, 3, 4, 5])); // -> 5
  // // console.log(getLength([])); // -> 0
  
  // ////////////////////////////////////////////////// Challenge: POW///////////////////////////////////////////////////////////////////////////////////
  // // Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. 
  // // For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.
  
  // // ///////////////////////////////////example//////////////////////////////////////////
  // // Input 1: {Number} base - base number raised to the exponent
  // // Input 2: {Number} exponent - exponent the base is raised to
  // // Output: {Number} - expected value of base raised to exponent
  // // ///////////////////////////////////example//////////////////////////////////////////
  // // // add code here////
  // // function pow(base, exponent){
  
  
  // // }
  // // // To check if you've completed the challenge, uncomment these console.logs!
  // // console.log(pow(2, 4)); // -> 16
  // // console.log(pow(3, 5)); // -> 243
  
  
  
  
  
  // //////////////////////////////////////////////////////////////// Challenge: Repeater//////////////////////////////////////////////////////////////////////////////////////////////////////////
  // // Write a function that takes an input character and returns that character repeated 5 times using recursion. 
  // // For example, if the input is 'g', then the output should be 'ggggg'.
  // //////////////////////////////example////////////////////////////
  // // Input: {String} char
  // // Output: {String}
  // ////////////////////////////example///////////////////////////////
  
  // // console.log('Hello, world!');
  // // // // add code here////
  // // function repeater(char,num=0,output=""){
  
  
  
  // // }
  // // // To check if you've completed the challenge, uncomment these console.logs!
  // // console.log(repeater('g'));
  // // console.log(repeater('j'));
  
  
  // /////////////////////////////////////////////////////////////////////// /Challenge: Factorial///////////////////////////////////////////////////////////////////////////////////////////
  // // Write a function that returns the factorial of a number.
  
  // // EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
  // ///////////////////////////////////example//////////////////////////////////////////
  // // Input: {Number} num - number whose factorial is sought
  // // Output: {Number}
  // ///////////////////////////////////example//////////////////////////////////////////
  // // // // add code here////
  // // function factorial(num, product=1){
  
  
  // // }
  
  
  // // // // To check if you've completed the challenge, uncomment these console.logs!
  // // console.log(factorial(4)); // -> 24
  // // console.log(factorial(6)); // -> 720
  // // console.log(factorial(0)); // -> 1
  
  
  
  
  // ////////////////////////////////////////////////////////////////////Challenge: getLength/////////////////////////////////////////////////////////////////////////////////////////
  // // Get the length of an array using recursion without accessing its length property.
  // // ///////////////////////////////////example//////////////////////////////////////////
  // // Input: {Array} array - array whose length is sought
  // // Output: {Number}
  // // ///////////////////////////////////example//////////////////////////////////////////
  // // // // add code here////
  
  // // function getLength(array, length=0){
  
      
  
  
  // // }
  
  // // // // To check if you've completed the challenge, uncomment these console.logs!
  // // console.log(getLength([1])); // -> 1
  // // console.log(getLength([1, 2])); // -> 2
  // // console.log(getLength([1, 2, 3, 4, 5])); // -> 5
  // // console.log(getLength([])); // -> 0
  
  
  
  