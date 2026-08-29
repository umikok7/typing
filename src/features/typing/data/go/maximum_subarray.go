package main

func maxSubArray(nums []int) int {
	best := nums[0]
	sum := 0
	for _, num := range nums {
		if sum < 0 {
			sum = 0
		}
		sum += num
		if sum > best {
			best = sum
		}
	}
	return best
}
