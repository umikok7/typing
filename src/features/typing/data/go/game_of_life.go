package main

func gameOfLife(board [][]int) {
	dirs := [8][2]int{{-1, -1}, {-1, 0}, {-1, 1}, {0, -1}, {0, 1}, {1, -1}, {1, 0}, {1, 1}}
	for i, row := range board {
		for j := range row {
			live := 0
			for _, d := range dirs {
				x, y := i+d[0], j+d[1]
				if x >= 0 && x < len(board) && y >= 0 && y < len(row) && board[x][y]%2 == 1 {
					live++
				}
			}
			if (board[i][j] == 1 && (live == 2 || live == 3)) || (board[i][j] == 0 && live == 3) {
				board[i][j] += 2
			}
		}
	}
	for i, row := range board {
		for j := range row {
			board[i][j] %= 2
		}
	}
}
