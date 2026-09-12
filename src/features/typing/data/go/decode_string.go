package main

func decodeString(s string) string {
	countStack := []int{}
	stringStack := []string{}
	current := ""
	count := 0
	for i := 0; i < len(s); i++ {
		ch := s[i]
		if ch >= '0' && ch <= '9' {
			count = count*10 + int(ch-'0')
		} else if ch == '[' {
			countStack = append(countStack, count)
			stringStack = append(stringStack, current)
			current = ""
			count = 0
		} else if ch == ']' {
			repeat := countStack[len(countStack)-1]
			countStack = countStack[:len(countStack)-1]
			prev := stringStack[len(stringStack)-1]
			stringStack = stringStack[:len(stringStack)-1]
			for j := 0; j < repeat; j++ {
				prev += current
			}
			current = prev
		} else {
			current += string(ch)
		}
	}
	return current
}
