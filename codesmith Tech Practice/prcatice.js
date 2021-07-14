



// function intersection(arrays){
// let array1= arrays[0].concat(arrays[1])
// array1.sort((a,b) => a-b)
// let array1Result = [];
// let result =[];
// for(let i=0;i<array1.length;i++){
//     let count = 0;
//     if(array1[i] === array1[i+1]){
//         array1Result.push(array1[i])
//     }
// }
// return array1Result;
// for(let j=0; j<arr3.length; j++){
//     let val = array1Result;
    
//     if(array1Result[j] === arr3[j]){
//         result.push(arr3[j])

//     }
// }
// // return result;



    
      
//     }
//     // Uncomment these to check your work!
//     const arr1 = [5, 10, 15, 20];
//     const arr2 = [15, 88, 1, 5, 7];
//     const arr3 = [1, 10, 15, 5, 20];
//     console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// function union(arrays){
//     return arrays.reduce((a,b)=> {
//         return a.concat(b.filter(c=> !a.includes(c)))
//     })

// }

// function union(arrays){
//     let result = arrays[0];
//     for(let i=0; i<arrays.length;i++){
//         let arr = arrays[i];
//         for (let j=0; j<result.length; j++){
//             let value = result[j];
//             if(!arr.includes(value)){
//                 result.push(value)
//             }
//         }
//     }
//     return result;

// }

function union(arrays){
    let result = arrays[0];
    let results = []
    console.log("line 277 result: " + result)
    for(let i = 0; i<arrays.length; i++){
      let arr = arrays[i];
      console.log("line 280 arr: " + arr)
      for (let j=0; j<result.length; j++){
        let value = result[j];
        console.log("line 282 value: " + value)
        if(arr.includes(value)){
          results.push(value)
        //  result.splice(j,1);
          console.log("j="+j)
          //console.log("line 285 splice(j,1): j=" + j, result.splice(j,1))
        }
      }
    }
    console.log("final result= "+ result)
    return result;
  }

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]