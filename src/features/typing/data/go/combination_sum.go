package main

func combinationSum(candidates []int, target int) [][]int {
	result := [][]int{}
	var backtrack func(start, remaining int, current []int)
	backtrack = func(start, remaining int, current []int) {
		if remaining == 0 {
			combination := make([]int, len(current))
			copy(combination, current)
			result = append(result, combination)
			return
		}
		for i := start; i < len(candidates); i++ {
			if candidates[i] > remaining {
				continue
			}
			backtrack(i, remaining-candidates[i], append(current, candidates[i]))
		}
	}
	backtrack(0, target, []int{})
	return result
}
