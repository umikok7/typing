package main

func permute(nums []int) [][]int {
	result := [][]int{}
	n := len(nums)
	var backtrack func(start int)
	backtrack = func(start int) {
		if start == n {
			cur := make([]int, n)
			copy(cur, nums)
			result = append(result, cur)
			return
		}
		for i := start; i < n; i++ {
			nums[start], nums[i] = nums[i], nums[start]
			backtrack(start + 1)
			nums[start], nums[i] = nums[i], nums[start]
		}
	}
	backtrack(0)
	return result
}
