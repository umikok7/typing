class Solution {
  List<List<int>> subsets(List<int> nums) {
    final result = <List<int>>[];
    void backtrack(int start, List<int> current) {
      result.add(List<int>.of(current));
      for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        backtrack(i + 1, current);
        current.removeLast();
      }
    }
    backtrack(0, <int>[]);
    return result;
  }
}
