class Solution {
  int largestRectangleArea(List<int> heights) {
    final stack = <int>[];
    int best = 0;
    void popArea(int right) {
      final int h = heights[stack.last];
      stack.removeLast();
      final int width = stack.isEmpty ? right : right - stack.last - 1;
      best = best > h * width ? best : h * width;
    }
    for (int i = 0; i < heights.length; i++) {
      while (stack.isNotEmpty && heights[stack.last] >= heights[i]) {
        popArea(i);
      }
      stack.add(i);
    }
    while (stack.isNotEmpty) {
      popArea(heights.length);
    }
    return best;
  }
}
