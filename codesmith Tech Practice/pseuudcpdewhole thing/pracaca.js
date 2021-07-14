// function getTheSum(arr){

  
//   // Uncomment these to check your work!
//   console.log(getTheSum([3, 6, 9])); // expected log 18
//   console.log(getTheSum([10, 11, 12])); // expected log 33


//   function getTheRange(arr){
//     // ADD CODE HERE
//     let sorted= arr.sort((a,b)=>a-b)
//     let high = sorted[arr.length-1]
//     let low = sorted[0]
//     return [low,high, high-low]

    
//   }
  
//   // Uncomment these to check your work!
//   console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]



//   function addingAllTheWeirdStuff(array1, array2){
//     // ADD CODE HERE

//   }
  
//   // Uncomment these to check your work!
//   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
//   console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  
  function reduce(array,callback, initial){
    let result = initial;

    for(number of array){

        result= callback(result, number); 

    }
    return result;
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8