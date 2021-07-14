// function pairElement(str) {


// }


// // //test here



// console.log(pairElement("ATCGA")) //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

// console.log(pairElement("TTGAG")) //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

// console.log(pairElement("CTCTA")) //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
// function renderInventory(inventory) {


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


const renderInv = inv =>{
  const arrOfPrices = inv.map(brand=>{
    return {
      name:brand.name,
      avgPrice:avgPriceOfShoe(brand.shoes)
    }
  })
  // return arrOfPrices
  return {
    designers:arrOfPrices
  }
}
                              
const avgPriceOfShoe=(shoes)=>{
 let total = shoes.reduce((acc,curr)=>acc+=curr.price,0)
 return total/shoes.length
}

// console.log(renderInv(currentInventory))
// console.log(avgPriceOfShoe(currentInventory['shoes']['price']))
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


// const renderInv = inv =>{
//   return inv.map((brand)=>
//     brand.shoes.filter(shoe=> {
//      if(shoe.name.includes('black')) {
//     	return brand.name+', '+shoe.name+', '+shoe.price
//     }
//   })).flat()
  
  
  // return inv.map((brand)=>
  //               brand.shoes.map(shoe=>
  //                           brand.name+', '+shoe.name+', '+shoe.price))
  // .filter(el => el.includes('black') ? el : '').flat()
  
  
// }
// console.log(renderInv(currentInventory))
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
  

  // console.log(findIndexPosition(str,substr))
  
  
  
  
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

  
  
// }



//      {
const getPermutations = (arr,result=[])=>{
  if(arr.length===0){return result}
  if(arr.length===1){return [arr]}
  for(let i=0;i<arr.length;i++){
    let current = arr[i]
    let remainNum = arr.slice(0,i).concat(arr.slice(i+1))
    let remainPerm = getPermutations(remainNum)
    for(let j=0;j<remainPerm.length;j++){
      result.push([current].concat(remainPerm[j]))
    }
  }
  return result
}

// //     }
    
//     console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
//     console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
  



// //15.  ////////////////////////////////////////// // CHALLENGE 13
// // There's no such thing as private properties on a JavaScript object! But, maybe there are? 
// // Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. 
// // getSecret() which returns the secret setSecret() which sets the secret


// const createSecretHolder = secret =>{
  
//   let num = secret
//   return {
//     setSecret(inp){
//       num=inp
//       console.log('blank')
//     },
//     getSecret(){
//       console.log(num)
//     }
//   }
  
// }
  
    
//   // }
//   // // // // /*** Uncomment these to check your work! ***/
//   // // // // // write the function///// start with secret as 5
//   let obj = createSecretHolder(5)
  
//   obj.getSecret()// // //  // => returns 5
//   obj.setSecret(2)/// // //  // => shoule return blank
//   obj.getSecret()// // //  // => returns 2
  



  // You are given coins of different denominations and a total amount of money. 
// Write a function to compute the fewest number of coins that you need to make up that amount.
//  If that amount of money cannot be made up by any combination of the coins, return -1.
//   You may assume that you have an infinite number of each kind of coin.

// const coinChange = (arr,amount) => {
// //   declare empty varaible and assign as value of 0
//   let count = 0
// //   iterate thourh the arr w/ a for...of loop.  el will be the varialbe of where we will iterate through the iterable object of arr
//   for(let el of arr){
// //     create a cumulative total of count using addition operatior and having amt/el
//     count += Math.floor(amount/el)
// //     modulo amoutn by el
//     amount%=el
//   }
// //   return count
//   return count

// }
// console.log(coinChange([25, 10, 5, 1], 5));      // 1
// console.log(coinChange([25, 10, 5, 1], 20));     // 2
// console.log(coinChange([25, 10, 5, 1], 90));     // 5



