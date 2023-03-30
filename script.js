const buttons = document.querySelectorAll('button');
let answerDisplay = document.querySelector('#answerDisplay p')
let operationDisplay = document.querySelector('#operationDisplay p')

let operation = '';
let currentNumber = '';
let previousNumber = '';
let answer = '';
let result;

function buttonpress(input){
    switch(input.target.innerHTML){
        case 'Clear': clear();
        break;

        case 'Delete': backspace();
        break;
        
        case '=':
        case '÷':
        case 'x':
        case '-':
        case '+': startOperation(this.innerHTML);
        break;

        default: write(this.innerHTML);
    }
    
    
}

function startOperation(operand){
    if (currentNumber!=''&& operand!='='){
        previousNumber = currentNumber;
    }

    if (answer!=''){
        previousNumber = answer;
    }

    if (operation=='' && previousNumber!='' && operand!='='){
        currentNumber = '';
        operation = operand;
        write('');
    }

    if (operation=='' && currentNumber!='' && operand!='='){
        previousNumber = currentNumber;
        currentNumber = '';
        operation += operand;
        write('');
    }


    if (currentNumber!='' && previousNumber!=''){
        switch(operation){
            case '÷': divide(previousNumber, currentNumber); 
            break;
            case 'x': multiply(previousNumber, currentNumber); 
            break;
            case '-': subtract(previousNumber, currentNumber); 
            break;
            case '+': add(previousNumber, currentNumber); 
            break;
        }
        previousNumber = answer;
        currentNumber = ''
        operation = '';
        if (operand!='='){
            operation = operand;
        }
    }

    write('');
}

function divide(x, y){
    if (y == 0){
        answer = 'You have broken the universe'
        return;
    }
    answer = x/y;
}

function multiply(x, y){
    answer = x*y;
}

function add(x, y){
    answer = parseInt(x)+parseInt(y);
}

function subtract(x, y){
    answer = x-y;
}

function clear(){
    operationDisplay.textContent = '';
    answerDisplay.textContent = '';
    currentNumber='';
    previousNumber='';
    operation='';
    answer = '';
}

function backspace(){
    currentNumber = currentNumber.split('')
    currentNumber.pop();
    currentNumber = currentNumber.join('')
    write('')
}

function write(input){
    if (currentNumber!= '' && currentNumber.toString().includes('.') && input == '.'){
        return;
    }

    if (operation=='' && previousNumber!='' && previousNumber.toString()==answerDisplay.textContent){
        clear();
        return;
    }

    currentNumber += input;
    operationDisplay.textContent = previousNumber + ' ' + operation + ' ' + currentNumber;
    answerDisplay.textContent = answer;
}

buttons.forEach(button => button.addEventListener('click', buttonpress))