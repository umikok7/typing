package main

func numIslands(grid [][]byte) int {
	rows, cols := len(grid), len(grid[0])
	var sink func(i, j int)
	sink = func(i, j int) {
		if i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] != '1' {
			return
		}
		grid[i][j] = '0'
		sink(i+1, j)
		sink(i-1, j)
		sink(i, j+1)
		sink(i, j-1)
	}
	total := 0
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if grid[i][j] == '1' {
				total++
				sink(i, j)
			}
		}
	}
	return total
}
