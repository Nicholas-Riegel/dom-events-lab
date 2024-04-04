/*-------------------------------- Constants --------------------------------*/

const stringDigitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '*', '/']

/*-------------------------------- Variables --------------------------------*/

let operator = '';
let displayNumberComplete = false
let numberInMemory = null;

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll(".button")
const display = document.querySelector('.display')

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        
        // 6 pushed
        if (stringDigitsArray.includes(e.target.innerText)){
            
            if (displayNumberComplete === false){
                display.innerText += e.target.innerText
            } else {
                display.innerText = ''
                display.innerText += e.target.innerText;
                displayNumberComplete = false
            }

            consolelog()
        
        // + pushed
        } else if (operators.includes(e.target.innerText)){
            
            // operator chaining
            if (operator !== ''){
                
                display.innerText = operate(parseFloat(numberInMemory), parseFloat(display.innerText), operator)

                numberInMemory = parseFloat(display.innerText)

                displayNumberComplete = true;

                operator = e.target.innerText;
            
            // no prior operator
            } else {
                
                operator = e.target.innerText;

                numberInMemory = parseFloat(display.innerText)
                
                displayNumberComplete = true;
            
            }
            consolelog()
        
        // = pushed
        } else if (e.target.innerText === '='){
            
            display.innerText = operate(parseFloat(numberInMemory), parseFloat(display.innerText), operator)

            numberInMemory = null;

            displayNumberComplete = true;

            operator = ''

            consolelog()

        // C pushed
        } else if (e.target.innerText === 'C'){

            displayNumberComplete = false
            
            display.innerText = ''
            
            numberInMemory = null;
            
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
    console.log('display: '+ display.innerText);
    console.log('numberInmemory: '+ numberInMemory);
    console.log('displayNumberComplete: '+ displayNumberComplete);
    console.log('operator: '+ operator);
}