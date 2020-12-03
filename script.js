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

// Calculation functions 
const add = function(a, b) {
    const sum = parseFloat(a) + parseFloat(b);
    return sum;
}

const subtract = function(a, b) {
    const diff = parseFloat(a) - parseFloat(b);
    return diff;
}

const multiply = function(a, b) {
    const prod = parseFloat(a) * parseFloat(b);
    return prod;
}

const divide = function(a, b) {
    if (b == "0") {
        return "ERROR";
    }
    const quot = parseFloat(a) / parseFloat(b);
    return quot;
}

// Takes operand and current values and applies cacluation function 
function operate(a, b, func) {
    if (operation.operator == undefined || operation.operand == undefined) {
        return;
    }
    else {
        let result = func(a, b);
        if (result > 999999999) {
            result = expo(result);

        }
        display.textContent = result;
        currentValue = result;
        inOperation = false;
        newOperation = true;
        operation.operator = undefined;
        operation.operand = undefined;
        return result;
    }
    
}

// Updates display and current value 
function updateDisplay(val) {
    if (inOperation == true) {
        currentValue = "";
        display.textContent = "";
        inOperation = false;
    }
    if (newOperation == true) {
        currentValue = "";
        display.textContent = "";
        newOperation = false;
    }
    if (currentValue.length == 9) {
        return;
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

// Clears display and current value 
function clearDisplay() {
    display.textContent = "0";
    currentValue = "";
}

// Adds operation function to operation object and executes function if it already exists 
function updateOperation(operator) {
    if (currentValue == "") {
        return;
    }
    if (operation.operator != undefined && operation.operand != undefined) {
        operate(operation.operand, currentValue, operation.operator);
    }
    inOperation = true;
    operation.operand = currentValue;
    operation.operator = operator;
}

// Converts current value to negative 
function makeNegative() {
    currentValue = currentValue * -1;
    display.textContent = currentValue;
}


// Adds decimal point functionality 
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

// Changes number to a decimal percent 
function toPercent() {
    currentValue = currentValue * 0.01;
    display.textContent = currentValue;
}

// Deletes one digit at a time 
function backspace() {
    if (currentValue == "" || currentValue == 0) {
        return;
    }
    else {
        currentValue = currentValue.slice(0, -1);
        if (currentValue == "") {
            currentValue = "0";
        }
        display.textContent = currentValue;
    }
}

// Converts number to scientific notation 
function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
}
  

