import java.util.ArrayList;
import java.util.List;

class MinStack {
    private final List<Integer> stack = new ArrayList<>();
    private final List<Integer> minStack = new ArrayList<>();

    public MinStack() {}

    public void push(int val) {
        stack.add(val);
        int min = val;
        if (!minStack.isEmpty() && minStack.get(minStack.size() - 1) < min) {
            min = minStack.get(minStack.size() - 1);
        }
        minStack.add(min);
    }

    public void pop() {
        stack.remove(stack.size() - 1);
        minStack.remove(minStack.size() - 1);
    }

    public int top() {
        return stack.get(stack.size() - 1);
    }

    public int getMin() {
        return minStack.get(minStack.size() - 1);
    }
}
