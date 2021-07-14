// function camelCase(str){
//   // return str[0].toUpperCase()
//   debugger;
//   let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
//   let raw = str.split('')
//   return  clean = raw.filter((letter) =>{
//     return punctuation.indexOf(letter)===-1
//   }).
//   // if(str[0].toUpperCase()===str[0]){
//   //   return clean.join('')
//   // }else {
//   //   // return clean.join('')
//   //   return clean[0].toLowerCase() + clean.slice(1).join('')
//   // }
// }


// function camelCase(str){
//   debugger;
//   let regex =  /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
//   let clean = str.replace(regex,' ')
//   let splits = clean.split(' ').join('')
//   let result = str[0]
    
//   for(let i=1; i<splits.length;i++){
  
//     if(splits[i-1] === ' '){
//       result+=splits[i].toUpperCase()
//     } else {
//       result+= splits[i]
//     }
//   }
//   return result
// }


// console.log(camelCase('the-stealth-warrior')) //TheStealthWarrior
// console.log(camelCase('The_Stealth_Warrior')) //theStealthWarrior
// console.log(camelCase('Bang!Bang_Boom')) //BangBangBoom
// console.log(camelCase('bang!bang_boom')) //bangBangBoom

// function isPrime(n){
//   if(n<2){return false}

//   for(let i=2; i<n; i++){
//     if(n%i === 0){return false}
//   }
//   return true
// }

// console.log(isPrime(7))
// console.log(isPrime(6))
// console.log(isPrime(44))
// console.log(isPrime(5))


// function factorial(n){
//   let result = 1
//   for(let i=n; i>=1;i--){
//     result = i*result
//   }
//   return result;

// }

function factorial(n,output =1){
  if(n===0){return output}
  let newNum = n-1
  let newOutput = output * n
  return factorial(newNum,newOutput)
}

console.log(factorial(4))