package main

func isValid(s string) bool {
	stack := make([]byte, 0, len(s))
	pairs := map[byte]byte{
		')': '(',
		']': '[',
		'}': '{',
	}
	for i := 0; i < len(s); i++ {
		c := s[i]
		if c == '(' || c == '[' || c == '{' {
			stack = append(stack, c)
			continue
		}
		n := len(stack)
		if n == 0 || stack[n-1] != pairs[c] {
			return false
		}
		stack = stack[:n-1]
	}
	return len(stack) == 0
}
