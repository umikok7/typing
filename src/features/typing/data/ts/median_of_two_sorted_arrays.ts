function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  if (m > n) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const total = m + n;
  const half = Math.floor(total / 2);
  let left = 0;
  let right = m;
  while (left <= right) {
    const i = left + Math.floor((right - left) / 2);
    const j = half - i;
    const aLeft = i === 0 ? -Infinity : nums1[i - 1];
    const aRight = i === m ? Infinity : nums1[i];
    const bLeft = j === 0 ? -Infinity : nums2[j - 1];
    const bRight = j === n ? Infinity : nums2[j];
    if (aLeft <= bRight && bLeft <= aRight) {
      if (total % 2 === 1) {
        return Math.min(aRight, bRight);
      }
      return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
    }
    if (aLeft > bRight) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
  return 0;
}
