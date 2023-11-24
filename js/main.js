const stateArray = [0,1,2,3,4,5];
let currentStateIndex = 0;

let array1 = ["I can read your mind", "In your head, pick a number from 01-99", "Add both digits together to get a new number", "Subtract your new number from the original number", "", "&" ];
let array2 = ["", "When you have your number click next", "Ex: 14 is 1 + 4 = 5 click next to proceed", "Ex: 14 - 5 = 9 click next to proceed", "Find you new number. Note the symbol beside the number", "Your symbol is: &"];

const primaryText = document.getElementById("primaryText");
const subText = document.getElementById("subText");
const nextButton = document.getElementById("nextButton");

primaryText.textContent = array1[currentStateIndex];
subText.textContent = array2[currentStateIndex];

const arrayOfSymbols = [ " = @", " = #", " = $", " = %", " = ^", " = *", " = +", " = !", " = &"];
const divisbleBy9Symbol = arrayOfSymbols.splice(Math.floor(Math.random()*9),1);

function updateText(){
    if (currentStateIndex === 4){
        primaryText.textContent = "";
        const symbolNumberPairs = {};
    
    for (let i=0; i<100; i++){
        if (i%9 === 0){
            symbolNumberPairs[i] = divisbleBy9Symbol;
        } else {
            symbolNumberPairs[i] = arrayOfSymbols[Math.floor(Math.random()*8)];
        }
        const unorderedList = document.createElement("ul");
        const textUnorderedList = document.createTextNode(i + symbolNumberPairs[i]);
        unorderedList.appendChild(textUnorderedList);
        document.getElementById("primaryText").appendChild(unorderedList);
        subText.textContent = array2[currentStateIndex];
    }
    } else if (currentStateIndex === 5){
        const finalSymbol = divisbleBy9Symbol[0].split(" = ")[1];
        primaryText.textContent = finalSymbol;
        subText.textContent = "Your symbol is: " + finalSymbol;
    } else {
        primaryText.textContent = array1[currentStateIndex];
        subText.textContent = array2[currentStateIndex];
    }
}
        
nextButton.addEventListener('click', function(){
    currentStateIndex++;
    if (currentStateIndex >= stateArray.length){
        currentStateIndex = 0;
    }
    updateText();
});