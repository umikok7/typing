package main

func generateParenthesis(n int) []string {
	result := []string{}
	var backtrack func(current []byte, open, close int)
	backtrack = func(current []byte, open, close int) {
		if len(current) == 2*n {
			result = append(result, string(current))
			return
		}
		if open < n {
			next := append(append([]byte{}, current...), '(')
			backtrack(next, open+1, close)
		}
		if close < open {
			next := append(append([]byte{}, current...), ')')
			backtrack(next, open, close+1)
		}
	}
	backtrack([]byte{}, 0, 0)
	return result
}
