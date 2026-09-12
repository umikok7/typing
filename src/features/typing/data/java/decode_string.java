import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    public String decodeString(String s) {
        Deque<Integer> countStack = new ArrayDeque<>();
        Deque<String> stringStack = new ArrayDeque<>();
        String current = "";
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch >= '0' && ch <= '9') {
                count = count * 10 + (ch - '0');
            } else if (ch == '[') {
                countStack.push(count);
                stringStack.push(current);
                current = "";
                count = 0;
            } else if (ch == ']') {
                int repeat = countStack.pop();
                String prev = stringStack.pop();
                for (int j = 0; j < repeat; j++) {
                    prev += current;
                }
                current = prev;
            } else {
                current += ch;
            }
        }
        return current;
    }
}
