/*-------------------------------- Constants --------------------------------*/
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '*', '/']
const numArr = []
/*-------------------------------- Variables --------------------------------*/
let operator = '';
let textNumber = '';
/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll(".button")
document.querySelector('.display').innerText = ''

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (digits.includes(e.target.innerText)){
            document.querySelector('.display').innerText = ''
            textNumber += e.target.innerText;
            document.querySelector('.display').innerText = textNumber;
            console.log(numArr);
        } else if (operators.includes(e.target.innerText)){
            numArr.push(parseFloat(textNumber))
            textNumber = ''
            operator = e.target.innerText
            console.log(numArr);
        } else if (e.target.innerText === '='){
            numArr.push(parseFloat(textNumber))
            textNumber = ''
            operate(numArr[0], numArr[1], operator)
            console.log(numArr);
        } else if (e.target.innerText === 'C'){
            emptyArr(numArr)
            textNumber = ''
            document.querySelector('.display').innerText = ''
            operator = ''
        }
    });
});


/*-------------------------------- Functions --------------------------------*/

const operate = (num1, num2, operator) => {
    emptyArr(numArr)
    textNumber = ''
    if (operator === '+'){
        // numArr.push(num1 + num2)
        document.querySelector('.display').innerText = num1 + num2;
    } else if (operator === '-'){
        // numArr.push(num1 - num2)
        document.querySelector('.display').innerText = num1 - num2;
    } else if (operator === '*'){
        // numArr.push(num1 * num2)
        document.querySelector('.display').innerText = num1 * num2;
    } else if (operator === '/'){
        // numArr.push(num1 / num2)
        document.querySelector('.display').innerText = num1 / num2;
    }
    // document.querySelector('.display').innerText = numArr[0];
}

const emptyArr = (arr) => {
    while(arr.length > 0){
        arr.pop()
    }
}
