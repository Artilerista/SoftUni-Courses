function sumOfNumbersNM (n1,n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum+= i;
    }
    return sum;
}
sumOfNumbersNM('1', '5' )