class RandomNode {
    val: number;
    next: RandomNode | null;
    random: RandomNode | null;
    constructor(val = 0, next: RandomNode | null = null, random: RandomNode | null = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function copyRandomList(head: RandomNode | null): RandomNode | null {
    if (head === null) {
        return null;
    }
    for (let cur: RandomNode | null = head; cur !== null; cur = cur.next!.next) {
        cur.next = new RandomNode(cur.val, cur.next);
    }
    for (let cur: RandomNode | null = head; cur !== null; cur = cur.next!.next) {
        if (cur.random !== null) {
            cur.next!.random = cur.random.next;
        }
    }
    const dummy = new RandomNode();
    let tail = dummy;
    for (let cur = head; cur !== null; cur = cur.next!) {
        const copy = cur.next!;
        tail.next = copy;
        tail = copy;
        cur.next = copy.next;
    }
    return dummy.next;
}
