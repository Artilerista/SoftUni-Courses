function magicSum(array, num) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === num){
                let magicNumbers = [];
                magicNumbers.push(array[i],array[j]);
                console.log(magicNumbers.join(' '));
            }

        }

    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)