/*
Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
Non-bracket characters should not affect the logic.Make your solution work for all types of brackets: () [] {}
Examples:
*/
// const balancedBrackets = str =>{
// //   declare varaible and assign as empty object
//   let bracks = {
//     ']':'[',
//     ')':'(',
//     '}':'{'
//   }
// //   declare varaible and assign as empty array
//   let result = []
// //   iterate thorugh str w/ a for...of loop, w/ variable named el that will iterate through iterable object of str
//   for(let el of str){
// 	//   initate cond stmt where, if any of the left side of the brackets exist and or are truthy....
//     if(el==='[' ||el==='{' ||el==='(' ){
// 		//   push the element into our result array
//       result.push(el)
      
//     } 
// 	//   initae cond stmt, where if key/value pair exists,....
//     if(bracks[el]){
// 		//   intiate cond stmt, wher if popped element !== key/value pair....
//       if(result.pop()!==bracks[el]){
// 			//   return false
//         return false
//       }
//     }
//   }
// 	//   return true if result length ===0
//     return result.length===0
// }
// console.log(balancedBrackets(" { }    n"))                           // -> true
// console.log(balancedBrackets("hi][  "))                              // -> false
// console.log(balancedBrackets("[{random words and such}]"))           // -> true
// console.log(balancedBrackets("[The]Rains(In){Spain}"))               // -> true
// console.log(balancedBrackets("[({}Call me Ishmael)]"))               // -> true
// console.log(balancedBrackets("[(]{)}"))                              // -> false
// console.log(balancedBrackets(" gibberish { howdy: partner() }"))     // -> true
// console.log(balancedBrackets(" isThisAFunction?() { notReally();"))  // -> false



// Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

// // Argument:
// const convertObjectToArray = obj =>{
//   let result = []
//   for(let key in obj){
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
// // Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]



/////////////////////////////////////////////////////////////////////////////////////


// Convert Array To Object 3
// 5
// Convert Array To Object 3
// Submitted on Today at 8:01 AM
// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

// The argument will look like this:

// const transformEmployeeData = arr => {
//   let result =[]
//   for(let el of arr){
//   let obj = {}
//     for(let i=0;i<el.length;i++){
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



// Write a function called "joinArrayOfArrays".

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.
// const joinArrayOfArrays = arr =>{
//   return arr.flat()

  
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

///////////////////////////////////////////////////

// const detectOutlierValue = (str)=>{

// }
// console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
// console.log(detectOutlierValue("1 10 1 1")) //=> 2 - Second number is even, while the rest of the numbers are odd

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
// We've created an object, users, with some users in it and a function isEveryoneHere, 
// which we pass the users object to as an argument. 
// Finish writing this function so that it returns true only if the users object 
// contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.



// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(obj) {
//   let names = getArrayOfUsers(obj)
//   return names.every(el=>names.includes(el))

// }
// console.log(isEveryoneHere(users))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function confirmEnding(str, target) {
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
// //   declare varaible and assign  as empty arr
//   let result = []
// //   decalre varaible and assign as split string
//   let conv = str.split(' ')
// //   iterate through the array w/ for...of loop
//   for(let el of conv){
// 	//   intiate cond stmt, push mutated elemnet
//     result.push(el[0].toUpperCase()+el.slice(1).toLowerCase())
    
//   }
    
// //   retunr result w/ join mehtod
//   return result.join(' ')

  
 
// }



// console.log(titleCase("I'm a little tea pot")) //should return the string I'm A Little Tea Pot.
// console.log(titleCase("sHoRt AnD sToUt")) //should return the string Short And Stout.
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) //should return the string Here Is My Handle Here Is My Spout.


/// //20.  ////////////////////////////////////////////////////////////////////capitalizeFirst/////////////////////////////////////////////////////////

// // given an array of String, capitlzie the first letter of each string in the array

// // //  {
// const capitalizeFirst = (arr,index=0,result=[]) => {
// //   initae cond stmt where if arr lenght = 0, reutnr reuslt/empty arr
//   if(arr.length===0){return result}
// //   declare new varabile and assign value of sliced arr
//   let newArr = arr.slice(1)
// //   push mutated elmenet into result
//   result.push(arr[0][0].toUpperCase()+arr[0].slice(1))
// //   recurse function
//   return capitalizeFirst(newArr,index,result)
  
  
  //   initae cond stmt where if arr lenght = 0, reutnr reuslt/empty arr
