class MedianFinder {
    private sorted: number[] = [];

    addNum(num: number): void {
        let lo = 0;
        let hi = this.sorted.length;
        while (lo < hi) {
            const mid = lo + Math.floor((hi - lo) / 2);
            if (this.sorted[mid] < num) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        this.sorted.splice(lo, 0, num);
    }

    findMedian(): number {
        const n = this.sorted.length;
        if (n % 2 === 1) {
            return this.sorted[Math.floor(n / 2)];
        }
        return (this.sorted[n / 2 - 1] + this.sorted[n / 2]) / 2;
    }
}
