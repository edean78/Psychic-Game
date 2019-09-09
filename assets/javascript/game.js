// Creat an array of letters the computer will choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
// Ready the document
$(document).ready(function(){
    console.log("Ready");
});

// Create variables to hold the value of wins, losses, guesses left, guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesText = document.getElementById("guesses-text");

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("The computer chose " + computerGuess)

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess.toLowerCase();
    console.log("You pressed the letter " + userGuess);

    // ToDo: Create function that will compare user guesses to see if the user guess are duplicated

    // Create the logic that handles wins, losses, and missed guesses

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
        
        if (userGuess === computerGuess){
            updateWins();
            resetArrGuesses();
        } else if (guessesLeft === 0){
            updateLosses();
            resetArrGuesses();
        } else {
            addArrayValue();
            missedGuesses();
        }

    }

    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;

        function addArrayValue(){
            guesses.push(userGuess);
            var arrVal = guesses.join(", ");
            document.getElementById("guesses-text").innerHTML = arrVal;
        }

        function resetArrGuesses(){
            guessesLeft = 10;
            guesses = [];
        }

        function missedGuesses (){
            guessesLeft--;
        }

        function updateLosses(){
            losses++;
        }

        function updateWins(){
            wins++;
        }
    
}

// if (userGuess === computerGuess){
        //     wins++; guessesLeft = 9; textGuess = "";
        // }

        // for (var i = 0; i <= guessesLeft; i++) {
        //     if (userGuess !== computerGuess){
        //         guesses.append(userGuess);
        //         guessesLeft--;

        //     } else if (guessesLeft = 0){
        //         Losses++; guessesLeft = 9; textGuess = "";
        //     }
        // }

        // if (userGuess !== computerGuess) {
        //     guesses.push(userGuess);
        //     guessesLeft--;
        // } else if (guessesLeft = 0) {
        //     losses++;
        //     guessesLeft = 9;
        //     guesses = [];
        // } else if (userGuess === computerGuess) {
        //     wins++ ,
        //         guessesLeft = 9,
        //         guesses = [];
        // }

// if (userGuess !== computerGuess){
    //     guesses.push(userGuess),
    //     guessesLeft --;
    //     console.log(guesses);
    //     if (userGuess === computerGuess){
    //         wins++, guessesLeft = 9, guesses = [];
    //     } else if (guessesLeft = 0) {
    //         losses--, guessesLeft = 9, guesses = [];
    //     }


