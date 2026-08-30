function maxSubArray(nums: number[]): number {
  let best = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num;
    best = Math.max(best, sum);
  }
  return best;
}
