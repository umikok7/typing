class Solution {
  int majorityElement(List<int> nums) {
    var count = 0;
    var candidate = 0;
    for (final num in nums) {
      if (count == 0) {
        candidate = num;
      }
      if (num == candidate) {
        count++;
      } else {
        count--;
      }
    }
    return candidate;
  }
}
