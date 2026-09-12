class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;
        int left = 0;
        int right = m * n;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (matrix[mid / n][mid % n] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left < m * n && matrix[left / n][left % n] == target;
    }
}
