function topKFrequent(nums: number[], k: number): number[] {
    const count = new Map<number, number>();
    for (const num of nums) {
        count.set(num, (count.get(num) ?? 0) + 1);
    }
    const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, freq] of count) {
        buckets[freq].push(num);
    }
    const result: number[] = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }
    return result;
}
