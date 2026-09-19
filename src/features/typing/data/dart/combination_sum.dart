class Solution {
  List<List<int>> combinationSum(List<int> candidates, int target) {
    List<List<int>> result = [];
    void backtrack(int start, int remaining, List<int> current) {
      if (remaining == 0) {
        result.add(List<int>.from(current));
        return;
      }
      for (var i = start; i < candidates.length; i++) {
        if (candidates[i] > remaining) {
          continue;
        }
        current.add(candidates[i]);
        backtrack(i, remaining - candidates[i], current);
        current.removeLast();
      }
    }
    backtrack(0, target, []);
    return result;
  }
}
