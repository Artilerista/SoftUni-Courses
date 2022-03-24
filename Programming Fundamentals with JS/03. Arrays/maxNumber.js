function maxNumber(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let isMaxNumber = true;
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] <= array[j]){
                isMaxNumber = false;
           
            }
        }
        if(isMaxNumber){
            arr.push(array[i]);
        }
       
        
    }
    console.log(arr.join(' '));
}
maxNumber([1, 4, 3, 2])