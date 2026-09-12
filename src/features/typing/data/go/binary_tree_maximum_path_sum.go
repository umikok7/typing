package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxPathSum(root *TreeNode) int {
	best := root.Val
	var gain func(node *TreeNode) int
	gain = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		l := max(gain(node.Left), 0)
		r := max(gain(node.Right), 0)
		if node.Val+l+r > best {
			best = node.Val + l + r
		}
		return node.Val + max(l, r)
	}
	gain(root)
	return best
}
