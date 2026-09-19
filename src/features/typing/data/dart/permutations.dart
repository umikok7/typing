class Solution {
  List<List<int>> permute(List<int> nums) {
    final result = <List<int>>[];
    final n = nums.length;
    void backtrack(int start) {
      if (start == n) {
        result.add(List.of(nums));
        return;
      }
      for (int i = start; i < n; i++) {
        _swap(nums, start, i);
        backtrack(start + 1);
        _swap(nums, start, i);
      }
    }
    backtrack(0);
    return result;
  }

  void _swap(List<int> nums, int i, int j) {
    final tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
}
