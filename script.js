const calculator = document.getElementById('calculator');
const diplayCurrent = document.getElementById('current-operand');
const diplayPrevious = document.getElementById('previous-operand');

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');

const clear = () => {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
};

const deleteNumber = () => {

}

const compute = () => {

}

const appendDot = () => {

}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
        updateDisplay();
    });
});