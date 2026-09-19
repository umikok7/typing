class Solution {
  bool isValid(String s) {
    final stack = <String>[];
    const pairs = {')': '(', ']': '[', '}': '{'};
    for (int i = 0; i < s.length; i++) {
      final c = s[i];
      if (c == '(' || c == '[' || c == '{') {
        stack.add(c);
        continue;
      }
      if (stack.isEmpty || stack.removeLast() != pairs[c]) {
        return false;
      }
    }
    return stack.isEmpty;
  }
}
