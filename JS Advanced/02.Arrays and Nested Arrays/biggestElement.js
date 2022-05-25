function biggestElement(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        for (let num of currentRow) {
            if(num >= biggest){
                biggest = num;
            }
        }
    }
    return biggest;
}
biggestElement([
    [-20, -145, -10],
    [-8, -33, -145]]
)