import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class MedianFinder {
    private final List<Integer> sorted = new ArrayList<>();

    public MedianFinder() {}

    public void addNum(int num) {
        int idx = Collections.binarySearch(sorted, num);
        if (idx < 0) {
            idx = -(idx + 1);
        }
        sorted.add(idx, num);
    }

    public double findMedian() {
        int n = sorted.size();
        if (n % 2 == 1) {
            return sorted.get(n / 2);
        }
        return (sorted.get(n / 2 - 1) + sorted.get(n / 2)) / 2.0;
    }
}
