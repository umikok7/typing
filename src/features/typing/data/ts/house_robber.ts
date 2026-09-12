function rob(nums: number[]): number {
    let prev = 0;
    let cur = 0;
    for (const num of nums) {
        const next = Math.max(cur, prev + num);
        prev = cur;
        cur = next;
    }
    return cur;
}
