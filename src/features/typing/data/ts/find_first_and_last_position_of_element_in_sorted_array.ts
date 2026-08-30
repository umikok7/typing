function searchRange(nums: number[], target: number): number[] {
  const first = lowerBound(nums, target);
  if (first === nums.length || nums[first] !== target) {
    return [-1, -1];
  }
  return [first, lowerBound(nums, target + 1) - 1];
}

function lowerBound(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
