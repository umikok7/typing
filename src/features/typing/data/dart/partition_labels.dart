class Solution {
  List<int> partitionLabels(String s) {
    final last = List<int>.filled(128, 0);
    for (int i = 0; i < s.length; i++) {
      last[s.codeUnitAt(i)] = i;
    }
    final result = <int>[];
    var start = 0;
    var end = 0;
    for (int i = 0; i < s.length; i++) {
      if (last[s.codeUnitAt(i)] > end) {
        end = last[s.codeUnitAt(i)];
      }
      if (i == end) {
        result.add(i - start + 1);
        start = i + 1;
      }
    }
    return result;
  }
}
