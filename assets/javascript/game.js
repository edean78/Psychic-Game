// Ready the document
$(document).ready(function () {
    console.log("Ready");
});

// Create variables to hold the value of wins, losses, guesses left, guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];
var computerGuess = '';

// Creat an array of letters the computer will choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// Create variables that hold references to the places in the HTML where we want to display things.
document.getElementById("wins-text").innerHTML = wins;
document.getElementById("losses-text").innerHTML = losses;
document.getElementById("guessesleft-text").innerHTML = guessesLeft;
document.getElementById("guesses-text").innerHTML = guesses;

// Randomly chooses a choice from the options array. This is the Computer's guess.
function cpuGuess() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("The computer chose " + computerGuess);
}

cpuGuess();

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess.toLowerCase();
    console.log("You pressed the letter " + userGuess);

    // Create the logic that handles wins, losses, and missed guesses

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        if (userGuess === computerGuess) {
            updateWins();
            document.getElementById("wins-text").innerHTML = wins;
            resetArrGuesses();
            cpuGuess();
        } else if (guessesLeft === 0) {
            updateLosses();
            resetArrGuesses();
            cpuGuess();
        } else {
            addArrayValue();
            missedGuesses();
        }

    }

    // Create a function to add user guesses to guesses array
    function addArrayValue() {
        guesses.push(userGuess);
        var arrVal = guesses.join(", ");
        document.getElementById("guesses-text").innerHTML = arrVal;
        console.log(guesses);
    }

    // Create a function to reset the number of guesses and clear the guesses array
    function resetArrGuesses() {
        guessesLeft = 10;
        guesses = [];
    }

    // Create a function to subtract from the number of guesses left
    function missedGuesses() {
        --guessesLeft;
    }

    // Create a function to calculate losses
    function updateLosses() {
        losses++;
        document.getElementById("losses-text").innerHTML = losses;
    }

    // Create a function to calculate wins
    function updateWins() {
        wins++;
    }

}
