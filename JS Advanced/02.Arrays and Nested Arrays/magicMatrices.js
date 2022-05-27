function magicMatrices(matrix) {
    let isMagical = true;
    for (let i = 0; i < matrix.length - 1; i++) {
        let row = matrix[i];
        let firstRow = matrix[i].reduce((a, b) => a + b, 0);
        let secondRow = matrix[i + 1].reduce((a, b) => a + b, 0);
        let firstColum = 0;
        let secondColum = 0;
        for (let j = 0; j < matrix.length; j++) {
            firstColum += matrix[j][i];
            secondColum += matrix[j][i + 1];
        }
        if(firstRow !== secondRow || firstColum !== secondColum){
            isMagical = false;
        }
    }
    if(isMagical){
        console.log('true');
    } else {
        console.log('false');
    }
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)