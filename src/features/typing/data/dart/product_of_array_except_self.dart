class Solution {
  List<int> productExceptSelf(List<int> nums) {
    final n = nums.length;
    final result = List<int>.filled(n, 1);
    var prefix = 1;
    for (int i = 0; i < n; i++) {
      result[i] = prefix;
      prefix *= nums[i];
    }
    var suffix = 1;
    for (int i = n - 1; i >= 0; i--) {
      result[i] *= suffix;
      suffix *= nums[i];
    }
    return result;
  }
}
