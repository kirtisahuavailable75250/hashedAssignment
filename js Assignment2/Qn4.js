function sumOfProductOfNums(n1, n2) {
    let sum = 0;
    let num1, num2;
    while (n1 > 0 || n2 > 0) {
        num1 = n1 % 10;
        num2 = n2 % 10;
        sum += num1 * num2;
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}

console.log(sumOfProductOfNums(2, 22)); //output will be 4
