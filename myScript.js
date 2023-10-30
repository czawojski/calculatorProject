const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// CURRENTLY not using, but might...
// let num1;
// let num2;
// let operator;

// function operate(num1, operator, num2) {
//     let result;
//     if (operator === '+') {
//        result = add(num1, num2);
//     }
//     else if (operator === '-') {
//         result = subtract(num1, num2);
//     }
//     else if (operator === '*') {
//         result = multiply(num1, num2);
//     }
//     else if (operator === '/') {
//         result = divide(num1, num2);
//     }
//     return result;
// };

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

// TODO: combine digits before operator, operator, combine digits after operator, show result after user clicks =

// USEFUL? create array of first numbers and join them, then array of operator, then array of numbers and join them... when = clicked, show on screen:
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(0, fruits.length);
// const test = citrus.join('');

// document.getElementById("demo").innerHTML = test;

let calcOutput = [];
document.addEventListener("click", e => {
        if (e.target.matches("div")) {
                console.log(screen.innerHTML);
                // if screen.innerHTML === "0" || "1" ... push to new array... then concat
                calcOutput.push(screen.innerHTML);
                // HERE??? wait for numbers, combine, operator, combine numbers, then = below...
                if (screen.innerHTML === '=') {
                        let equation = calcOutput.join(' ');
                        screen.innerHTML = parseFloat(calculator.calculate(equation).toFixed(8));
                        console.log(equation);
                        return true
                }
                else if (e.target.matches(".allClear")) {
                        calcOutput = [];
                        return
                }
                }
        })

// iterate over items -- if a number, concat -- then operator -- then number -- then = -- print result to screen


// Calculator function from Odin Project lesson material
let calculator;
calculator = new Calculator;

function Calculator() {
  
        this.methods = {
          "-": (a, b) => a - b,
          "+": (a, b) => a + b,
          "*": (a, b) => a * b,
          "÷": (a, b) => a / b,
        };
      
        this.calculate = function(str) {
      
          let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        // COMMENTED out below to avoid NaN after pressing AC:
        //   if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        //     return NaN;
        //   }
      
          return this.methods[op](a, b);
        };
      
        this.addMethod = function(name, func) {
          this.methods[name] = func;
        };
      }

// to call: calculator.calculate("34 - 12");

// THEN... if a number, call join -- if an operator, do operation -- if a number, join -- if =, end function