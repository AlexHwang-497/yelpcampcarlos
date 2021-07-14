function getTheRange(arr){
    // ADD CODE HERE
    let newArr=[];
    let low = arr[0];
    let high = arr[0];
    let range = 0;
    
    for(let i =0; i<arr.length; i++){
        console.log(i)
      if(arr[i]<low){
         low = arr[i];
      } else if (arr[i]>high){
         high = arr[i];
      }
    }
    range = high-low;
    newArr.push(low,high, range);
    return newArr;
  }
  
  // Uncomment these to check your work!
    console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]


   function closestToTheMark(player1, player2){
    const theMark = Math.floor(Math.random() * 100)
    console.log(`If theMark is ${theMark}...`);
    // ADD CODE HERE
    if(player1-theMark<player2-theMark){
      return "Player 1 is closest"
    } else {
      return "Player 2 is closest"
    }
  }
  
  // Uncomment the line below to check your work!
   console.log(closestToTheMark(25, 75));
   function imAboutToExplodeWithExcitement(n){
    // ADD CODE HERE
    let val =[]
    while(n<10){
      if (n===5){
        return val.push("Oh wow, I can't handle the anticipation!");
      } else if(n===3){
        return val.push("I'm about to explode with excitement!");
      } else if(n===0){
        return val.push("That was kind of a let down")
      } else {
        return val.push(n);
      }
      console.log(val)
    }
  }
  
  // Uncomment the line below to check your work!
  imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'
  