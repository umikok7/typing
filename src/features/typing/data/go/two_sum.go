package main

func twoSum(nums []int, target int) []int {
	seen := make(map[int]int, len(nums))
	for i, num := range nums {
		if j, ok := seen[target-num]; ok {
			return []int{j, i}
		}
		seen[num] = i
	}
	return nil
}
