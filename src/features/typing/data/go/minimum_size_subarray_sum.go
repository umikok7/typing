package main

import "math"

func minSubArrayLen(target int, nums []int) int {
	best := math.MaxInt
	left, sum := 0, 0
	for right, num := range nums {
		sum += num
		for sum >= target {
			if right-left+1 < best {
				best = right - left + 1
			}
			sum -= nums[left]
			left++
		}
	}
	if best == math.MaxInt {
		return 0
	}
	return best
}
