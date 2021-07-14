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


  
    
//     // /*** Uncomment these to check your work! ***/
    const blackjack = array =>{
      // decalre a varialbe and assign it 0; for storingng the dealer count 
      let dCount = 0
      // create a new function w/two parameters
      function dealer (cardA, cardB){
        //decalre a varialbe and assign as 0; for storing player card counts
        let pCount = 0
        // declaring a varaible and assign as the sum of cardA and Card B 
        let total = cardA + cardB
        //  create a new function /with no parapeters -- this is for player
        function player(){
          // intiate cond stmtm, if the total === 'bust'
          if(total === 'bust'){
            // return 'you are done'
            return 'you are done'
          }
          // incremetn player counter
          pCount++
          // incremetn dealer counter
          dCount++
          // initate cond smsmt, where if player count === 1.....
          if(pCount === 1 ){
            // return total
            return total
          }
          // update/reassign the total 
          total+=array[dCount-2]
          // intiate cond stmt, where if total > 21 {
            if(total > 21){
              // reassign/update the total to 'bust'
              total = 'bust'
              // decrement dealer count
              dCount--
              
            }
          // return total
          return total

        }
      return player
      }
    return dealer
}

    
    // /*** DEALER ***/
    // write the function for the array[2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
  
    // create the cardArray function
    const cardArray = [2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]

    // creeta callback 
    const cardDeck = blackjack(cardArray)
 
    
    
  //   // /*** PLAYER 1 ***/
  const playerOne = cardDeck(4, 5);
  console.log(playerOne())//   // => should log 9
  console.log(playerOne())//   // => should log 11
  console.log(playerOne())//   // => should log 17
  console.log(playerOne())//   // => should log 18
  console.log(playerOne())//   // => should log 'bust'
  console.log(playerOne())//   // => should log 'you are done!'
  console.log(playerOne())//   // => should log 'you are done!'
    
  //   // /*** BELOW LINES ARE FOR THE BONUS ***/
    
  //   // /*** PLAYER 2 ***/
  const playerTwo =cardDeck(2, 2);
  console.log(playerTwo())//   // => should log 4
  console.log(playerTwo())//   // => should log 15
  console.log(playerTwo())//   // => should log 19
  console.log(playerTwo())//   // => should log 'bust'
  console.log(playerTwo())//   // => should log 'you are done!
  console.log(playerTwo())//   // => should log 'you are done!
    
  //   // /*** PLAYER 3 ***/
  const playerThree=  cardDeck(3,7)
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
  
  const pathFinder = (objects,array) =>{
    // base: if array.length === 0, return key/value pair
    if(array.length===0){objects[array[0]]}
    // slice the array
    let newArr  = array.slice(1)
    // initate a cond stmtm, where if the is a string....
    if(typeof objects[array[0]]==='string'){
      // return key value pair
      return objects[array[0]]
    }
    // recurse the function w/ update inputs
    return pathFinder(objects[array[0]],newArr)

  }
  
  const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
  const arr = ["first", "second", "third"];
  console.log(pathFinder(obj, arr));   //-> "finish"
  
  
  
  
  // //3.     /////////////////////////////////////////////////////////////////movie selector/////////////////////////////////////////////////////
  // // Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). 
  // // Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. 
  // // The titles should be all uppercase strings.

  const movieSelector = (array) =>{
    // utlize map method
    return array.map(el=> {
      // return new 'mutated key value pair'
      return {
        'title': el.title.toUpperCase(),
        'score': el.score

      }
    })
    // utlize filter method =>filer score >5
    .filter(element => element.score>5)
    // utilzie reduce method => return the titles from our filtered and mapped data
    .reduce((acc,curr)=>{
      // push curr/current elmeent into our accumulator
      acc.push(curr.title)
      // return acc
      return acc
    },[])
  }

  
  
  
  // const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
  // console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]






  // const poyoyotion 

  const poyoyotion = string => {
    // decalre a varaible and assign/utilize split method...turn the string into an array
    let convert = string.split('')
    .reverse()
    // iterate through the array/string w/ a for...of loop
    for(let i=0; i<convert.length;i++){
      // initiate cond stmt, where if current elemetn ='A'....
      if(convert[i] === 'A'){
        // splice/delete teh current element
        convert.splice(i,1)
        // splice/delete the previous element/index and insert a value of previuos elmenet +1
        convert.splice(i-1,1,parseInt(convert[i-1])+1)

        // otherwie... if, the current leement ='B'......
      } else if (convert[i]==='B'){
        // splice/delete the current elelment
        convert.splice(i,1)
        // splice/delete the current element and indert a value of current element -1
        convert.splice(i,1,parseInt(convert[i])-1)

      }

    }
    // return array w/join method to convert back to stirng
    // console.log(typeof parseInt(convert.join('')))
    return parseInt(convert.join(''))

  // }
  
  
  // // // };
  // console.log(poyoyotion('432A452B2')) ///4334521
  // console.log(poyoyotion('7545B4B1')) // 754530
  

  function multiMap(arrayOfValues, arrayOfCallbacks){
    let obj = {}
    for(let el of arrayOfValues){
      obj[el] = []
      for(let i=0;i<arrayOfCallbacks.length;i++){
        obj[el].push(arrayOfCallbacks[i](el))
      }
    }
    return obj
  
  }
  // Uncomment these to check your work!
  function uppercaser(str) { return str.toUpperCase(); }
  function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
  function repeater(str) { return str + str; }
  const items = ['catfood', 'glue', 'beer'];
  const functions = [uppercaser, capitalize, repeater];
  console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
  
  
  
  