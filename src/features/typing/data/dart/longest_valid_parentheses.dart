class Solution {
  int longestValidParentheses(String s) {
    final stack = <int>[-1];
    var best = 0;
    for (var i = 0; i < s.length; i++) {
      if (s[i] == '(') {
        stack.add(i);
      } else {
        stack.removeLast();
        if (stack.isEmpty) {
          stack.add(i);
        } else if (i - stack.last > best) {
          best = i - stack.last;
        }
      }
    }
    return best;
  }
}
