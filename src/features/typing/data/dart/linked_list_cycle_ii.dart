class Solution {
  ListNode? detectCycle(ListNode? head) {
    ListNode? slow = head;
    ListNode? fast = head;
    while (fast != null && fast.next != null) {
      slow = slow!.next;
      fast = fast.next!.next;
      if (slow == fast) {
        ListNode? cur = head;
        while (cur != slow) {
          cur = cur!.next;
          slow = slow!.next;
        }
        return cur;
      }
    }
    return null;
  }
}
