class Solution {
  double findMedianSortedArrays(List<int> nums1, List<int> nums2) {
    final m = nums1.length;
    final n = nums2.length;
    if (m > n) {
      return findMedianSortedArrays(nums2, nums1);
    }
    final total = m + n;
    final half = total ~/ 2;
    var left = 0;
    var right = m;
    while (left <= right) {
      final i = left + (right - left) ~/ 2;
      final j = half - i;
      final aLeft = i == 0 ? double.negativeInfinity : nums1[i - 1].toDouble();
      final aRight = i == m ? double.infinity : nums1[i].toDouble();
      final bLeft = j == 0 ? double.negativeInfinity : nums2[j - 1].toDouble();
      final bRight = j == n ? double.infinity : nums2[j].toDouble();
      if (aLeft <= bRight && bLeft <= aRight) {
        if (total % 2 == 1) {
          return aRight < bRight ? aRight : bRight;
        }
        final maxLeft = aLeft > bLeft ? aLeft : bLeft;
        final minRight = aRight < bRight ? aRight : bRight;
        return (maxLeft + minRight) / 2;
      }
      if (aLeft > bRight) {
        right = i - 1;
      } else {
        left = i + 1;
      }
    }
    return 0;
  }
}
