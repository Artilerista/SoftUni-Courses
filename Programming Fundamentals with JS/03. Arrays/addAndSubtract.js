function addAndSubtract(array) {
    let sum1 = 0;
    let sum2 = 0;
    let arr = [];
    for (let index = 0; index < array.length; index++) {
        sum1+= array[index];
        if(array[index] % 2 === 0){
            arr.push(array[index] + index);
            sum2+= array[index] + index;
        } else {
            arr.push(array[index] - index);
            sum2+= array[index] - index;
        }
    }
    console.log(arr);
    console.log(sum1);
    console.log(sum2);
}
addAndSubtract([5, 15, 23, 56, 35])