class Solution {
  int coinChange(List<int> coins, int amount) {
    int max = 1 << 30;
    List<int> dp = List.filled(amount + 1, max);
    dp[0] = 0;
    for (var i = 1; i <= amount; i++) {
      for (var coin in coins) {
        if (coin <= i && dp[i - coin] != max && dp[i - coin] + 1 < dp[i]) {
          dp[i] = dp[i - coin] + 1;
        }
      }
    }
    if (dp[amount] == max) {
      return -1;
    }
    return dp[amount];
  }
}
