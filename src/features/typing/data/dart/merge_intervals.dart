class Solution {
  List<List<int>> merge(List<List<int>> intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    final result = <List<int>>[];
    for (final interval in intervals) {
      if (result.isEmpty || result.last[1] < interval[0]) {
        result.add(interval);
      } else if (interval[1] > result.last[1]) {
        result.last[1] = interval[1];
      }
    }
    return result;
  }
}
