class Solution {
  int lengthOfLongestSubstring(String s) {
    final last = <String, int>{};
    var start = 0;
    var best = 0;
    for (var i = 0; i < s.length; i++) {
      final c = s[i];
      final prev = last[c];
      if (prev != null && prev >= start) {
        start = prev + 1;
      }
      last[c] = i;
      if (i - start + 1 > best) {
        best = i - start + 1;
      }
    }
    return best;
  }
}
