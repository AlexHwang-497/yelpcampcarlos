// CHALLENGE 1 - ADD CODE BELOW
//const isTrue

// //declare a function named "select" with two parameters called "array" and "callBack"
// function select(array,callBack){

//     //declare a variable named "result".  "result" we be assigned a empty array
//     let result = [];
//     //declare a variable constant named "isTrue".  "isTrue"  will be assiged the data type true
//    const isTrue = true;
//    //decalre a for loop  that will iterate through our given array of "arr"
//     for(let i =0; i<array.length;i++){

//         console.log("array i:"+array[i])
//         //declare an if stament where the if statement will intiate if the callBack at array[i] strictly equals true.
//         if(callBack(array[i])===isTrue){
//             //if the if statement is met, array[i]'s value will be pushed into the array result.  
//             result.push(array[i])
//         }
//     }
//     return result;
    
// }


// // UNCOMMENT THESE LINES TO CHECK YOUR WORK
// const arr = [1, 2, 3, 4, 5];
// const isEven = n => n % 2 === 0;
// console.log(select(arr, isEven)); // should log: [2, 4]



// // CHALLENGE 2 - ADD CODE BELOW

// //declare a function named "russianRoulette" with a single parameter called "num"
// function russianRoulette(num){
//     //declare a variable named "counter".  "counter" will be assigned/given the value of 0.
//     let counter = 0;
//     //we will return a anonomous function
//     return function(){
//         //each time our anonymous function is called we will increment the counter by 1.
//         counter++
//         //declare an if statment as to where if "counter" is less then "num", return the statement of "click"
//         if(counter<num){
//             return "click";
//             //declare an else if statment as to where if "counter" strictly equals "num", return the statement of "bang"
//         } else if(counter === num){
//             return "bang"
//             //declare an else  statment as to where it will return the statement of "reload to play again"
//         }else {
//             return "reload to play again"
//         }
//     }
// }

// // UNCOMMENT THESE LINES TO CHECK YOUR WORK
// const play = russianRoulette(7);
// console.log(play()); // should log: ‘click’
// console.log(play()); // should log: ‘click’
// console.log(play()); // should log: ‘bang’
// console.log(play()); // should log: ‘reload to play again’
// console.log(play()); // should log: ‘reload to play again’
// console.log(play())
// console.log(play())
// console.log(play())
// console.log(play())

// CHALLENGE 3 - ADD CODE BELOW

//declare a function named "goldenSequence" with a parameter named "n"
function goldenSequence(n){
    //base case:declare an if statement where if "n" is less than or equal to 1, our function will return the value of 1.
    if (n<=1){
        return n;
        //declare an else statment where the function will utilize recursion and return (n-1) and (n+2) instances of our function "goldenSequence"
    } else{
        return goldenSequence(n-1) +  goldenSequence(n-2)
    }
}
// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log("n=0: Xn="+goldenSequence(0)); // should log: 1
console.log("n=1: Xn="+goldenSequence(1)); // should log: 1
console.log("n=2: Xn="+goldenSequence(2)); // should log: 2
console.log("n=3: Xn="+goldenSequence(3)); // should log: 3
console.log("n=4: Xn="+goldenSequence(4)); // should log: 5
console.log("n=5: Xn="+goldenSequence(5)); // should log: 233
console.log("n=6: Xn="+goldenSequence(6)); // should log: 233
console.log("n=7: Xn="+goldenSequence(7)); // should log: 233
console.log("n=8: Xn="+goldenSequence(8)); // should log: 233
console.log("n=9: Xn="+goldenSequence(9)); // should log: 233
console.log("n=10: Xn="+goldenSequence(10)); // should log: 233
console.log("n=11: Xn="+goldenSequence(11)); // should log: 233
console.log("n=12: Xn="+goldenSequence(12)); // should log: 233
console.log("n=13: Xn="+goldenSequence(13)); // should log: 233


