function lengthOfLIS(nums: number[]): number {
    const tails: number[] = [];
    for (const num of nums) {
        let left = 0;
        let right = tails.length;
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }
    return tails.length;
}
