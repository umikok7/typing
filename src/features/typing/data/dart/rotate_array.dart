class Solution {
  void rotate(List<int> nums, int k) {
    final n = nums.length;
    k %= n;
    _reverse(nums, 0, n - 1);
    _reverse(nums, 0, k - 1);
    _reverse(nums, k, n - 1);
  }

  void _reverse(List<int> nums, int lo, int hi) {
    for (int i = lo, j = hi; i < j; i++, j--) {
      final tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    }
  }
}
