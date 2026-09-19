import 'dart:collection';

class Solution {
  List<List<int>> levelOrder(TreeNode? root) {
    List<List<int>> result = [];
    if (root == null) {
      return result;
    }
    Queue<TreeNode> queue = Queue();
    queue.add(root);
    while (queue.isNotEmpty) {
      int size = queue.length;
      List<int> level = [];
      for (var i = 0; i < size; i++) {
        TreeNode node = queue.removeFirst();
        level.add(node.val);
        if (node.left != null) {
          queue.add(node.left!);
        }
        if (node.right != null) {
          queue.add(node.right!);
        }
      }
      result.add(level);
    }
    return result;
  }
}
