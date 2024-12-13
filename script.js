function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use eval with caution; consider implementing a safer parser for production
        const result = eval(display.value);
        display.value = result !== undefined ? result : 'Error';
    } catch (error) {
        display.value = 'Error'; // Display error if calculation fails
    }
}