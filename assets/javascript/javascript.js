
    var wins = 0
    var losses = 0
    var guessesLeft = 9
    var guessesSoFar = 0
    var totalGuesses = 9
    var guessesSoFar = []
    
function getRandomLetter() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    return letters.charAt(Math.floor(Math.random() * letters.length))
}

function updateWins() {
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }
    
function updateLosses() {
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
    }
    
function updateGuessesLeft() {
        document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
    }
    
function updateGuessesSoFar() {
        document.querySelector("#guesses-so-far").innerHTML = "Guesses So Far: " + guessesSoFar;
    }
    
    updateWins()
    updateLosses()
    updateGuessesLeft()
    updateGuessesSoFar()
    
document.onkeyup = function (event) {
    if (guessesLeft > 0) {
        var randomLetter = getRandomLetter()
    var userInput = event.key.toLowerCase()

        if (randomLetter === userInput) {
        wins++
            guessesLeft = totalGuesses
    guessesSoFar = []
    alert("You Win")
        } else {
        guessesSoFar.push(userInput)
    }

    guessesLeft--
    } else {
        losses++
        guessesLeft = totalGuesses
    guessesSoFar = []
}

updateWins()
updateLosses()
updateGuessesLeft()
updateGuessesSoFar()
}
