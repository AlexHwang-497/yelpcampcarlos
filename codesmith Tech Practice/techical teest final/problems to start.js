


// function pairElement(str) {
//     var pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   //split string into array of characters
//   var arr = str.split("");
//   //map character to array of character and matching pair
//   return arr.map(x => [x, pairs[x]]);
// }


// // //test here



// console.log(pairElement("ATCGA")) //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

// console.log(pairElement("TTGAG")) //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

// console.log(pairElement("CTCTA")) //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].




// function renderInventory(inventory) {
 
//   var outPutArray = [];
 
// //   inventory.map(items =>{
// //   for(var i = 0; i < items.shoes.length; i++){
// //     for (let shoe of items.shoes)
// //       {
// //         outPutArray.push(`${items.name}, ${shoe.name}, ${shoe.price}`)
// //       }
    
// //   }
// //    });
 
// //   return outPutArray;
//   return inventory.map((brand)=>
//                 brand.shoes.map(shoe=>
//                             brand.name+', '+shoe.name+', '+shoe.price)).flat()
// }




// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// var output = renderInventory(currentInventory);
// console.log(output);
// console.log(inventory(currentInventory))



// Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

// //...console output:
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
// // and so on...
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

// Hint: the return value is a string.

//////////////////////////////////////////////////////////////////////////////////////////




// Fashion Inventory - Part B
// 43
// Fashion Inventory Part-B
// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:
// const avgCost = arr =>{
//   return arr.map(el=> {
//     return {
//       'Designer': el.name,
//       'Shoes':el.shoes
//     }
//   })

function renderInventory(inventory) {
   
  const arrayOfPrices = inventory.map(brand=> {return { name : brand.name, avgPrice : avgPriceOfShoes(brand.shoes) }})
  return {
    designers : arrayOfPrices
  }
  // return inventory.
}



function avgPriceOfShoes(shoes) {
  let total = shoes.reduce((acc, shoe) => acc += shoe.price, 0);
  return total / shoes.length;
}

console.log(renderInventory(currentInventory))
  

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// console.log(avgCost(currentInventory))
// Your function should return the average cost of all shoes per designer in this format:

// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };
// There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

//////////////////////////////////////////////////////////////////////////////////////////

// function renderInventory(inventory) {
 
//   var outPutArray = [];
 
// //   inventory.map(items =>{
// //   for(var i = 0; i < items.shoes.length; i++){
// //     for (let shoe of items.shoes)
// //       {
// //         outPutArray.push(`${items.name}, ${shoe.name}, ${shoe.price}`)
// //       }
    
// //   }
// //    });
 ////////////////////////////thiis is the right answer
// //   return outPutArray;
//   return inventory.map((brand)=>
//     brand.shoes.filter(shoe=> {
//      if(shoe.name.includes('black')) {
//     	return brand.name+', '+shoe.name+', '+shoe.price
//     }
//   })).flat()
// }
////////////////////////////////////////
return inventory.map((brand)=>
                brand.shoes.map(shoe=>
                            brand.name+', '+shoe.name+', '+shoe.price))
															.filter(el => el.includes('black') ? el : '').flat()


// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// var output = renderInventory(currentInventory);
// console.log(output);


// Fashion Inventory - Part C
// 44
// Fashion Inventory Part-C
// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A. Here is an example of the console output:

// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Gucci, black leather laced sneakers, 900
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

//////////////////////////////////////////////////////////////////////////////////////////




// Fashion Inventory - Part D
// 45
// Fashion Inventory Part-D
// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// var currentInventory = [
//     {
//       name: 'Brunello Cucinelli',
//       shoes: [
//         {name: 'tasselled black low-top lace-up', price: 1000},
//         {name: 'tasselled green low-top lace-up', price: 1100},
//         {name: 'plain beige suede moccasin', price: 950},
//         {name: 'plain olive suede moccasin', price: 1050}
//       ]
//     },
//     {
//       name: 'Gucci',
//       shoes: [
//         {name: 'red leather laced sneakers', price: 800},
//         {name: 'black leather laced sneakers', price: 900}
//       ]
//     }
//   ];
//   // The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this:
  
//   var expectedResult = [
//     {
//       "nameWords": [
//         "tasselled",
//         "black",
//         "low-top",
//         "lace-up"
//       ],
//       "targetWordIndex": 3
//     },
//     {
//       "nameWords": [
//         "tasselled",
//         "green",
//         "low-top",
//         "lace-up"
//       ],
//       "targetWordIndex": 3
//     },
//     {
//       "nameWords": [
//         "red",
//         "leather",
//         "laced",
//         "sneakers"
//       ],
//       "targetWordIndex": 2
//     },
//     {
//       "nameWords": [
//         "black",
//         "leather",
//         "laced",
//         "sneakers"
//       ],
//       "targetWordIndex": 2
//     }
//   ];
  
  
//   let str = 'tasselled black low-top lace-up';
//   let substr = 'lace';
//   const findIndexPosition = (str, substr) => {
//     let conv = str.split(' ')
    
