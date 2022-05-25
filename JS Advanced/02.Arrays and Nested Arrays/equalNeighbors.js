function equalNeighbors(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
                counter++;
            }
        }
    }
    for (let i = 0; i < matrix.length - 1; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (matrix[i][j] === matrix[i + 1][j]){
                counter++;
            }
        }
    }
    return counter;
}
equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
)