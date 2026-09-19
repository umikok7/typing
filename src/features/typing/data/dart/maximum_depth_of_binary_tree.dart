class Solution {
  int maxDepth(TreeNode? root) {
    if (root == null) {
      return 0;
    }
    final l = maxDepth(root.left);
    final r = maxDepth(root.right);
    if (l > r) {
      return l + 1;
    }
    return r + 1;
  }
}
