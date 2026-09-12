function wordBreak(s: string, wordDict: string[]): boolean {
    const words = new Set<string>(wordDict);
    const dp: boolean[] = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && words.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
}
