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

digit1.addEventListener("click", e => {
        screen.innerHTML += "1";
 });

digit2.addEventListener("click", function () {
        screen.innerHTML += "2";
 });

digit3.addEventListener("click", function () {
        screen.innerHTML += "3";
 });

digit4.addEventListener("click", function () {
        screen.innerHTML += "4";
 });

digit5.addEventListener("click", function () {
        screen.innerHTML += "5";
 });

digit6.addEventListener("click", function () {
        screen.innerHTML += "6";
 });

digit7.addEventListener("click", function () {
        screen.innerHTML += "7";
 });

digit8.addEventListener("click", function () {
        screen.innerHTML += "8";
 });

digit9.addEventListener("click", function () {
        screen.innerHTML += "9";
 });

digit0.addEventListener("click", function () {
        screen.innerHTML += "0";
 });

divideSymbol.addEventListener("click", function () {
        screen.innerHTML += " ÷ ";
 });

multiplySymbol.addEventListener("click", function () {
        screen.innerHTML += " * ";
 });

subtractSymbol.addEventListener("click", function () {
        screen.innerHTML += " - ";
 });

plusSymbol.addEventListener("click", function () {
        screen.innerHTML += " + ";
 });

allClear.addEventListener("click", function () {
        screen.innerHTML = "";
 });

let displayVariable = "";
document.addEventListener("click", e => {
                if (e.target.matches("#equals")) {
                        screen.innerHTML = parseFloat(calculator.calculate(screen.innerHTML).toFixed(8));
                        return true
                }
                else if (e.target.matches(".allClear")) {
                        screen.innerHTML = "";
                        return
                }
        })

// Calculator function adapted from Odin Project lesson material
// to call function alone: calculator.calculate("34 - 12");
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
      
        let split = str.split(' ')

        for (let i = 0; i = Math.floor(split.length / 2); i++) {
                a = +split[0], 
                op = split[1],
                b = +split[2];
                split.splice(0, 3, this.methods[op](a, b));
        }
      
          return this.methods[op](a, b);
        };
      
        this.addMethod = function(name, func) {
          this.methods[name] = func;
        };
      }