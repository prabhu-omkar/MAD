// Simple Calculator JavaScript Logic - 10 Min Lab Code

const display = document.getElementById('display');

// Append numbers and operators to display
function appendValue(value) {
    // If display is currently showing "Error" or "0", reset it first
    if (display.value === 'Error' || display.value === '0') {
        display.value = '';
    }
    display.value += value;
}

// Clear display screen
function clearDisplay() {
    display.value = '';
}

// Evaluate expression
function calculateResult() {
    const expression = display.value;
    
    // Do nothing if display is empty
    if (!expression) return;
    
    try {
        // Evaluate the string expression
        const result = eval(expression);
        
        // Handle division by zero or NaN values
        if (result === Infinity || isNaN(result)) {
            display.value = 'Error';
        } else {
            // Round to maximum of 8 decimal places if it's a decimal result
            display.value = Number(result.toFixed(8)).toString();
        }
    } catch (error) {
        display.value = 'Error';
    }
}
