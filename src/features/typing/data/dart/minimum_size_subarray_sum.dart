class Solution {
  int minSubArrayLen(int target, List<int> nums) {
    var best = nums.length + 1;
    var left = 0;
    var sum = 0;
    for (var right = 0; right < nums.length; right++) {
      sum += nums[right];
      while (sum >= target) {
        if (right - left + 1 < best) {
          best = right - left + 1;
        }
        sum -= nums[left];
        left++;
      }
    }
    return best > nums.length ? 0 : best;
  }
}
