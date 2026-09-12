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

function maxPathSum(root: TreeNode | null): number {
    let best = -Infinity;
    const gain = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }
        const l = Math.max(gain(node.left), 0);
        const r = Math.max(gain(node.right), 0);
        if (node.val + l + r > best) {
            best = node.val + l + r;
        }
        return node.val + Math.max(l, r);
    };
    gain(root);
    return best;
}
