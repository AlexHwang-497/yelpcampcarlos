https://repl.it/@mode/codesmith-callbacks-2



// //////////////////////////////Challenge: pluralize
// Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. 
// For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.
// The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.

// // ADD CODE HERE
// function pluralize(arr){
//     let result = [];
//     for(let i=0; i<arr.length; i++){
//          result.push(arr[i] + "s");
//     }
//      return result;
// }


// //   // Uncomment these to check your work!
//   const animals = ["dog", "cat", "tree frog"];
//   console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]


////////////////////////////////////////////////////////// Challenge: map
// Create a function subtractTwo that accepts a number and returns that number minus 2.
// Then create a function map that takes two inputs -
// 1.  an array of numbers (a list of numbers)
// 2.  a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. 
// Please do not use the native map or forEach method.

// // ADD CODE HERE
// function subtractTwo(num){
//   return num-2;
// }

// function map(array, callback){
//   let result = [];
//   for(let i=0; i<array.length; i++){
//     result.push(subtractTwo(array[i]));

//   }
//   return result;
// }

  
// //   // Uncomment these to check your work!
//   console.log(typeof subtractTwo); // should log: 'function'
//   console.log(typeof map); // should log: 'function'
//   console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]


/////////////////////////////////////////////////////////////////// Challenge: forEach
// ---------Part 1
// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use 
// the native forEach or map method.
//this is an exmmpale below;
// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'

// Part 2
// Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.

// // // ADD CODE HERE
// function forEach(array, callback){
//     for(let i=0; i<array.length; i++){
//          callback(array[i]);
//     }
// }
  
// function map(arr, call){
//     let result =[];
//     forEach(arr,function(element){
//         result.push(call(element));
//     })
//     return result;  
// }
// //   //Uncomment these to check your work!
//   console.log(typeof forEach); // should log: 'function'
//   forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
//   console.log(typeof map); // should log: 'function'
//   console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]


////////////////////////////////////// Challenge: filterArray
// Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

// function filterArray(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//       if (callback(array[i])) newArray.push(array[i]);
//     }
//     return newArray;
//   }
//   const arrOfNums = [1, 2, 3, 4, 5];
//   function func1(num) {
//     // ADD CODE HERE
//     if (num%2 ===0){
//         return num;
//     }
    
//   }
//   function func2(num) {
//     // ADD CODE HERE

//     if (num%2!==0){
//         return num;
//     }
    
    
//   }
  
// //   // Uncomment these to check your work!
//   console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
//   console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]


// Challenge: eitherFilter
// Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// The array returned from eitherFilter should contain all elements in the passed-in array 
//that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.
// ///***********there are mutiple answers.  please look at your spreadsheet */

// function eitherFilter(array, callback1, callback2) {
//     // ADD CODE HERE
//     const result =[];

//     for (let i=0; i<array.length; i++){
//         if(array[i]%1===0){
//               result.push(callback1(array[i]));
//         }
//         if(array[i]>100){
//              result.push(callback2(array[i]))
//         }
//     }
//     return result; 


// }
//   // Uncomment these to check your work!
//   const arrOfNums = [10, 35, 105, 9];
//   const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
//   const over100 = n => n > 100;
//   console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]


// Challenge: eitherCallback
// Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// Notice that the lines of code testing your work are using functions and an array from previous challenges. 
// The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should
//  match the results of simply passing the two callbacks into eitherFilter in the previous challenge.

// function eitherCallback(callback1, callback2) {
//     // ADD CODE HERE
// const callbacks = item => callback1(item) || callback2(item);
//  return callbacks
//     
// }


// //   // Uncomment these to check your work!
//   function filterArray(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//       if (callback(array[i], i, array)) newArray.push(array[i]);
//     }
//     return newArray;
//   }
//   const arrOfNums = [10, 35, 105, 9];
//   const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
//   const over100 = n => n > 100;
//   const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
//   console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

/////////////////////////////////////////////////// Challenge: reduce********spend time on this one********
// The function reduce takes an array and reduces the elements to a single value.

// The reduce function loops through the array and applies any operation that you can put into a function to each element in the array 
// while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.
////////this is an example
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// reduce(nums, add, 0); //-> 8
// Here's how it works:

