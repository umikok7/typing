class Solution {
    public int numIslands(char[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int total = 0;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == '1') {
                    total++;
                    sink(grid, rows, cols, i, j);
                }
            }
        }
        return total;
    }

    private void sink(char[][] grid, int rows, int cols, int i, int j) {
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] != '1') {
            return;
        }
        grid[i][j] = '0';
        sink(grid, rows, cols, i + 1, j);
        sink(grid, rows, cols, i - 1, j);
        sink(grid, rows, cols, i, j + 1);
        sink(grid, rows, cols, i, j - 1);
    }
}
