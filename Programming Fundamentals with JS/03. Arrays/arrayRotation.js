function arrayRotatio(array, rotation) {
    let rotateArray = [];
    let currentArray = [];
    let finalArray = [];
    isRotationBigger = false;
    for (let i = 0; i <= rotation; i++) {
        if (i >= array.length) {
            currentArray = [];
            finalArray = [];
            for (let j = 0; j < array.length; j++) {
                if (j < rotation) {
                    currentArray.push(array[j]);
                } else {
                    finalArray.push(array[j]);
                }
                isRotationBigger = true;

            }
        } else if (i === 0) {
            for (let k = 0; k < array.length; k++) {
                if (k < rotation) {
                    rotateArray.push(array[k]);
                } else {
                    currentArray.push(array[k]);
                }
            }

        }
        if (i === rotation) {
            if (isRotationBigger === true) {
                break;
            }
        }
    }
    if (!isRotationBigger) {
        for (let l = 0; l < rotateArray.length; l++) {
            currentArray.push(rotateArray[l]);

        }
        console.log(currentArray.join(' '));
    } else {
        for (let a = 0; a < currentArray.length; a++) {
            finalArray.push(currentArray[a]);

        }
        console.log(finalArray.join(' '));
    }



}
arrayRotatio([32, 21, 61, 1], 8)
arrayRotatio([32, 21, 61, 1], 9)
arrayRotatio([32, 21, 61, 1], 10)