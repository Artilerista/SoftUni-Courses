function rotateArray(arr) {
    let array = [];
    for (let i = 0; i < arr.length - 1; i++) {
        array.push(arr[i]);
    }
    let rotation = Number(arr[arr.length - 1]) % array.length ;
    let notRotated = [];
    let rotated = [];
    for (let i = 0; i < array.length ; i++) {
        if(i < array.length - rotation){
            notRotated.push(array[i]);
        } else {
            rotated.push(array[i]);
        }
        
    }
    for (let i = 0; i < notRotated.length; i++) {
        rotated.push(notRotated[i]);
        
    }
    
    console.log(rotated.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])