function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (matrix[Math.floor(mid / n)][mid % n] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left < m * n && matrix[Math.floor(left / n)][left % n] === target;
}
