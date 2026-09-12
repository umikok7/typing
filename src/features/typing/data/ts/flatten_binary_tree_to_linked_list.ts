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

function flatten(root: TreeNode | null): void {
    let prev: TreeNode | null = null;
    const flattenNode = (node: TreeNode | null): void => {
        if (node === null) {
            return;
        }
        flattenNode(node.right);
        flattenNode(node.left);
        node.right = prev;
        node.left = null;
        prev = node;
    };
    flattenNode(root);
}
