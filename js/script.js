let currentInput = ''; 
console.log(currentInput, typeof currentInput);

// Seleziona display
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

// Milestone 2

// variavbili per salvare i risultati al 2 e 3 click  
let currentOperator;
let firstOperand = '';


let operatorButtons = document.querySelectorAll('.operators button');

// event listener a tutti i pulsanti operatori
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function() {
        currentOperator = this.textContent; 
        firstOperand = currentInput;     
        console.log(currentOperator, typeof currentOperator);
   

        currentInput = '';                  
        updateDisplay('0');                 
    });
}

// MILESTONE 3

let equalsButton = document.querySelector('.numbers .orange');

equalsButton.addEventListener('click', function() {
    let secondOperand = currentInput;

    // Utilizza calculateResult
    let result = calculateResult(firstOperand, currentOperator, secondOperand);

    if (result !== 'Errore' && result !== 'Errore! Operatore non valido.') {
        updateDisplay(result);
        currentInput = result; //Salvataggio ultimo calcolo
    }
});