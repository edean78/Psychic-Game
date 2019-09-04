// Creat an array of letters the computer will choose from
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

// Create variables to hold the value of wins, losses, guesses left, guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesText = document.getElementById("guesses-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event){

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess !== computerGuess){
        guesses.push(userGuess),
        guessesLeft --;

        if (userGuess === computerGuess){
            wins++, guessesLeft = 9, guesses = [];
        } else if (guessesLeft = 0) {
            losses--, guessesLeft = 9, guesses = [];
        }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesText.textContent = "Your Guesses so far: " + userGuess;
    }
};

