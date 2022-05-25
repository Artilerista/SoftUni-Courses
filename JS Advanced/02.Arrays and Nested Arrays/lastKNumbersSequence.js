function lastKNumbersSequence(n, k) {
    let nums = [1];
    for (let i = 1; i < n; i++) {
        let currentNums = nums.slice(-k);
        let sum = currentNums.reduce((a, b) => a + b, 0);
        nums.push(sum);
    }
    return (nums);
}
lastKNumbersSequence(6, 3)