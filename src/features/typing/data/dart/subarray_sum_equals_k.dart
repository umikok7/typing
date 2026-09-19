class Solution {
  int subarraySum(List<int> nums, int k) {
    final count = <int, int>{};
    count[0] = 1;
    int presum = 0;
    int total = 0;
    for (final num in nums) {
      presum += num;
      total += count[presum - k] ?? 0;
      count[presum] = (count[presum] ?? 0) + 1;
    }
    return total;
  }
}
