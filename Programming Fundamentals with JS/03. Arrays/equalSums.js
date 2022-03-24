function equalSums(array) {
    let isEqual = false;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        let leftsum = 0;
        let rightsum = 0;
        for (let j = 0; j < i; j++) {
            leftsum += array[j];

        }
        for (let k = i + 1; k < array.length; k++) {
            rightsum+=array[k];

        }
        if(leftsum === rightsum){
            index = i;
            isEqual = true
            break;
        }
    }
    if(!isEqual){
        console.log('no');
    } else {
        console.log(index);
    }
}
equalSums([1, 2])