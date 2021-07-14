// console.log("BEFORE CONDITIONAL")
// let random = Math.random()
// if(random <0.5){
//     console.log("Your Nuumber is less than 0.5")   
//     console.log(random)
// }
// if(random >=0.5){
//     console.log("Your Nuumber is greater than 0.5")   
//     console.log(random)
// }
// console.log("After Conditional")


// const password = prompt("please enter a new password");

// Password must be 6+ characters
// if (password.length >= 6) {
//     // Password cannot include space
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password!");
//     } else {
//         console.log("Password cannot contain spaces!")
//     }
// } else {
//     console.log("PASSWORD TOO SHORT! Must be 6+ characters")
// }


// const userInput = prompt("Enter Something")

// if(0){
//     console.log("truthy!")
// } else {
//     console.log("falsy!")

// }


//PLEASE DON'T TOUCH THIS LINE!
// let restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// //YOUR CODE GOES DOWN HERE:
// let fullAddress = restaurant[name]
// console.log(fullAddress[name])


// for(let i=5; i>=0;i--){
//     console.log(5*i)
// }
// let input = prompt("Hey, say Something!")

// while(true){
//     input=prompt(input)
//     if(input.toLowerCase()==="Stop Copying Me!") break
// }
// console.log("Ok you win!!!!")

let maximum = prompt("Enter the maximum number!")
while(!maximum){
    maximum=ParseInt(prompt("Enter a valid number!"))
}

const targetNum = Math.floor(Math.random()*maximum+1)
console.log(targetNum)


let guess = parseInt(prompt("Enter your first guess!"))
let attempts = 1
while(guess!==targetNum){
    attempts++
    if(guess>targetNum){
        guess=parseInt(prompt("Too high! Enter a new guesss:"))
    } else {
        guess=parseInt(prompt("Too Low! Enter a new guesss:"))
    }
}
console.log("You Got IT!  It took you "+attempts+" tries")