package main

func subsets(nums []int) [][]int {
	result := [][]int{}
	var backtrack func(start int, current []int)
	backtrack = func(start int, current []int) {
		subset := make([]int, len(current))
		copy(subset, current)
		result = append(result, subset)
		for i := start; i < len(nums); i++ {
			backtrack(i+1, append(current, nums[i]))
		}
	}
	backtrack(0, []int{})
	return result
}