//     for(let i=0;i<conv.length;i++){
//       if(conv[i].includes(substr)){
//         return {
//           nameWords:conv,
//           targetWordIndex:i
          
//         }
        
//       }
//     }
    
//   }
//   console.log(findIndexPosition(str,substr))
  
  
  
  
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

// const getPermutations = (arr,result =[]) => {
//   if(arr.length===0){return result}
//   if(arr.length ===1){return [arr]}
// 	for(let i=0;i<arr.length;i++){
//     let current = arr[i]
//     let remainingNum = arr.slice(0,i).concat(arr.slice(i+1))
//     let remainNumPermuted = getPermutations(remainingNum)
//     for(let j=0;j<remainNumPermuted.length;j++){
//       result.push([current].concat(remainNumPermuted[j]))
//     }
//   }
// return result
  
  
// }



// //      {

// //     }
    
//     console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
//     console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
  



// //15.  ////////////////////////////////////////// // CHALLENGE 13
// // There's no such thing as private properties on a JavaScript object! But, maybe there are? 
// // Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. 
// // getSecret() which returns the secret setSecret() which sets the secret


// const createSecretHolder=(secret)=>{
    // let num = secret
    // return {
    //   getSecret(){
    //     console.log(num)
    //   },
    //   setSecret(input){
    //     num=input
    //     console.log('')
    //   }
  //     let obj = {}
  //     let num = secret 
  //     return function(input){
  //       return  obj ={
  //         getSecret(){
  //         console.log(num)
  //       },
  //       setSecret(input){
  //         num=input
  //         console.log('')
  //       }}
  //     }
  //   // return obj
      
      
    // }
    
  // }
  // // // // /*** Uncomment these to check your work! ***/
  // // // // // write the function///// start with secret as 5
  // let obj = createSecretHolder(5)
  
  // obj.getSecret()// // //  // => returns 5
  // obj.setSecret(2)/// // //  // => shoule return blank
  // obj.getSecret()// // //  // => returns 2
  



  // You are given coins of different denominations and a total amount of money. 
// Write a function to compute the fewest number of coins that you need to make up that amount.
//  If that amount of money cannot be made up by any combination of the coins, return -1.
//   You may assume that you have an infinite number of each kind of coin.

// const coinChange = (arr,amount) => {
//     debugger
//   let count = 0
//   let sum = amount
//   for(let i=0;i<arr.length;i++){
//     count+=Math.floor(amount/arr[i])
//     amount%=arr[i]
//   }
//   return count
// }
// console.log(coinChange([25, 10, 5, 1], 5));      // 1
// console.log(coinChange([25, 10, 5, 1], 20));     // 2
// console.log(coinChange([25, 10, 5, 1], 90));     // 5



/*
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

/////////////////////////////////////////////////////////////////////////////////////


// Convert Array To Object 3
// 5
// Convert Array To Object 3
// Submitted on Today at 8:01 AM
// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

// The argument will look like this:

// const transformEmployeeData = arr => {
//   let result = []
//   for(let el of arr){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//       obj[el[i][0]] = el[i][1]
//     }
//     result.push(obj)
//   }
//   return result
// }

// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];

// console.log(transformEmployeeData(input))
// Given that input, the return value should look like this:

// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows or different keys than the given sample.

// For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.


//////////////////////////////////////////////////////////////////////////////////////////////////////




// Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

// // Argument:
// const convertObjectToArray = obj =>{
//   let result = []
//   for(let key in  obj){
//     result.push([key,obj[key]])
//   }
//   return result
  
// }
// var input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// };
// console.log(convertObjectToArray(input))
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]




// Write a function called "joinArrayOfArrays".

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.
// const joinArrayOfArrays = arr =>{
//   // return arr.flat()
//   return arr.reduce((acc,curr)=>{
//     acc=acc.concat(curr)
//     return acc
    
//   })
// }
// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']




// Write a function called "greetCustomer".
// var customerData = {
//   'Joe': {
//     visits: 1
//   },
//   'Carol': {
//     visits: 2
//   },
//   'Howard': {
//     visits: 3,
//   },
//   'Carrie': {
//     visits: 4
//   }
// };

// Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.

// The greeting should be different, depending on the name on their reservation.

// // Case 1 - Unknown customer ( Name is not present in customerData ):
// const greetCustomer = name =>{
//   if(!customerData[name]){
//     return 'welcome is this your first time?'
//   } else if (customerData[name]['visits']===1){
//     return 'welcome back ' + name + ' weare glade you liked us the first time'
//   } else if (customerData[name]['visits']>1){
//     return 'welcome back ' + name + ' so glad to see you again'
//   }
// }
// var output = greetCustomer('Terrance');
// console.log(output); // --> 'Welcome! Is this your first time?'
// // Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

// var output = greetCustomer('Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
// // // Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
// // Notes:

// const detectOutlierValue = (str)=>{
//   debugger
//   let conv = str.split(' ')
//   let status = ''
//   for(let i=0;i<conv.length;i++){
//     if(conv[0]%2===0){
//       status = 'even'
//     } else if(conv[0]%2!==0){
//       status = 'odd'
//     }
//     if(status==='even'){
//       if(conv[i]%2!==0){
//         return i+1
//       }
//     } else if (status==='odd'){
//       if(conv[i]%2==0){
//         return i+1
//       }
//     }
//   }
//   return true
// }
// console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
// console.log(detectOutlierValue("1 10 1 1")) //=> 2 - Second number is even, while the rest of the numbers are odd



/*
Declare a variable 'myNums' and set it to an object.
On that object you will have two key-value pairs. One key will be 'favoriteNumber' and its value will be your favorite number.
The other key will be 'randomNumber' and its value will be 12.
*/

