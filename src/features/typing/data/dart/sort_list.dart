class Solution {
  ListNode? sortList(ListNode? head) {
    if (head == null || head.next == null) {
      return head;
    }
    ListNode slow = head;
    ListNode? fast = head.next;
    while (fast != null && fast.next != null) {
      slow = slow.next!;
      fast = fast.next!.next;
    }
    final ListNode? mid = slow.next;
    slow.next = null;
    return _mergeTwo(sortList(head), sortList(mid));
  }

  ListNode? _mergeTwo(ListNode? a, ListNode? b) {
    final dummy = ListNode();
    ListNode cur = dummy;
    while (a != null && b != null) {
      if (a.val < b.val) {
        cur.next = a;
        a = a.next;
      } else {
        cur.next = b;
        b = b.next;
      }
      cur = cur.next!;
    }
    cur.next = a ?? b;
    return dummy.next;
  }
}
