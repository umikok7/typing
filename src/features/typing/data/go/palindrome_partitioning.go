package main

func partition(s string) [][]string {
	result := [][]string{}
	var backtrack func(start int, current []string)
	backtrack = func(start int, current []string) {
		if start == len(s) {
			part := make([]string, len(current))
			copy(part, current)
			result = append(result, part)
			return
		}
		for end := start + 1; end <= len(s); end++ {
			if isPalindrome(s[start:end]) {
				backtrack(end, append(current, s[start:end]))
			}
		}
	}
	backtrack(0, []string{})
	return result
}

func isPalindrome(s string) bool {
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		if s[i] != s[j] {
			return false
		}
	}
	return true
}
