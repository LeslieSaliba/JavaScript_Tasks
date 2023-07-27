
function add(num1, num2) {
    let x = num1 + num2;
    return x
}

function subtract(num1, num2) {
    let x = num1 - num2;
    return x
}

function multiply(num1, num2) {
    let x = num1 * num2
    return x
}

function divide(num1, num2) {
    if (num2 !== 0) {
        let x = num1 / num2;
        return x;
    }
    else {
        return "Division by zero is not allowed.";
    }
}

function myCalculator(operation, x, y) {
    if (operation === '+') {
        console.log(add(x, y));
    }
    else if (operation === '-') {
        console.log(subtract(x, y));
    }
    else if (operation === '*') {
        console.log(multiply(w, y));
    }
    else if (operation === '/') {
        console.log(divide(x, y));
    }
    else {
        console.log('Invalid operation')
    };
}

myCalculator('/', 12, 3)