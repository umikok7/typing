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

function pathSum(root: TreeNode | null, targetSum: number): number {
    const count = new Map<number, number>([[0, 1]]);
    const dfs = (node: TreeNode | null, presum: number): number => {
        if (node === null) {
            return 0;
        }
        presum += node.val;
        let total = count.get(presum - targetSum) ?? 0;
        count.set(presum, (count.get(presum) ?? 0) + 1);
        total += dfs(node.left, presum) + dfs(node.right, presum);
        count.set(presum, count.get(presum)! - 1);
        return total;
    };
    return dfs(root, 0);
}
