class Solution {
  TreeNode? invertTree(TreeNode? root) {
    if (root == null) {
      return null;
    }
    final left = invertTree(root.right);
    final right = invertTree(root.left);
    root.left = left;
    root.right = right;
    return root;
  }
}