//   if(arr[index]===undefined){return result}
// //   declare new varabile and assign value of sliced arr
//   let newIndex = index+1
// //   push mutated elmenet into result
//   result.push(arr[index][0].toUpperCase()+arr[index].slice(1))
// //   recurse function
//   return capitalizeFirst(arr,newIndex,result)
  
  

// }
  
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']



// //21  ////////////////////////////////////////////////////////////////////capitalize/////////////////////////////////////////////////////////
// // given an array of words, return an new array conating each word captialzied

// // //  {
// const capitalizeFirst = (arr,index=0,result=[]) => {
//   //   initae cond stmt where if arr lenght = 0, reutnr reuslt/empty arr
//   if(arr.length===0){return result}
// //   declare new varabile and assign value of sliced arr
//   let newArr = arr.slice(1)
// //   push mutated elmenet into result
//   result.push(arr[0].toUpperCase())
// //   recurse function
//   return capitalizeFirst(newArr,index,result)
  
  
//   //   initae cond stmt where if arr lenght = 0, reutnr reuslt/empty arr
// //   if(arr[index]===undefined){return result}
// // //   declare new varabile and assign value of sliced arr
// //   let newIndex = index+1
// // //   push mutated elmenet into result
// //   result.push(arr[index][0].toUpperCase()+arr[index].slice(1))
// // //   recurse function
// //   return capitalizeFirst(arr,newIndex,result)
// // } 

//   }
  
//   let words = ['i', 'am', 'learning', 'recursion'];
//   console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function frankenSplice(arr1, arr2, n) {
//   return arr2.slice(0,n).concat(arr1,arr2.slice(n))


// }


// console.log(frankenSplice([1, 2, 3], [4, 5], 1)) //should return [4, 1, 2, 3, 5].

// console.log(frankenSplice([1, 2], ["a", "b"], 1)) //should return ["a", 1, 2, "b"].

// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)) //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//   let vals = [false, null, 0, "", undefined, NaN]
//   let result = []
//   for(let el of arr){
//     if(!vals.includes(el)){
//       result.push(el)
//     }
//   }
//   return result

// }

// console.log(bouncer([7, "ate", "", false, 9])) //should return [7, "ate", 9].

// console.log(bouncer(["a", "b", "c"])) //should return ["a", "b", "c"].

// console.log(bouncer([false, null, 0, NaN, undefined, ""])) //should return [].

