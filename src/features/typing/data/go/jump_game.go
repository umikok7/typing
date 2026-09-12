package main

func canJump(nums []int) bool {
	reach := 0
	for i, num := range nums {
		if i > reach {
			return false
		}
		if i+num > reach {
			reach = i + num
		}
	}
	return true
}
