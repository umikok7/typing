function gameOfLife(board: number[][]): void {
    const dirs: number[][] = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let live = 0;
            for (const d of dirs) {
                const x = i + d[0];
                const y = j + d[1];
                if (x >= 0 && x < board.length && y >= 0 && y < board[i].length && board[x][y] % 2 === 1) {
                    live++;
                }
            }
            if ((board[i][j] === 1 && (live === 2 || live === 3)) || (board[i][j] === 0 && live === 3)) {
                board[i][j] += 2;
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] %= 2;
        }
    }
}
