// Operation object 
let operation = {
    operand : undefined,
    operator : undefined
}

// Display element 
const display = document.getElementById("display");
display.textContent = "0";

// Variables 
let currentValue = "";
let inOperation = false;
let newOperation = false;

// Functions 
const add = function(a, b) {
    let sum = parseFloat(a) + parseFloat(b);
    return sum;
}

const subtract = function(a, b) {
    let diff = parseFloat(a) - parseFloat(b);
    return diff;
}

const multiply = function(a, b) {
    let prod = parseFloat(a) * parseFloat(b);
    return prod;
}

const divide = function(a, b) {
    let quot = parseFloat(a) / parseFloat(b);
    return quot;
}

function operate(a, b, func) {
    if (operation.operator == undefined) {
        return;
    }
    else {
        let result = func(a, b);
        display.textContent = result;
        currentValue = result;
        inOperation = false;
        newOperation = true;
        operation.operator = undefined;
        return result;
    }
    
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
    if ((currentValue == "0" || currentValue == "") && display.textContent == "0") {
        display.textContent = "";
        if (val == 0) {
            display.textContent = "0";
            currentValue = "0";
            return;
        }
        display.textContent = display.textContent + val;
        currentValue += val;
    }
    else {
        display.textContent = display.textContent + val;
        currentValue += val;
    }
    
}

function clearDisplay() {
    display.textContent = "0";
    currentValue = "";
}

function updateOperation(operator) {
    inOperation = true;
    operation.operand = currentValue;
    operation.operator = operator;
}

function makeNegative() {
    currentValue = currentValue * -1;
    display.textContent = currentValue;
}

function addDecimal() {
    if (inOperation == true) {
        currentValue = "0.";
        display.textContent = currentValue;
        inOperation = false;
    }
    if (newOperation == true) {
        currentValue = "0.";
        display.textContent = currentValue;
        newOperation = false;
    }
    if (currentValue.includes(".") == true) {
        return;
    }
    else {
        currentValue = currentValue + "."
        display.textContent = currentValue;
    }
}
  

