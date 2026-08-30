function longestPalindrome(s: string): string {
  let start = 0;
  let maxLen = 0;
  const expand = (l: number, r: number): void => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    const len = r - l - 1;
    if (len > maxLen) {
      start = l + 1;
      maxLen = len;
    }
  };
  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }
  return s.slice(start, start + maxLen);
}
