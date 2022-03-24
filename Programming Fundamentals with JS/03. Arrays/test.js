function arrayRotation(array, rotation) {
    let arr = [];
    let sum = rotation % array.length;
    for (let i = sum; i < array.length; i++) {
        arr.push(array[i]);
        
    }
    if(sum > 0){
        for (let j = 0; j < sum; j++) {
            arr.push(array[j]);
            
        }
    }
    console.log(arr.join(' '));
}
arrayRotation([32, 21, 61, 1], 2)