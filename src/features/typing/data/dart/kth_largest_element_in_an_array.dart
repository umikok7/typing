class Solution {
  int findKthLargest(List<int> nums, int k) {
    nums.sort();
    return nums[nums.length - k];
  }
}
