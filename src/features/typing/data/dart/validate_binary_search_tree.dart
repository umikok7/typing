class Solution {
  bool isValidBST(TreeNode? root) {
    bool validate(TreeNode? node, int? min, int? max) {
      if (node == null) {
        return true;
      }
      if (min != null && node.val <= min) {
        return false;
      }
      if (max != null && node.val >= max) {
        return false;
      }
      return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    return validate(root, null, null);
  }
}
