import 'dart:math';

class Solution {
  int maxArea(List<int> height) {
    int left = 0;
    int right = height.length - 1;
    int best = 0;
    while (left < right) {
      int w = right - left;
      int h = min(height[left], height[right]);
      best = max(best, w * h);
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    return best;
  }
}
