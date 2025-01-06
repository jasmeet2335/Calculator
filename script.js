class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }
    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
        console.log("You are in the append Function");
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperationTextElement.innerText = this.currentOperand;
    }
 }

const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperationTextElement = document.querySelector('[data-previous-operand]');
const currentOperationTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperationTextElement, currentOperationTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});
