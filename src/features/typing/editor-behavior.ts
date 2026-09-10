export interface EditResult {
  text: string;
  caret: number;
  caretEnd?: number;
}

const PAIRS: Record<string, string> = {
  '(': ')',
  '[': ']',
  '{': '}',
  '"': '"',
  "'": "'"
};

const CLOSERS = new Set([')', ']', '}']);
const QUOTES = new Set(['"', "'"]);
const OPENERS = new Set(['(', '[', '{']);

function isWordChar(ch: string | undefined): boolean {
  return ch !== undefined && /[A-Za-z0-9_]/.test(ch);
}

/**
 * VS Code 式字符输入行为：
 * - 光标前正好是同款闭符号/引号 → 跳过它（type-over），不重复插入
 * - 输入开符号且有选区 → 用配对包裹选区
 * - 输入开符号 → 自动补右半，光标居中（引号在紧邻单词字符时不配对，避免 don't 场景）
 * - 其余字符返回 null，走浏览器默认插入
 */
export function applyChar(input: string, start: number, end: number, char: string): EditResult | null {
  if (start === end && (CLOSERS.has(char) || QUOTES.has(char)) && input[start] === char) {
    return { text: input, caret: start + 1 };
  }

  const closer = PAIRS[char];
  if (closer === undefined) {
    return null;
  }

  if (start !== end) {
    const selected = input.slice(start, end);
    return {
      text: input.slice(0, start) + char + selected + closer + input.slice(end),
      caret: start + 1,
      caretEnd: start + 1 + selected.length
    };
  }

  if (QUOTES.has(char) && isWordChar(input[start])) {
    return null;
  }

  return {
    text: input.slice(0, start) + char + closer + input.slice(end),
    caret: start + 1
  };
}

/**
 * VS Code 式回车行为：
 * - 继承当前行缩进
 * - 括号内回车：中间行多一层缩进，闭符号落到新行
 */
export function applyEnter(input: string, start: number, end: number, indentUnit: string): EditResult {
  const lineStart = input.lastIndexOf('\n', start - 1) + 1;
  const line = input.slice(lineStart, start);
  const baseIndent = /^[ \t]*/.exec(line)?.[0] ?? '';
  const charBefore = start > 0 ? (input[start - 1] ?? '') : '';
  const charAfter = input[start] ?? '';
  const opensBlock = OPENERS.has(charBefore);

  if (start !== end) {
    return {
      text: input.slice(0, start) + '\n' + baseIndent + input.slice(end),
      caret: start + 1 + baseIndent.length
    };
  }

  if (opensBlock && PAIRS[charBefore] === charAfter) {
    const inner = baseIndent + indentUnit;
    return {
      text: input.slice(0, start) + '\n' + inner + '\n' + baseIndent + input.slice(end),
      caret: start + 1 + inner.length
    };
  }

  if (opensBlock) {
    return {
      text: input.slice(0, start) + '\n' + baseIndent + indentUnit + input.slice(end),
      caret: start + 1 + baseIndent.length + indentUnit.length
    };
  }

  return {
    text: input.slice(0, start) + '\n' + baseIndent + input.slice(end),
    caret: start + 1 + baseIndent.length
  };
}

/**
 * VS Code 式退格行为：光标位于空配对中间（如 ()）时整对删除；
 * 其余情况返回 null，走浏览器默认删除。
 */
export function applyBackspace(input: string, start: number, end: number): EditResult | null {
  if (start !== end || start === 0) {
    return null;
  }
  const before = input[start - 1];
  const after = input[start];
  if (before !== undefined && after !== undefined && PAIRS[before] === after) {
    return {
      text: input.slice(0, start - 1) + input.slice(start + 1),
      caret: start - 1
    };
  }
  return null;
}
