class Solution {
  String longestPalindrome(String s) {
    var start = 0;
    var maxLen = 0;
    void expand(int l, int r) {
      while (l >= 0 && r < s.length && s[l] == s[r]) {
        l--;
        r++;
      }
      final len = r - l - 1;
      if (len > maxLen) {
        start = l + 1;
        maxLen = len;
      }
    }

    for (var i = 0; i < s.length; i++) {
      expand(i, i);
      expand(i, i + 1);
    }
    return s.substring(start, start + maxLen);
  }
}
