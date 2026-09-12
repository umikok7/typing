function minSubArrayLen(target: number, nums: number[]): number {
    let best = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let sum = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            if (right - left + 1 < best) {
                best = right - left + 1;
            }
            sum -= nums[left];
            left++;
        }
    }
    if (best === Number.MAX_SAFE_INTEGER) {
        return 0;
    }
    return best;
}
