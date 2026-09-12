class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int best = Integer.MAX_VALUE;
        int left = 0;
        int sum = 0;
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= target) {
                if (right - left + 1 < best) {
                    best = right - left + 1;
                }
                sum -= nums[left];
                left++;
            }
        }
        if (best == Integer.MAX_VALUE) {
            return 0;
        }
        return best;
    }
}
