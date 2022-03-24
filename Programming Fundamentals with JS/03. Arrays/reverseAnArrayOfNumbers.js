function reverseAnArrayOfNumbers(n, array) {
    let arr = [];
    for (let i = n - 1 ; i >= 0; i--){
        arr.push(array[i]);
    }
    console.log(arr.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])