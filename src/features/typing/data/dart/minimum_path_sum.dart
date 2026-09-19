class Solution {
  int minPathSum(List<List<int>> grid) {
    final rows = grid.length;
    final cols = grid[0].length;
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        if (i == 0 && j == 0) {
          continue;
        }
        if (i == 0) {
          grid[i][j] += grid[i][j - 1];
        } else if (j == 0) {
          grid[i][j] += grid[i - 1][j];
        } else {
          grid[i][j] +=
              grid[i - 1][j] < grid[i][j - 1] ? grid[i - 1][j] : grid[i][j - 1];
        }
      }
    }
    return grid[rows - 1][cols - 1];
  }
}
