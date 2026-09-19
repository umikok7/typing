class Solution {
  List<List<String>> partition(String s) {
    final result = <List<String>>[];
    void backtrack(int start, List<String> current) {
      if (start == s.length) {
        result.add(List.of(current));
        return;
      }
      for (int end = start + 1; end <= s.length; end++) {
        final piece = s.substring(start, end);
        if (_isPalindrome(piece)) {
          current.add(piece);
          backtrack(end, current);
          current.removeLast();
        }
      }
    }
    backtrack(0, <String>[]);
    return result;
  }

  bool _isPalindrome(String s) {
    for (int i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s.codeUnitAt(i) != s.codeUnitAt(j)) {
        return false;
      }
    }
    return true;
  }
}
