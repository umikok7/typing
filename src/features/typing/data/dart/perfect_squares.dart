class Solution {
  int numSquares(int n) {
    final dp = List<int>.filled(n + 1, 0);
    for (int i = 1; i <= n; i++) {
      dp[i] = i;
      for (int j = 1; j * j <= i; j++) {
        if (dp[i - j * j] + 1 < dp[i]) {
          dp[i] = dp[i - j * j] + 1;
        }
      }
    }
    return dp[n];
  }
}
