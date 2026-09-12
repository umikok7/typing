package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func buildTree(preorder []int, inorder []int) *TreeNode {
	index := make(map[int]int)
	for i, val := range inorder {
		index[val] = i
	}
	var build func(preLeft, preRight, inLeft, inRight int) *TreeNode
	build = func(preLeft, preRight, inLeft, inRight int) *TreeNode {
		if preLeft > preRight {
			return nil
		}
		rootVal := preorder[preLeft]
		mid := index[rootVal]
		leftSize := mid - inLeft
		return &TreeNode{
			Val:   rootVal,
			Left:  build(preLeft+1, preLeft+leftSize, inLeft, mid-1),
			Right: build(preLeft+leftSize+1, preRight, mid+1, inRight),
		}
	}
	return build(0, len(preorder)-1, 0, len(inorder)-1)
}
