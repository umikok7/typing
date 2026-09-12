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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const index = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        index.set(inorder[i], i);
    }
    const build = (preLeft: number, preRight: number, inLeft: number, inRight: number): TreeNode | null => {
        if (preLeft > preRight) {
            return null;
        }
        const rootVal = preorder[preLeft];
        const mid = index.get(rootVal)!;
        const leftSize = mid - inLeft;
        const root = new TreeNode(rootVal);
        root.left = build(preLeft + 1, preLeft + leftSize, inLeft, mid - 1);
        root.right = build(preLeft + leftSize + 1, preRight, mid + 1, inRight);
        return root;
    };
    return build(0, preorder.length - 1, 0, inorder.length - 1);
}
