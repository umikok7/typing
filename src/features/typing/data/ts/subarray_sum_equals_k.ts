function subarraySum(nums: number[], k: number): number {
    const count = new Map<number, number>();
    count.set(0, 1);
    let presum = 0;
    let total = 0;
    for (const num of nums) {
        presum += num;
        total += count.get(presum - k) ?? 0;
        count.set(presum, (count.get(presum) ?? 0) + 1);
    }
    return total;
}
