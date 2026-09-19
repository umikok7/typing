class Solution {
  List<int> topKFrequent(List<int> nums, int k) {
    final count = <int, int>{};
    for (final num in nums) {
      count[num] = (count[num] ?? 0) + 1;
    }
    final buckets = List<List<int>>.generate(nums.length + 1, (_) => <int>[]);
    for (final entry in count.entries) {
      buckets[entry.value].add(entry.key);
    }
    final result = <int>[];
    for (int i = buckets.length - 1; i >= 0 && result.length < k; i--) {
      result.addAll(buckets[i]);
    }
    return result;
  }
}
