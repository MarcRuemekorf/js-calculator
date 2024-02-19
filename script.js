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
    operation = null;
    updateDisplay();
};

const deleteNumber = () => {

}

const appendDot = () => {

}

let currentOperand = '';
let previousOperand = '';
let operation = null;

const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return;

    if (operation === null) return;

    computation = prev + operation + current;

    console.log(computation)

    currentOperand = computation;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

const appendNumber = number => {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
}

const chooseOperation = (selectedOperation) => {
    if(currentOperand === '') return;
    if(previousOperand !== '') {
        compute();
    }

    operation = selectedOperation;
    previousOperand = currentOperand;
    currentOperand = '';
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        chooseOperation(button.innerText);
        updateDisplay();
    });
});

clearButton.addEventListener('click', () => {
    clear();
});

const updateDisplay = () => {
    document.getElementById('previous-operand').innerText = previousOperand + ' ' + (operation || '');
    document.getElementById('current-operand').innerText = currentOperand;
}