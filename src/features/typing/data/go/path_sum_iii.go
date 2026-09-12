package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func pathSum(root *TreeNode, targetSum int) int {
	count := map[int]int{0: 1}
	var dfs func(node *TreeNode, presum int) int
	dfs = func(node *TreeNode, presum int) int {
		if node == nil {
			return 0
		}
		presum += node.Val
		total := count[presum-targetSum]
		count[presum]++
		total += dfs(node.Left, presum) + dfs(node.Right, presum)
		count[presum]--
		return total
	}
	return dfs(root, 0)
}
