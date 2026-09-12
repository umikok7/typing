package main

func maxSlidingWindow(nums []int, k int) []int {
	deque := []int{}
	result := []int{}
	for i, num := range nums {
		for len(deque) > 0 && nums[deque[len(deque)-1]] <= num {
			deque = deque[:len(deque)-1]
		}
		deque = append(deque, i)
		if deque[0] <= i-k {
			deque = deque[1:]
		}
		if i >= k-1 {
			result = append(result, nums[deque[0]])
		}
	}
	return result
}