const myNums ={
  favoriteNumber : 15,
  randomNumber: 12
  
}
// console.log(myNums)
/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps. 'largestSwap' should return a boolean.
For example, if 27 is our our input, we should return false because swapping the digits gives us 72, and 72 > 27.
Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.
*/

const largestSwap = num =>{
  let conv = num.toString()
  .split('')
  .reverse()
  .join('')
  return parseInt(conv)<num
  
}
// console.log(largestSwap(72))
// console.log(largestSwap(34))
// }





// Check that your 'largestSwap' function is working correctly by passing the value of 'randomNumber' on your 'myNums' object to your 'largestSwap' function
// console.log(largestSwap(myNums['randomNumber']))


/*


Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.

Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

// const countTimes = (arr,val)=>{
//   let count = 0
//   for(let el of arr){
//     if(el===val){
//       count++
//     }
//   }
//   return count
  
// }
// console.log(countTimes([1, 8, 9, 9, 10], 9))


// Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
// "wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.

// Example:
// const wordSearchLetterCounter = (arr,letter)=>{
//   let output = 0
//   for(let el of arr){
//     output+=countTimes(el,letter)
//   }
//   return output
// }
// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D")) //➞ 3
// "D" shows up 3 times: twice in first row, once in third row.
// */



  


// Create a function "countChar" that takes two arguments (an input string and a target string).
// "countChar" will return the number of times the target string is found in the input string.

// Example:
// const countChar = (str,letter,count=0,index=0) =>{
// //   if(str.length===0){return count}
// //   let newStr = str.slice(1)
// //   if(str[0]===letter){count++}
// //   return countChar(newStr,letter,count)
  
//   if(str[index]===letter){count++}
//   if(str[index]===undefined){return count}
//   index++
//   return countChar(str,letter,count,index)
  
// }
// console.log(countChar('hello world', 'o'))//; -> 2
// console.log(countChar('javascript', 'j'))//; -> 1
// // Note: Do not use any native JS methods, or loops.

    
    
/*
Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe". "passwordSafe" should return a function that takes in a password as a string.
If that password doesn’t match the one originally provided, return the string “You have entered the wrong password”. If the passwords do match, return the safe.



Example:
*/

// function passwordSafe(password,safe){
//   return function(str){
//     if(str!==password){
//       return 'You have entered the wrong password'
      
//     } else if (str===password){
//       return safe
//     }
    
//   }
  
// }
// const mySafe = passwordSafe('myPassword', 'My Super Secret');
// console.log(mySafe('wrongPassword'))// -> "You have entered the wrong password"
// console.log(mySafe('myPassword'))// -> "My Super Secret"

//////////////////////////////////////////////////////////////////////adam's test


    // Declare a variable 'number' and set it to the value 10.
const number  = 10
/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
//create func addNumbers with param num
const addNumbers = num =>{
  let output = 0
  for(let i=0;i<=num;i++){
    output+=i
  }
  return output
}
// console.log(addNumbers(4))

/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
const between50And500 = num =>{
  return num<500 && num>50
}
// console.log(between50And500(50))
// console.log(between50And500(500))
// console.log(between50And500(55))
/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/
const divBy100 = num =>{
  return num%100===0
}
// console.log(divBy100(1000))
// console.log(divBy100(455))
// console.log(divBy100(100))

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/
const negativeOrEven = num =>{
  return num<0 || num%2===0
}

// console.log(negativeOrEven(45))
// console.log(negativeOrEven(44))
// console.log(negativeOrEven(5))
// console.log(negativeOrEven(-8))

/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/
// const passAllTest = (arr,val) =>{
//   return arr.reduce((acc,curr)=>{
//     acc.push(curr(val))
//     return acc
//   },[]).every(el=>el===true)
  
// }

