package main

var digitLetters = map[byte]string{
	'2': "abc",
	'3': "def",
	'4': "ghi",
	'5': "jkl",
	'6': "mno",
	'7': "pqrs",
	'8': "tuv",
	'9': "wxyz",
}

func letterCombinations(digits string) []string {
	if len(digits) == 0 {
		return []string{}
	}
	result := []string{}
	var backtrack func(index int, current []byte)
	backtrack = func(index int, current []byte) {
		if index == len(digits) {
			result = append(result, string(current))
			return
		}
		letters := digitLetters[digits[index]]
		for i := 0; i < len(letters); i++ {
			next := append(append([]byte{}, current...), letters[i])
			backtrack(index+1, next)
		}
	}
	backtrack(0, []byte{})
	return result
}
