class Solution {
    private int start;
    private int maxLen;

    public String longestPalindrome(String s) {
        start = 0;
        maxLen = 0;
        for (int i = 0; i < s.length(); i++) {
            expand(s, i, i);
            expand(s, i, i + 1);
        }
        return s.substring(start, start + maxLen);
    }

    private void expand(String s, int l, int r) {
        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
            l--;
            r++;
        }
        int len = r - l - 1;
        if (len > maxLen) {
            start = l + 1;
            maxLen = len;
        }
    }
}
