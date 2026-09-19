class Solution {
  List<int> dailyTemperatures(List<int> temperatures) {
    List<int> result = List.filled(temperatures.length, 0);
    List<int> stack = [];
    for (var i = 0; i < temperatures.length; i++) {
      int t = temperatures[i];
      while (stack.isNotEmpty && temperatures[stack.last] < t) {
        int idx = stack.removeLast();
        result[idx] = i - idx;
      }
      stack.add(i);
    }
    return result;
  }
}
