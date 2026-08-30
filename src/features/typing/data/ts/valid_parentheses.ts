function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
      continue;
    }
    const top = stack.pop();
    if (top !== pairs[c]) {
      return false;
    }
  }
  return stack.length === 0;
}
