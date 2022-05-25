function diagonalSums(matrix) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            first+= matrix[i][j]
            i++;
        }
    }
    for (let i = matrix.length - 1; i >= 0; i--) { 
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            second+= matrix[i][j];
            i--;
        }
    }
    console.log(`${first} ${second}`);
}
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)