function rollDice(){
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
        // Generate a random value between 1 and 6
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
