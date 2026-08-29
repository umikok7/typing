package main

func climbStairs(n int) int {
	if n <= 2 {
		return n
	}
	prev, cur := 1, 2
	for i := 3; i <= n; i++ {
		prev, cur = cur, prev+cur
	}
	return cur
}
