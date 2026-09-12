class Solution {
    public int maxProduct(int[] nums) {
        int best = nums[0];
        int maxP = nums[0];
        int minP = nums[0];
        for (int i = 1; i < nums.length; i++) {
            int num = nums[i];
            if (num < 0) {
                int temp = maxP;
                maxP = minP;
                minP = temp;
            }
            maxP = Math.max(num, maxP * num);
            minP = Math.min(num, minP * num);
            if (maxP > best) {
                best = maxP;
            }
        }
        return best;
    }
}
