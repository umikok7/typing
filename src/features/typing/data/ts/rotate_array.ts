function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k %= n;
    const reverse = (lo: number, hi: number): void => {
        for (let i = lo, j = hi; i < j; i++, j--) {
            const tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
        }
    };
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
}
