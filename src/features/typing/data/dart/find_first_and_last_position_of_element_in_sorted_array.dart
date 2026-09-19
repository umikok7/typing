class Solution {
  List<int> searchRange(List<int> nums, int target) {
    int first = lowerBound(nums, target);
    if (first == nums.length || nums[first] != target) {
      return [-1, -1];
    }
    return [first, lowerBound(nums, target + 1) - 1];
  }

  int lowerBound(List<int> nums, int target) {
    int left = 0;
    int right = nums.length;
    while (left < right) {
      int mid = left + (right - left) ~/ 2;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}
