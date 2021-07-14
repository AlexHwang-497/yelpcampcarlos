// // Given an array of numbers, write a function which returns a new array which contains the double of each value.
// // eg. [1,2,3,4] => [2,4,6,8] 

// // //declare a function anmed double with a paramter named array
// function double(array){
//     //declare varialbe result to store new array
//     let result = [];
//     //declare a for loop where i will itterate through the array 
//     for(let i=0; i<array.length; i++){
//         //push the results in the array "result" and multiply array by 2
//         result.push(array[i]*2);

//     }
//     return result;

// }
// const array = [1,2,3,4]
// console.log([1,2,3,4]);
// console.log(double(array));

//Write a function which takes a callback and returns a function which can be called only once. If the function is called again, it should return a -1 value

// //decalre a function named once with a parameter called callBack
// function once(){
//     //declare a variable named "counter"; to help us keep track of how many times we have utilized the callback
//     let counter = 0;
//     //declare an if stamenetn to determine if the counter has been called more then once
//     if (counter>=1){
//         return -1
//         //decalse an else statement where we will increment the counter
//     } else {
//         counter++
//     }
// }

// function once(callback){
//     let counter = 0;
//     if (counter>=1){
//         return -1;
//     } else {
//         counter++
//         return function();
//     }

// // }
// function once(callback){
//     let counter = 0;
//     return function(){
//     if(counter>=1) return -1;
//     else{ 
//         counter++;
//         return callback()};
    
//     }
//     }


// Given a string and an array of characters, write a function which returns this string with all the occurrences of these characters removed.

function charRemoved(str,array){ 
    let result = [];
    for(let i=0;i<str.length;i++){
        let flag = false;
        for(let j=0; i<array.length; j++){
            if (str[i]===array[j]){
                flag = true;
                break;
            } 
        }
        if(!flag) {
            result.push(str[i]);
        }
    }
    return result;

}

//eg. hello, [e, l]
//ho


// // Write a function delaybyfiveseconds which when called waits for 5 seconds before calling the callback
// function delaybyfiveseconds(callback){
//     return function(){
//         return setTimeout()
//     }
// }

//read hoisting; your declaration to javascript
// read setTimeout- takes two argument is the argument you want to call and second argument the amount
// read more about scope;
//understand differnece between let and var

// if(){
//     let i = 0;

//     //var doesn't work this way.  it would be scoped to the entire function
    // }
    // can't use i here