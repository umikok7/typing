package main

func longestConsecutive(nums []int) int {
	set := make(map[int]bool, len(nums))
	for _, num := range nums {
		set[num] = true
	}
	best := 0
	for num := range set {
		if set[num-1] {
			continue
		}
		length := 1
		for set[num+length] {
			length++
		}
		if length > best {
			best = length
		}
	}
	return best
}
