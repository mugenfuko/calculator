const screen = document.querySelector('#screen');

let operatorCheck = false; //Checks if an operator function has been selected.
let dotCheck = false; //Checks if firstNumber or finalNumber already has a dot.
let iterationCheck = false; //Checks whether the user is iterating on a previous
                            //calculation or not.
let addCheck = false; //Checks whether the add function should be executed.
let subtractCheck = false; //Checks whether the subtract function should be executed.
let multiplyCheck = false; //Checks whether the multiply function should be executed.

let firstNumber = '';   //The first number. On an iteration, finalNumber is moved to
                        //firstNumber.
let secondNumber = ''; //The second number.
let finalNumber = undefined;    //The final number after the calculation has been
                                //performed.

const numberIdArray = ['#zero', '#one', '#two', '#three', '#four', '#five', '#six',
    '#seven', '#eight', '#nine'];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numberIdArray.length; i++) {
    const id = numberIdArray[i];
    const number = numberArray[i];
    const button = document.querySelector(numberIdArray[i]);
    button.addEventListener('click', () => {
        if (operatorCheck == false && finalNumber == undefined) {
            firstNumber += ((number).toString());
            screen.textContent += number;
        } else if (operatorCheck == false && finalNumber == firstNumber) {
            firstNumber = number.toString();
            finalNumber = undefined;
            screen.textContent = number;
            return false;
        } else {
            secondNumber += ((number).toString());
            screen.textContent += number;
        }
    });
}

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber == false && operatorCheck == false) {
        screen.textContent += ' + ';
        dotCheck = false;
        operatorCheck = true;
        addCheck = true;
    } else {
        return false;
    }
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber == false && operatorCheck == false) {
        screen.textContent += ' - ';
        dotCheck = false;
        operatorCheck = true;
        subtractCheck = true;
    } else {
        return false;
    }
});

const times = document.querySelector('#times');
times.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber == false && operatorCheck == false) {
        screen.textContent += ' x ';
        dotCheck = false;
        operatorCheck = true;
        multiplyCheck = true;
    } else {
        return false;
    }
});

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    if (secondNumber === '' && dotCheck == false) {
        firstNumber += '.';
        screen.textContent += '.';
        dotCheck = true;
    } else if (secondNumber !== '' && dotCheck == false) {
        secondNumber += '.';
        screen.textContent += '.';
        dotCheck = true;
    }
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', function operate() {
    dotCheck = false;
    operatorCheck = false;
    iterationCheck = true;

    if (subtractCheck == true) {
        return subtract(firstNumber, secondNumber);
    } else if (multiplyCheck == true) {
        return multiply(firstNumber, secondNumber);
    } else {
        return add(firstNumber, secondNumber);
    }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    dotCheck = false;
    operatorCheck = false;
    iterationCheck = false;
    finalNumber = undefined;
    firstNumber = '';
    secondNumber = '';
    screen.textContent = '';
});

function add(a, b) {
    finalNumber = Number(a) + Number(b);
    firstNumber = finalNumber;
    secondNumber = '';
    addCheck = false;
    screen.textContent = finalNumber;
}

function subtract(a, b) {
    finalNumber = Number(a) - Number(b);
    firstNumber = finalNumber;
    secondNumber = '';
    subtractCheck = false;
    screen.textContent = finalNumber;
}

function multiply(a, b) {
    finalNumber = Number(a) * Number(b);
    firstNumber = finalNumber;
    secondNumber = '';
    multiplyCheck = false;
    screen.textContent = finalNumber;
}

//console.log(Number('12.4') + Number('12.4'));