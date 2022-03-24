function distinctArray(array) {
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let nextNumber = array[j];
            if(currentNumber === nextNumber){
                array.splice(j,1);
                j--;
            }
        }
        
    }
    console.log(array.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 2, 2, 3, 4, 1, 2])