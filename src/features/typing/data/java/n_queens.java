import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        int[] queens = new int[n];
        Set<Integer> cols = new HashSet<>();
        Set<Integer> diag1 = new HashSet<>();
        Set<Integer> diag2 = new HashSet<>();
        backtrack(n, 0, queens, cols, diag1, diag2, result);
        return result;
    }

    private void backtrack(int n, int row, int[] queens, Set<Integer> cols, Set<Integer> diag1,
            Set<Integer> diag2, List<List<String>> result) {
        if (row == n) {
            List<String> board = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                StringBuilder line = new StringBuilder();
                for (int j = 0; j < n; j++) {
                    line.append('.');
                }
                line.setCharAt(queens[i], 'Q');
                board.add(line.toString());
            }
            result.add(board);
            return;
        }
        for (int col = 0; col < n; col++) {
            if (cols.contains(col) || diag1.contains(row + col) || diag2.contains(row - col)) {
                continue;
            }
            queens[row] = col;
            cols.add(col);
            diag1.add(row + col);
            diag2.add(row - col);
            backtrack(n, row + 1, queens, cols, diag1, diag2, result);
            cols.remove(col);
            diag1.remove(row + col);
            diag2.remove(row - col);
        }
    }
}
