class Solution {
  String minWindow(String s, String t) {
    final need = List<int>.filled(128, 0);
    final have = List<int>.filled(128, 0);
    for (int i = 0; i < t.length; i++) {
      need[t.codeUnitAt(i)]++;
    }
    int required = t.length;
    int formed = 0;
    int left = 0;
    int bestLen = 1 << 30;
    int bestStart = 0;
    for (int right = 0; right < s.length; right++) {
      final c = s.codeUnitAt(right);
      have[c]++;
      if (need[c] > 0 && have[c] <= need[c]) {
        formed++;
      }
      while (formed == required) {
        if (right - left + 1 < bestLen) {
          bestLen = right - left + 1;
          bestStart = left;
        }
        final lc = s.codeUnitAt(left);
        if (need[lc] > 0 && have[lc] <= need[lc]) {
          formed--;
        }
        have[lc]--;
        left++;
      }
    }
    if (bestLen == 1 << 30) {
      return '';
    }
    return s.substring(bestStart, bestStart + bestLen);
  }
}
