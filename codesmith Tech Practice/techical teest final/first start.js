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



// You are given coins of different denominations and a total amount of money. 
// Write a function to compute the fewest number of coins that you need to make up that amount.
//  If that amount of money cannot be made up by any combination of the coins, return -1.
//   You may assume that you have an infinite number of each kind of coin.

const coinChange = (arr,amount) => {
    debugger
  let count = 0
  let sum = amount
  for(let i=0;i<arr.length;i++){
    count+=Math.floor(amount/arr[i])
    amount%=arr[i]
  }
  return count
}
console.log(coinChange([25, 10, 5, 1], 5));      // 1
console.log(coinChange([25, 10, 5, 1], 20));     // 2
console.log(coinChange([25, 10, 5, 1], 90));     // 5



// first, write a function, takes in an array of numbers and reeturn the sum of those numbers
//   sometimes the array will come in dirty, aka data will not always be numbers
// 
// write a function taht cleans the return only numbers
// function cleanArray(arr) {
//   let result = []
//   for(let el of arr){
//     if(typeof el ==='number'){
//       result.push(el)
//     }
//   }
//   return result
// }
// // 
// // part 1
// const sumOfNum = arr =>{
//   let cleaned=cleanArray(arr)
  
//   let output = 0
//   for(let i=0;i<cleaned.length;i++){
//     output+=cleaned[i]
//   }
//   return output

// }


// // const array = [1,"A",true,2,6,8,'B']
// // console.log(cleanArray(array))
// // console.log(sumOfNum(array))



// // function that accepts the temerpature,

// //<20 The temp is very cold.
// //20 This is perfect weather.
// //>20 Is it very hot. 



// const tempConverter = num =>{
//   return (num-32)*(5/9)
  
  
// }
// // f = c * 9/5 + 32;
// // f - 32 

// const weather = temperature=>{
//   let celcius = tempConverter(temperature)
//   console.log(celcius)
//   if(celcius <20){
//     return ' the temp is very cold'
//   } else if(celcius === 20){
//     return 'this is perfect weather'
//   } else {
//     return 'it is very hot'
//   }
  
// }


// console.log(tempConverter(68)) /// 68

// console.log(weather(68))



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
// //   return inventory.map((brand)=>
// //                 brand.shoes.reduce(shoe=>
// //                             brand.name+', '+shoe.price))
  

  
//   const arrayOfPrices = inventory.map(brand=> {return { name : brand.name, avgPrice : avgPriceOfShoes(brand.shoes) }})
//   return {
//     designers : arrayOfPrices
//   }
//   // return inventory.
// }



// function avgPriceOfShoes(shoes) {
//   let total = shoes.reduce((acc, shoe) => acc += shoe.price, 0);
//   return total / shoes.length;
// }

// console.log(renderInventory(currentInventory))
  

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
 
// //   return outPutArray;
//   return inventory.map((brand)=>
//     brand.shoes.filter(shoe=> {
//      if(shoe.name.includes('black')) {
//     	return brand.name+', '+shoe.name+', '+shoe.price
//     }
//   })).flat()
// }

// //return inventory.map((brand)=>
// //                 brand.shoes.map(shoe=>
// //                             brand.name+', '+shoe.name+', '+shoe.price))
// //															.filter(el => el.includes('black') ? el : '').flat()


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

var currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];
  // The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this:
  
  var expectedResult = [
    {
      "nameWords": [
        "tasselled",
        "black",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "tasselled",
        "green",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "red",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    },
    {
      "nameWords": [
        "black",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    }
  ];
  
  
  let str = 'tasselled black low-top lace-up';
  let substr = 'lace';
  const findIndexPosition = (str, substr) => {
    let conv = str.split(' ')
    
    for(let i=0;i<conv.length;i++){
      if(conv[i].includes(substr)){
        return {
          nameWords:conv,
          targetWordIndex:i
          
        }
        
      }
    }
    
  }
  console.log(findIndexPosition(str,substr))
  
  
  
  
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
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
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
// ////this is a helper function
// function buildCharMap(str){
//   const charMap = {};
//   for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
//     charMap[char]=charMap[char]+1 || 1;
//   }
//   return charMap;
// }


// console.log(anagrams('rail safety', 'fairy tales'))///=== True)
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))// === True)
// console.log(anagrams('Hi there', 'Bye there'))// === False)



// //15.  ////////////////////////////////////////// // CHALLENGE 13
// // There's no such thing as private properties on a JavaScript object! But, maybe there are? 
// // Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. 
// // getSecret() which returns the secret setSecret() which sets the secret


const createSecretHolder=(secret)=>{
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
      
      
    }
    
  // }
  // // // // /*** Uncomment these to check your work! ***/
  // // // // // write the function///// start with secret as 5
  // let obj = createSecretHolder(5)
  
  // obj.getSecret()// // //  // => returns 5
  // obj.setSecret(2)/// // //  // => shoule return blank
  // obj.getSecret()// // //  // => returns 2