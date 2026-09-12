function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque: number[] = [];
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        deque.push(i);
        if (deque[0] <= i - k) {
            deque.shift();
        }
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}