// The function has an "accumulator value". Its job is to keep track of the accumulated output of each loop. It starts out equal to the initialValue.
// The array is iterated over, passing the accumulator and the next array element as arguments to the callback.
// The callback's return value becomes the new accumulator value.
// The next loop executes with this new accumulator value.
// In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) makes it 5. Finally add(5, 3) brings it to 8, which is returned.

// Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

// // ADD CODE HERE
// function reduce(array,callback, initial){
//     let result = initial;

//     for(let i=0; i<array.length; i++){

//         result= callback(result, array[i]); 

//     }
//     return result;
// }


///////can you solve this using the reduce array formula?

// function reduce(array,callback,initial){
//     const reducer = (acc, cV) => acc + cV;

//     return array.reduce((array,callback))
// }


// //   // Uncomment these to check your work!
//   const nums = [4, 1, 3];
//   const add = function(a, b) { return a + b; }
//   console.log(reduce(nums, add, 0)); // should log 8


//////////////////////////////////////////////// Challenge: intersection/////////////////////////////////////**************focus on this  */
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

// //ADD CODE HERE
// function intersection(arrays){
//   return arrays.reduce((a,b)=>a.filter(c=>b.includes(c)));
// }

//Do the same problem above but with a loop?
// // //ADD CODE HERE
// function intersection(arrays){
//   let result=arrays[0];

//   for (let i=0; i<arrays.length; i++){
//     let arr = arrays[i]
//     for (let j=0; j<result.length; j++){
//       let value = result[j];
//       //console.log(arrays[i],value)
      
//       if(!arr.includes(value)) {
//         result.splice(j,1)
//         //console.log(result.splice(j,1))
//       }
//     }
//   }
//   return result; 
// }

// //   // Uncomment these to check your work!
//   const arr1 = [5, 10, 15, 20];
//   const arr2 = [15, 88, 1, 5, 7];
//   const arr3 = [1, 10, 15, 5, 20];
//   console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]



//////////////////////////////////// Challenge: union//////********focus on this  */
// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. 
// If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 
// BONUS - Use reduce!
// // // ADD CODE HERE
// function union(arrays){
//   return arrays.reduce((a,b) => {
//     return a.concat(b.filter(c => !a.includes(c)));

//   })
// }
// // Do the same probelm as above but now with a loop??
// function union(arrays){
//   debugger;
//   let result = arrays[0];
//   for(let i=0; i<arrays.length; i++){
//     result = compareArrays(result, arrays[i]);
//   }
//   return result;
// }

// function compareArrays(array1, array2){
//   //let newArray = [];
//   for (let i=0; i<array1.length; i++){
//     if(!array2.includes(array1[i])){
//       array1.push(array2[i]);
//     }
//   }
//   return array1;
// }

//   Uncomment these to check your work!
  // const arr1 = [5, 10, 15];
  // const arr2 = [15, 88, 1, 5, 7];
  // const arr3 = [100, 15, 10, 1, 5];
  // console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]








//////////////////////////////////////////////////////////////////// Challenge: objOfMatches ******tehre are a lot of examples.  study this.  
// Construct a function objOfMatches that accepts two arrays and a callback. 
// objOfMatches will build an object and return it.  To build the object, objOfMatches will test each element of the first array using the callback to see 
// if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object,
//  and the element from the second array becomes the corresponding value.

////create a loop with i and j
// // ADD CODE HERE
// function objOfMatches(array1, array2, callback) {
//   debugger;
//     //create obj
//     let obj = {}

//     //loop thru first array
//     for(let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (callback(array1[i]) === array2[j]) {   
//                 if(!array1[j] in obj) obj[array1[j]]  = [] 
//                 obj[array1[j]] = array2[i];
//             }
//         }
//     }
//     return obj;
// }

////////how about just a regurlar for loop??

// function objOfMatches(arr1, arr2, uppercaser){
//   let matches = {};
//   debugger;
//   for(let i = 0; i < arr1.length; i++){
//     if(uppercaser(arr1[i]) === arr2[i]){
//       matches[arr1[i]] = arr2[i];
//     }
//   }
//   return matches;
// }


// //// how about with a forEach Loop?
// function objOfMatches(arr1, arr2, callback){
//   let result = {};
//   arr1.forEach((element,index) => {
//     console.log(element,index, arr2[index],callback(element))
//     if(callback(element)===arr2[index]){
      
//       result[element] = callback(arr2[index])
//     }
//   });
//   return result; 
// }


//////how about with a reduce function?

