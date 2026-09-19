class Solution {
  bool canPartition(List<int> nums) {
    var sum = 0;
    for (final n in nums) {
      sum += n;
    }
    if (sum % 2 == 1) {
      return false;
    }
    final target = sum ~/ 2;
    final dp = List<bool>.filled(target + 1, false);
    dp[0] = true;
    for (final n in nums) {
      for (int j = target; j >= n; j--) {
        if (dp[j - n]) {
          dp[j] = true;
        }
      }
    }
    return dp[target];
  }
}
