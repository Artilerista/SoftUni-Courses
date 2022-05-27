function extractIncreasingSubsequenceFromArray(array) {
    let biggest = 0;
    let result = [];
    for (const num of array) {
        if (num >= biggest) {
            biggest = num;
            result.push(biggest);
        }
    }
    return result;
}
extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)