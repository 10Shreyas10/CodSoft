let display = document.getElementById("Shreyas");
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function performOperation(operator) {
    currentInput += operator;
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "INVALID";
    }
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}