function aggregateElements(array) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = '';
    for (let number of array) {
        sum1+= number;
        sum2+= 1/number;
        sum3+= number;
    }
    console.log(sum1);
    console.log(sum2);
    console.log(sum3);
}
aggregateElements([1, 2, 3])