// const fnArr = [between50And500,divBy100,negativeOrEven]
// console.log(passAllTest(fnArr,400))
// console.log(passAllTest(fnArr,5))
/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally passed to "add"
Example:
*/

// const add = num =>{
//   return function(inp){
//     return inp + num
//   }
  
// }
// const addBy10 = add(10)
// console.log(addBy10(20))// -> 30


// Create a function "addOne" that takes a number as and argument and returns that number plus one

// const addOne = n => n+1
// Create a function "subtractOne" that takes a number as and argument and returns that number minus one
// const subtractOne = n =>n-1
/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.
Example:
*/
//input: str with nums and letters
//output: str with only nums


// const usePotions = str =>{
//   let conv = str.split('')
//   for(let i=0;i<conv.length;i++){
//     if(conv[i]==='A'){
//       conv.splice(i,1)
//       conv.splice(i-1,1,addOne(parseInt(conv[i-1])))
//     } else if(conv[i]==='B'){
//       conv.splice(i,1)
//       conv.splice(i-1,1,subtractOne(parseInt(conv[i-1])))
//     }
//   }
//   return conv.join('')
  
// }

// console.log(usePotions("3A78B51"))// ➞ "47751"// 3 grows to 4, 8 shrinks to 7
// console.log(usePotions("9999B"))// ➞ "9998"
// console.log(usePotions("9A123"))// ➞ "10123"
// console.log(usePotions("567"))// ➞ "567"


// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
//create func geLength with params str, index set to 0, count set to 0
// const getLength = (str,index=0,count=0)=>{
//   if(str[index]===undefined){return count}
//   count++
//   index++
//   return getLength(str,index,count)
  
// }
// console.log(getLength('hello'))
// console.log(getLength('yup'))

/*
Write a function called 'transpose' that accepts a two dimensional array and 
// returns a transposed version of that array.
Example:
*/
//input: array of arrays
//output: an array of two arrays
//create func transpose takes an arr
// const transpose = arr=>{
  
  
  // https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
  // let fResult = []
  // let sResult = []
  // for(let el of arr){
  //   fResult.push(el[0])
  // }
  // for(let el of arr){
  //   sResult.push(el[1])
  // }
  // return [fResult,sResult]
  // let fResult = []
  // let sResult  = []
  // for(let el of arr){
  //   for(let i=0;i<el.length;i++){
  //     fResult.push(el[0])
  //     sResult.push(el[i][1])
  //   }
  // }
  // return fResult
  
//     let result = []
  
//   for(let el of arr){
//     let obj = {}
//     for(let i=0;i<el.length;i++){
//       obj[el[i][0]]= el[i][1]
      
//     }
//     result.push(obj)
//   }
// //   return result
//         var newArray = [];
//     for(var i = 0; i < arr.length; i++){
//         newArray.push([]);
//     };

//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < arrLength; j++){
//             newArray[j].push(arr[i][j]);
//         };
//     };

//     return newArray;
  
// }
// const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
// console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Take a look at the object we've provided in the code editor. The user object contains three keys. 
// The data key contains five keys, one of which contains an array of friends. 
// From this, you can see how flexible objects are as data structures. 
// We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the 
// name of the friend argument to the array stored in user.data.friends and returns that array.

// let user = {
//   name: "Kenneth",
//   age: 28,
//   data: {
//     username: "kennethCodesAllDay",
//     joinDate: "March 26, 2016",
//     organization: "freeCodeCamp",
//     friends: ["Sam", "Kira", "Tomo"],
//     location: {
//       city: "San Francisco",
//       state: "CA",
//       country: "USA"
//     }
//   }
// };

// function addFriend(userObj, friend) {
//    userObj['data']['friends'].push(friend)
//   return userObj
  

// }

// console.log(addFriend(user, "Pete"));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
//   return Object.keys(obj)

// }

// console.log(getArrayOfUsers(users));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function confirmEnding(str, target) {
//   let a =str.slice(-target.length)
//   return a
//   return str.slice(-target.length)===target

// }

// console.log(confirmEnding("Bastian", "n"))
// console.log(confirmEnding("He has to give me a new name", "name"))// should return true.
// console.log(confirmEnding("Open sesame", "same"))// should return true.
// console.log(confirmEnding("Open sesame", "sage"))// should return false.
// console.log(confirmEnding("Open sesame", "game"))// should return false.
// console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"))// should return false.
// console.log(confirmEnding("Abstraction", "action"))// should return true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function titleCase(str) {
//   let conv = str.toLowerCase().split(' ')
//   let result =[]
//   for(let el of conv){
//     result.push(el[0].toUpperCase()+el.slice(1))
    
    
//   }
//   return result.join(' ')
  
 
// }



