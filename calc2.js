function add() {
    parseInput(input)
    sum = input.a + input.b;
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
    document.querySelector(a).innerHTML = "";
    document.getElementById(z).innerHTML = "?"
}

// where all the magic happens

let operator = "";

function setOperator(opera) {
    operator = opera;
    const inp = document.getElementById("inputOne");
    inp.value += operator;
    inp.focus();
    updateFinalInput();
}

function parseInput(input) {
    input = document.getElementById(input).value;
    const newInput = input.replace(/\s/g, "");
    const opIndex = newInput.indexOf(operator);
    const a = Number(newInput.slice(0, opIndex));
    const b = Number(newInput.slice(opIndex + 1));
    return {
        a: a,
        operator: opIndex,
        b: b
    }
}


function updateFinalInput() {
    const x = document.getElementById("inputOne").value;
    if (operator === '%') {
        document.querySelector('.final-input').textContent = `${x} of`
    }
    else {
        document.querySelector('.final-input').textContent = `${x}`
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