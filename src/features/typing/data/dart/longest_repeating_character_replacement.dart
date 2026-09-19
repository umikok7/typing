class Solution {
  int characterReplacement(String s, int k) {
    final count = <String, int>{};
    var maxCount = 0;
    var left = 0;
    var best = 0;
    for (var right = 0; right < s.length; right++) {
      final c = s[right];
      count[c] = (count[c] ?? 0) + 1;
      if (count[c]! > maxCount) {
        maxCount = count[c]!;
      }
      while (right - left + 1 > maxCount + k) {
        final leftChar = s[left];
        count[leftChar] = count[leftChar]! - 1;
        left++;
      }
      if (right - left + 1 > best) {
        best = right - left + 1;
      }
    }
    return best;
  }
}
