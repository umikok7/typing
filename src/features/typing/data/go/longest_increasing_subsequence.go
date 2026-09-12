package main

func lengthOfLIS(nums []int) int {
	tails := []int{}
	for _, num := range nums {
		left, right := 0, len(tails)
		for left < right {
			mid := left + (right-left)/2
			if tails[mid] < num {
				left = mid + 1
			} else {
				right = mid
			}
		}
		if left == len(tails) {
			tails = append(tails, num)
		} else {
			tails[left] = num
		}
	}
	return len(tails)
}
