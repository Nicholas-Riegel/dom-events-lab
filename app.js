/*-------------------------------- Constants --------------------------------*/
const stringDigitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '*', '/']
const numbersArray = []
/*-------------------------------- Variables --------------------------------*/
let operator = '';
let textNumber = '';
/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll(".button")
const display = document.querySelector('.display')
let displayNumberComplete = false

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        // case number pushed
        if (stringDigitsArray.includes(e.target.innerText)){
            
            if (displayNumberComplete === false){
                display.innerText += e.target.innerText
            } else {
                display.innerText = ''
                display.innerText += e.target.innerText;
                displayNumberComplete = false
            }

            consolelog()
        // case operator pushed
        } else if (operators.includes(e.target.innerText)){
            
            operator = e.target.innerText;

            numbersArray.push(parseFloat(display.innerText))
            
            displayNumberComplete = true;
            
            consolelog()
        } else if (e.target.innerText === '='){
            
            numbersArray.push(parseFloat(display.innerText))
            
            display.innerText = operate(numbersArray[0], numbersArray[1], operator)

            emptyArray(numbersArray)

            displayNumberComplete = true;

            consolelog()
        } else if (e.target.innerText === 'C'){
            displayNumberComplete = false
            display.innerText = ''
            emptyArray(numbersArray)
            operator = ''

            consolelog()
        }
    });
});


/*-------------------------------- Functions --------------------------------*/

const operate = (num1, num2, operator) => {
    if (operator === '+'){
        return num1 + num2;
    } else if (operator === '-'){
        return num1 - num2;
    } else if (operator === '*'){
        return num1 * num2;
    } else if (operator === '/'){
        return num1 / num2;
    }
}

const emptyArray = (arr) => {
    while(arr.length > 0){
        arr.pop()
    }
}

const consolelog = () => {
    console.clear()
    console.log('display: '+display.innerText);
    console.log('numbersArray: '+numbersArray);
    console.log('displayNumberComplete: '+displayNumberComplete);
}