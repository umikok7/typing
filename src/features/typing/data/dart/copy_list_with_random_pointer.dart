class Node {
  int val;
  Node? next;
  Node? random;
  Node([this.val = 0, this.next, this.random]);
}

class Solution {
  Node? copyRandomList(Node? head) {
    if (head == null) {
      return null;
    }
    for (Node? cur = head; cur != null; cur = cur.next!.next) {
      cur.next = Node(cur.val, cur.next);
    }
    for (Node? cur = head; cur != null; cur = cur.next!.next) {
      if (cur.random != null) {
        cur.next!.random = cur.random!.next;
      }
    }
    Node dummy = Node();
    Node tail = dummy;
    for (Node? cur = head; cur != null; cur = cur.next) {
      Node copy = cur.next!;
      tail.next = copy;
      tail = copy;
      cur.next = copy.next;
    }
    return dummy.next;
  }
}
