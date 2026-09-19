class Solution {
  int numIslands(List<List<String>> grid) {
    final rows = grid.length;
    final cols = grid[0].length;
    var total = 0;
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (grid[i][j] == '1') {
          total++;
          _sink(grid, rows, cols, i, j);
        }
      }
    }
    return total;
  }

  void _sink(List<List<String>> grid, int rows, int cols, int i, int j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] != '1') {
      return;
    }
    grid[i][j] = '0';
    _sink(grid, rows, cols, i + 1, j);
    _sink(grid, rows, cols, i - 1, j);
    _sink(grid, rows, cols, i, j + 1);
    _sink(grid, rows, cols, i, j - 1);
  }
}
