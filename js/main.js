const stateArray = [0,1,2,3,4,5];
let currentStateIndex = 0;

const arrayOfSymbols = [ "@", "#", "$", "%", "^", "*", "+", "!"];
const divisbleBy9Symbol = "&";
const numbers = Array.from({length: 100}, (_, i) => i);
const symbolNumberPairs = {};
for (let i=0; i<numbers.length; i++){
    if (i%9 === 0){
        symbolNumberPairs[i] = divisbleBy9Symbol;
    } else {
        symbolNumberPairs[i] = arrayOfSymbols.pop();
    }
}

let array1 = ["I can read your mind", "Pick a number from 01-99", "Add both digits together to get a new number", "Subtract your new number from the original number", "", "&" ];
let array2 = ["", "when you have your number click next", "Ex: 14 is 1 + 4 = 5 click next to proceed", "Ex: 14 - 5 = 9 click next to proceed", "Find you new number. Note the symbol beside the number", "Your symbol is: &"];

const primaryText = document.getElementById("primaryText");
const subText = document.getElementById("subText");
const nextButton = document.getElementById("nextButton");

primaryText.textContent = array1[currentStateIndex];
subText.textContent = array2[currentStateIndex];

function updateText(){
    primaryText.textContent = array1[currentStateIndex];
    subText.textContent = array2[currentStateIndex];
}

nextButton.addEventListener('click', function(){
    currentStateIndex++;
    if (currentStateIndex >= stateArray.length){
        currentStateIndex = 0;
    }
    updateText();
});

