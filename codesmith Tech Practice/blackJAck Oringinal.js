// *************** COMPLETE ************** -Ryan
// 1. CREATE A DECK OF CARDS
// Create card elements: suits, values
const suits = ['Spades','Diamonds','Hearts','Clubs'];
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

// Create empty arrays: deck, shuffled deck
let deck = [];
let shuffledDeck = [];

function createDeck(){
  // Outer loop to iterate through the values
  for (let i = 0; i < values.length; i++) {
    // Inner loop to iterate through the suites
    for (let x = 0; x < suits.length; x++) {
      
      // Convert strings to integers
      let valueWeight = parseInt(values[i]);
        
      // Assign the face cards to 10
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K") valueWeight = 10;
      
      // Assign the Ace to 11
      if (values[i] == "A") valueWeight = 11;

      // Create card object with values, suits, weight
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

// *************** COMPLETE ************** -Ryan
// 2. SHUFFLE DECK
function shuffle(array) {
  // Loop through the input array
  for (let i = 0; i < array.length; i++) {

    // Create a variable assigned to a random number less than 52
    let randomNum = Math.floor(Math.random() * array.length);

    // Push a random card from the deck into a new shuffled deck
    shuffledDeck.push(deck[randomNum]);
  }

  return shuffledDeck;
}
// After shuffling the deck of cards the evaluated result is stored in the global variable 'shuffledDeck'


// 3. CREATE PLAYERS – ALEX
// create input field to get player's name
// create object for player with Name, Points, Hand
//  let players = new Array();
  var players = [];  
    function createPlayers(num)
    {
        //players = new Array();
        for(let i = 0; i <= num; i++)
        {
           // let hand = new Array();
            var hand = [];
            let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
            players.push(player);
        }
    }


// 4. START GAME – ANNE
// createDeck, shuffle, createPlayers, deal
function start() {
  currentPlayer = 0;
  createDeck();
  shuffle(deck);
  createPlayers(2);
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


// 5.0 DEAL the HAND (yoko)

function deal() {
  for(let i = 0; i < 2; i ++){
    for(let j = 0; j < players.length; j++){
      let card = shuffledDeck.pop() // pop off the card from the deck and assign it to card
      players[j].Hand.push(card); // Assign card to players, update the user's Hand array with the new card
      // update points in the user object 
      let weight = card.Weight;
      updatePoints(j,weight);
    }
  }
  // log to the console the hand you've been dealt (2 cards), and the dealer's hand
  showHands();

  // console.log('player1',players[0])
  // console.log('player2',players[1])

  // check if someone has won on the first hand
  for(let k = 0; k < players.length; k ++){
    if(players[k].Points === 21){
      console.log("Player" + k + " WON")
    }
  }
  
  ask();

}

// 5.1  Function to show current hands of all the users (yoko)
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
  checkIsOver21(players[0])
}

// 5.2 Function to update the point in the user object with the new card weight (yoko)
function updatePoints(userID, weight){
 //console.log('updating points of user')
 players[userID].Points += weight
}

// 5.3 Function to check if the point is over 21 or not and show message accordingly (yoko)
function checkIsOver21(userID){
  console.log(userID)
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

// 5.4 Function to prompt users hit/stay (yoko)
function ask(){
  // updating the current user id so more than 2 players can play
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

  // prompt players hit/stay
  let nextMove = prompt('hit or stay?', '');
  if(nextMove === 'hit'){ // if hit is typed in, invoke hit()
    //console.log('hitting with ' + userID)
    //console.log('currentPlayer' + currentPlayer)
    hit(userID);
  }else if (nextMove === 'stay'){ // if stay is typed in, invoke stay()
    stay();
  }else{ // if anything else is typed in, keep prompting
    nextMove = prompt('hit or stay?', '');
  }
}

// 6. HIT (yoko)
// Add a new card to players hand
var currentPlayer = 0; // global variable to decide which user is currently playing

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

// 7. STAY – ANNE
// Ends the program and determines winner
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
