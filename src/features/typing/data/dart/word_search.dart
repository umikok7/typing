class Solution {
  bool exist(List<List<String>> board, String word) {
    int rows = board.length;
    int cols = board[0].length;
    bool dfs(int i, int j, int index) {
      if (index == word.length) {
        return true;
      }
      if (i < 0 ||
          i >= rows ||
          j < 0 ||
          j >= cols ||
          board[i][j] != word[index]) {
        return false;
      }
      final tmp = board[i][j];
      board[i][j] = '#';
      final found = dfs(i + 1, j, index + 1) ||
          dfs(i - 1, j, index + 1) ||
          dfs(i, j + 1, index + 1) ||
          dfs(i, j - 1, index + 1);
      board[i][j] = tmp;
      return found;
    }
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
    return false;
  }
}
