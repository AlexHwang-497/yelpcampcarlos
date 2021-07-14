
// // Challenge 1 
// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//         console.log(newString);
//     }
//     return newString;
// }


// // Uncomment the line below and click "run" to test your code
// console.log('Challenge 1:', reverseString("codesmith prep") === "perp htimsedoc" ? "Correct!" : "Try again!");


function drawStairs(n) {
    //declare array named result
    let result=[];
    //initiate for loop to iterate 
    for(let i=0; i<n; i++){
        //push asterisk into the array
      result.unshift("*")
      console.log(result)
    }
  //return result;
  }
  
  console.log(drawStairs(7));


//   POD Day 5 - Regular - 2Sum
// Given an array of numbers and a target number, return true if there are two numbers in the array that sum up to the target value; return false otherwise

// BONUS: Get twoSum to work without using nested loops

function twoSum(arr, target) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {

				result.push(arr[i]);
				result.push(arr[j]);
				
				// console.log("result:"+result)
				// console.log("target:"+target,i)
			}
		}
	}
	return result;
}

  console.log(twoSum([1,2,5,7], 3), ' -> ', true);
  console.log(twoSum([1,2,5,7], 5), ' -> ', false);
  console.log(twoSum([1], 5), ' -> ', false);
  console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true);