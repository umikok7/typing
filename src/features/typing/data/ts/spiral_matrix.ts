function spiralOrder(matrix: number[][]): number[] {
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    const result: number[] = [];
    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        for (let i = top + 1; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        if (top < bottom) {
            for (let j = right - 1; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
        }
        if (left < right) {
            for (let i = bottom - 1; i > top; i--) {
                result.push(matrix[i][left]);
            }
        }
        top++;
        bottom--;
        left++;
        right--;
    }
    return result;
}
