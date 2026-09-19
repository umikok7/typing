class Solution {
  Map<int, int> index = {};

  TreeNode? buildTree(List<int> preorder, List<int> inorder) {
    for (var i = 0; i < inorder.length; i++) {
      index[inorder[i]] = i;
    }
    return build(preorder, 0, preorder.length - 1, 0, inorder.length - 1);
  }

  TreeNode? build(List<int> preorder, int preLeft, int preRight, int inLeft, int inRight) {
    if (preLeft > preRight) {
      return null;
    }
    int rootVal = preorder[preLeft];
    int mid = index[rootVal]!;
    int leftSize = mid - inLeft;
    TreeNode root = TreeNode(rootVal);
    root.left = build(preorder, preLeft + 1, preLeft + leftSize, inLeft, mid - 1);
    root.right = build(preorder, preLeft + leftSize + 1, preRight, mid + 1, inRight);
    return root;
  }
}
