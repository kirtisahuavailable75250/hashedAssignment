const  repeatedSumOfDigits = (num) => {
    while (num > 9) {
        let sum = 0;
        const digits = num.toString().split('');
		
        for (let digit of digits) {
            sum += parseInt(digit);
        }
        num = sum;
    }
    
    return num;
}

console.log(repeatedSumOfDigits(456)); // Output: 6
