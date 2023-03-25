const buttons = document.querySelectorAll('button');
const answerDisplay = document.querySelector('#answerDisplay')
const operationDisplay = document.querySelector('#operationDisplay')
function buttonpress(){
    console.log(this.innerHTML);
}

console.log(buttons)



buttons.forEach(button => button.addEventListener('click', buttonpress))