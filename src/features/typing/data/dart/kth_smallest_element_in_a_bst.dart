class Solution {
  int kthSmallest(TreeNode? root, int k) {
    final stack = <TreeNode>[];
    TreeNode? cur = root;
    while (cur != null || stack.isNotEmpty) {
      while (cur != null) {
        stack.add(cur);
        cur = cur.left;
      }
      cur = stack.removeLast();
      k--;
      if (k == 0) {
        return cur.val;
      }
      cur = cur.right;
    }
    return -1;
  }
}
