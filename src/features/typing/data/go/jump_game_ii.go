package main

func jump(nums []int) int {
	steps, end, farthest := 0, 0, 0
	for i := 0; i < len(nums)-1; i++ {
		if i+nums[i] > farthest {
			farthest = i + nums[i]
		}
		if i == end {
			steps++
			end = farthest
		}
	}
	return steps
}
