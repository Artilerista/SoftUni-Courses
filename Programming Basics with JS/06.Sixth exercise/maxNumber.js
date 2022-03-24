function maxNumber(input) {
    let index = 0;
    let n = input[index];
    let min = Number.MAX_SAFE_INTEGER;
    while (n !== "Stop") {
        n = Number(input[index]);
        if (n < min) {
            min = n
        }
        index++
        n = input[index];
    }
    console.log(min);
}
maxNumber(["100",
    "99",
    "200",
    "70",
    "Stop"])
