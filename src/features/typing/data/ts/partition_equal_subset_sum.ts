function canPartition(nums: number[]): boolean {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    if (sum % 2 === 1) {
        return false;
    }
    const target = sum / 2;
    const dp: boolean[] = new Array(target + 1).fill(false);
    dp[0] = true;
    for (const num of nums) {
        for (let j = target; j >= num; j--) {
            if (dp[j - num]) {
                dp[j] = true;
            }
        }
    }
    return dp[target];
}
