package main

func orangesRotting(grid [][]int) int {
	rows, cols := len(grid), len(grid[0])
	queue := [][]int{}
	fresh := 0
	for i, row := range grid {
		for j, val := range row {
			if val == 2 {
				queue = append(queue, []int{i, j})
			} else if val == 1 {
				fresh++
			}
		}
	}
	minutes := 0
	for len(queue) > 0 && fresh > 0 {
		minutes++
		size := len(queue)
		for i := 0; i < size; i++ {
			cell := queue[0]
			queue = queue[1:]
			for _, d := range [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}} {
				x, y := cell[0]+d[0], cell[1]+d[1]
				if x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] == 1 {
					grid[x][y] = 2
					fresh--
					queue = append(queue, []int{x, y})
				}
			}
		}
	}
	if fresh > 0 {
		return -1
	}
	return minutes
}
