function partition(s: string): string[][] {
    const result: string[][] = [];
    const backtrack = (start: number, current: string[]): void => {
        if (start === s.length) {
            result.push([...current]);
            return;
        }
        for (let end = start + 1; end <= s.length; end++) {
            const piece = s.slice(start, end);
            if (isPalindrome(piece)) {
                current.push(piece);
                backtrack(end, current);
                current.pop();
            }
        }
    };
    backtrack(0, []);
    return result;
}

function isPalindrome(s: string): boolean {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
}
