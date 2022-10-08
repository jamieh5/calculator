// Query Selector for number buttons
const btnZero = document.querySelector(".btn-zero");
const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");
const btnThree = document.querySelector(".btn-three");
const btnFour = document.querySelector(".btn-four");
const btnFive = document.querySelector(".btn-five");
const btnSix = document.querySelector(".btn-six");
const btnSeven = document.querySelector(".btn-seven");
const btnEight = document.querySelector(".btn-eight");
const btnNine = document.querySelector(".btn-nine");

// Query Selector for other buttons
const clearBtn = document.querySelector(".btn-clear");
const divideBtn = document.querySelector(".btn-divide");
const multiplyBtn = document.querySelector(".btn-multiply");
const minusBtn = document.querySelector(".btn-minus");
const dotBtn = document.querySelector(".btn-dot");
const equalsBtn = document.querySelector(".btn-equals");
const plusBtn = document.querySelector(".btn-plus");

// Display String
const display = document.querySelector(".display");
let displayStr = "";
// Function for the numbers;
function buttonFunction(button, num) {
    button.addEventListener("click", function() {
        displayStr += num;
        display.innerHTML = displayStr;
    })
}

// Calling the function on the number buttons
buttonFunction(btnZero, "0");
buttonFunction(btnOne, "1");
buttonFunction(btnTwo, "2");
buttonFunction(btnThree, "3");
buttonFunction(btnFour, "4");
buttonFunction(btnFive, "5");
buttonFunction(btnSix, "6");
buttonFunction(btnSeven, "7");
buttonFunction(btnEight, "8");
buttonFunction(btnNine, "9");