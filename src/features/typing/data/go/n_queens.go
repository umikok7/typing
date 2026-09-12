package main

func solveNQueens(n int) [][]string {
	result := [][]string{}
	queens := make([]int, n)
	cols := make(map[int]bool)
	diag1 := make(map[int]bool)
	diag2 := make(map[int]bool)
	var backtrack func(row int)
	backtrack = func(row int) {
		if row == n {
			board := make([]string, n)
			for i := 0; i < n; i++ {
				line := make([]byte, n)
				for j := 0; j < n; j++ {
					line[j] = '.'
				}
				line[queens[i]] = 'Q'
				board[i] = string(line)
			}
			result = append(result, board)
			return
		}
		for col := 0; col < n; col++ {
			if cols[col] || diag1[row+col] || diag2[row-col] {
				continue
			}
			queens[row] = col
			cols[col] = true
			diag1[row+col] = true
			diag2[row-col] = true
			backtrack(row + 1)
			cols[col] = false
			diag1[row+col] = false
			diag2[row-col] = false
		}
	}
	backtrack(0)
	return result
}
