import java.util.HashMap;
import java.util.Map;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public int pathSum(TreeNode root, int targetSum) {
        Map<Integer, Integer> count = new HashMap<>();
        count.put(0, 1);
        return dfs(root, 0, targetSum, count);
    }

    private int dfs(TreeNode node, int presum, int targetSum, Map<Integer, Integer> count) {
        if (node == null) {
            return 0;
        }
        presum += node.val;
        int total = count.getOrDefault(presum - targetSum, 0);
        count.put(presum, count.getOrDefault(presum, 0) + 1);
        total += dfs(node.left, presum, targetSum, count) + dfs(node.right, presum, targetSum, count);
        count.put(presum, count.get(presum) - 1);
        return total;
    }
}
