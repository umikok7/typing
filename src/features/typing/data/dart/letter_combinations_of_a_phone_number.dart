class Solution {
  static const _digitLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  List<String> letterCombinations(String digits) {
    final result = <String>[];
    if (digits.isEmpty) {
      return result;
    }
    void backtrack(int index, String current) {
      if (index == digits.length) {
        result.add(current);
        return;
      }
      final letters = _digitLetters[digits[index]] ?? '';
      for (final ch in letters.split('')) {
        backtrack(index + 1, current + ch);
      }
    }
    backtrack(0, '');
    return result;
  }
}
