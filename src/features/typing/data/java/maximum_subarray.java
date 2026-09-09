class Solution {
    public int maxSubArray(int[] nums) {
        int best = nums[0];
        int sum = 0;
        for (int num : nums) {
            sum = Math.max(sum, 0) + num;
            best = Math.max(best, sum);
        }
        return best;
    }
}
