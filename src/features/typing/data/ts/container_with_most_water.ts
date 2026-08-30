function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let best = 0;
  while (left < right) {
    const w = right - left;
    const h = Math.min(height[left], height[right]);
    best = Math.max(best, w * h);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return best;
}
