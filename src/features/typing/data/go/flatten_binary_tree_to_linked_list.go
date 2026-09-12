package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func flatten(root *TreeNode) {
	var prev *TreeNode
	var flattenNode func(node *TreeNode)
	flattenNode = func(node *TreeNode) {
		if node == nil {
			return
		}
		flattenNode(node.Right)
		flattenNode(node.Left)
		node.Right = prev
		node.Left = nil
		prev = node
	}
	flattenNode(root)
}
