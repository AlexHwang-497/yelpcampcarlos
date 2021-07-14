function isPowerOfTwo(n){
    //.. should return true or false ..
    //let varaible "expo" equal a exponet function
    let expo = Math.log2(512)
    console.log('expo:'+expo);
    //initiate an if statement to determine if "expo" is divisible by 2
    //return true
    if(expo%2===0){
      return true
      //inititate an else if, to handle the integers of 1 and 2;
      //where it will return true
    } else if (n===1 || n===2){
      return true
      //initiate else statement where it will return false
    } else {
      return false;
    }
  }

console.log(isPowerOfTwo(1))// true)
console.log(isPowerOfTwo(512))// true)
console.log(isPowerOfTwo(6)) //false)