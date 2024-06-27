function calculateTax(salary) {
    let taxAmount;
    switch (true) {
        case (salary <= 500000):
            // Case 1: 0% tax on the entire salary
            taxAmount = 0;
            break;
        case (salary <= 1000000):
            // Case 2: 10% tax on the entire salary
            taxAmount = salary * 0.1;
            break;
        case (salary <= 1500000):
            // Case 3: 20% tax on the entire salary
            taxAmount = salary * 0.2;
            break;
        default:
            // Case 4: 30% tax on the entire salary
            taxAmount = salary * 0.3;
    }
    return taxAmount;
}


calculateTax(1500000);


// result

// const tax = calculateTax(1500000);
// console.log("Tax amount:", tax);