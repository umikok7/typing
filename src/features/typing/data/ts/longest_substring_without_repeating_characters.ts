function lengthOfLongestSubstring(s: string): number {
  const last = new Map<string, number>();
  let start = 0;
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const prev = last.get(c);
    if (prev !== undefined && prev >= start) {
      start = prev + 1;
    }
    last.set(c, i);
    best = Math.max(best, i - start + 1);
  }
  return best;
}
