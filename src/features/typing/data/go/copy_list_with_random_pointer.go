package main

type Node struct {
	Val    int
	Next   *Node
	Random *Node
}

func copyRandomList(head *Node) *Node {
	if head == nil {
		return nil
	}
	for cur := head; cur != nil; cur = cur.Next.Next {
		cur.Next = &Node{Val: cur.Val, Next: cur.Next}
	}
	for cur := head; cur != nil; cur = cur.Next.Next {
		if cur.Random != nil {
			cur.Next.Random = cur.Random.Next
		}
	}
	dummy := &Node{}
	tail := dummy
	for cur := head; cur != nil; cur = cur.Next.Next {
		tail.Next = cur.Next
		tail = tail.Next
		cur.Next = cur.Next.Next
	}
	return dummy.Next
}
