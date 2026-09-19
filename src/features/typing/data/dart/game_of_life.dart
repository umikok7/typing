class Solution {
  void gameOfLife(List<List<int>> board) {
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[i].length; j++) {
        int live = 0;
        for (final d in dirs) {
          final int x = i + d[0];
          final int y = j + d[1];
          if (x >= 0 &&
              x < board.length &&
              y >= 0 &&
              y < board[i].length &&
              board[x][y] % 2 == 1) {
            live++;
          }
        }
        if ((board[i][j] == 1 && (live == 2 || live == 3)) ||
            (board[i][j] == 0 && live == 3)) {
          board[i][j] += 2;
        }
      }
    }
    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[i].length; j++) {
        board[i][j] %= 2;
      }
    }
  }
}
