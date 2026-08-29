package main

func minWindow(s string, t string) string {
	need := make(map[byte]int)
	for i := 0; i < len(t); i++ {
		need[t[i]]++
	}
	have := make(map[byte]int)
	required := len(need)
	formed := 0
	left := 0
	best := ""
	bestLen := 1 << 30
	for right := 0; right < len(s); right++ {
		c := s[right]
		have[c]++
		if need[c] > 0 && have[c] == need[c] {
			formed++
		}
		for formed == required {
			length := right - left + 1
			if length < bestLen {
				bestLen = length
				best = s[left : right+1]
			}
			lc := s[left]
			have[lc]--
			if need[lc] > 0 && have[lc] < need[lc] {
				formed--
			}
			left++
		}
	}
	return best
}
