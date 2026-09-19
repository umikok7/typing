class Solution {
  int maxSubArray(List<int> nums) {
    var best = nums[0];
    var sum = 0;
    for (final num in nums) {
      if (sum < 0) {
        sum = 0;
      }
      sum += num;
      if (sum > best) {
        best = sum;
      }
    }
    return best;
  }
}
