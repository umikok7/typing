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

function isSymmetric(root: TreeNode | null): boolean {
    const mirror = (a: TreeNode | null, b: TreeNode | null): boolean => {
        if (a === null || b === null) {
            return a === b;
        }
        return a.val === b.val && mirror(a.left, b.right) && mirror(a.right, b.left);
    };
    return mirror(root, root);
}
