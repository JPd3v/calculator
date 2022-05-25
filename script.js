let firstNumber = null
let secondNumber = ""
let operator = ""

function add(number, number2) {
    return number + number2;
}

function subtract(number, number2) {
    return number - number2
}

function multiply(number, number2) {
    return number * number2
}

function divide(number, number2) {
    if (number2 === 0) {
        alert("you can't divide by 0 lul")
        return resetCalculator()
    }
    return number / number2
}

function operate(number, number2, operator) {
    if (operator === "+") {
        return add(number, number2)
    } else if (operator === "-") {
        return subtract(number, number2)
    } else if (operator === "*") {
        return multiply(number, number2)
    } else if (operator === "/") {
        return divide(number, number2)
    }
}

let display = document.querySelector(".display")
let minidisplay = document.querySelector(".minidisplay")

let btnNumbers = document.querySelectorAll(".btn-number")
btnNumbers.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.textContent === "." && display.textContent.includes(".")) {
            return
        } else if (display.textContent === "" && e.target.textContent === ".") {
            return populateDisplay(0 + e.target.textContent)
        }
        populateDisplay(e.target.textContent)
    })
})

let btnOperators = document.querySelectorAll(".operator")
btnOperators.forEach(button => {
    button.addEventListener("click", e => {
        if (display.textContent.length === 0 && operator !== "") {
            repeatOperator(e)
            return operator = e.target.textContent
        } else if (display.textContent.length === 0) {
            return
        } else if (firstNumber !== undefined && operator !== "") {
            minidisplay.textContent += operator
            operationResult()
            updateMinidisplay()
        }
        firstNumber = Number(display.textContent)
        updateMinidisplay()
        operator = e.target.textContent
        document.querySelector(".minidisplay").textContent += operator
        cleanDisplay()
    })
})

let btnClean = document.querySelector(".clean")
btnClean.addEventListener("click", resetCalculator)

let btnBackspace = document.querySelector(".backspace")
btnBackspace.addEventListener("click", backspace)

let btnEqual = document.querySelector(".equal")
btnEqual.addEventListener("click", () => {
    secondNumber = display.textContent
    if (operator === "") { return }
    else if (secondNumber === "" && operator !== "") { return }
    operationResult()
})

function operationResult() {
    secondNumber = Number(display.textContent)
    display.textContent = operate(firstNumber, secondNumber, operator)
    firstNumber = operate(firstNumber, secondNumber, operator)
    operator = ""
    secondNumber = ""
    minidisplay.textContent = ""
}

function populateDisplay(element) {
    let display = document.querySelector(".display")
    return display.textContent += element
}

function cleanDisplay() {
    let display = document.querySelector(".display")
    display.textContent = ""
}

function updateMinidisplay() {
    document.querySelector(".minidisplay").textContent = firstNumber
}

function resetCalculator() {
    firstNumber = null
    secondNumber = ""
    operator = ""
    display.textContent = ""
    minidisplay.textContent = ""
}

function repeatOperator(e) {
    let editedText = minidisplay.textContent.slice(0, -1)
    editedText += e.target.textContent
    return minidisplay.textContent = editedText
}

function backspace() {
    let editedText = display.textContent.slice(0, -1)
    return display.textContent = editedText
}