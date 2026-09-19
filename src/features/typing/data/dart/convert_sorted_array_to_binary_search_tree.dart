class Solution {
  TreeNode? sortedArrayToBST(List<int> nums) {
    if (nums.isEmpty) {
      return null;
    }
    int mid = nums.length ~/ 2;
    TreeNode root = TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.sublist(0, mid));
    root.right = sortedArrayToBST(nums.sublist(mid + 1));
    return root;
  }
}
