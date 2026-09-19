class Solution {
  void nextPermutation(List<int> nums) {
    int i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
    if (i >= 0) {
      int j = nums.length - 1;
      while (nums[j] <= nums[i]) {
        j--;
      }
      _swap(nums, i, j);
    }
    for (int l = i + 1, r = nums.length - 1; l < r; l++, r--) {
      _swap(nums, l, r);
    }
  }

  void _swap(List<int> nums, int i, int j) {
    final tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
}
