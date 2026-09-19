class Solution {
  TreeNode? lowestCommonAncestor(TreeNode? root, TreeNode? p, TreeNode? q) {
    if (root == null || root == p || root == q) {
      return root;
    }
    final left = lowestCommonAncestor(root.left, p, q);
    final right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) {
      return root;
    }
    if (left != null) {
      return left;
    }
    return right;
  }
}
