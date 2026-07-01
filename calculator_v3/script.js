const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === 'Error' || display.value === '0') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    const expression = display.value;
    if (!expression) return;
    
    try {
        const result = eval(expression);
        if (result === Infinity || isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = Number(result.toFixed(8)).toString();
        }
    } catch (error) {
        display.value = 'Error';
    }
}
