let currentInput = ''; 
console.log(currentInput, typeof currentInput);

const resultDisplay = document.getElementById('result');
console.log( resultDisplay, typeof resultDisplay); 

// Seleziona tutti i pulsanti numerici
let buttons = document.querySelectorAll('.numbers button');
console.log(buttons, typeof buttons);

// event listener a tutti i pulsanti numerici
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const value = this.textContent;
        console.log(value, typeof value);

        // Concatenazione
        currentInput += value;
        console.log(currentInput, typeof currentInput);

        updateDisplay(currentInput);
    });
}
