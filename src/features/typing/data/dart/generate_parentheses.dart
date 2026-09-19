class Solution {
  List<String> generateParenthesis(int n) {
    final result = <String>[];
    void backtrack(String current, int open, int close) {
      if (current.length == 2 * n) {
        result.add(current);
        return;
      }
      if (open < n) {
        backtrack('$current(', open + 1, close);
      }
      if (close < open) {
        backtrack('$current)', open, close + 1);
      }
    }
    backtrack('', 0, 0);
    return result;
  }
}
