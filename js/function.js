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