import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> last = new HashMap<>();
        int start = 0;
        int best = 0;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            Integer prev = last.get(c);
            if (prev != null && prev >= start) {
                start = prev + 1;
            }
            last.put(c, i);
            best = Math.max(best, i - start + 1);
        }
        return best;
    }
}
