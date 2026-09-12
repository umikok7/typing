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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let best = 0;
    const depth = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }
        const l = depth(node.left);
        const r = depth(node.right);
        best = Math.max(best, l + r);
        return Math.max(l, r) + 1;
    };
    depth(root);
    return best;
}
