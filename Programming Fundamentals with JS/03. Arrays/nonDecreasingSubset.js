function nonDecreasingSubset(array) {
    let arr = [];
    let currentBiggest = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        if(currentNumber >= currentBiggest){
            currentBiggest = currentNumber;
            arr.push(currentBiggest);
        } 
        
    }
    console.log(arr.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])