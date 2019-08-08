// define variables

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const words = ["fun","joyful","reluctant", "pensive" , "thoughtful" , "sad" , "melancholy"]


let computerWord = words[Math.floor(Math.random() * words.length)];
console.log(computerWord);
let wins = 0;
let losses = 0;

const playerLetterDiv = document.getElementById("PlayerLetters")
const computerWordDiv = document.getElementById("computerWord")
const updateWinDiv = document.getElementById("wins")
const updateLossDiv = document.getElementById("losses")
const letterschosenDiv = document.getElementById("chosenLetters")
const guessesleftDiv = document.getElementById("guessesleft")

for (let index = 0; index < computerWord.length; index++) {
    computerLetterDiv.textContent = computerLetterDiv.textContent.concat("_ ")
}


// --- global functions ---

function reset (){

    computerWord = words[Math.floor(Math.random() * words.length)];
    guessesleftDiv.textContent = 3;
    letterschosenDiv.textContent = ""

    for (let index = 0; index < computerWord.length; index++) {
        computerWordDiv.textContent = computerWordDiv.textContent.concat("_ ")
       
    
    }
}



document.onkeyup = function (event) {

    const userKeypress=event.key;

    event.key
    letterschosenDiv.textContent =  letterschosenDiv.textContent + userKeypress
}



for (let index = 0; index < computerWord.length; index++) {
    if computerWord[index]  ===
    
}

