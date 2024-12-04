add = function addition(a, b) {
    return a + b;
};

subract = function subtraction(a, b) {
    return a - b;
};

multiply = function multiplication(a, b) {
    return a * b;
}

divide = function division(a, b) {
    return a / b;
};

function operate(x, operator, y) {
    if (operator == "+") {
        add(x, y);
    } else if (operator == "−") {
        subtract(x, y);
    } else if (operator == "x") {
        multiply(x, y);
    } else if (operator == "÷") {
        divide(x, y);
    } else {
        return 0;  // fix for % later
    }

};

function populateDisplay() {
    
};

const input = document.querySelector(".input");
const numberBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        let text = button.innerText;
        populateDisplay();
    })
})
operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        let text = button.innerText;
        populateDisplay();
    })
})
