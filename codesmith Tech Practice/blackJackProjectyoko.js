
var currentPlayer = 0; // global variable to decide which user is currently playing
// // 1. BUILD YOUR DECK
// // Assigning values to each card
const suits = ['Spades','Diamonds','Hearts','Clubs'];
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

// // Create an array called deck
let deck = [];

function createDeck(){
  // Outer loop to iterate through the values
  for (let i = 0; i < values.length; i++) {
    // Inner loop to iterate through the suites
    for (let x = 0; x < suits.length; x++) {
      
      let valueWeight = parseInt(values[i]);
        
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K") valueWeight = 10;
        
      if (values[i] == "A") valueWeight = 11;
                
      let card = { 
        Value : values[i], 
        Suit : suits[x], 
        Weight : valueWeight 
        };
      
      // Push each card into the deck array
      deck.push(card);
    }
  } 
}

function shuffle()
{
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++)
    {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
    }

// console.log(deck)

// // 3. CREATE PLAYERS – ALEX
// // create input field to get player's name
// // create object for player with Name, Points, Hand
var players = [];
function createPlayers(num)
{
    //players = [];
    for(var i = 0; i <= num -1 ; i++)
    {
        var hand = [];
        var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}


// console.log(players[0])
// console.log(players[1])
// console.log('0:' + players[0]);
// console.log('1:' + players[1]);

// // 4. START GAME – ANNE
// // prompt to start game/deal me in
// let startGame = confirm("Do you want to play Blackjack?");

// alert(startGame); // true if OK is pressed
// // if true, run start function
// // createDeck, shuffle, createPlayers, deal
function startblackjack() {
  // deal 2 cards to every player object
  currentPlayer = 0;
  createDeck();
  shuffle();
  createPlayers(4);
  deal();
}

// prompt to start game/deal me in
let startGame = confirm("Do you want to play Blackjack?");
// if true, run start function
if (startGame === true) {
  start();
} else {
  console.log('Try your luck elsewhere.');
}

//////*******よーこのれぷる *******/////////
// 5. DEAL the HAND (yoko)

function deal() {
  for(let i = 0; i < 2; i ++){
    for(let j = 0; j < players.length; j++){
      let card = deck.pop() // pop off the card from the deck and assign it to card
      players[j].Hand.push(card); // Assign card to players, update the user's Hand array with the new card
      // update points in the user object 
      let weight = card.Weight;
      updatePoints(j,weight);
    }
  }
  // log to the console the hand you've been dealt (2 cards), and the dealer's hand
  showHands();
  for(let k = 0; k < players.length; k ++){
    if(players[k].Points === 21){
      console.log("Player" + k + " WON")
    }
  }
  ask();
}

function showHands(){
  // log to the console the hand you've been dealt (2 cards), and the dealer's hand
  for(let i = 0; i < players.length; i++){
  console.log('=============================================')
  //console.log(players[i].Name + '\'s HAND: ' + players[i].Points + ' points')
  console.log(players[i].Name)
    for (let j = 0; j < players[i].Hand.length; j++){
     console.log(players[i].Hand[j])
    }
  }
}

function updatePoints(userID, weight){
 //console.log('updating points of user')
 players[userID].Points += weight
}

function checkIsOver21(userID){
  console.log('=============================================')  
  console.log('Is Current User Game Over? : Player ' + userID)
  console.log(players[userID].Points > 21)
  if(players[userID].Points > 21){ // if over 21, gameover
    console.log('GAME OVER: PLAYER ' + players[userID].ID + ' LOST');
    return;
  }else if(players[userID].Points === 21){
    console.log('GAME OVER: PLAYER ' + players[userID].ID + ' WON');
    return;
  }else{
    ask()
  }
}

function ask(){
  console.log('Asking Player:' + currentPlayer)
  let userID = currentPlayer;
  if (currentPlayer < players.length - 1){
    currentPlayer++
  }else{
    currentPlayer = 0
  }
  // updating the currentPlayer global variable
  console.log('=============================================')
  console.log('Hi Player ' + userID + ',')
  // check if the current player's point is over 21 return true/false
  console.log('Your current point is ' + players[userID].Points)
  console.log('---------------------------------------------')

    let nextMove = prompt('hit or stay?', '');
    if(nextMove === 'hit'){ // if hit is typed in, invoke hit()
      console.log('hitting with ' + userID)
      console.log('currentPlayer' + currentPlayer)
      hit(userID);
    }else if (nextMove === 'stay'){ // if stay is typed in, invoke stay()
      stay();
    }else{ // if anything else is typed in, keep prompting
      nextMove = prompt('hit or stay?', '');
    }
}

//////*******よーこのれぷる *******/////////
// // 6. HIT ME (yoko)
// // Add a new card to players hand



function hit(userID){
    // pop a card from the deck to the current player and push it onto the hand in the user object
    var card = deck.pop();
    players[userID].Hand.push(card);

    // update the point of the current user with the new card weight
    let weight = card.Weight;
    updatePoints(userID, weight);

    // show the current hands of all the users
    showHands();
    console.log("finished show hands")
    //check if current player new points are over 21
    checkIsOver21(userID);

}

//////*******よーこのれぷる *******/////////
// // 7. STAY – ANNE
// // Ends the program and determines winner
  function stay()
    {
        // move on to next player, if any
        if (currentPlayer != players.length-1) {
            document.getElementById('player_' + currentPlayer).classList.remove('active');
            currentPlayer += 1;
            document.getElementById('player_' + currentPlayer).classList.add('active');
        }

        else {
            end();
        }
    }

    function end()
    {
        var winner = -1;
        var score = 0;

        for(var i = 0; i < players.length; i++)
        {
            if (players[i].Points > score && players[i].Points < 22)
            {
                winner = i;
            }

            score = players[i].Points;
        }

        document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
    }
//////*******よーこのれぷる *******/////////
// // 8. PROMPTS / MESSAGES
// const messages = {

// }


startblackjack()


function stay() {
  if (currentPlayer != players.length -1) {
    currentPlayer += 1;
  } else {
    end();
  }
}

function end() {
  let winner = -1;
  let score = 0;

  // iterate through players and determine high score
  for (let i = 0; i < players.length; i++) {
    if (players[i].Points > score && players[i].Points < 22) {
      winner = i;
    }

    score = players[i].Points;
  }

  console.log('Player '+ winner + ' wins.');
}