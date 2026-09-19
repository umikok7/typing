class Solution {
  ListNode? reverseList(ListNode? head) {
    ListNode? prev;
    ListNode? cur = head;
    while (cur != null) {
      final next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }
}
