function sortColors(nums: number[]): void {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            const tmp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = tmp;
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            const tmp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = tmp;
            high--;
        }
    }
}
