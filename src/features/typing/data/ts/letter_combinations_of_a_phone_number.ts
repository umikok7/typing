const digitLetters: Record<string, string> = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }
  const result: string[] = [];
  const backtrack = (index: number, current: string): void => {
    if (index === digits.length) {
      result.push(current);
      return;
    }
    const letters = digitLetters[digits[index]] ?? '';
    for (const ch of letters) {
      backtrack(index + 1, current + ch);
    }
  };
  backtrack(0, '');
  return result;
}
