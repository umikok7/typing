function numIslands(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const sink = (i: number, j: number): void => {
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== '1') {
            return;
        }
        grid[i][j] = '0';
        sink(i + 1, j);
        sink(i - 1, j);
        sink(i, j + 1);
        sink(i, j - 1);
    };
    let total = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                total++;
                sink(i, j);
            }
        }
    }
    return total;
}
