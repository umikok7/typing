class Solution {
  List<int> inorderTraversal(TreeNode? root) {
    List<int> result = [];
    List<TreeNode> stack = [];
    TreeNode? cur = root;
    while (cur != null || stack.isNotEmpty) {
      while (cur != null) {
        stack.add(cur);
        cur = cur.left;
      }
      cur = stack.removeLast();
      result.add(cur.val);
      cur = cur.right;
    }
    return result;
  }
}
