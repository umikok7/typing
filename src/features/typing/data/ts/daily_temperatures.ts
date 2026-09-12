function dailyTemperatures(temperatures: number[]): number[] {
    const result = new Array(temperatures.length).fill(0);
    const stack: number[] = [];
    for (let i = 0; i < temperatures.length; i++) {
        const t = temperatures[i];
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < t) {
            const idx = stack.pop()!;
            result[idx] = i - idx;
        }
        stack.push(i);
    }
    return result;
}
