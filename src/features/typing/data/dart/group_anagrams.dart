class Solution {
  List<List<String>> groupAnagrams(List<String> strs) {
    final groups = <String, List<String>>{};
    for (final s in strs) {
      final key = (s.split('')..sort()).join();
      groups.putIfAbsent(key, () => []).add(s);
    }
    return groups.values.toList();
  }
}
