class Solution {
  int best = 0;

  int diameterOfBinaryTree(TreeNode? root) {
    best = 0;
    depth(root);
    return best;
  }

  int depth(TreeNode? node) {
    if (node == null) {
      return 0;
    }
    int l = depth(node.left);
    int r = depth(node.right);
    if (l + r > best) {
      best = l + r;
    }
    return (l > r ? l : r) + 1;
  }
}
