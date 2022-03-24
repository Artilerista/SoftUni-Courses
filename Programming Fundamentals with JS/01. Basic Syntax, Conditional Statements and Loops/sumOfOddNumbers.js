function sumOfOddNumbers(n) {
    sum = 0;
    number = 1;
    for (i = 1; i <= n; i++) {
        console.log(number);
        sum += number;
        number += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)