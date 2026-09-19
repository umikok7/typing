class Solution {
  List<List<String>> solveNQueens(int n) {
    final result = <List<String>>[];
    final queens = List<int>.filled(n, 0);
    final cols = <int>{};
    final diag1 = <int>{};
    final diag2 = <int>{};
    void backtrack(int row) {
      if (row == n) {
        final board = <String>[];
        for (int i = 0; i < n; i++) {
          final line = List<String>.filled(n, '.');
          line[queens[i]] = 'Q';
          board.add(line.join());
        }
        result.add(board);
        return;
      }
      for (int col = 0; col < n; col++) {
        if (cols.contains(col) ||
            diag1.contains(row + col) ||
            diag2.contains(row - col)) {
          continue;
        }
        queens[row] = col;
        cols.add(col);
        diag1.add(row + col);
        diag2.add(row - col);
        backtrack(row + 1);
        cols.remove(col);
        diag1.remove(row + col);
        diag2.remove(row - col);
      }
    }
    backtrack(0);
    return result;
  }
}