// // ADD CODE HERE
// function objOfMatches(arr1, arr2, callback) {
//   return arr1.reduce((acc, val, index) => {
//     if (callback(val) === arr2[index]) {
//       acc[val] = arr2[index];
//     }
//     return acc;
//   }, {}); // } ends callback, {} is second arg to reduce
// }

//////how about another reduce function?

// const objOfMatches = (arr1, arr2, callback) =>
//   arr1.reduce((obj, val, i) =>
//     callback(val) === arr2[i] ? Object.assign(obj, {[val]: arr2[i]}) : obj, {});



// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }


//////////////////////////////////////////////////////////////////// Challenge: objOfMatches ******tehre are a lot of examples.  study this.  
// Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
//arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback 
//(when those elements are passed in) as the corresponding values.

// function arrToObj(array, callback) {
//   // ADD CODE HERE
//   return array.reduce((acc,cur)=> {
//     acc[cur] = callback(cur)
//     //return acc
//   }, {})
//   return acc
// }

// //   // Uncomment these to check your work!
//   const arrOfStrings = ['beer', 'glue'];
//   const capitalize = str => str.toUpperCase();
//   console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }




// //////////////////////////////////////////////////////////////////Challenge: multiMap
// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks.
//  multiMap will return an object whose keys match the elements in the array of values. 
//  The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// ADD CODE HERE
const multiMap = (arrayOfValues, arrayOfCallbacks) =>{
  //create result object
  const result ={};
  //iterate over the array of values
  for(let i=0;i<arrayOfValues.length; i++){
    //create an empty array
    const value = arrayOfValues[i];
    const arrayOfResult=[];
    //iterate over the callbacks
    for(let j=0; j<arrayOfCallbacks.length; j++){
      //invoke callbacks wit hthe value
      const callbacks =arrayOfCallbacks[i];
      //push the result into created array
      arrayOfResult.push(callbacks(value))
    }
    result[value] = arrayOfResult
  }
  return result;
}

// /////////other way to solve this usuing two loops??

// const multiMap = (arrOne, arrTwo) => {
//   //create an object named obj
//   let obj = {};
// //iterate over the array of values
//   for(let i=0; i<arrOne.length;i++){
//     //create an empty array
//     let  element = arrOne[i];
//     obj[element] =[];
//     //itterate over the callbacks
//     for(let j=0; j<arrTwo.length;j++){
//       obj[element].push(arrTwo[j](element)); 
//     }
//   }
//   return obj;
// }

// ////////// how would you solve this with a forEach?

// const multiMap = (strArrs, funcs) => {
//   //creat an object named result
//   let result = {};
//   //create an empty array
//   let funcArray = [];
//   //iterate over the array of values
//   strArrs.forEach((el,index) => {
//     //push result into the created array
//     funcArray.push(funcs[index](strArrs[index]))
//     result[el] = funcArray;
//   });
//   return result; 
// }

///////can you do this with a reduce function??

// function multiMap(array, cB){
//   return array.reduce((acc,curr) =>{
//     acc[curr] = inputToResultArray(curr,cB);
//     return acc;
//   }, {});
// }
// function inputToResultArray(input, arrayCb){
//   const resultArray = [];
//   for(let cB of arrayCb){
//     resultArray.push(cB(input));
//   }
//   return resultArray;
// }
//////////how aobut another type of reduce function with a maap function?
// const multiMap = (keys, cb) =>
//  keys.reduce((obj,key)=>Object.assign(obj,{[key]:cb.map(cb=>cb(key))}),{});


// //  // Uncomment these to check your work!
  function uppercaser(str) { return str.toUpperCase(); }
  function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
  function repeater(str) { return str + str; }
  const items = ['catfood', 'glue', 'beer'];
  const functions = [uppercaser, capitalize, repeater];
  console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//////////////////////////////////////// Challenge: majority
// Create a function majority that accepts an array and a callback. 
// The callback will return either true or false.
//  majority will iterate through the array and perform the callback on each element until it can be determined 
//  if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
// // ADD CODE HERE

// function majority(array,callback){
//   let result = [];
//   let trueCount = 0
//   let falseCount = 0;
//   for (let i=0;i<array.length;i++){
//     if(callback(array[i])){
//       trueCount++;

//     } else {
//       falseCount++;
//     }
//   }
//   return trueCount>falseCount ? true:false;
// }


