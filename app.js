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
        
        // if number pressed
        if (stringDigitsArray.includes(e.target.innerText)){
            
            numberPressed(e)
            
            // consolelog()
        
        // if operator pressed
        } else if (operators.includes(e.target.innerText)){
        
            operatorPressed(e)
            
            // consolelog()

        // if equals pressed
        } else if (e.target.innerText === '='){
            
            equalsPressed(e)
            
            // consolelog()

        // if C pressed
        } else if (e.target.innerText === 'C'){

            cPressed(e)

            // consolelog()
        }
    });
});


/*-------------------------------- Functions --------------------------------*/

const numberPressed = (e) => {
    
    // if displayNumberComplete is false
    if (displayNumberComplete === false){
    
        display.innerText += e.target.innerText
    
    // if displayNumberComplete is true
    } else {
    
        display.innerText = ''
    
        display.innerText += e.target.innerText;
    
        displayNumberComplete = false
    }

}

const operatorPressed = (e) => {

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
}

const equalsPressed = (e) => {
    
    display.innerText = operate(parseFloat(numberInMemory), parseFloat(display.innerText), operator)

    numberInMemory = null;

    displayNumberComplete = true;

    operator = ''

}

const cPressed = () => {
    
    displayNumberComplete = false
            
    display.innerText = ''
    
    numberInMemory = null;
    
    operator = ''

}

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

const consolelog = () => {
    console.clear()
    console.log('display: '+ display.innerText);
    console.log('numberInmemory: '+ numberInMemory);
    console.log('displayNumberComplete: '+ displayNumberComplete);
    console.log('operator: '+ operator);
}