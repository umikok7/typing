package main

func subarraySum(nums []int, k int) int {
	count := make(map[int]int)
	count[0] = 1
	presum, total := 0, 0
	for _, num := range nums {
		presum += num
		total += count[presum-k]
		count[presum]++
	}
	return total
}
