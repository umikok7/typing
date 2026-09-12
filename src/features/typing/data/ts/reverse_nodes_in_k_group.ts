class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let node: ListNode | null = head;
    for (let i = 0; i < k; i++) {
        if (node === null) {
            return head;
        }
        node = node.next;
    }
    let prev: ListNode | null = null;
    let cur: ListNode | null = head;
    for (let i = 0; i < k; i++) {
        const next: ListNode | null = cur!.next;
        cur!.next = prev;
        prev = cur;
        cur = next;
    }
    head!.next = reverseKGroup(cur, k);
    return prev;
}
