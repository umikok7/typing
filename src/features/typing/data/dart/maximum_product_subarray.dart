class Solution {
  int maxProduct(List<int> nums) {
    var best = nums[0];
    var maxP = nums[0];
    var minP = nums[0];
    for (var i = 1; i < nums.length; i++) {
      final num = nums[i];
      if (num < 0) {
        final temp = maxP;
        maxP = minP;
        minP = temp;
      }
      maxP = num > maxP * num ? num : maxP * num;
      minP = num < minP * num ? num : minP * num;
      if (maxP > best) {
        best = maxP;
      }
    }
    return best;
  }
}
