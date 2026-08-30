function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }
  let prev = 1;
  let cur = 2;
  for (let i = 3; i <= n; i++) {
    [prev, cur] = [cur, prev + cur];
  }
  return cur;
}
