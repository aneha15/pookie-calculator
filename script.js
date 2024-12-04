function operate() {
    const text = previousDisplay.innerText;
    console.log(text);
    const arr = text.split(" ");

    const a = +arr[0];
    const b = +arr[2];
    const operator = arr[1];
    console.log(a);
    console.log(b);
    console.log(operator);

    if (arr.length !== 3) {
        console.log(arr)
        return runningDisplay.textContent = "Math Error";
    }


    let ans;
    switch (operator) {
        case "+":
            ans = Math.round((a + b) * 100) / 100;
            break;
        case "−":
            ans = Math.round((a - b) * 100) / 100;
            break;
        case "x":
            ans = Math.round(a * b * 100) / 100;
            break;
        case "÷":
            if (b === 0) {
                ans = "🙄";
            } else {
                ans = Math.round(a * 100 / b) / 100;
            }
            break;
        default: 
            ans = a;
    
    }
    runningDisplay.textContent = previousDisplay.textContent = ans;

}

function populateBothDisplay(text) {
    runningDisplay.innerText += text;
    previousDisplay.innerHTML += text;
};

function populatePrevDisplay(text) {
    previousDisplay.innerHTML += text;
    runningDisplay.innerHTML = "";
};

const input = document.querySelector(".input");
const numberBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const previousDisplay = document.querySelector(".previous")
const runningDisplay = document.querySelector(".running");

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        let text = button.innerText;
        populateBothDisplay(text);
    })
})

clearBtn.addEventListener("click", () => {
    runningDisplay.textContent = "";
    previousDisplay.textContent = "";
})

deleteBtn.addEventListener("click", () => {
    runningDisplay.innerText = runningDisplay.innerText.slice(0, -1); // removing last char of string
})

equalBtn.addEventListener("click", () => {
    let b = runningDisplay.innerText;
    runningDisplay.textContent = "";
    operate();
});

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        let operator = button.innerText;
        populatePrevDisplay(` ${operator} `);

    });
})