class Solution {
  int pathSum(TreeNode? root, int targetSum) {
    final count = <int, int>{0: 1};
    return _dfs(root, 0, targetSum, count);
  }

  int _dfs(TreeNode? node, int presum, int targetSum, Map<int, int> count) {
    if (node == null) {
      return 0;
    }
    presum += node.val;
    var total = count[presum - targetSum] ?? 0;
    count[presum] = (count[presum] ?? 0) + 1;
    total += _dfs(node.left, presum, targetSum, count);
    total += _dfs(node.right, presum, targetSum, count);
    count[presum] = count[presum]! - 1;
    return total;
  }
}
