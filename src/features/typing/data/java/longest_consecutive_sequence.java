import java.util.HashSet;
import java.util.Set;

class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        int best = 0;
        for (int num : set) {
            if (set.contains(num - 1)) {
                continue;
            }
            int length = 1;
            while (set.contains(num + length)) {
                length++;
            }
            best = Math.max(best, length);
        }
        return best;
    }
}
