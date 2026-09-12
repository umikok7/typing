function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const queens: number[] = new Array(n).fill(0);
    const cols = new Set<number>();
    const diag1 = new Set<number>();
    const diag2 = new Set<number>();
    const backtrack = (row: number): void => {
        if (row === n) {
            const board: string[] = [];
            for (let i = 0; i < n; i++) {
                const line = new Array(n).fill('.');
                line[queens[i]] = 'Q';
                board.push(line.join(''));
            }
            result.push(board);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row + col) || diag2.has(row - col)) {
                continue;
            }
            queens[row] = col;
            cols.add(col);
            diag1.add(row + col);
            diag2.add(row - col);
            backtrack(row + 1);
            cols.delete(col);
            diag1.delete(row + col);
            diag2.delete(row - col);
        }
    };
    backtrack(0);
    return result;
}
