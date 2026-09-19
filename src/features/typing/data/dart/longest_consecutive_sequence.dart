class Solution {
  int longestConsecutive(List<int> nums) {
    final set = nums.toSet();
    var best = 0;
    for (final num in set) {
      if (set.contains(num - 1)) {
        continue;
      }
      var length = 1;
      while (set.contains(num + length)) {
        length++;
      }
      if (length > best) {
        best = length;
      }
    }
    return best;
  }
}
