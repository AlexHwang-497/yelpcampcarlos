// Hi Alex!

// Declare a variable 'number' and set it to the value 10.

function nums(){
    // decalre a variable and assign it the value of 10
    let number = 10;
    //   return the variable
    return number
      
    }
    
    // console.log(nums())
    
    /*
    Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
    For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
    */
    
    function addNumbers(num, output=0){
    //   base: if num exactly equal to 0 return output
      if(num ===0){return output}
    //   decremnet num
      let newNum = num -1
    //   update/reassign output
      let newOutput = output + num
    //   recursive call
      return addNumbers(newNum,newOutput)
      
    }
    
    // console.log(addNumbers(4))
    
    /*
    Create a function "between50And500" that takes a number as an argument.
    "between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
    For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
    */
    
    function between50And500(num){
    //   intiate a cond stmt; where if num between and 50 and 500....
      if(num<500 && num >50){
    //   	retturn a boolean aka a true 
        return true;
        
    //   otherwise
      } else {
    //   return a boollena of false
        return false;
        
      }
      
    }
    // console.log(between50And500(472))
    // console.log(between50And500(45))
    // console.log(between50And500(4))
    
    /*
    Create a function "divBy100" that takes a number as an argument.
    "divBy100" should return a true if the number passed to it is divisible by 100.
    For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
    */
    
    function divBy100(num){
    //   intiate a cond stmnt; if the number is divisble by 100
      if(num%100 ===0 ){
    //   return true boolean
        return true;
    //   otherwise
      } else{
    //   return false boolean
        return false;
        
      }
      
    }
    
    // console.log(divBy100(120))
    // console.log(divBy100(600))
    // console.log(divBy100(6))
    
    
    /*
    Create a function "negativeOrEven" that takes a number as an argument.
    "negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
    For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
    */
    
    function negativeOrEven(num){
    //   intiate a cond stmt where if the number is a negative or even number....
      if(num<0 || num%2 === 0){
    //   return a true boollena
        return true;
        
    //   otherwise
      }else {
    //   return a false boolean
        return false;
        
      }
      
    }
    
    // console.log(negativeOrEven(7))
    // console.log(negativeOrEven(-3))
    // console.log(negativeOrEven(-6))
    
    /*
    Create a function "passAllTests" that takes an array of functions and another value as arguments.
    Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
    If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
    */
    
    function passAllTests(num,callback){
    //   decalre a varaible and asssign it as an empty array
      let obj = {};
    //   iterate w/ for loop
    for(let i=0; i<callback.length;i++){
    //   intiate cond stmt to see if the key exists in the object
      if(callback(num)){
    //   increment the key value pair
         obj[callback(num)]++
         
         //   otherwise
         } else {
             //   udpate/reassin the object value to 1
             obj[callback(num)] = 1;

         }
      
      
    }
    //   return object
      return obj
      
      
    }
    // function passAllTests(nums){
    //   console.log(negativeOrEven(nums))
    //   console.log(divBy100(nums))
    //   console.log(between50And500(nums))
    // }
    
    const functions = [divBy100, negativeOrEven, between50And500]
    console.log(passAllTests(300, functions))
    
    
    /*
    Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
    divisible by the 100, and a negative number OR even. Then test the number 250.
    */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    