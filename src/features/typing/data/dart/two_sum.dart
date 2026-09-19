class Solution {
  List<int> twoSum(List<int> nums, int target) {
    final seen = <int, int>{};
    for (int i = 0; i < nums.length; i++) {
      final complement = target - nums[i];
      if (seen.containsKey(complement)) {
        return [seen[complement]!, i];
      }
      seen[nums[i]] = i;
    }
    return [];
  }
}
