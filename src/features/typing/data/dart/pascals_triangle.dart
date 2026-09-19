class Solution {
  List<List<int>> generate(int numRows) {
    final result = <List<int>>[];
    for (int i = 0; i < numRows; i++) {
      final row = List<int>.filled(i + 1, 0);
      row[0] = 1;
      row[i] = 1;
      for (int j = 1; j < i; j++) {
        row[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
      result.add(row);
    }
    return result;
  }
}