// console.log(titleCase("I'm a little tea pot")) //should return the string I'm A Little Tea Pot.
// console.log(titleCase("sHoRt AnD sToUt")) //should return the string Short And Stout.
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) //should return the string Here Is My Handle Here Is My Spout.


// //20.  ////////////////////////////////////////////////////////////////////capitalizeFirst/////////////////////////////////////////////////////////

// // given an array of String, capitlzie the first letter of each string in the array

// // //  {
// const capitalizeFirst = (arr,index=0,result=[]) => {
//   // if(arr.length===0){return result}
//   // let newArr = arr.slice(1)
//   // result.push(arr[0][0].toUpperCase()+arr[0].slice(1))
//   // return capitalizeFirst(newArr,index,result)
  
// //   if(arr[index]===undefined){return result}
// //   result.push(arr[index][0].toUpperCase()+arr[index].slice(1))
// //   index++
// //   return capitalizeFirst(arr,index,result)
  
// }
  
// }
// // //   }
  
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']



// //21  ////////////////////////////////////////////////////////////////////capitalize/////////////////////////////////////////////////////////
// // given an array of words, return an new array conating each word captialzied

// // //  {
// const capitalizeFirst = (arr,index=0,result=[]) => {
//   // if(arr.length===0){return result}
//   // let newArr = arr.slice(1)
//   // result.push(arr[0].toUpperCase())
//   // return capitalizeFirst(newArr,index,result)
  
//   if(arr[index]===undefined){return result}
//   result.push(arr[index].toUpperCase())
//   index++
//   return capitalizeFirst(arr,index,result)
  
// } 

// // // //   }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function frankenSplice(arr1, arr2, n) {
//   // let result = []
//   // for(let i=0;i<arr2.length;i++){
//   //   if(i===n){
//   //     result.push(arr1)
//   //   } else{
//   //     result.push(arr2[i])
//   //   }
//   // }
//   // return result.concat(arr2[arr2.length-1]).flat()
//   let localArr = arr2.slice()
//   for(let i=0;i<arr1.length;i++){
//     localArr.splice(n,0,arr1[i])
//     n++
//   }
//   return localArr

// return arr2.slice(0,n).concat(arr1).concat(arr2.slice(n))


// }


// console.log(frankenSplice([1, 2, 3], [4, 5], 1)) //should return [4, 1, 2, 3, 5].

// console.log(frankenSplice([1, 2], ["a", "b"], 1)) //should return ["a", 1, 2, "b"].

// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)) //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//   let falsy = [false, null, 0, "", undefined, NaN]
//   let result = []
//   for(let i=0;i<arr.length;i++){
//     if(!falsy.includes(arr[i])){
//       result.push(arr[i])
//     }
//   }
//   return result

// }

// console.log(bouncer([7, "ate", "", false, 9])) //should return [7, "ate", 9].

// console.log(bouncer(["a", "b", "c"])) //should return ["a", "b", "c"].

// console.log(bouncer([false, null, 0, NaN, undefined, ""])) //should return [].

// console.log(bouncer([null, NaN, 1, 2, undefined])) //should return [1, 2].

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//   let falsy = [false, null, 0, "", undefined, NaN]
//   let result = []
//   for(let i=0;i<arr.length;i++){
//     if(!falsy.includes(arr[i])){
//       result.push(arr[i])
//     }
//   }
//   return result

// }

// console.log(bouncer([7, "ate", "", false, 9])) //should return [7, "ate", 9].

// console.log(bouncer(["a", "b", "c"])) //should return ["a", "b", "c"].

// console.log(bouncer([false, null, 0, NaN, undefined, ""])) //should return [].

// console.log(bouncer([null, NaN, 1, 2, undefined])) //should return [1, 2].




// console.log(bouncer([null, NaN, 1, 2, undefined])) //should return [1, 2].

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Only change code below this line

// var ratings = watchList.map(el=>{
//   return {
//     title:el.Title,
//     rating:el.imdbRating
//   }
// });

// console.log(ratings)



// function getRating(watchList){
//  return watchList.filter(el=>el.Director==='Christopher Nolan')
//   .map(elem=>Number(elem.imdbRating))
//   .reduce((acc,curr)=>{
//    acc=acc+curr
//    return acc
//  })/watchList.filter(el=>el.Director==='Christopher Nolan').length
// }

// console.log(getRating(watchList))

// The getRating(watchList) should equal 8.675.




// ratings should equal [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}].




// console.log(filteredList); //filteredList should equal [{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}].

// function getRating(watchList){
//  return watchList.filter(el=>el.Director==='Christopher Nolan')
//   .map(elem=>Number(elem.imdbRating))
//   .reduce((acc,curr)=>{
//    acc=acc+curr
//    return acc
//  })/watchList.filter(el=>el.Director==='Christopher Nolan').length
// }

// console.log(getRating(watchList))

