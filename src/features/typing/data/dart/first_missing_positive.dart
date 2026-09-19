class Solution {
  int firstMissingPositive(List<int> nums) {
    final int n = nums.length;
    for (int i = 0; i < n; i++) {
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
        final int j = nums[i] - 1;
        final int tmp = nums[j];
        nums[j] = nums[i];
        nums[i] = tmp;
      }
    }
    for (int i = 0; i < n; i++) {
      if (nums[i] != i + 1) {
        return i + 1;
      }
    }
    return n + 1;
  }
}
