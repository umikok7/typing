class Solution {
    public String minWindow(String s, String t) {
        int[] need = new int[128];
        int[] have = new int[128];
        for (char c : t.toCharArray()) {
            need[c]++;
        }
        int required = t.length();
        int formed = 0;
        int left = 0;
        int bestLen = Integer.MAX_VALUE;
        int bestStart = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            have[c]++;
            if (need[c] > 0 && have[c] <= need[c]) {
                formed++;
            }
            while (formed == required) {
                if (right - left + 1 < bestLen) {
                    bestLen = right - left + 1;
                    bestStart = left;
                }
                char lc = s.charAt(left);
                if (need[lc] > 0 && have[lc] <= need[lc]) {
                    formed--;
                }
                have[lc]--;
                left++;
            }
        }
        return bestLen == Integer.MAX_VALUE ? "" : s.substring(bestStart, bestStart + bestLen);
    }
}