// The getRating(watchList) should equal 8.675.





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function urlSlug(title) {
// //   let conv =  title.toLowerCase().trim().split(' ').join('-')
// //   return conv
//   return title.toLowerCase()
//   .split(' ')
//   .filter(el=>el!=='')
//   .join('-')
 
// }


// console.log(urlSlug("Winter Is Coming")) //should return the string winter-is-coming.

// console.log(urlSlug(" Winter Is  Coming")) //should return the string winter-is-coming.

// console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")) //should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.

// console.log(urlSlug("Hold The Door")) //should return the string hold-the-door.



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function diffArray(arr1, arr2) {
//   let arr = [arr1,arr2]
//   // return arr
//   // return arr1.concat(arr2)
//   // .filter(el=>!arr1.includes(el)|| !arr2.includes(el))
  
  
//   // return arr.reduce((acc,curr)=>{
//   //   return acc.concat(el=>!acc.includes(el))
//   // },)
// }



// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //should return ["pink wool"].
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //should return ["diorite", "pink wool"].
// console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])) //should return [].

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) //should return [4].
// console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])) //should return ["piglet", 4].
// console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])) //should return ["snuffleupagus", "cookie monster", "elmo"].
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])) //should return [1, "calf", 3, "piglet", 7, "filly"].



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function destroyer(arr) {
//   let comp = Object.values(arguments).slice(1)
//   // return comp
//   let result = []
  
//   for(let el of arr){
//     if(!comp.includes(el)){
//       result.push(el)
//     }
//   }
//   return result
  
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) //should return [1, 1].

// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)) //should return [1, 5, 1].

// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)) //should return [1].

// console.log(destroyer([2, 3, 2, 3], 2, 3)) //should return [].

// console.log(destroyer(["tree", "hamburger", 53], "tree", 53)) //should return ["hamburger"].

// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")) //shoul

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function whatIsInAName(collection, source) {
//   let fKeys = Object.keys(source)
//   // return fKeys
//   return collection.filter((el)=> {
//     debugger
//     for (let i = 0; i < fKeys.length; i++) {
//       if (
//         !el.hasOwnProperty(fKeys[i]) ||
//         el[fKeys[i]] !== source[fKeys[i]]
//       ) {
//         return false;
//       }
//     }
//     return true;
//   });
 
// }


// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })) //should return [{ first: "Tybalt", last: "Capulet" }].
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })) //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })) //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})) //should return []c





// function myReplace(str, before, after) {
//   let obj ={}
//   if(before[0]===before[0].toUpperCase()){
//     after =after[0].toUpperCase()+after.slice(1) 
//   	obj[before]=after

//   }else if(after[0].toUpperCase()===after[0]){
//     obj[before]=after.toLowerCase()
    
//   } else {
//     obj[before]=after
    
//   }
//   for(let key in obj){
//     str=str.replace(key,obj[key])
//   }
//   return str
   
// }





// console.log(myReplace("Let us go to the store", "store", "mall")) //should return the string Let us go to the mall.

// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) //should return the string He is Sitting on the couch.

// console.log(myReplace("I think we should look up there", "up", "Down")) //should return the string I think we should look down there.

// console.log(myReplace("This has a spellngi error", "spellngi", "spelling")) //should return the string This has a spelling error.

// console.log(myReplace("His name is Tom", "Tom", "john")) //should return the string His name is John.

// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")) //should return the string Let us get back to more Algorithms.



 // function dropElements(arr, func) {
//   let result = []
//   for(let el of arr){
    
//   }
 
// }



// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})) //should return [3, 4].

// console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})) //should return [1, 0, 1].

// console.log(dropElements([1, 2, 3], function(n) {return n > 0;})) //should return [1, 2, 3].

// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})) //should return [].

// console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})) //should return [7, 4].

// console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})) //should return [3, 9, 2].



// //4.  ////////////////////////////////////////////////////////////////// //CHALLENGE 18

// // Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). 
// // The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). 
// // Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space).
// //  However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space).
// //  If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.


// // /*** Uncomment these to check your work! ***/
// const makeHistory = limit =>{
//   let result =[]
//   return function(str){
//     if(str==='undo'){
//       if(!result.length){
//         return 'nothing to undo'
//       }
//       let strUndo = result[result.length-1]
//       result=result.slice(0,-1)
//       return strUndo + ' undone'
      
//     }
//     result=[...result,str].slice(limit===result.length?limit-1:0)
//     return str + ' done'
//   }
  
// }

// // // write the callback function w/ a limit of 2
// const histMaking = makeHistory(2)

// console.log(histMaking('jump')) // => should log 'jump done'
// console.log(histMaking('undo'))  // => should log 'jump undone'
// console.log(histMaking('walk')) // => should log 'walk done'
// console.log(histMaking('code')) // => should log 'code done'
// console.log(histMaking('pose')) // => should log 'pose done'
// console.log(histMaking('undo'))  // => should log 'pose undone'
// console.log(histMaking('undo'))  // => should log 'code undone'
// console.log(histMaking('undo'))  // => should log 'nothing to undo'


