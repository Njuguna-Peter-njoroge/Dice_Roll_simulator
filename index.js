const buttonE1 = document.getElementById("roll-button");
let historyList = [];

const diceE1 = document.getElementById("dice");
const rollHistoryE1 = document.getElementById("roll-history");

function rollDice() {
    const rollresult = Math.floor(Math.random() * 6) + 1;

    const diceface = getDiceFace(rollresult);
    diceE1.innerHTML = diceface;
    historyList.push(rollresult);
    updateRollhistoryList();
}

function updateRollhistoryList() { // Corrected Function Name
    rollHistoryE1.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) { // Corrected Loop
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`; // Corrected innerHTML
        rollHistoryE1.appendChild(listItem);
    }
}

function getDiceFace(rollresult) {
    switch (rollresult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

buttonE1.addEventListener("click", () => {
    diceE1.classList.add("roll-animation");
    setTimeout(() => {
        diceE1.classList.remove("roll-animation");
        rollDice(); // Call rollDice() here
    }, 1000);
});