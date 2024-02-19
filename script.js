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
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

const appendDot = () => {
    if(currentOperand.includes('.')) return;
    if(currentOperand === '') currentOperand = '0';
    currentOperand += '.';
    updateDisplay();
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

    computation = `${prev} ${operation} ${current}`

    console.log(computation)

    previousOperand = computation;
    currentOperand = eval(`${prev} ${operation} ${current}`);
    operation = null;
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
        chooseOperation(button.innerText);
        updateDisplay();
    });
});

dotButton.addEventListener('click', () => appendDot());
clearButton.addEventListener('click', () => clear());
deleteButton.addEventListener('click', () => deleteNumber());
equalsButton.addEventListener('click', () => compute());

const updateDisplay = () => {
    document.getElementById('previous-operand').innerText = previousOperand + ' ' + (operation || '');
    document.getElementById('current-operand').innerText = currentOperand;
}