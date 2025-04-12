# Dice Roll Simulator

A simple web application that simulates rolling a dice and keeps track of roll history.

## Features

- Roll a virtual 6-sided dice
- Visual dice face display using Unicode characters
- Animated roll effect
- History of previous rolls
- Responsive design

## How to Use

1. Open `index.html` in any modern web browser
2. Click the "Roll Dice" button to roll the dice
3. View your roll history below the dice

## Technologies Used

- HTML5
- CSS3 (with animations)
- JavaScript (ES6)

## Project Structure

- `index.html` - Main HTML file
- `styles.css` - Styling for the application
- `index.js` - Dice rolling logic and UI updates

## Screenshot
function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceE1.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistoryList();
    console.log(`Rolled a ${rollResult}`);
    return rollResult;
}
![Dice Roll Simulator Screenshot](screenshot.png)

## Code Example

```javascript
function rollDice() {
    const rollresult = Math.floor(Math.random() * 6) + 1;
    const diceface = getDiceFace(rollresult);
    diceE1.innerHTML = diceface;
    historyList.push(rollresult);
    updateRollhistoryList();
}
```

## Styling Features

- Smooth roll animation (3D rotation effect)
- Hover effects on buttons
- Clean, centered layout
- Responsive design for different screen sizes

## License

MIT
# Dice_Roll_simulator
