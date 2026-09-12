import { describe, expect, it } from 'vitest';

import { applyBackspace, applyChar, applyEnter, applyStartNewLine } from '../editor-behavior';

describe('applyChar', () => {
  it('auto-pairs an opener with the caret in between', () => {
    const result = applyChar('a()b', 2, 2, '{');
    expect(result).toEqual({ text: 'a({})b', caret: 3 });
  });

  it('types over a closer instead of duplicating it', () => {
    const result = applyChar('a()b', 2, 2, ')');
    expect(result).toEqual({ text: 'a()b', caret: 3 });
  });

  it('types over a closing quote', () => {
    const result = applyChar('s := "x"', 7, 7, '"');
    expect(result).toEqual({ text: 's := "x"', caret: 8 });
  });

  it('wraps the selection with a pair', () => {
    const result = applyChar('ab', 1, 2, '(');
    expect(result).toEqual({ text: 'a(b)', caret: 2, caretEnd: 3 });
  });

  it('auto-pairs quotes but not right before a word char', () => {
    expect(applyChar('a ', 1, 1, '"')).toEqual({ text: 'a"" ', caret: 2 });
    expect(applyChar('abc', 1, 1, "'")).toBeNull();
  });

  it('returns null for plain characters', () => {
    expect(applyChar('ab', 1, 1, 'x')).toBeNull();
  });
});

describe('applyEnter', () => {
  it('inherits the current line indent', () => {
    const input = 'func f() {\n    x := 1';
    const result = applyEnter(input, input.length, input.length, '\t');
    expect(result).toEqual({ text: input + '\n    ', caret: input.length + 5 });
  });

  it('splits an empty pair with an extra indent level', () => {
    const input = 'f() {}';
    const result = applyEnter(input, 5, 5, '    ');
    expect(result).toEqual({ text: 'f() {\n    \n}', caret: 10 });
  });

  it('indents after an opener without a matching closer', () => {
    const input = 'f() {';
    const result = applyEnter(input, 5, 5, '    ');
    expect(result).toEqual({ text: 'f() {\n    ', caret: 10 });
  });

  it('uses the inherited indent when between plain chars', () => {
    const result = applyEnter('    x := 1', 4, 4, '\t');
    expect(result).toEqual({ text: '    \n    x := 1', caret: 9 });
  });
});

describe('applyStartNewLine', () => {
  it('starts a new line below the current one, keeping the rest of the line in place', () => {
    const input = 'if ok {\n    return a, b';
    const result = applyStartNewLine(input, 15);
    expect(result).toEqual({ text: 'if ok {\n    return a, b\n    ', caret: 28 });
  });

  it('keeps text after the caret on the original line', () => {
    const result = applyStartNewLine('abc', 1);
    expect(result).toEqual({ text: 'abc\n', caret: 4 });
  });

  it('appends a newline with inherited indent at the last line', () => {
    const result = applyStartNewLine('    x := 1', 6);
    expect(result).toEqual({ text: '    x := 1\n    ', caret: 15 });
  });
});

describe('applyBackspace', () => {
  it('deletes an empty pair as a whole', () => {
    const result = applyBackspace('a()b', 2, 2);
    expect(result).toEqual({ text: 'ab', caret: 1 });
  });

  it('returns null for regular backspace', () => {
    expect(applyBackspace('ab', 1, 1)).toBeNull();
  });
});