// //can you answer this using a forEach loop?
// function majority(array, callback){
//   //set our true and false counts at 0;
//   let tCount = 0;
//   let fCount = 0;
//   // utilize a forEach loop and iterate
//   array.forEach((element) => {
//     callback(element) ? tCount++:fCount++
//   });
//   return tCount>fCount ? true:false;
// }



  // Uncomment these to check your work!
  //  const isOdd = function(num) { return num % 2 === 1; };
  //  console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  //  console.log(majority([2, 3, 4, 5], isOdd)); // should log: false




////////////////////////////////////////////////////////////// Challenge: prioritize
// Create a function prioritize that accepts an array and a callback. The callback will return either true or false. 
// prioritize will iterate through the array and perform the callback on each element, and return a new array, 
// where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
// // ADD CODE HERE
// function prioritize(array, callback){
//   let output = [];
//     for(let i=0; i<array.length; i++){
//     if(callback(array[i])){
//       output.push(array[i]);
//     }
//     }
  
//   for (let i=0; i<array.length; i++){
//     if(!callback(array[i])){
//       output.push(array[i]);
//     }
//   }
//     return output
//   }
// ///////with reduce???
// function prioritize(array,callback){
//   return array.reduce((acc,curr)=> {
//     console.log(acc,curr)
//     callback(curr) ? acc.unshift(curr) : acc.push(curr);
//     return acc;
//   },[]);
// }


// // Uncomment these to check your work!
// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']



//////////////////////////////////////////////////////////// Challenge: countBy
// Create a function countBy that accepts an array and a callback, and returns an object. 
// // countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
// // The value associated with each key will be the number of times that particular return value was returned.

// // ADD CODE HERE
// function countBy(arr, fn) {
//   let oddCount = 0
//   let evenCount = 0
//   return arr.reduce(function(acc, nums) {
//     // console.log(nums);
//     console.log(nums, fn(nums))
//     if (fn(nums) === "even") {
//       evenCount++;
//       acc['even'] = evenCount;
//     } else {
//       oddCount++;
//       acc['odd'] = oddCount;
//     }
//     return acc
//   }, {}, 0)

// }

// function countBy(array, callback){
//   let oCount = 0;
//   let eCount = 0;
  
//   for(let i=0; i<array.length;i++){
//     if(callback(array[i])==="even"){
//       eCount++;
//       obj['even'] = eCount;
//     } else {
//       oCount++
//     }
//   }
//   return "even: " + eCount
//   return obj;
// }
  
// //   // Uncomment these to check your work!
//   function evenOdd(n) {
//     if (n % 2 === 0) return 'even';
//     else return 'odd';
//   }
//   const nums = [1, 2, 3, 4, 5];
//   console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

//////////another way to do the probelm aboveE?


//////////////////////////////////////////////////////////////// Challenge: groupBy
// Create a function groupBy that accepts an array and a callback, and returns an object. 
// groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
// The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

// // // ADD CODE HERE
// function groupBy(array, callback){
//   let obj={};
//   for(let i of array){
//     console.log("key" + callback(i))
//     let key = callback(i);
//     if(obj[key]===undefined){
//       obj[key]=[];
//     }
//     obj[key].push(i)
//   }
//   return obj;
// }
/////can you do this with a for...in loop?
// // // ADD CODE HERE

// function groupBy(arr, callback) {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     const num = callback(arr[i])
//     obj[num] = obj[num] ? obj[num].concat(arr[i]) : [arr[i]]
//   }
//   return obj;
// }


//   // Uncomment these to check your work!
//    const decimals = [1.3, 2.1, 2.4];
//    const floored = function(num) { return Math.floor(num); };
//    console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
  


// ///////////////////////////////////////////////// Challenge: goodKeys
// // Create a function goodKeys that accepts an object and a callback. The callback will return either true or false.
// //  goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return 
// //  an array consisting only the keys whose associated values yielded a true return value from the callback.

//  function goodKeys(obj, callback) {
//     debugger
//     const arr = [];
//     for (let [key, value] of Object.entries(obj)) {
//       if (callback(value)) arr.push(key);
//     }
//     return arr;
//   }

function goodKeys(obj, callback) {
	let truthy = []; 
  for (var prop in obj){
    if(callback(obj[prop])){
      truthy.push(prop)
    }
  }
  return truthy; 
}
//   // Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']