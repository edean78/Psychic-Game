// Creat an array of letters the computer will choose from
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

// Create variables to hold the value of wins, losses, guesses left, guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = "";

// Create variables that hold references to the places in the HTML where we want to display things.
var userGuesses = document.getElementById("guesses-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

document.onkeyup = function(event){
    var userGuess = event.key;
}

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];