// Funzione per aggiornare il display con il valore corrente
/**
 * Description
 * @param {string}
 * @returns {string}
 */
function updateDisplay(value) {
    console.log(value, typeof value);
    resultDisplay.textContent = value;
};

/**
 * Calcolo tra due numeri
 * 
 * @param {string} firstOperand 
 * @param {string} operator 
 * @param {string} secondOperand
 * @returns {string} risultato dell'operazione
 */
function calculateResult(firstOperand, operator, secondOperand) {
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '×':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '÷':
            if(secondOperand !== '0'){ // Evita la divisione per zero
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
            } else {
                result = 'Errore';
            }
            break;
    }

    return result;
}
