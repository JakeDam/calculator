// Variables
let displayValue = "";
const display = document.getElementById("display");

// Functions 
function add(a, b) {
    let sum = a + b;
    return sum;
}

function subtract(a, b) {
    let diff = a - b;
    return diff;
}

function multiply(a, b) {
    let prod = a * b;
    return prod;
}

function divide(a, b) {
    let quot = a / b;
    return quot;
}

function operate(a, b, func) {
    let result = func(a, b);
    return result;
}

function updateDisplay(val) {
    display.textContent = val;
    displayValue = val;
}