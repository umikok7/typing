class Node {
    int val;
    Node next;
    Node random;

    Node() {}

    Node(int val) {
        this.val = val;
    }

    Node(int val, Node next, Node random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) {
            return null;
        }
        for (Node cur = head; cur != null; cur = cur.next.next) {
            cur.next = new Node(cur.val, cur.next, null);
        }
        for (Node cur = head; cur != null; cur = cur.next.next) {
            if (cur.random != null) {
                cur.next.random = cur.random.next;
            }
        }
        Node dummy = new Node();
        Node tail = dummy;
        for (Node cur = head; cur != null; cur = cur.next) {
            Node copy = cur.next;
            tail.next = copy;
            tail = copy;
            cur.next = copy.next;
        }
        return dummy.next;
    }
}
