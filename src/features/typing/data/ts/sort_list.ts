class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function sortList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }
    let slow: ListNode = head;
    let fast: ListNode | null = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next!;
        fast = fast.next.next;
    }
    const mid = slow.next;
    slow.next = null;
    return mergeTwo(sortList(head), sortList(mid));
}

function mergeTwo(a: ListNode | null, b: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let cur = dummy;
    while (a !== null && b !== null) {
        if (a.val < b.val) {
            cur.next = a;
            a = a.next;
        } else {
            cur.next = b;
            b = b.next;
        }
        cur = cur.next;
    }
    if (a !== null) {
        cur.next = a;
    }
    if (b !== null) {
        cur.next = b;
    }
    return dummy.next;
}
