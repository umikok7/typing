class Solution {
  int jump(List<int> nums) {
    int steps = 0;
    int end = 0;
    int farthest = 0;
    for (int i = 0; i < nums.length - 1; i++) {
      if (i + nums[i] > farthest) {
        farthest = i + nums[i];
      }
      if (i == end) {
        steps++;
        end = farthest;
      }
    }
    return steps;
  }
}
