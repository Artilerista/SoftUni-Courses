function amazingNumbers(num) {
    num = String(num)
    let sum = 0;
    let isAmazing = false;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    sum = String(sum);
    for (j = 0; j < sum.length; j++) {
        if (sum[j] == 9) {
            isAmazing = true;
        }
    }
    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233)
amazingNumbers(999)