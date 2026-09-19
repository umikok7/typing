class Solution {
  ListNode? reverseKGroup(ListNode? head, int k) {
    ListNode? node = head;
    for (int i = 0; i < k; i++) {
      if (node == null) {
        return head;
      }
      node = node.next;
    }
    ListNode? prev;
    var cur = head!;
    for (int i = 0; i < k; i++) {
      final next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next!;
    }
    head!.next = reverseKGroup(cur, k);
    return prev;
  }
}
