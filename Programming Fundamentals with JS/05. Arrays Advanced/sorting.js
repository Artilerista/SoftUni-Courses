function sorting(array) {
    array.sort((a, b) => b - a);
    let newArray = [];
    while (array.length > 0) {
        let firstNumber = array.shift();
        let secondNumber = array.pop();
        newArray.push(firstNumber);
        newArray.push(secondNumber);        
    }
    console.log(newArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])