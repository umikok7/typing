function decodeString(s: string): string {
    const countStack: number[] = [];
    const stringStack: string[] = [];
    let current = "";
    let count = 0;
    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
            count = count * 10 + Number(ch);
        } else if (ch === '[') {
            countStack.push(count);
            stringStack.push(current);
            current = "";
            count = 0;
        } else if (ch === ']') {
            const repeat = countStack.pop()!;
            const prev = stringStack.pop()!;
            let combined = prev;
            for (let j = 0; j < repeat; j++) {
                combined += current;
            }
            current = combined;
        } else {
            current += ch;
        }
    }
    return current;
}
