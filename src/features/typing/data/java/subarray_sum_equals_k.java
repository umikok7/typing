import java.util.HashMap;
import java.util.Map;

class Solution {
    public int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        count.put(0, 1);
        int presum = 0;
        int total = 0;
        for (int num : nums) {
            presum += num;
            total += count.getOrDefault(presum - k, 0);
            count.put(presum, count.getOrDefault(presum, 0) + 1);
        }
        return total;
    }
}
