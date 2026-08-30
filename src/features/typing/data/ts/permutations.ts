function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const n = nums.length;
  const backtrack = (start: number): void => {
    if (start === n) {
      result.push([...nums]);
      return;
    }
    for (let i = start; i < n; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  };
  backtrack(0);
  return result;
}
