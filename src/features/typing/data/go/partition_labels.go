package main

func partitionLabels(s string) []int {
	last := make(map[byte]int)
	for i := 0; i < len(s); i++ {
		last[s[i]] = i
	}
	result := []int{}
	start, end := 0, 0
	for i := 0; i < len(s); i++ {
		if last[s[i]] > end {
			end = last[s[i]]
		}
		if i == end {
			result = append(result, i-start+1)
			start = i + 1
		}
	}
	return result
}
