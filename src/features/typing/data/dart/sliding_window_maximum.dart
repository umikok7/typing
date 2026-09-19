class Solution {
  List<int> maxSlidingWindow(List<int> nums, int k) {
    final deque = <int>[];
    final result = <int>[];
    for (int i = 0; i < nums.length; i++) {
      while (deque.isNotEmpty && nums[deque.last] <= nums[i]) {
        deque.removeLast();
      }
      deque.add(i);
      if (deque.first <= i - k) {
        deque.removeAt(0);
      }
      if (i >= k - 1) {
        result.add(nums[deque.first]);
      }
    }
    return result;
  }
}
