// create functions for the following: add, subtract, multiply, divide
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x /y;

// let num1;
// let num2;
// let operator;

function operate(num1, operator, num2) {
    let result;
    if (operator === '+') {
       result = add(num1, num2);
    }
    else if (operator === '-') {
        result = subtract(num1, num2);
    }
    else if (operator === '*') {
        result = multiply(num1, num2);
    }
    else if (operator === '/') {
        result = divide(num1, num2);
    }
    return result;
};