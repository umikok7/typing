class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    const l = maxDepth(root.left);
    const r = maxDepth(root.right);
    if (l > r) {
        return l + 1;
    }
    return r + 1;
}
