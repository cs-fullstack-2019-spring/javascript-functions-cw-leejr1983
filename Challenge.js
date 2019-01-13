// Challenge
// Create 4 functions called add, subtract, multiply, and divide.
// Create them to allow a user to perform the name of the function to the two numbers and return the result.


perform = prompt(" Hello. Would you like to add, subtract, multiply, or divide?");

do {
    number1 = parseInt(prompt("Ok. Please enter your 1st number."));
}
while (isNaN(number1));

do {
    number2 = parseInt(prompt("Please enter your 2nd number so that we may solve this problem."));
}
while (isNaN(number2));

function add() {
    if (perform == "add")
        return number1 + number2
}

function subtract() {
    if (perform == "subtract")
        return number1 - number2
}

function multiply() {
    if (perform == "multiply")
        return number1 * number2
}

function divide() {
    if (perform == "divide")
        return number1 / number2
}

console.log(add() || subtract() || multiply() || divide())
