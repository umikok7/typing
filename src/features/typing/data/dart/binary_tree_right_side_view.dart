import 'dart:collection';

class Solution {
  List<int> rightSideView(TreeNode? root) {
    List<int> result = [];
    if (root == null) {
      return result;
    }
    Queue<TreeNode> queue = Queue();
    queue.add(root);
    while (queue.isNotEmpty) {
      int size = queue.length;
      for (var i = 0; i < size; i++) {
        TreeNode node = queue.removeFirst();
        if (i == size - 1) {
          result.add(node.val);
        }
        if (node.left != null) {
          queue.add(node.left!);
        }
        if (node.right != null) {
          queue.add(node.right!);
        }
      }
    }
    return result;
  }
}
