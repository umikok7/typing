function coinChange(coins: number[], amount: number): number {
    const max = Number.MAX_SAFE_INTEGER;
    const dp: number[] = new Array(amount + 1).fill(max);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i && dp[i - coin] !== max && dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
            }
        }
    }
    if (dp[amount] === max) {
        return -1;
    }
    return dp[amount];
}
