//1.  ////////////////////  ////////////////////////////////////////////////////// CHALLENGE 19

// Inspect the commented out test cases carefully if you need help to understand these instructions.

// Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), 
// and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
// On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

// On the SECOND invocation of the PLAYER function, it will return either:

// the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
// the string 'bust' if that sum is over 21.

// If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

// the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
// the string 'bust' if the new sum is over 21.

// And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
// You may assume that the given array is long enough to give a 'bust' before running out of numbers.

// BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.

const blackJack = array => {
    //   declare a varialbe and assign it as 0; dealerCount
      let dealerCount = 0
    //   create a new inner function and pass in two arguments/ CardA and CArd B
      return function dealer(cardA, cardB){
        //   decalre a varaible and assign as the sum of Card A and Card B ; total
        let total = cardA + cardB
        //   decalre a varaible and asssign as 0; playerCount
        let playerCount = 0
        //   create a new inner function w/no arguments
        return function player(){
            //   indtialize a  cond stmtm, where if total === 'bust'....
          if(total ==='bust'){
                //   return 'you are done'
            return 'you are fucking out!'
            
          }
        //   increment dealerCount
          dealerCount++
        //   increment playerCount
          playerCount++
        //   intialize a cond stmt, where if player cout === 1.....
          if(playerCount ===1){
            //   	return the toatal value
            return total
          }
        //   update/reassign total value
          total+= array[dealerCount-2]
        //   intiate cond stmt, where if total>21....
          if(total>21){
            //   update/reassing total = 'bust'
            total = 'bust'
            //   decrement the dealercount
            dealerCount--
            return total
            
          }
    //   return total
          return total
          
        }
        // return player
      }
      // return dealer
      
    }
    
      
        
        // /*** Uncomment these to check your work! ***/
        
        // /*** DEALER ***/
        // write the function for the array[2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
      const deckArray = [2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]
      
      
      ///////////////////////////////////////we are assing playerHands to the return value of the invoked blackjack function
      const  playerHands = blackJack(deckArray)
     
        
        
      //   // /*** PLAYER 1 ***/
      const playerOne = playerHands(4, 5);
    
    ///loggin outputs
      console.log(playerOne())//   // => should log 9
      console.log(playerOne())//   // => should log 11
      console.log(playerOne())//   // => should log 17
      console.log(playerOne())//   // => should log 18
      console.log(playerOne())//   // => should log 'bust'
      console.log(playerOne())//   // => should log 'you are done!'
      console.log(playerOne())//   // => should log 'you are done!'
        
      //   // /*** BELOW LINES ARE FOR THE BONUS ***/
        
      //   // /*** PLAYER 2 ***/
      const playerTwo=playerHands(2,2)//   (2, 2);
      console.log(playerTwo())//   // => should log 4
      console.log(playerTwo())//   // => should log 15
      console.log(playerTwo())//   // => should log 19
      console.log(playerTwo())//   // => should log 'bust'
      console.log(playerTwo())//   // => should log 'you are done!
      console.log(playerTwo())//   // => should log 'you are done!
        
      //   // /*** PLAYER 3 ***/
     const playerThree = playerHands(3,7) //   (3, 7);
      console.log(playerThree())//     // => should log 10
      console.log(playerThree())//     // => should log 13
      console.log(playerThree())//     // => should log 'bust'
      console.log(playerThree())//     // => should log 'you are done!
      console.log(playerThree())//     // => should log 'you are done!
      
      
      
      
      // //2.  ///////////////////////////////////////////////////Challenge 5
      // // Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
      // // const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
      // // const arr = ["first","second","third"];
      // // pathFinder(obj,arr);   //-> "finish"
      
    // const pathFinder = (object,array) =>{
    // //   base: if the length of the array is 0.... return key/value pair
    //   if(array.length ===0){return object[array[0]]}
    // //   declare a varaible and assign it as a sliced arr ----- array slice will make a copy of the array without modifying the orignal array.
    //   let newArr = array.slice(1)
    // //   initiate a cond stmt, where if key/value pair is a 'string'....
    //   if(typeof object[array[0]] === 'string'){
    // 	//   return the key value pair
    //     return object[array[0]]
        
    //   }
    // //   recurse the function w/ updated inputs
    //   return pathFinder(object[array[0]],newArr)
    // }
      
      
    //   const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
    //   const arr = ["first", "second", "third"];
    //   console.log(pathFinder(obj, arr));   //-> "finish"
      
      
      
      
      // //3.     /////////////////////////////////////////////////////////////////movie selector/////////////////////////////////////////////////////
      // // Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). 
      // // Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. 
    //   // // The titles should be all uppercase strings.
    // const movieSelector = (arr) => {
    // //   itialize the map method
    //   return arr.map(el => {
    // 	//   return a new object
    //     return{
    //       'title': el.title.toUpperCase(),
    //       'score': el.score
    //     }
    //   })
    // //   intialize the filter method on the array  ---
    // 	//   return all score elements >5
    //   .filter(el => el.score>5)
    // //   intilaze the reduce method
    //   .reduce((acc,curr)=> {
    // 	//   	push the current element/title into the accumulator
    //     acc.push(curr.title)
    // 	//   return the update accmulaotr
    //     return acc
        
    //   },[])
      
    // }
      
      
      
    //   const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
    //   console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]
    
    
    
    
    
    
    //   // const poyoyotion 
    // const poyoyotion = str => {
    // //   convert the string into an array utlizing the split method
    //   let convert = str.split('')
    // //   iterate through the array w/ for...loop
    //   for(let i=0; i<convert.length;i++){
    // 	//   intiate a cond stmt, where if current element ='A'
    //     if(convert[i] === 'A') {
          
    // 		//   splice/delete the current eleement
    //       convert.splice(i,1)
    // 		//   splice the previous element and insert a value of current element +1
    //       convert.splice(i-1,1,parseInt(convert[i-1])+1)
          
    // //   intiate another cond stmt, wher else if, if the current element ='B'
    //     } else if(convert[i] === "B"){
    // 	//   splice/delete the current eleement
    //       convert.splice(i,1)
    //   //   splice the current index and insert a value of current element -11
    //       convert.splice(i,1,parseInt(convert[i])-1)
    //       }
    //   }
    // //   return the result/array and convert it back to a string utilizing the join method
    //   return convert.join('')
      
    // }
      
      
    //   // // };
    //   console.log(poyoyotion('432A452B2')) ///4334521
    //   console.log(poyoyotion('7545B4B1')) // 754530
      


    function makeFuncTester(arrOfTests) {
      debugger;
        return function(callback) {
        return arrOfTests.every(test => {
          const [first, second] = test;
          return callback(first) === second;
        });
      };
    }
    
    /*** Uncomment these to check your work! ***/
    const capLastTestCases = [];
    capLastTestCases.push(['hello', 'hellO']);
    capLastTestCases.push(['goodbye', 'goodbyE']);
    capLastTestCases.push(['howdy', 'howdY']);
    const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
    const capLastAttempt1 = str => str.toUpperCase();
    const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
    console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
    console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


function createSecretHolder(secret) {
  let num = secret;
  const obj = {
    getSecret() {
      return num;
    },
    setSecret(n) {
      num = n;
    },
  };
  return obj;
}
// let obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2

    