package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseKGroup(head *ListNode, k int) *ListNode {
	node := head
	for i := 0; i < k; i++ {
		if node == nil {
			return head
		}
		node = node.Next
	}
	var prev *ListNode
	cur := head
	for i := 0; i < k; i++ {
		next := cur.Next
		cur.Next = prev
		prev = cur
		cur = next
	}
	head.Next = reverseKGroup(cur, k)
	return prev
}