// //6.  //////////////////////////////////////////////////Challenge 6
// // Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.

//  {

// const flattenRecursively = (arr,result=[],index=0) =>{
//   // if(arr.length===0){return result}
//   // let newArr=arr.slice(1)
//   // if(Array.isArray(arr[0])){
//   //   return flattenRecursively(arr[0].concat(newArr),result,index)
//   // }
//   // result.push(arr[0])
//   // return flattenRecursively (newArr,result,index)
  
  
//   // if(arr[index]===undefined){return result}
//   // let newIndex = index+1
//   // if(Array.isArray(arr[index])){
//   //   return flattenRecursively(arr[index].concat(arr),result,newIndex)
//   // }
//   // result.push(arr[index])
//   // return flattenRecursively(arr[index],result,newIndex)
  
// //     if(arr[index]===undefined){return result}
// //   let newIndex = index+1
// //   if(Array.isArray(arr[index])){
// //     return flattenRecursively(arr[index].concat(arr),result,newIndex)
// //   }
// //   result.push(arr[index])
// //   return flattenRecursively(arr[index],result,newIndex)
  
  
// }
  
// }
// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]



// //9.  ////////////////////////////////////// Challenge 4
// // Write a recursive function isPrime that determines if a number is prime and returns true if it is.

//  {
// const isPrime = (num,div=3) =>{
//   if(num===2){return true}
//   if(num<2 || num%2===0){return false}
//   if(div*div>num){return true}
//   if(num%div===0){return false}
//   div++
//   return isPrime(num,div)
// }


// // }

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false



// //11.  ///////////////////////////////////////////// // CHALLENGE 11
// // Create a function dateStamp that accepts a function and returns a function. 
// // The returned function will accept however many arguments the passed-in function accepts, 
// // and return an object with a date key that contains a timestamp with the time of invocation, 
// // and an output key that contains the result from invoking the passed-in function.
// //  HINT: You may need to research how to access information on Date objects.

// //  {
// const dateStamp = func =>{
//   return function(...arg){
//     return {
//       date:Date.now(),
//       output:func(...arg)
//     }
//   }
  
// }

// // // }

// // // // /*** Uncomment these to check your work! ***/
// // // assign the function aka  ///dateStamp(n => n * 2);
// const stamped = dateStamp(n=>n*2)

// console.log(stamped(4)) //=> should log { date: (today's date), output: 8 }
// console.log(stamped(6)) //=> should log { date: (today's date), output: 12 }



////////////////////////////////////////////////////////////////////nestedEvenSum/////////////////////////////////////////////////////////
// // return the sum of all even numbers in an object which may contain nested objects;
// const nestedEvenSum = (obj,sum=0) =>{
//   for(let key in obj){
//     if(typeof obj[key]==='object'){
//       sum+=nestedEvenSum(obj[key])
//     } else if (typeof obj[key]==='number' && obj[key]%2===0){
//       sum+=obj[key]
//     }
//   }
//   return sum
  
// }


  
  
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
// // {


// }

// // // }
// const flow=(arr,input,index=0)=>{
//   // if(arr.length===0){return input}
//   // let newArr = arr.slice(1)
//   // let output=arr[0](input)
//   // return flow(newArr,output)
  
//   if(arr[index]===undefined){return input}
//   let output=arr[index](input)
//   let newIndex = index+1
//   return flow(arr,output,newIndex)
  
// }
// // // // // To check if you've completed the challenge, uncomment this code!
// // // // create a function called multiplyBy2(num) 
// const multiplyBy2 = n => n*2
// // // //  create a function called add7(num) 
// const add7 = n => n+7

// // // //  create a function called modulo4(num) 
// const modulo4 = n => n%4

// // // //  create a function called subtract10(num) 
// const subtract10 = n => n-10


// // // //  build the callback function 
// const arrCall = [multiplyBy2,add7,modulo4,subtract10]

// // // // ->should log  -7   //// use input of 2
// console.log(flow(arrCall,2))



// //17.   /////////////////////////////// Challenge 3
// // Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). 
// // The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.

// // //  {
// const palindrome = str => {
//   let conv = str.toLowerCase()
//   .split('')
//   .filter(el=>el.toUpperCase()!==el.toLowerCase())
//   .join('')
  
//   if(conv.length===1){return true}
//   if(conv.length===2){return conv[0]===conv[1]}
//   if(conv[0]===conv.slice(-1)){return palindrome(conv.slice(1,-1))}
//   return false
// }
// // }

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> falsec


// //19./////////////////////////////////////////////////////////////////////// // CHALLENGE 17
// // Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). 
// // The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array).
// //  Otherwise, the returned function should return false.

