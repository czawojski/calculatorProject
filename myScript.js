// create functions for the following: add, subtract, multiply, divide
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

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

// DONE: functions to detect onclick and display characters on screen (innerhtml)

const screen = document.querySelector(".screen");
const digit1 = document.querySelector("#one");
const digit2 = document.querySelector("#two");
const digit3 = document.querySelector("#three");
const digit4 = document.querySelector("#four");
const digit5 = document.querySelector("#five");
const digit6 = document.querySelector("#six");
const digit7 = document.querySelector("#seven");
const digit8 = document.querySelector("#eight");
const digit9 = document.querySelector("#nine");
const digit0 = document.querySelector("#zero");
const divideSymbol = document.querySelector("#divide");
const multiplySymbol = document.querySelector("#multiply");
const subtractSymbol = document.querySelector("#subtract");
const plusSymbol = document.querySelector("#plus");
const equalsSymbol = document.querySelector("#equals");
const allClear = document.querySelector(".allClear");

// using e => works like function () below...
digit1.addEventListener("click", e => {
        screen.innerHTML = "1";
 });

digit2.addEventListener("click", function () {
        screen.innerHTML = "2";
 });

digit3.addEventListener("click", function () {
        screen.innerHTML = "3";
 });

digit4.addEventListener("click", function () {
        screen.innerHTML = "4";
 });

digit5.addEventListener("click", function () {
        screen.innerHTML = "5";
 });

digit6.addEventListener("click", function () {
        screen.innerHTML = "6";
 });

digit7.addEventListener("click", function () {
        screen.innerHTML = "7";
 });

digit8.addEventListener("click", function () {
        screen.innerHTML = "8";
 });

digit9.addEventListener("click", function () {
        screen.innerHTML = "9";
 });

digit0.addEventListener("click", function () {
        screen.innerHTML = "0";
 });

divideSymbol.addEventListener("click", function () {
        screen.innerHTML = "÷";
 });

multiplySymbol.addEventListener("click", function () {
        screen.innerHTML = "*";
 });

subtractSymbol.addEventListener("click", function () {
        screen.innerHTML = "-";
 });

plusSymbol.addEventListener("click", function () {
        screen.innerHTML = "+";
 });

equalsSymbol.addEventListener("click", function () {
        screen.innerHTML = "=";
 });

allClear.addEventListener("click", function () {
        screen.innerHTML = "";
 });

// TODO: You should be storing the ‘display value’ in a variable somewhere for use in the next step.
// THIS WORKS: logs events when clicking on div -- adds content of innerHTML to array...
// NEXT STEP: use array methods--maybe regex--to operate on numbers in array, then display answer on screen
let calcOutput = [];
document.addEventListener("click", e => {
        if (e.target.matches("div")) {
                console.log(screen.innerHTML);
                calcOutput.push(screen.innerHTML);
                }
        })
