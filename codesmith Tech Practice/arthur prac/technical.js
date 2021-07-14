// 1.  write a function isEven that takes an value and returns a boolean whether it is even or not. t/f


///make sure to ask what the data is really defineed
///consider all edge cases aka if it's going to be negative, undefined and etc


// input:   5 | 8 | 3
// output:  false | true | false

function isEven(num) {
    //   initate a cond stmtm, where if the num is divisible by 2....
      if(num % 2 === 0) {
    //   return a true boolean
        return true    
    //   otherwise...
      } else {
    //   	return a false boolesan
        return false    
      }
    }
    // console.log(isEven(5))  // false
    // console.log(isEven(8))  // true
    // console.log(isEven(3))  // false
    
    // 2.  define a fucntion greater then 4, given a number return value should be a boolean
    // input:number
    // output: boolean of t/f
    
    function greaterThanFour(num) {
    //   intiate a cond stmt, where if the varialbe is greater then 4....
      if(num > 4){ 
    //   return true
        return true
      }
    //   otherwise...return false
      return false
      
    }
    
    // console.log(greaterThanFour(2)) // false
    // console.log(greaterThanFour(4)) // false
    // console.log(greaterThanFour(5)) // true
    
    // 3.  write a function isSquared; given a number determine if it is a square
    // input: number
    // output: returning a boolean
    
    function isSquared(num){
    //   intiate a cond stmt, wehre if the number is squared...
      
      if(Math.sqrt(num)%1===0){
    //   return a true value/boolean
        return true
      }
    //   otherwise....return a false boolean
      return false
      
    }
    
    console.log(isSquared(4))  // 2  // treu
    console.log(isSquared(16)) //4  // true
    console.log(isSquared(25)) // false
    console.log(isSquared(5)) 
    console.log(isSquared(6)) // false
    
    // 4. write a fucntion hasSix, that if the interer has 6 in it return false;
    function hasSix(num){
    //   convert number into a string
       let convertStr = num.toString()
    
    //   iterate w/ a for... of loop
       for(let num of convertStr){
    //   intiate a cond stmt where to see if the number contains 6
         if(num === '6'){
                                
    //   return true
           return true
         }
       }
    //   otherwise.. return false
      return false
      
    }
    
    // console.log(hasSix(66))  /// true
    // console.log(hasSix(64))  //// true
    // console.log(hasSix(5)) /// false
    
    
    
        
    // Challenge 19
    // Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input.
    
    // input: callbacks
    // outoput: % based on how many true's there are vs false's
    
    function rating(arrOfFunctions, value){
      
      if (!arrOfFunctions.length) return 'please supply a valid array of callbacks'
      if (!Array.isArray(arrOfFunctions)) return undefined
      if (typeof value !== 'number') return 'please supply a valid number argument'
    //   decalre a variable and assign it as an empty object
      let obj = {}
    //   iterate w/for loop
      for(let i=0; i<arrOfFunctions.length;i++){
    //   initiate an if stmtt... where if the if the invoked callback exists in the eobject
        if(arrOfFunctions[i](value) in obj){
    //   	increment the key value pair
          obj[arrOfFunctions[i](value)]++
    //   otherwise....
        } else {
    //   assign the key/value pair as 1
          obj[arrOfFunctions[i](value)] = 1
        }
      }
    //   return the %
      // return obj
      // console.log(obj)
      // console.log(Object.values(obj))
      console.log(Object.keys(obj))
      
      let max
      
      
      return Object.keys(obj).reduce((acc, curr) => obj[curr] > acc[curr] ? acc:curr )
    }
    
    const callbacks = [isEven,greaterThanFour,isSquared,hasSix]
    console.log(rating(callbacks, 64))
    console.log(rating(callbacks, 66))
    console.log(rating(callbacks, 5))