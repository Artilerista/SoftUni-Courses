function sameNumbers(num) {
    let str = String(num);
    let firstChar = str[0];
    let isSame = true;
    let sum = 0;
    for (let char of str) {
        if (firstChar !== char) {
            isSame = false;
        }
        sum += Number(char);
    }
    if (isSame) {
        console.log('true');
        console.log(sum);
    } else {
        console.log('false');
        console.log(sum);
    }
}
sameNumbers(222222)