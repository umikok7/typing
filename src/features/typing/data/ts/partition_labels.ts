function partitionLabels(s: string): number[] {
    const last = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        last.set(s[i], i);
    }
    const result: number[] = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        if (last.get(s[i])! > end) {
            end = last.get(s[i])!;
        }
        if (i === end) {
            result.push(i - start + 1);
            start = i + 1;
        }
    }
    return result;
}
