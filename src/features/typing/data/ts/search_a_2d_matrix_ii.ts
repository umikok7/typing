function searchMatrix(matrix: number[][], target: number): boolean {
    let i = 0;
    let j = matrix[0].length - 1;
    while (i < matrix.length && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] < target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}
