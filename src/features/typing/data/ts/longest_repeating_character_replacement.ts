function characterReplacement(s: string, k: number): number {
    const count = new Map<string, number>();
    let maxCount = 0;
    let left = 0;
    let best = 0;
    for (let right = 0; right < s.length; right++) {
        const next = (count.get(s[right]) ?? 0) + 1;
        count.set(s[right], next);
        if (next > maxCount) {
            maxCount = next;
        }
        while (right - left + 1 > maxCount + k) {
            count.set(s[left], count.get(s[left])! - 1);
            left++;
        }
        if (right - left + 1 > best) {
            best = right - left + 1;
        }
    }
    return best;
}
