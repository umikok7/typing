function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];
  for (const interval of intervals) {
    const last = result[result.length - 1];
    if (last === undefined || last[1] < interval[0]) {
      result.push(interval);
      continue;
    }
    last[1] = Math.max(last[1], interval[1]);
  }
  return result;
}
