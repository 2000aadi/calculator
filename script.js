// script.js

// function to run when clicked on equal to button
function operate (x1, sign, x2){
    if(sign == '+')return add(x1, x2);
    else if(sign == '-') return subtract(x1, x2);
    else if (sign == '*') return multiply(x1, x2);
    else return divide(x1, x2);
}

// basic functions
function add (a,b) {
    return +a + +b;
}

function subtract (a,b){
    return +a - +b;
}

function multiply (a,b) {
    return +a * +b;
}

function divide (a,b) {
    return (+a / +b).toFixed(2);
}

// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(4,2));

//global variable to contain the clicked number
let numClicked;

// global variables num1, num2 to store the two inputs. 
// num1 to be populated when clicked on an operand. 
// num2 to be populated when clicked on equalto sign.
// operator to contain the operand - to be filled when clicked on operand button.
// result to contain the result - to be populated when clicked on equal to button.
let num1, num2, operator, result;

// showing buttons being clicked for numbers
let allButtons = document.querySelectorAll('button[class^=num]');
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function() {
    //console.clear();
    numClicked = this.textContent;
    console.log("You clicked:", this.textContent);

    //populating clicked value in display
    document.getElementById('display').innerHTML = numClicked;
  });
}

// capturing the click of operand buttons.
let operandButtons = document.querySelectorAll('button[class^=sign]');
for(var i=0; i<operandButtons.length; i++){
    operandButtons[i].addEventListener('click', function() {
        operator = this.textContent;
        console.log("You clicked:", this.textContent);

        // populating num1
        num1 = numClicked;
        console.log("num1 is", num1);
    })
}

// capturing the click of equal to button
let equalButton = document.querySelector('button[class^=equalSign]');
equalButton.addEventListener('click', function() {
    // populating num2
    num2 = numClicked;
    console.log("num2 is", num2);

    // storing result in 'result' 
   result = operate(num1, operator, num2);
   console.log('result is', result);

   // populating display with result
   document.getElementById('display').innerHTML = result;
})