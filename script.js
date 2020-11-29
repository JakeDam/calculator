// Variables
let operation = {
    operand : undefined,
    operator : undefined
}
const display = document.getElementById("display");
let currentValue = "";
let inOperation = false;
let newOperation = false;

// Functions 
const add = function(a, b) {
    let sum = parseInt(a) + parseInt(b);
    return sum;
}

const subtract = function(a, b) {
    let diff = parseInt(a) - parseInt(b);
    return diff;
}

const multiply = function(a, b) {
    let prod = parseInt(a) * parseInt(b);
    return prod;
}

const divide = function(a, b) {
    let quot = parseInt(a) / parseInt(b);
    return quot;
}

function operate(a, b, func) {
    let result = func(a, b);
    display.textContent = result;
    currentValue = result;
    inOperation = false;
    newOperation = true;
    return result;
}

function updateDisplay(val) {
    if (inOperation == true) {
        currentValue = "";
        display.textContent = "";
        inOperation = false;
    }
    if (newOperation == true) {
        display.textContent = "";
        currentValue = "";
        newOperation = false;
    }
    display.textContent = display.textContent + val;
    currentValue += val;
}

function clearDisplay() {
    display.textContent = "";
    currentValue = "";
}

function updateOperation(operator) {
    inOperation = true;
    operation.operand = currentValue;
    operation.operator = operator;
}

