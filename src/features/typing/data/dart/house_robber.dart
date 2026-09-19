class Solution {
  int rob(List<int> nums) {
    int prev = 0;
    int cur = 0;
    for (final num in nums) {
      final int next = cur > prev + num ? cur : prev + num;
      prev = cur;
      cur = next;
    }
    return cur;
  }
}
