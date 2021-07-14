//////////////////////////////////////////////////////
///                                                ///
///           JS BEGINNER GROUP PROJECT            ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
//////////////////////////////////////////////////////


/* 
  Now it's time to put all those new skill to the test!  We're going to create 
  a little text based choose-your-own adventure game!

  Work together in your group to come up with the most creative story you can 
  come up with.  The more twists and turns the better!  You can definitely do 
  better than this silly little example below.

  You'll notice some new functions used below (alert, confirm & prompt).  These 
  are all built in browser functions.  They allow you to interact with the user by
  sending them messages or asking the questions.  With alert, you just send a message, 
  but with confirm and prompt, you can save their response and use it to determine 
  what your game should do next!

  DOCUMENTATION:  https://javascript.info/alert-prompt-confirm

  NOTE: The code below is just an example!  You don't have to use the same 
  structure or style.  Feel free to change up the datatypes or the control 
  flow to suit your preference.  As long as it works, then you're good to go!

  HAVE SOME FUN WITH IT!
*/


// We use an Object here to keep track of all our messages in one easy to access place.  You can use a different method if you like.
const messages = {
    A: "Welcome, would you like to play a game?",
    B1: "Awesome!  Let's get started!",
    B2: "Well have a nice day then.",
    C: "Would you prefer to go to the beach or the park today?",
    D1: "You got eaten by a shark and died.  Click OK to play again!",
    D2: "Oh yeah.  Let's hit up central park",
    E1: "Welcome to Central Park.  Would you like to go to the zoo?"
  }
  
  function beginGame() {
    // 'confirm' shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
    const response = window.confirm(messages.A);
    if (response) {
      // 'alert' shows a message.
      alert(messages.B1);
      nextQuestion();
    } else {
      alert(messages.B2)
    }
  }
  
  function nextQuestion() {
    // 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
    const response = prompt(messages.C);
    if (response === 'beach') {
      const startOver = confirm(messages.D1);
      if (startOver) {
        beginGame();
      }
    } else if (response === 'park') {
      alert(messages.D2);
      const goToZoo = confirm(messages.E1)
      if (goToZoo) {
        alert('you get the idea...')
      }
    }
  
  }
  
  // don't forget to initiate your game!!
  beginGame();
  
  