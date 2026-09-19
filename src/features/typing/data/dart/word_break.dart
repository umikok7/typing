class Solution {
  bool wordBreak(String s, List<String> wordDict) {
    final words = wordDict.toSet();
    final dp = List<bool>.filled(s.length + 1, false);
    dp[0] = true;
    for (int i = 1; i <= s.length; i++) {
      for (int j = 0; j < i; j++) {
        if (dp[j] && words.contains(s.substring(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }
    return dp[s.length];
  }
}
