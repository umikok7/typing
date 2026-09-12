function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const backtrack = (start: number, remaining: number, current: number[]): void => {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) {
                continue;
            }
            current.push(candidates[i]);
            backtrack(i, remaining - candidates[i], current);
            current.pop();
        }
    };
    backtrack(0, target, []);
    return result;
}
