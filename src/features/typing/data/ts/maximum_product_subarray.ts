function maxProduct(nums: number[]): number {
    let best = nums[0];
    let maxP = nums[0];
    let minP = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            [maxP, minP] = [minP, maxP];
        }
        maxP = Math.max(num, maxP * num);
        minP = Math.min(num, minP * num);
        if (maxP > best) {
            best = maxP;
        }
    }
    return best;
}
