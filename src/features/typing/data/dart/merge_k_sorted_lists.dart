class _MinHeap {
  final List<ListNode> _data = <ListNode>[];

  bool get isEmpty => _data.isEmpty;

  void push(ListNode node) {
    _data.add(node);
    var i = _data.length - 1;
    while (i > 0) {
      final parent = (i - 1) ~/ 2;
      if (_data[parent].val <= _data[i].val) {
        break;
      }
      final tmp = _data[parent];
      _data[parent] = _data[i];
      _data[i] = tmp;
      i = parent;
    }
  }

  ListNode pop() {
    final top = _data[0];
    final last = _data.removeLast();
    if (_data.isNotEmpty) {
      _data[0] = last;
      var i = 0;
      while (true) {
        final l = i * 2 + 1;
        final r = i * 2 + 2;
        var smallest = i;
        if (l < _data.length && _data[l].val < _data[smallest].val) {
          smallest = l;
        }
        if (r < _data.length && _data[r].val < _data[smallest].val) {
          smallest = r;
        }
        if (smallest == i) {
          break;
        }
        final tmp = _data[i];
        _data[i] = _data[smallest];
        _data[smallest] = tmp;
        i = smallest;
      }
    }
    return top;
  }
}

class Solution {
  ListNode? mergeKLists(List<ListNode?> lists) {
    final heap = _MinHeap();
    for (final node in lists) {
      if (node != null) {
        heap.push(node);
      }
    }
    final dummy = ListNode();
    var cur = dummy;
    while (heap.isNotEmpty) {
      final node = heap.pop();
      cur.next = node;
      cur = node;
      if (node.next != null) {
        heap.push(node.next!);
      }
    }
    return dummy.next;
  }
}
