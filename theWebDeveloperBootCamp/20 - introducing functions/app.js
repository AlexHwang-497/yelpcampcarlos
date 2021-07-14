// function singSong(){
//     console.log("DO")
//     console.log("RE")
//     console.log("MI")
// }
// // console.log("DO")
// // console.log("RE")
// // console.log("MI")

// let lastElement = arr =>{
//     return arr[arr.length-1] === undefined ? null:arr[arr.length-1]
// }

// console.log(lastElement([3,5,7]))
// console.log(lastElement([]))



let days = {
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday',
    7:'Sunday'
}

let returnDay = (num) =>{
    if(num <1 || num > 7){
        return false
    } 
    return days[num]
}

console.log(returnDay(1))
console.log(returnDay(1))
console.log(returnDay(1))
console.log(returnDay(1))