class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) {
            let cur: ListNode | null = head;
            while (cur !== slow) {
                cur = cur!.next;
                slow = slow!.next;
            }
            return cur;
        }
    }
    return null;
}
