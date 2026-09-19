import 'dart:math';

class Solution {
  int best = 0;

  int maxPathSum(TreeNode? root) {
    best = root!.val;
    gain(root);
    return best;
  }

  int gain(TreeNode? node) {
    if (node == null) {
      return 0;
    }
    int l = max(gain(node.left), 0);
    int r = max(gain(node.right), 0);
    if (node.val + l + r > best) {
      best = node.val + l + r;
    }
    return node.val + max(l, r);
  }
}
