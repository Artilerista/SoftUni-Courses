function maxSequenceOfEqualElements(array) {
    let longest = [];
    for (let i = 0; i < array.length; i++) {
        let newLongest = [];
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                newLongest.push(array[j]);
            } else {
                break;
            }

        }
        if (newLongest.length > longest.length){
            longest = [];
            for (let k = 0; k < newLongest.length; k++) {
                longest.push(newLongest[k]);
                
            }
        }
    }
    console.log(longest.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])