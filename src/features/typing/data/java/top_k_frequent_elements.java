import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int num : nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }
        List<List<Integer>> buckets = new ArrayList<>();
        for (int i = 0; i <= nums.length; i++) {
            buckets.add(new ArrayList<>());
        }
        for (Map.Entry<Integer, Integer> entry : count.entrySet()) {
            buckets.get(entry.getValue()).add(entry.getKey());
        }
        List<Integer> picked = new ArrayList<>();
        for (int i = buckets.size() - 1; i >= 0 && picked.size() < k; i--) {
            picked.addAll(buckets.get(i));
        }
        int[] result = new int[picked.size()];
        for (int i = 0; i < picked.size(); i++) {
            result[i] = picked.get(i);
        }
        return result;
    }
}
