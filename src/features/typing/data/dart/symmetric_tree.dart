class Solution {
  bool isSymmetric(TreeNode? root) {
    bool mirror(TreeNode? a, TreeNode? b) {
      if (a == null || b == null) {
        return a == b;
      }
      return a.val == b.val && mirror(a.left, b.right) && mirror(a.right, b.left);
    }
    return mirror(root, root);
  }
}
