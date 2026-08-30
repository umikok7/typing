function minWindow(s: string, t: string): string {
  const need = new Map<string, number>();
  for (const c of t) {
    need.set(c, (need.get(c) ?? 0) + 1);
  }
  const have = new Map<string, number>();
  const required = need.size;
  let formed = 0;
  let left = 0;
  let best = '';
  let bestLen = Infinity;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    have.set(c, (have.get(c) ?? 0) + 1);
    if (need.has(c) && have.get(c) === need.get(c)) {
      formed++;
    }
    while (formed === required) {
      const length = right - left + 1;
      if (length < bestLen) {
        bestLen = length;
        best = s.slice(left, right + 1);
      }
      const lc = s[left];
      have.set(lc, have.get(lc)! - 1);
      if (need.has(lc) && have.get(lc)! < need.get(lc)!) {
        formed--;
      }
      left++;
    }
  }
  return best;
}
