function printNThElement(array) {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i]);
        
    }
    let lastArray = [];
    for (let i = 0; i < newArray.length; i+= Number(array[array.length - 1])) {
        lastArray.push(newArray[i]);
    }
    console.log(lastArray.join(' '));
}
printNThElement(['5', '20', '31', '4', '20', '2'])