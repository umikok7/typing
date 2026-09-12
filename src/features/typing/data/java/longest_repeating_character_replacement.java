import java.util.HashMap;
import java.util.Map;

class Solution {
    public int characterReplacement(String s, int k) {
        Map<Character, Integer> count = new HashMap<>();
        int maxCount = 0;
        int left = 0;
        int best = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            count.put(c, count.getOrDefault(c, 0) + 1);
            if (count.get(c) > maxCount) {
                maxCount = count.get(c);
            }
            while (right - left + 1 > maxCount + k) {
                char leftChar = s.charAt(left);
                count.put(leftChar, count.get(leftChar) - 1);
                left++;
            }
            if (right - left + 1 > best) {
                best = right - left + 1;
            }
        }
        return best;
    }
}