// console.log(bouncer([null, NaN, 1, 2, undefined])) //should return [1, 2].


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function mutation(arr) {
// //   return arr[1].toLowerCase()
// //   .split('')
// //   .every(el=>arr[0].toLowerCase().indexOf(el)!==-1)
 
  
//   let strA = arr[0].toLowerCase()
//   let strB = arr[1].toLowerCase()
//   for(let i=0;i<strB.length;i++){
//     if(strA.indexOf(strB[i])<0){
//       return false
//     }
//   }
//   return true
  
  
// }

// console.log(mutation(["hello", "hey"])) //should return false.

// console.log(mutation(["hello", "Hello"])) //should return true.

// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) //should return true.

// console.log(mutation(["Mary", "Army"])) //should return true.

// console.log(mutation(["Mary", "Aarmy"])) //should return true.

// console.log(mutation(["Alien", "line"])) //should return true.

// console.log(mutation(["floor", "for"])) //should return true.

// console.log(mutation(["hello", "neo"])) //should return false.

// console.log(mutation(["voodoo", "no"])) //should return false.

// console.log(mutation(["ate", "date"])) //should return false.

// console.log(mutation(["Tiger", "Zebra"])) //should return false.

// console.log(mutation(["Noel", "Ole"])) //should return true.



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // // Only change code below this line
  
  // var ratings = watchList.map(el=>{
  //   return {
  //     title: el.Title,
  //     rating:el.imdbRating,
      
  //   }
  // })
  
  // console.log(ratings)
  
  
  // ratings should equal [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}].
  
  
  
  var filteredList =
  //     initiate filter method
      watchList.filter(el=>el.Director==='Christopher Nolan')
  // intiate map method
  .map(el=>{
    return {
      title:el.Title,
      'rating':Number(el.imdbRating)
    }
  })
  
  
  
  
  // console.log(filteredList)
  
  
  // console.log(filteredList); //filteredList should equal [{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}].
  
  
  // const getRating =  
  //     initiate filter method
  // watchList.filter(el=>el.Director==='Christopher Nolan')
  // .map(el=>Number(el.imdbRating))
  // .reduce((acc,curr)=>acc+curr)/watchList.filter(el=>el.Director==='Christopher Nolan').length
  
  
  // const getRating = list =>{
  //   return list.map(el=>el.rating).reduce((acc,curr)=>acc+=curr)/list.map(el=>el.rating).length
  // }
  
  // console.log(getRating(filteredList))
  
  // The getRating(watchList) should equal 8.675.
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // function urlSlug(title) {
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
  //   return arr1.concat(arr2)
  //   .filter(el=>!arr1.includes(el)||!arr2.includes(el))
  
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
  //   let compArr = Object.values(arguments).slice(1)
  //   let result = []
  //   for(let el of arr){
  //     if(!compArr.includes(el)){
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
  //   let keys = Object.keys(source)
  //   // return keys
  //   let result = []
  //   for(let el of collection){
  //   let obj = {}
  //     for(let key in el){
  //       if(keys.includes(key)){
          
  //     			obj[key]= el[key]
  //       }
        
  //     }
  //     result.push(obj)
        
  //   }
  //   return result
    
   
  // }
  
  
  // console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })) //should return [{ first: "Tybalt", last: "Capulet" }].
  // console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })) //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
  // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
  // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })) //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
  // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
  // console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})) //should return []
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  // function myReplace(str, before, after) {
  //   let obj = {}
  //   obj[before] = after
  //   for(let key in obj){
  //     str = str.replace(key,obj[key])
  //   }
  //   return str
  
  // }
  
  
  
  
  
  // console.log(myReplace("Let us go to the store", "store", "mall")) //should return the string Let us go to the mall.
  
  // console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) //should return the string He is Sitting on the couch.
  
  // console.log(myReplace("I think we should look up there", "up", "Down")) //should return the string I think we should look down there.
  
  // console.log(myReplace("This has a spellngi error", "spellngi", "spelling")) //should return the string This has a spelling error.
  
  // console.log(myReplace("His name is Tom", "Tom", "john")) //should return the string His name is John.
  
  // console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")) //should return the string Let us get back to more Algorithms.
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // function dropElements(arr, func) {
  //   let result = []
  //   let toggle = false
  //   for(let el of arr){
  //     if(func(el)){
  //       toggle = true
  //     }
  //     if(toggle){
  //       result.push(el)
  //     }
      
  //   }
  //   return result
  
   
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
  // const makeHistory  = limit =>{
  // //   decalre varialbe and assign as empty array; aka result
  //   let result = []
  // //   return and create new inner function  w/ single parameter passed in
  //   return function(str){
  // 	//   initae cond stmt where, if str === undo....
  //     if(str==='undo'){
  // 		//   if result.length is undefined....
  //       if(!result.length){
  // 			//   return 'nothing to undo'
  //         return 'nothing to undo'
          
  //       }
  // 		//   declare new varaible and assign as str to undo
  //       let strUndo = result[result.length-1]
  // 		//   update/reassign result w/ sliced arr
  //       result=result.slice(0,-1)
  // 			  // return str to undo w/ 'undone'
  //       return strUndo + ' undone'
        
        
  //     }
  // 		//   update/reassin result w/ sliced reuslt
  //     result =[result,str].slice(limit===result.length?limit-1:0) 
  // 		//   	return str + 'done'
  //     return str+' done'
      
  //   }
    
  // }
  
  // // // /*** Uncomment these to check your work! ***/
  
  // // // write the callback function w/ a limit of 2
  // const historyMaking = makeHistory(2)
  // console.log(historyMaking('jump')) // => should log 'jump done'
  // console.log(historyMaking('undo'))  // => should log 'jump undone'
  // console.log(historyMaking('walk')) // => should log 'walk done'
  // console.log(historyMaking('code')) // => should log 'code done'
  // console.log(historyMaking('pose')) // => should log 'pose done'
  // console.log(historyMaking('undo'))  // => should log 'pose undone'
  // console.log(historyMaking('undo'))  // => should log 'code undone'
  // console.log(historyMaking('undo'))  // => should log 'nothing to undo'
  
  
  // //6.  //////////////////////////////////////////////////Challenge 6
  // // Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.
  
  //  {
  //   const flattenRecursively = (arr,result=[])=>{
  // //     if arr.length === 0 ; return result
  //     if(arr.length===0){return result}
  // //     slice arr
  //     let newArr = arr.slice(1)
  // //     intate cond stmt, where if current element is an array....
  //     if(Array.isArray(arr[0])){
  // 	//     recurse function
  //       return flattenRecursively(arr[0].concat(newArr),result)
  //     }
  // //     push current element in result
  //     result.push(arr[0])
  // //     recurse function
  //     return flattenRecursively(newArr,result)
      
  //   }
  // // }
  // console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
  // console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
  
  
  
  // //9.  ////////////////////////////////////// Challenge 4
  // // Write a recursive function isPrime that determines if a number is prime and returns true if it is.
      
  // //  {
  // const isPrime = (num,div=3) =>{
  // //   base: if num ===2 ;return true
  //   if(num===2){return true}
  // //   base: if num less then 2 or divisible by/even; return false
  //   if(num<2 || num%2===0){return false}
  // //   if div*div > num;return true
  //   if(div*div>num){return true}
  //   //   if num is divisble by div;return flase
  //   if(num%div===0){return false}
  // //   increment div
  //   div++
  // //   recurse function
  //   return isPrime(num,div)
    
  // }
  
  // // // }
  
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
  // //   declare variable and assign as empty object
  //   let obj = {}
  // //   create new inner function w/ single parameter
  //   return function(num){
  // 	// update/reassign key/value pairs
  //   return obj ={
  //     date: Date.now(),
  //     output: func(num)
      
  //   }
      
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
  // // // // // To check if you've completed the challenge, uncomment this code!
  // const flow=(callArr,input)=>{
  // //   base: if callArr length ==== 0, return input
  //   if(callArr.length===0){return input}
  //   let newArr= callArr.slice(1)
  //   let output = callArr[0](input)
  //   return flow(newArr,output)
  // }
  // // // // create a function called multiplyBy2(num) 
  // const multiplyBy2 = n=>n*2
  
  // // // //  create a function called add7(num) 
  // const add7= n=> n+7
  // // // //  create a function called modulo4(num) 
  // const modulo4 = n =>n%4
  
  // // // //  create a function called subtract10(num) 
  // const subtract10 = n =>n-10
  
  
  // // // //  build the callback function 
  // const arrCall = [multiplyBy2,add7,modulo4,subtract10]
  // // // // ->should log  -7   //// use input of 2
  
  // console.log(flow(arrCall,2))
  
  
  
  
  
  
  
  
  ///////////////////////////////////////23.    
  
  // const flooredFunc = (array,callback) => {
  //   let obj = {}
  //   for(let el of array){
  //     if(obj[callback(el)]){
  //       obj[callback(el)].push(el)
  //     } else {
  //       obj[callback(el)]=[el]
  //     }
      
  //   }
  //   return obj
  
  // }
      
      
      
      
  // // //     // // /*** Uncomment these to check your work! ***/
  // // //     // // write a function that stores these [1.3, 2.1, 2.4];
  // const arr = [1.3, 2.1, 2.4]
  // // //     // // write a function called  floored  that gives the floored amount aka 1.2 = 1
  // const floored = n => Math.floor(n)
  
  // // //     // //  // should log: { 1: [1.3], 2: [2.1, 2.4] }
  // console.log(flooredFunc(arr,floored))
  
     // //27.   ////////////////////////////////////////////////////// // CHALLENGE 10
      // Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
      // defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's 
      // first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.
      // //  {
      
  //     // //   }
  //       const defineFirstArg = (func,arg) =>{
  //         return function(...arg){
  //           return func(arg,...arg)
  //         }
          
  //       }
        
      
  //     // // // /*** Uncomment these to check your work! ***/
  //     // // // write a function w/ 2 arguments for  subtract
  //       const subtracts = (beg,end)=> beg-end
  //       const subFrom20 = defineFirstArg(subtracts,20)
      
  //     console.log(subFrom20(5)); // => should log 15
      
  
  
  // //     const defineFirstArg=(func,arg)=>{
  //       return function(...args){
  //         return func(arg,...args)
  //       }
        
  //     }
      
  //     // // // /*** Uncomment these to check your work! ***/
  //     // // // write a function w/ 2 arguments for  subtract
  //     const subtracts = (beg,end)=>beg - end
  //     const subFrom20 = defineFirstArg(subtracts,20)
      
  //     console.log(subFrom20(5)); // => should log 15
  
      
      // ///28.    //////////////////////////////////////////////// Challenge: intersection/////////////////////////////////////**************focus on this  */
      // // Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
      
      // // //ADD CODE HERE
      // // //////////////////answer with reduce
      
  //    
      const intersection = arr =>{
        return arr.reduce((acc,curr)=>{
          return acc.filter(num=>curr.includes(num))
        })
        
      }
  //     // // //Do the same problem above but with a loop? 
      
      
      
  //     // // // // // //   // Uncomment these to check your work!
        const arr1 = [5, 10, 15, 20];
        const arr2 = [15, 88, 1, 5, 7];
        const arr3 = [1, 10, 15, 5, 20];
  const array = [arr1,arr2,arr3]
  //     // //    // should log: [5, 15]
  console.log(intersection(array))
      
      
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
      
      
      
      //
      // //30. ////////////////////////////////////////////Challenge 1
      // // Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). 
      // // This function should return a new array containing *only* the functions from the original array that, when invoked with input, return the value output. Use reduce!
      
      
      // {
        
      //   }
        
      //   // write a function of  addFive 
      //   // write a function of  multiplyByTwo ;
      //   // write a function  subtractOne 
        
  
      // //31.  ////////////////////////////////////////////////////////////////////////////////// Challenge 2
      // //   Create a function allClear that accepts an array of evaluator functions (each returning a boolean value), and a single value. 
      // // Using reduce, return a single boolean value indicating whether the value "passes" every single one of the evaluator functions (i.e. returns true).
      
      //    {
          
      //   //   ///////solve using loop solution
      
        
      //   // ///////////////solve using reduce
        
          
        
      //   }
        
      //   // write a function isOdd 
      //   // wrtie a function that determines if number  isPositive 
      //   // write a function multipleOfFive 
      
      //   // write the callback function
        
        
        
      //   // console.log(allClear(numFnArr, 25)) // should log true 
      //   // console.log(allClear(numFnArr, -25)) // should log false
         
  
  
      // //39.   //////////////////////////////////////////////////////maxChar///////////////////////////////////////////////////////////////////////////////////
      // // --- Directions
      // // Given a string, return the character that is most
      // // commonly used in the string.
      // // // --- Examples
      // // // maxChar("abcccccccd") === "c"
      // // // maxChar("apple 1231111") === "1"
      
      // // {
      
      
      // // }
      
      // // console.log(maxChar("abcccccccd") )
  
  
        
        
      // //41.  ///////////////////////////////////////////////////////////////// Challenge 19
      // // Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. 
      // // rating should return the percentage of functions from the array that return true when the value is used as input.
      
      
          
      // /*** Uncomment these to check your work! ***/
      // // write a function isEven ;
      // // write a function greaterThanFour ;
      // // write a function isSquare = //////////aka sqrt;
      // // write a function hasSix = ////has contains a 6;
      
      
      //  // should log: 100  use 64
      //  // should log: 75  use 66
      //  // should log: 75 use 5
              
              
      // //42.  ////////////////////////////////////////////////////////////////////// Challenge 20
      // // Create a function pipe that accepts an array (of functions) and a value. 
      // // pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, 
      // // and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. 
      // // pipe should return the final output.
      
      
      // {
      // // //   //////////solution 1 using for...of
      
      
      // //   /////////////solution 2 using reduce method
      
      
      // ///////////   solutinon 3    using for each method
      
      
      // }
      
      // // /*** Uncomment these to check your work! ***/
      // //write a function called capitalize 
      // //write a function called addLowerCase ;
      // //write a function called repeat =; //////aka repeat the string
      // //
      // // // should log: 'CATcatCATcat'
              
              
  
  
      
      // //43.//////////////////////////////////////////////////////////// Challenge 21/////////////////////
      // // Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). 
      // // highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, 
      // // when the subject is given as input.
      
      
      //  {
      
      
        
      // }
              
      // // /*** Uncomment these to check your work! ***/
      // // const groupOfFuncs = {};
      // // write a method inside the object called double 
      // // write a method inside the object called addTen 
      // // write a method inside the object called inverse /// inverse in this case is -1
      // // / should log: 'addTen'
      // // // should log: 'double'
      // //  // should log: 'inverse'
              
              
      // //43.////////////// //////////////////////////////Challenge 22///////////////////////////////
      // // Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. 
      // // combineOperations should pass the starting value into the first function in the array. 
      // // combineOperations should pass the value returned by the first function into the second function, 
      // // and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.
      
      
      //  {
      // ///////use reduce to solve 
      
      // ////////////////use for each to solve
      // //
      
      // // use regular loop to solve
      
      
      
      
      // }
      
      // // wrtie a function called  add100(num) {
      // //   
      // // }
      
      // //  wrtie a function called  divByFive(num) {
      // //   / }
      
      // //  wrtie a function called  multiplyByThree(num) {
      // //   / }
      
      // //  wrtie a function called  multiplyFive(num) {
      // //   / }
      
      // //  wrtie a function called  addTen(num) {
      // //   // }
              
      // // // /*** Uncomment these to check your work! ***/
      // //  // Shoculd output 60 --> order should be add100, divByFive, multiplyByThree w/startVal = 0
      // //  // Should output 10 -->order should be divByFive, multiplyFive, addTen w/startVal = 0
      
      
        
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
       
  
  
      
  // // CHALLENGE 10
  // Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
  // defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. 
  // Additional arguments needed by the passed-in function will need to be passed into the returned function.
  
  
  // function defineFirstArg(func, arg) {
  //  
  //  
  
  // }
  
  // // /*** Uncomment these to check your work! ***/
  // declare a function called subtract subtract 
  
  
   // => should log 15
  
  
  
   ////////////////////////////////////////////////////////////////// Challenge: once/////////////////////////////////////////////////////////
  // Write a function once that accepts a callback as input and returns a function. 
  // When the returned function is called the first time, it should call the callback and return that output. 
  // If it is called any additional times, 
  // instead of calling the callback again it will simply return the output value from the first time it was called.
  // ADD CODE HERE
  
  // // UNCOMMENT THESE TO TEST YOUR WORK!
  // write a function caleed addByTwo
  
  //should log 7
  
    //should log 7
   ;  //should log 7
  
  
  
  
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