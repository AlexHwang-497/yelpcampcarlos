/////////////////////////////////////get the mean of the array///////////////////////////////////////////////////////////////////////////////////

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
//All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.


////////////////////////// solve using array function
// function getAverage(marks){
//    sum = marks.reduce((a,b)=> {
//         return (a+b)
//     })

//     return Math.floor(sum/marks.length);

// }

// /////////////////using a loop?

// function getAverage(marks){
//     let total = 0;
//     for(let i=0; i<marks.length; i++){
//         total+=marks[i];
//     } 
//     return Math.floor(total/marks.length);
// }


// console.log(getAverage([2,2,2,2]))//,2);
// console.log(getAverage([1,2,3,4,5,]))//,3);
// console.log(getAverage([1,1,1,1,1,1,1,2]))//1

/////////////////////////////////////////////////My head is at the wrong end!/////////////////////////////////////////////////////
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and 
//switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). 
//It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the 
//element positions with the same exact logics

////loop answer//////
// function fixTheMeerkat(arr1){
//     let result = [];
//     for(let i=0; i<arr1.length;i++){
//         result.unshift(arr1[i]);
//     }
//     return result;
// }


////answer with reverse?////

// function fixTheMeerkat(arr){
//     arr.reverse();
// }



// console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
// console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
// console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
// console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
// console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);



///////////////////////////////////////////Find the first non-consecutive number//////////////////////////////////////////////////////////////////
//Your task is to find the first element of an array that is not consecutive.
//By not consecutive we mean not exactly 1 larger than the previous element of the array.
//E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, 
//so that's the first non-consecutive number.
//If the whole array is consecutive then return null2.
//The array will always have at least 2 elements1 and all elements will be numbers. 
//The numbers will also all be unique and in ascending order. 
//The numbers could be positive or negative and the first non-consecutive could be either too!

//If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

//1 Can you write a solution that will return null2 for both [] and [ x ] though? 
//(This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
// //////solution 1
// function firstNonConsecutive(arr){
//     for (let i = 0; i < arr.length - 1; ++i) {
//       if (arr[i] + 1 !== arr[i + 1]) {
//         return arr[i + 1]
//        // console.log('i: '+i,'arr[i]: '+arr[i], 'arr[i] + 1:'+(arr[i] + 1),'arr[i + 1]: '+(arr[i + 1]) )
//       }
//     }
//     return null
//   }

// ////////////////////////solution 2
// function firstNonConsecutive(arr){
//     return result = arr.find((val, index) =>{
//         //console.log('val: '+val, 'index: '+index, 'arr[index]:'+arr[index])
//          val !== index + arr[0];
//     })
// return (Number.isInteger(result)) ? result : null;
     
// }

// function firstNonConsecutive (arr) {
//     let result = arr.find((val, index) => val !== index + arr[0]);

//     return (Number.isInteger(result)) ? result : null;
// }

//   console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
//   console.log(firstNonConsecutive([ 3, 4, 5, 6, 7, 8, 9, 10, 11 ]))
//   console.log(firstNonConsecutive([ 8, 9, 10, 11, 12, 14, 15, 16, 17 ]))
//   console.log(firstNonConsecutive([ -2, -1, 1, 3, 4, 5, 6, 7 ]))


//////////////////////////aspect ratio cropping///////////////////////////////////////////////
// The aspect ratio of an image describes the proportional relationship between its width and its height. 
// Most video shown on the internet uses a 16:9 aspect ratio, 
// which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9).
//  As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, 
//  however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions
// //  with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

////////////add code here
// function aspectRatio(x,y){
 
//     return  [Math.ceil(y *(16/9)),y]; 
//   }
// console.log(aspectRatio(640, 480), [854,480]);
// console.log(aspectRatio(960, 720), [1280,720]);
// console.log(aspectRatio(1440, 1080), [1920,1080]);
// console.log(aspectRatio(1920, 1440), [2560,1440]);



////////////////////////NBA full 48 minute avg////////////////
// An NBA game runs 48 minutes (Four 12 minute quarters). 
// Players do not typically play the full game, subbing in and out as necessary. 
// Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) 
// and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0

//////add code here//////////

// function pointsPer48(ppg, mpg){
//     if(ppg ===0){
//         return 0
    
