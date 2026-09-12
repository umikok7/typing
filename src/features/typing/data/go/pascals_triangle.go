package main

func generate(numRows int) [][]int {
	result := [][]int{}
	for i := 0; i < numRows; i++ {
		row := make([]int, i+1)
		row[0], row[i] = 1, 1
		for j := 1; j < i; j++ {
			row[j] = result[i-1][j-1] + result[i-1][j]
		}
		result = append(result, row)
	}
	return result
}
