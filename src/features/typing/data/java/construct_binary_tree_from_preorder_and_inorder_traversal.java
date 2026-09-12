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
    private Map<Integer, Integer> index = new HashMap<>();

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        for (int i = 0; i < inorder.length; i++) {
            index.put(inorder[i], i);
        }
        return build(preorder, 0, preorder.length - 1, 0, inorder.length - 1);
    }

    private TreeNode build(int[] preorder, int preLeft, int preRight, int inLeft, int inRight) {
        if (preLeft > preRight) {
            return null;
        }
        int rootVal = preorder[preLeft];
        int mid = index.get(rootVal);
        int leftSize = mid - inLeft;
        TreeNode root = new TreeNode(rootVal);
        root.left = build(preorder, preLeft + 1, preLeft + leftSize, inLeft, mid - 1);
        root.right = build(preorder, preLeft + leftSize + 1, preRight, mid + 1, inRight);
        return root;
    }
}
