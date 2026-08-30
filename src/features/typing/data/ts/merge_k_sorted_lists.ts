class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const values: number[] = [];
  for (const list of lists) {
    let cur = list;
    while (cur !== null) {
      values.push(cur.val);
      cur = cur.next;
    }
  }
  values.sort((a, b) => a - b);
  const dummy = new ListNode();
  let cur = dummy;
  for (const v of values) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}