//       } else {
//         let result = 48 * (ppg/mpg)
//         return Number(result.toFixed(1))
//       }
// }


// console.log(pointsPer48(12, 20), 28.8)
// console.log(pointsPer48(10, 10), 48.0)
// console.log(pointsPer48(5, 17), 14.1)
// console.log(pointsPer48(0, 0), 0)
// console.log(pointsPer48(30.8, 34.7), 42.6)  // Russell Westbrook 1/15/17
// console.log(pointsPer48(22.9, 33.8), 32.5)  // Kemba Walker 1/15/


///////////////////counting duplicates////////////////////////////////////////////////////////////////


//     function duplicateCount(str){
//         var myObj = {},
//             counter = 0;    
//         for(var i = 0; i < str.length; i++){   
    
//           if(!myObj[str[i]]){
//               myObj[str[i]] = 1;
//           } 
//           else if(myObj[str[i]] < 2) {
//               myObj[str[i]]+=1;
//               counter++;
//           }    
//         }
//         console.log()
//         return counter;
//     }


// console.log(duplicateCount(""))//, 0);
// console.log(duplicateCount("abcde"))//), 0);
// console.log(duplicateCount("aabbcde"))//, 2);
// console.log(duplicateCount("aabBcde"))//, 2,"should ignore case");
// console.log(duplicateCount("Indivisibility"))//, 1)
// console.log(duplicateCount("Indivisibilities"))//, 2, "characters may not be adjacent")


///////////////////////////////////////////fire on the boat//////////////////////

// //replace Fire with ~~
// function fireFight(s){
//     return s.replace(/Fire/g, '~~')

// }

// console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
// console.log(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
// console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");



///////////////////////////////////////////shortest word////////////////////////////////////


// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

////////////using reduce array

// function findShort(str){
//     var words = str.split(' ');
//     var shortest = words.reduce((shortestWord, currentWord) => {
//       console.log('shortestWord:'+shortestWord, "currentWord: "+currentWord )

//       return currentWord.length < shortestWord.length ? currentWord : shortestWord;
//     }, words[0]);
//     return shortest.length;
//    // return shortest
//   }


  //using a loop

//   function findShort(s){
//     var arr = s.split(' ');
//     var min = arr[0].length;
//     for (var i = 1; i < arr.length; i++) {
//         console.log("i: "+i, 'arr[i]: '+arr[i],'|min: '+min)
//       if (arr[i].length < min) {
//         min = arr[i].length;
//       }
//     }
//     return 'min: '+min
// //   }

// /////////////////using sort//////////////////
// function findShort(s){
//     //return s.split(' ').sort((a,b) => b.length-a.length).pop().length
//     return s.split('')
// }


// // console.log(findShort("bitcoin take over the world maybe who at knows perhaps"), 3);
// console.log(findShort("turns out random test at cases are easier than writing out basic ones"),); 


////////////////////////////////////////////simple letter removal/////////////////////////////////////////
// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.
// For example: 
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
// solve('abracadabra', 8) = 'rdr'
// // solve('abracadabra',50) = ''
// function solve(r,k){
//   //  r.split('').join(' ');
//    //return  r.slice(1,r.length)
//    let p = r.split('')
//    return p.sort().slice(0,k)
//    return p.slice(0,k)

   
   
    

// }

// // console.log(solve('abracadabra', 1),'bracadabra');
// // console.log(solve('abracadabra', 2),'brcadabra');
// console.log(solve('abracadabra', 6),'rcdbr');
// console.log(solve('abracadabra', 8),'rdr');
// console.log(solve('abracadabra', 50),'');


////////////////////////////////////////////number to digit tiers//////////////////////////////////////////////

//////////loop example
// function createArrayOfTiers(num) {
//   let a = []
//   for (let i = 0; i < String(num).length; i++) {
//     a.push(String(num).substring(0,i+1))
//   }
//   return a
// }

function createArrayOfTiers(num) {
  let arr = [];
  let nums = num.toString().split('').join('');
  return nums.length;
  for(let i = 0;)
    
}




console.log(createArrayOfTiers(420))//, ["4", "42", "420"]);
console.log(createArrayOfTiers(2017))//, ["2", "20", "201", "2017"]);