function orangesRotting(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue: number[][] = [];
    let fresh = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    let minutes = 0;
    while (queue.length > 0 && fresh > 0) {
        minutes++;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const cell = queue.shift()!;
            for (const d of dirs) {
                const x = cell[0] + d[0];
                const y = cell[1] + d[1];
                if (x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] === 1) {
                    grid[x][y] = 2;
                    fresh--;
                    queue.push([x, y]);
                }
            }
        }
    }
    return fresh > 0 ? -1 : minutes;
}
