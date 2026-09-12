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
    private int best;

    public int maxPathSum(TreeNode root) {
        best = root.val;
        gain(root);
        return best;
    }

    private int gain(TreeNode node) {
        if (node == null) {
            return 0;
        }
        int l = Math.max(gain(node.left), 0);
        int r = Math.max(gain(node.right), 0);
        if (node.val + l + r > best) {
            best = node.val + l + r;
        }
        return node.val + Math.max(l, r);
    }
}
