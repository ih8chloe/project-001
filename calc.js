function add() {
    let a = parseInt(document.getElementById("inputOne").value);
    let b = parseInt(document.getElementById("inputTwo").value);
    sum = a + b;
    document.getElementById("overallTotal").innerHTML = sum;
}

function subtract() {
    let a = parseInt(document.getElementById("inputOne").value);
    let b = parseInt(document.getElementById("inputTwo").value);
    total = a - b;
    document.getElementById("overallTotal").innerHTML = total;
}

function divide() {
    let a = parseInt(document.getElementById("inputOne").value);
    let b = parseInt(document.getElementById("inputTwo").value);
    total = a / b;
    document.getElementById("overallTotal").innerHTML = total;
}

function multiply() {
    let a = parseInt(document.getElementById("inputOne").value);
    let b = parseInt(document.getElementById("inputTwo").value);
    total = a * b;
    document.getElementById("overallTotal").innerHTML = total;
}

function percentage() {
    let a = parseInt(document.getElementById("inputOne").value);
    let b = parseInt(document.getElementById("inputTwo").value);
    total = a / 100 * b;
    document.getElementById("overallTotal").innerHTML = total;
}

function clearInput(x,y,z,a) {
    document.getElementById(x).value = "";
    document.getElementById(y).value = "";
    document.querySelector(a).innerHTML = "";
    document.getElementById(z).innerHTML = "?"
}

// where all the magic happens

let operator = "";

function setOperator(opera) {
    operator = opera;
    updateFinalInput();
}

function updateFinalInput() {
    const x = document.getElementById("inputOne").value;
    const y = document.getElementById("inputTwo").value;

    if (operator === '%') {
        document.querySelector('.final-input').textContent = `${x}${operator} of ${y}`
    }
    else {
        document.querySelector('.final-input').textContent = `${x} ${operator} ${y}`
    }
}

function calculateTotal() {
    switch (operator) {
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '/':
            divide();
            break;
        case 'x':
            multiply();
            break;
        case '%':
        percentage();
        break;
    }
}