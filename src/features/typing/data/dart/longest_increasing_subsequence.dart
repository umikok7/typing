class Solution {
  int lengthOfLIS(List<int> nums) {
    final tails = <int>[];
    for (final num in nums) {
      var left = 0;
      var right = tails.length;
      while (left < right) {
        final mid = left + (right - left) ~/ 2;
        if (tails[mid] < num) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      if (left == tails.length) {
        tails.add(num);
      } else {
        tails[left] = num;
      }
    }
    return tails.length;
  }
}
