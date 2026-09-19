import 'dart:collection';

class Solution {
  int orangesRotting(List<List<int>> grid) {
    final rows = grid.length;
    final cols = grid[0].length;
    final queue = Queue<List<int>>();
    var fresh = 0;
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (grid[i][j] == 2) {
          queue.add([i, j]);
        } else if (grid[i][j] == 1) {
          fresh++;
        }
      }
    }
    final dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    var minutes = 0;
    while (queue.isNotEmpty && fresh > 0) {
      minutes++;
      final size = queue.length;
      for (int i = 0; i < size; i++) {
        final cell = queue.removeFirst();
        for (final d in dirs) {
          final x = cell[0] + d[0];
          final y = cell[1] + d[1];
          if (x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] == 1) {
            grid[x][y] = 2;
            fresh--;
            queue.add([x, y]);
          }
        }
      }
    }
    return fresh > 0 ? -1 : minutes;
  }
}
