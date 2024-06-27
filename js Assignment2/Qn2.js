function calculateTwoNumbers(num1,num2,operation) {

    // let num1 = parseFloat(prompt("Enter the first number:"));
    // let num2 = parseFloat(prompt("Enter the second number:"));
    // let operation = prompt("Enter the operation (+, -, *, /):");

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Cannot divide by zero!";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operation!";
    }
    return result;
}

// calculateTwoNumbers(40, 20, '*');
