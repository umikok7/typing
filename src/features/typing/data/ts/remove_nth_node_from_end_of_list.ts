class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;
  for (let i = 0; i < n; i++) {
    if (fast !== null) {
      fast = fast.next;
    }
  }
  while (fast !== null && fast.next !== null) {
    fast = fast.next;
    if (slow !== null) {
      slow = slow.next;
    }
  }
  if (slow !== null && slow.next !== null) {
    slow.next = slow.next.next;
  }
  return dummy.next;
}
