// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
    return num + 2;
  
  }
  
  // To check if you've completed it, uncomment these console.logs!
  // console.log(addTwo(3));
  // console.log(addTwo(10));
  
  
  // Challenge 2
  function addS(word) {
    return word +'s';
  
  }
  
  // uncomment these to check your work
  // console.log(addS('pizza'));
  // console.log(addS('bagel'));
  
  
  // Challenge 3
  function map(array, callback) {
    // let result = [];
    // for(let num of array){
    //   result.push(callback(num))
    // }
    // return result;
  
  }
  
  // console.log(map([1, 2, 3], addTwo));
  
  
  // Challenge 4
  function forEach(array, callback) {
    let result = '';
    for(let i=0; i<array.length;i++){
      // result.push(callback(array[i]))
      result+=callback(array[i])
    }
    // return result
  
  }
  
  // see for yourself if your forEach works!
  
  // forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
  
  
  // Challenge 5
  // function mapWith(array, callback) {
  //   return array.map((a=> {
  //     return a-2
  //   }))
  
  // }
  
  // console.log(mapWith([3,4,5], addTwo));
  
  // Challenge 6
  // function reduce(array, callback, initialValue) {
  //   let output = initialValue;
  //   for(let i=0; i<array.length; i++){
  //     output=callback(output,array[i])
  //   }
  //   return output
  
  // }
  // const nums = [4,1,3]
  // const add = function(a,b) {return a+b}
  // console.log(reduce(nums,add,0))
  
  // Challenge 7
  function intersection(...arrays) {
  //   return arrays.reduce((acc,curr)=> {
  //     return acc.filter(nums=> curr.includes(nums))
  //   })
  
    
    let compArray = arrays[0]
    for(let i=0; i<arrays.length;i++){
      for(let j=0; j<arrays.length;j++){
        if(!arrays[i].includes(compArray[j]))
          compArray.splice(j,1)
      }
    }
      return compArray
    
  }
  
  // console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
  // should log: [5, 15]
  
  
  // Challenge 8
  function union(...arrays) {
    // return arrays.reduce((acc,curr)=> {
    //   return acc.concat(curr.filter(num=>
    //                         !acc.includes(num)))
    // })
    
    return arrays.reduce((acc,curr)=>{
      curr.forEach(element =>{
        if(!acc.includes(element)){
          acc.push(element)
        }
      })
      return acc
    })
  
  }
  
  // console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
  // should log: [5, 10, 15, 88, 1, 7, 100]
  
  
  // Challenge 9
  function objOfMatches(array1, array2, callback) {
    let obj = {};
    for(let i=0; i<array1.length;i++){
      if(callback(array1[i]) === array2[i]){
        obj[array1[i]] = array2[i]
      }
    }
    return obj;
    
  
  }
  
  // console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
  // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }
  
  
  // Challenge 10
  function multiMap(arrVals, arrCallbacks) {
    let obj ={};
    for(let str of arrVals){
      obj[str] = [];
      for(let i=0;i<arrCallbacks.length;i++){
        obj[str].push(arrCallbacks[i](str))
      }
    }
    return obj
  
  }
  
  // console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
  // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
  
  
  // Challenge 11
  function objectFilter(obj, callback) {
    let objs={};
    for(let str in obj){
      if(obj[str]===callback(str)){
        objs[str] = obj[str]
        
      }
      
      
    }
    return objs;
  
  }
  
  // const cities = {
  // London: 'LONDON',
  // LA: 'Los Angeles',
  // Paris: 'PARIS',
  // };
  // console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}
  
  
  // Challenge 12
  function majority(array, callback) {
    let obj = {};
    for(let num of array){
      if(callback(num) in obj){
        obj[callback(num)]++
      } else{
        obj[callback(num)] = 1
      }
    }
    // return obj
    return Object.keys(obj).sort((a,b)=>b-a)[0]
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const isOdd = function(num) { return num % 2 === 1; };
  // console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  // console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
  
  
  // Challenge 13
  function prioritize(array, callback) {
    let sResult = [];
    let result = [];
    for(let str of array){
      if(callback(str)){
        sResult.push(str)
      } else {
        result.push(str)
      }
    }
    return sResult.concat(result);
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
  // console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
  // // ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
  
  
  // Challenge 14
  function countBy(array, callback) {
    let obj = {};
    for(let num of array){
      if(callback(num) in obj){
        obj[callback(num)]++
      } else {
        obj[callback(num)] = 1
      }
    }
    return obj;
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // console.log(countBy([1, 2, 3, 4, 5], function(num) {
  // if (num % 2 === 0) return 'even';
  // else return 'odd';
  // })); // should log: { odd: 3, even: 2 }
  
  
  // Challenge 15
  function groupBy(array, callback) {
    let obj = {};
    for (let num of array){
      if(callback(num) in obj){
        obj[callback(num)].push(num)
      } else {
        obj[callback(num)] = [num]
        
      }
      
    }
    return obj
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const decimals = [1.3, 2.1, 2.4];
  // const floored = function(num) { return Math.floor(num); };
  // console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
  
  
  // Challenge 16
  function goodKeys(obj, callback) {
    let result = [];
    for (let str in obj){
      if(callback(obj[str])){
        result.push(str)
      }
    }
    return result;
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
  // const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
  // console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
  
  
  // Challenge 17
  function commutative(func1, func2, value) {
    return func1(func2(value)) === func2(func1(value)) ? true:false
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const multBy3 = n => n * 3;
  // const divBy4 = n => n / 4;
  // const subtract5 = n => n - 5;
  // console.log(commutative(multBy3, divBy4, 11)); // should log: true
  // console.log(commutative(multBy3, subtract5, 10)); // should log: false
  // console.log(commutative(divBy4, subtract5, 48)); // should log: false
  
  
  // Challenge 18
  function objFilter(obj, callback) {
  //   let newObj={};
  //    Object.keys(obj).forEach(num=> {
  //     if(obj[num] === callback(num)) {
  //       newObj[num] = obj[num]
  //     }
  //   })
  // return newObj
    
    
  //     const newObj = Object.create(null);
  //   for (let [key, value] of Object.entries(obj)) {
  //     if (value === callback(parseInt(key))) newObj[key] = value;
  //   }
  //   return newObj;
    let newObj = {};
    for (let num in obj){
      if(obj[num] === callback(num)){
        newObj[num] = obj[num]
      }
    }
    return newObj
    
  }
  
  // /*** Uncomment these to check your work! ***/
  // const startingObj = {};
  // startingObj[6] = 3;
  // startingObj[2] = 1;
  // startingObj[12] = 4;
  // const half = n => n / 2;
  // console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }
  
  
  // Challenge 19
  function rating(arrOfFuncs, value) {
    // return arrOfFuncs.length
    let obj = {};
    for(let i=0; i<arrOfFuncs.length;i++){
      if(arrOfFuncs[i](value) in obj){
        obj[arrOfFuncs[i](value)]++
      } else {
        obj[arrOfFuncs[i](value)] = 1
      }
    }
    // return obj;
    return Object.values(obj).sort((a,b)=>b-a)[0]/arrOfFuncs.length*100
  
  }
  
  /*** Uncomment these to check your work! ***/
//   const isEven = n => n % 2 === 0;
//   const greaterThanFour = n => n > 4;
//   const isSquare = n => Math.sqrt(n) % 1 === 0;
//   const hasSix = n => n.toString().includes('6');
//   const checks = [isEven, greaterThanFour, isSquare, hasSix];
//   console.log(rating(checks, 64)); // should log: 100
//   console.log(rating(checks, 66)); // should log: 75
  
  
  // Challenge 20
  function pipe(arrOfFuncs, value) {
  // return arrOfFuncs.reduce((acc, callback) => callback(acc), value);
    
  //   //////////////recursion
    
        if (arrOfFuncs.length === 0) {
          return value;
      }
      let newValue = arrOfFuncs.shift()(value);
      // stopping at zero is easier to read but this is one less loop
      if (arrOfFuncs.length === 1) {
          return arrOfFuncs[0](newValue);
      }
  
      return pipe(arrOfFuncs, newValue);


      //////other solutions
       // let output = value
  // arrOfFuncs.forEach(callback =>{
  //   output = callback(output)
  // })
  // return output
  

  
  
//   let output = value
//   for(let i=0;i<arrOfFuncs.length;i++){
//     output=arrOfFuncs[i](output)
//   }
//   return output
// };
    
  }
  
  // /*** Uncomment these to check your work! ***/
  // const capitalize = str => str.toUpperCase();
  // const addLowerCase = str => str + str.toLowerCase();
  // const repeat = str => str + str;
  // const capAddlowRepeat = [capitalize, addLowerCase, repeat];
  // console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'
  
  
  // Challenge 21
  function highestFunc(objOfFuncs, subject) {
    let highest = 0;
    let label;
    for (let callback in objOfFuncs) {
      const fn = objOfFuncs[callback];
      if (fn(subject) > highest) {
        highest = fn(subject);
        label = callback;
      }
    }
    return label;
  }
  
  // /*** Uncomment these to check your work! ***/
  const groupOfFuncs = {};
//   groupOfFuncs.double = n => n * 2;
//   groupOfFuncs.addTen = n => n + 10;
//   groupOfFuncs.inverse = n => n * -1;
//   console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
//   console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
//   console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
  
  
  // Challenge 22
  function combineOperations(startVal, arrOfFuncs) {
    // return arrOfFuncs[2](arrOfFuncs[1](arrOfFuncs[0](startVal)))
    return arrOfFuncs.reduce((acc,fn)=> {
      return fn(acc)
    },startVal)
  
  }
  
  // function add100(num) {
  //   return num + 100;
  // }
  
  // function divByFive(num) {
  //   return num / 5;
  // }
  
  // function multiplyByThree(num) {
  //   return num * 3;
  // }
  
  // // /*** Uncomment these to check your work! ***/
  // console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
  // console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10
  
  
  // Challenge 23
  function myFunc(array, callback) {

// /////my solution
    // let output = 0
    // for(let i=0; i<array.length;i++){
    //   if(callback(array[i])){
    //     return output = i
    //   } 
      
    // }
    // return -1
////solution 2
// let returnIndicator = false;
// for(let i = 0; i< array.length; i++){
//   if(callback(array[i])){
//     returnIndicator = true;
//     return i;
//   }
// }
// if(!returnIndicator){
//   return -1;
// }

// //////////solution 3
return array.findIndex(callback)

  
  
  }
  
  const numbers = [2, 3, 6, 64, 10, 8, 12];
  const evens = [2, 4, 6, 8, 10, 12, 64];
  
  function isOdd(num) {
    return (num % 2 !== 0);
  }
  
  /*** Uncomment these to check your work! ***/
  console.log(myFunc(numbers, isOdd)); // Output should be 1
  console.log(myFunc(evens, isOdd)); // Output should be -1
  
  
  // Challenge 24
  function myForEach(array, callback) {
  
  }
  
  let sum = 0;
  
  function addToSum(num) {
    sum += num;
  }
  
  // /*** Uncomment these to check your work! ***/
//   const nums = [1, 2, 3];
//   myForEach(nums, addToSum);
//   console.log(sum); // Should output 6


// ##########################
// # Extension Challenges   #
// ##########################

// Challenge 1
const functionValidator = (funcArr, input, output) => {
  debugger;
  return funcArr.reduce((acc,curr)=>{
    if(curr(input) === output){
      acc.push(curr)
    }
    return acc
  },[])

}

const addFive = num => num + 5;
const multiplyByTwo = num => num * 2;
const subtractOne = num => num - 1;
const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]


// Challenge 2
const allClear = (funcArr, value) => {
  
  ///////loop solution
//   let result = []
//   for(let i=0; i<funcArr.length;i++){
//     result.push(funcArr[i](value))
//   }
  
//   return result.every(bool =>bool===true)
  
  
  return funcArr.reduce((acc,curr)=>{
    if(acc) return curr(value)
    return acc
  })

}

// const isOdd = num => num % 2 === 1;
// const isPositive = num => num > 0;
// const multipleOfFive = num => num % 5 === 0;
// const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)) // should log true 
// console.log(allClear(numFnArr, -25)) // should log false
 

// Challenge 3
const numSelectString = (numArr) => {
  return numArr.sort((a,b)=>a-b)
  .filter(num=>num%2===1)
  .reduce((acc,curr)=>{
    return [acc,curr]
  })
}

// const nums = [17, 34, 3, 12]
// console.log(numSelectString(nums)) // should log "3, 17"

// Challenge 4
const movieSelector = (moviesArr) => {
    return moviesArr.map( el => { return {"title": el.title.toUpperCase(), "score": el.score}})
          .filter( el => el.score > 5)
            .reduce((acc, curr) => {
        acc.push(curr.title);
            return acc;
      }, [])

}

const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]



// Challenge 5
const curriedAddThreeNums = (num1) => {
      return (num2) => {
    return (num3) =>{
      return num1 + num2 + num3;
    }
  }

}

console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3


// Challenge 6
// const curriedAddTwoNumsToFive = ?

// console.log(curriedAddTwoNumsToFive(6)(7)) // should log 18
