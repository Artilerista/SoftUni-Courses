function condenseArrayToNumber(arr) {
    while (arr.length > 1) {
        let temp = [];
        for (let i = 0; i < arr.length - 1; i++) {
            temp.push(arr[i] + arr[i + 1]);
        }
        arr = temp;
    }
    console.log(arr[0]);
}
condenseArrayToNumber([2, 10, 3])