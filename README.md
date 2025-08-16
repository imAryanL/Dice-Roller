# Dice Roller

## Description
A simple web application that allows users to roll a specified number of dice and displays the results both as text and images.

![diceroller](https://github.com/user-attachments/assets/b66251c7-7fb1-4c60-b861-36d65fe354df)

## Features
- Roll multiple dice at once
- Display the values of the rolled dice
- Show images of the rolled dice

## Technologies Used
- HTML
- CSS
- JavaScript

## Usage
1. Open `index.html` in your web browser.
2. Enter the number of dice you want to roll.
3. Click the "Click here to Roll Dice!" button to see the results.

## How to Run
1. Clone the repository or download the project files.
2. Ensure you have a directory named `dice_images` containing the dice images (`dice-six-faces-1.png` to `dice-six-faces-6.png`).
3. Open `index.html` in any web browser.
4. Enter the number of dice, then click the button to roll the dice and see the results.

## JavaScript Explanation
The `index.js` file contains the following:

### Function: rollDice
- **Purpose**: Rolls a specified number of dice and displays the results as text and images.
- **Functionality**:
  - Gets the number of dice from the input field.
  - Clears any previous results.
  - Generates random dice values and corresponding image HTML strings.
  - Updates the results section with the new values and images.

```javascript
// function to roll the dice
function rollDice() {
    // get the number of dice from the input element
    const numOfDice = document.getElementById("numOfDice").value;
    
    // get the elements to display the result and dice images
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    
    // arrays to store the dice values and the image HTML strings
    const values = [];
    const images = [];

    // clear previous images (if any) before adding new ones
    diceImages.innerHTML = '';

    // loop to generate random dice values and create image HTML strings
    for (let i = 0; i < numOfDice; i++) {
        // generate a random value between 1 and 6
        const value = Math.floor(Math.random() * 6) + 1;
        
        // add the value to the values array
        values.push(value);
        
        // create an image HTML string and add it to the images array
        images.push(`<img src="dice_images/dice-six-faces-${value}.png" alt="Dice ${value}">`);
    }

    // display the dice values as text in the diceResult element
    diceResult.textContent = `Your dice value is: ${values.join(', ')}`;
    
    // display the dice images in the diceImages element
    diceImages.innerHTML = images.join('');
}
```
<br>


