class MinStack {
  final List<int> _stack = <int>[];
  final List<int> _minStack = <int>[];

  void push(int val) {
    _stack.add(val);
    var min = val;
    if (_minStack.isNotEmpty && _minStack.last < min) {
      min = _minStack.last;
    }
    _minStack.add(min);
  }

  void pop() {
    _stack.removeLast();
    _minStack.removeLast();
  }

  int top() {
    return _stack.last;
  }

  int getMin() {
    return _minStack.last;
  }
}
