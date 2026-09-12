function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const backtrack = (start: number, current: number[]): void => {
        result.push([...current]);
        for (let i = start; i < nums.length; i++) {
            backtrack(i + 1, [...current, nums[i]]);
        }
    };
    backtrack(0, []);
    return result;
}
