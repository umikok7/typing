package main

func characterReplacement(s string, k int) int {
	count := make(map[byte]int)
	maxCount, left, best := 0, 0, 0
	for right := 0; right < len(s); right++ {
		count[s[right]]++
		if count[s[right]] > maxCount {
			maxCount = count[s[right]]
		}
		for right-left+1 > maxCount+k {
			count[s[left]]--
			left++
		}
		if right-left+1 > best {
			best = right - left + 1
		}
	}
	return best
}
