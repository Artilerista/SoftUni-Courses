function lastKNumbersSequance(n, k) {
    let array = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let elements = array.slice(-k);
        for (let i of elements) {
            sum+=i;
        }
        array.push(sum);
    }
    console.log(array.join(' '));
}
lastKNumbersSequance(6, 3)