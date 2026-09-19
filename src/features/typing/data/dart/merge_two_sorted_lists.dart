class Solution {
  ListNode? mergeTwoLists(ListNode? list1, ListNode? list2) {
    final dummy = ListNode();
    var cur = dummy;
    var a = list1;
    var b = list2;
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
