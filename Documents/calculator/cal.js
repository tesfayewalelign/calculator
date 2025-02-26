
const resultDisplay = document.querySelector('.result');
const keys = document.querySelectorAll('.keys input');


let currentInput = '';


function updateDisplay(value) {
    resultDisplay.textContent = value;
}


function calculate(expression) {
    try {
        
        expression = expression.replace(/÷/g, '/').replace(/×/g, '*');
        return Function('return ' + expression)(); 
    } catch (error) {
        return 'Error';
    }
}


keys.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.value;

        
        if (buttonValue === 'c') {
            currentInput = '';
            updateDisplay('0');
        }
        
        else if (buttonValue === '=') {
            const result = calculate(currentInput);
            currentInput = result.toString(); 
            updateDisplay(currentInput);
        }
        
        else {
            
            if (['+', '-', '×', '÷'].includes(buttonValue) && ['+', '-', '×', '÷'].includes(currentInput.slice(-1))) {
                return; 
            }
            
            if (currentInput === '' && ['+', '-', '×', '÷'].includes(buttonValue)) {
                return; 
            }

            currentInput += buttonValue;

            updateDisplay(currentInput);
        }
    });
});
