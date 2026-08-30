import { describe, expect, it } from 'vitest';

import { isCompleted } from '../is-completed';

describe('isCompleted', () => {
  it('returns true for an empty reference', () => {
    expect(isCompleted('', '')).toBe(true);
  });

  it('treats a fully typed solution as complete', () => {
    const source = 'func twoSum() {\n    return 1\n}\n';
    expect(isCompleted(source, source)).toBe(true);
  });

  it('ignores whitespace differences (tabs/spaces/blank lines/trailing newline)', () => {
    const source = 'func twoSum() {\n    return 1\n}\n';
    const input = 'func twoSum() {\n\treturn 1\n}';
    expect(isCompleted(input, source)).toBe(true);
  });

  it('returns false when only part of the content is typed', () => {
    const source = 'func twoSum() {\n    seen := make(map[int]int)\n    return nil\n}\n';
    expect(isCompleted('func twoSum() {', source)).toBe(false);
  });

  it('returns false when too few lines are typed', () => {
    const source = 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk\nl\nm\n';
    expect(isCompleted('a\nb\nc', source)).toBe(false);
  });

  it('tolerates a small typo (same line count, near-full content)', () => {
    const source = 'func twoSum() {\n    seen := make(map[int]int)\n    return nil\n}\n';
    const input = 'func twoSum() {\n    seen := make(map[int]int)\n    return Xil\n}\n';
    expect(isCompleted(input, source)).toBe(true);
  });

  it('completes a TypeScript solution at its own line count', () => {
    const tsSource = 'function twoSum(nums: number[], target: number): number[] {\n  return [];\n}\n';
    const tsInput = 'function twoSum(nums: number[], target: number): number[] {\n  return [];\n}';
    expect(isCompleted(tsInput, tsSource)).toBe(true);
  });
});
