package main

func setZeroes(matrix [][]int) {
	rows := make(map[int]bool)
	cols := make(map[int]bool)
	for i, row := range matrix {
		for j, val := range row {
			if val == 0 {
				rows[i] = true
				cols[j] = true
			}
		}
	}
	for i, row := range matrix {
		for j := range row {
			if rows[i] || cols[j] {
				matrix[i][j] = 0
			}
		}
	}
}
