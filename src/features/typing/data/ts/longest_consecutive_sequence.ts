function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let best = 0;
  for (const num of set) {
    if (set.has(num - 1)) {
      continue;
    }
    let length = 1;
    while (set.has(num + length)) {
      length++;
    }
    best = Math.max(best, length);
  }
  return best;
}
