package main

func spiralOrder(matrix [][]int) []int {
	top, bottom := 0, len(matrix)-1
	left, right := 0, len(matrix[0])-1
	result := []int{}
	for top <= bottom && left <= right {
		for j := left; j <= right; j++ {
			result = append(result, matrix[top][j])
		}
		for i := top + 1; i <= bottom; i++ {
			result = append(result, matrix[i][right])
		}
		if top < bottom {
			for j := right - 1; j >= left; j-- {
				result = append(result, matrix[bottom][j])
			}
		}
		if left < right {
			for i := bottom - 1; i > top; i-- {
				result = append(result, matrix[i][left])
			}
		}
		top++
		bottom--
		left++
		right--
	}
	return result
}
