class Solution {
  String decodeString(String s) {
    List<int> countStack = [];
    List<String> stringStack = [];
    String current = "";
    int count = 0;
    for (var i = 0; i < s.length; i++) {
      String ch = s[i];
      int? digit = int.tryParse(ch);
      if (digit != null) {
        count = count * 10 + digit;
      } else if (ch == '[') {
        countStack.add(count);
        stringStack.add(current);
        current = "";
        count = 0;
      } else if (ch == ']') {
        int repeat = countStack.removeLast();
        String prev = stringStack.removeLast();
        for (var j = 0; j < repeat; j++) {
          prev += current;
        }
        current = prev;
      } else {
        current += ch;
      }
    }
    return current;
  }
}
