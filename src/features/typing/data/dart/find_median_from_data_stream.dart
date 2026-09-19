class MedianFinder {
  final List<int> _sorted = [];

  void addNum(int num) {
    int lo = 0;
    int hi = _sorted.length;
    while (lo < hi) {
      final int mid = lo + (hi - lo) ~/ 2;
      if (_sorted[mid] < num) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    _sorted.insert(lo, num);
  }

  double findMedian() {
    final int n = _sorted.length;
    if (n % 2 == 1) {
      return _sorted[n ~/ 2].toDouble();
    }
    return (_sorted[n ~/ 2 - 1] + _sorted[n ~/ 2]) / 2;
  }
}