// // // //  {
// const makeFuncTester = array =>{
//   return function(func){
//     return array.every(test=>{
//       let [first,second]=test
//       return func(first)===second
//     })
//   }
// }

// // // // /*** Uncomment these to check your work! ***/
// // // // write the correct stuff
// // // ////////////////////////////create an array and create the follwing array pairs
// const array=[]
// array.push(['hello', 'hellO']);
// array.push(['goodbye', 'goodbyE']);
// array.push(['howdy', 'howdY']);


// // // //write the callback function
// const tester = makeFuncTester(array)

// // // // make a function called capLastAttempt1 where you upper case all the letters
// const capLastAttempt1 = str=>str.toUpperCase()

// // // // make a function called capLastAttempt2 where you upper case the last lettter of the word
// const capLastAttempt2 = str => str.slice(0,-1)+str.slice(-1).toUpperCase()

// // // // // => should log false
// console.log(tester(capLastAttempt1))

// // // // // => should log true
// console.log(tester(capLastAttempt2))



///////////////////////////////////////23.    

// const flooredFunc = (array,callback) => {
//   let obj = {}
//   // let result = []
//   for(let el of array){
//     if(obj[callback(el)]){
//       obj[callback(el)].push(el)
//     } else {
//       obj[callback(el)]=[el]
//     }
    
//   }
//   return obj
// }
    
    
    
    
// //     // // /*** Uncomment these to check your work! ***/
// //     // // write a function that stores these [1.3, 2.1, 2.4];
// const arr = [1.3, 2.1, 2.4]
// //     // // write a function called  floored  that gives the floored amount aka 1.2 = 1
// const floored = n => Math.floor(n)

// //     // //  // should log: { 1: [1.3], 2: [2.1, 2.4] }
// console.log(flooredFunc(arr,floored))


    // //27.   ////////////////////////////////////////////////////// // CHALLENGE 10
    // Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
    // defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's 
    // first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.
    // //  {
    
    // //   }
      
    const defineFirstArg=(func,arg)=>{
      return function(...args){
        return func(arg,...args)
      }
      
    }
    
    // // // /*** Uncomment these to check your work! ***/
    // // // write a function w/ 2 arguments for  subtract
    const subtracts = (beg,end)=>beg - end
    const subFrom20 = defineFirstArg(subtracts,20)
    
    console.log(subFrom20(5)); // => should log 15




    // ///28.    //////////////////////////////////////////////// Challenge: intersection/////////////////////////////////////**************focus on this  */
    // // Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
    
    // // //ADD CODE HERE
    // // //////////////////answer with reduce
    
//     const intersection = arr =>{
//       // return arr.reduce((acc,curr)=>{
//       //   return acc.filter(num=>curr.includes(num))
//       // })
      
//       let compArr = arr[0]
//       for(let el of arr){
//         for(let i=1;i<compArr.length;i++){
//           if(!el.includes(compArr[i])){
//             compArr.splice(i,1)
//           }
//         }
//       }
//       return compArr
      
//     }
    
    
//     // // //Do the same problem above but with a loop? 
    
    
    
//     // // // // // //   // Uncomment these to check your work!
//       const arr1 = [5, 10, 15, 20];
//       const arr2 = [15, 88, 1, 5, 7];
//       const arr3 = [1, 10, 15, 5, 20];
// const array = [arr1,arr2,arr3]
//     // //    // should log: [5, 15]
// console.log(intersection(array))
    
    
    // //29. ////////////////////////////////// ////////////////////////////////// Challenge: union//////********focus on this  */
    // // Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. 
    // // If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 
    // // BONUS - Use reduce!
    // // // // ADD CODE HERE
    
    // ////////////// //using reduce
    
    
    
    // /////////use for each or regular loop to solve
      
      
    //     // Uncomment these to check your work!
    //     // const arr1 = [5, 10, 15];
    //     // const arr2 = [15, 88, 1, 5, 7];
    //     // const arr3 = [100, 15, 10, 1, 5];
    //      // should log: [5, 10, 15, 88, 1, 7, 100]
    
    
    
    // //30. ////////////////////////////////////////////Challenge 1
    // // Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). 
    // // This function should return a new array containing *only* the functions from the original array that, when invoked with input, return the value output. Use reduce!
    
    
    // {
// const functionValidator = (funcArr,input,output)=>{
//   return funcArr.reduce((acc,curr)=>{
//     if(curr(input)===output){
//       acc.push(curr)
//     }
//     return acc
//   },[])
// }
      
//     //   }
      
//     //   // write a function of  addFive 
// const addFive = n => n+5
//     //   // write a function of  multiplyByTwo ;
// const multiplyByTwo =n => n*2
//     //   // write a function  subtractOne 
// const subtractOne = n =>n-1

// const callArr = [addFive,multiplyByTwo,subtractOne]

// console.log(functionValidator(callArr,5,10))