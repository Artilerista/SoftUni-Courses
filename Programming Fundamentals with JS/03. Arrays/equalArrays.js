function equalArrays(arr1, arr2) {
    let j = 0;
    let sum = 0;
    isIdentical = true;
    for (let i = 0; i < arr1.length - 1, j < arr2.length; i++, j++) {
        if (arr1[i] !== arr2[j]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        } else {
            sum+= Number(arr1[i]);
            isIdentical = true;
        }
    }
    if(isIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['1'], ['10'])