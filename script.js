let firstNumber =null
let secondNumber

let operator=""

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

let btnNumbers = document.querySelectorAll(".btn-number")
btnNumbers.forEach(button => {
    button.addEventListener("click", e => {
       
        populateDisplay(e.target.textContent)
    })
})

let btnOperators = document.querySelectorAll(".operator")
btnOperators.forEach(button => {
    button.addEventListener("click", e => {
        if (firstNumber !== undefined && operator !== "") {
            document.querySelector(".minidisplay").textContent += operator
            resultado()
            updateMinidisplay()
            
        }
        
        
        
        firstNumber= Number(display.textContent)
        
        updateMinidisplay()
        operator = e.target.textContent
        document.querySelector(".minidisplay").textContent += operator
        cleanDisplay()


  
    })
})

let btnEqual = document.querySelector(".equal")
    btnEqual.addEventListener("click",()=>{
        if(secondNumber ==="" && operator ===""){return}
        document.querySelector(".minidisplay").textContent +=  `${display.textContent}`
        resultado()

    })
    

    function resultado(){
        secondNumber=Number(display.textContent)
        display.textContent = operate(firstNumber, secondNumber, operator)
        firstNumber=operate(firstNumber, secondNumber, operator)
        operator=""
        secondNumber =""
    }

function populateDisplay(element) {
        let display = document.querySelector(".display")
        return display.textContent += element
    }

function cleanDisplay(){
    let display = document.querySelector(".display")
    display.textContent =""
}



function updateMinidisplay(){
    document.querySelector(".minidisplay").textContent=firstNumber
}




























// function populateDisplay(element) {
//     let displayer = document.querySelector(".displayer")
//     return displayer.textContent += element
// }

// let displayer = document.querySelector(".displayer")
// let miniDisplayer = document.querySelector(".mini-displayer")

// let firstNumber = document.querySelector(".displayer").textContent
// let secondNumber = document.querySelector(".displayer").textContent
// let result;
// let operator;



// let btnOperators = document.querySelectorAll(".operator")
// btnOperators.forEach(button => {
//     button.addEventListener("click", (e) => {
//         if (operator !== undefined) {
//             operator = e.target.textContent
            
//             firstNumber = result
//             secondNumber = Number(displayer.textContent)
           
//             result =operate(firstNumber, secondNumber, operator)
            
//             miniDisplayer.textContent=result
//         }
//         else {
//             operator = e.target.textContent
//             firstNumber = Number(document.querySelector(".displayer").textContent)
//             miniDisplayer.textContent = displayer.textContent + operator
//             deleteTextcontent(displayer)
//         }

//     })
// })

// let btnEqual = document.querySelector(".equal")
// btnEqual.addEventListener("click", (e) => {
//     secondNumber = Number(displayer.textContent)
    
//     deleteTextcontent(displayer)
//     // populateDisplay(operate(firstNumber, secondNumber, operator))
//     result =operate(firstNumber, secondNumber, operator)
//     miniDisplayer.textContent=result
// })

// function deleteTextcontent(e) {
//     return e.textContent = ""
// }


// function checker (){
//     if
// }