package main

func maxProduct(nums []int) int {
	best, maxP, minP := nums[0], nums[0], nums[0]
	for _, num := range nums[1:] {
		if num < 0 {
			maxP, minP = minP, maxP
		}
		maxP = max(num, maxP*num)
		minP = min(num, minP*num)
		if maxP > best {
			best = maxP
		}
	}
	return best
}
