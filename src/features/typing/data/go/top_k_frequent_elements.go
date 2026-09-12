package main

func topKFrequent(nums []int, k int) []int {
	count := make(map[int]int)
	for _, num := range nums {
		count[num]++
	}
	buckets := make([][]int, len(nums)+1)
	for num, freq := range count {
		buckets[freq] = append(buckets[freq], num)
	}
	result := []int{}
	for i := len(buckets) - 1; i >= 0 && len(result) < k; i-- {
		result = append(result, buckets[i]...)
	}
	return result
}
