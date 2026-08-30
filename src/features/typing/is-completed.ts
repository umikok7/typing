const WHITESPACE = /\s+/g;
const LINE_TOLERANCE = 1; // 允许比参考少一行（例如末尾换行没敲）
const CONTENT_RATIO = 0.9;

/**
 * 判断输入是否「基本敲完了」参考代码，比「input.length >= source.length」更稳：
 * - **按行数**判定主体：同一道题的 Go/TS 题解行数相当（TS 往往更少），不会因类型注解更长而要求多敲
 * - **忽略空白**比较内容量：缩进 tab/空格、空行、末尾换行都不影响，避免因格式差异多敲或少敲
 * - 内容量达到参考的 90% 即可：容忍少量笔误/缺字，不会因为差一个字符就不触发
 */
export function isCompleted(input: string, source: string): boolean {
  const sourceLines = source.split('\n').length;
  if (sourceLines === 0) {
    return true;
  }
  const inputLines = input.split('\n').length;
  if (inputLines < sourceLines - LINE_TOLERANCE) {
    return false;
  }
  const sourceContent = source.replace(WHITESPACE, '');
  if (sourceContent.length === 0) {
    return true;
  }
  const inputContent = input.replace(WHITESPACE, '');
  return inputContent.length >= sourceContent.length * CONTENT_RATIO;
}
