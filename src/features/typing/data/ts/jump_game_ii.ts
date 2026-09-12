function jump(nums: number[]): number {
    let steps = 0;
    let end = 0;
    let farthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (i + nums[i] > farthest) {
            farthest = i + nums[i];
        }
        if (i === end) {
            steps++;
            end = farthest;
        }
    }
    return steps;
}
