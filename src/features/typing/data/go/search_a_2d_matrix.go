package main

func searchMatrix(matrix [][]int, target int) bool {
	m, n := len(matrix), len(matrix[0])
	left, right := 0, m*n
	for left < right {
		mid := left + (right-left)/2
		val := matrix[mid/n][mid%n]
		if val < target {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return left < m*n && matrix[left/n][left%n] == target
}
