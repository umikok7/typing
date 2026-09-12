package main

func rob(nums []int) int {
	prev, cur := 0, 0
	for _, num := range nums {
		prev, cur = cur, max(cur, prev+num)
	}
	return cur
}
