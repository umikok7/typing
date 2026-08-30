import goGrammar from '@shikijs/langs/go';
import tsGrammar from '@shikijs/langs/typescript';
import { createHighlighterCore, createJavaScriptRegexEngine, type HighlighterCore } from 'shiki';

import type { Language } from '@/types/language';

import { editorThemes } from './themes';

const SHIKI_LANG: Record<Language, string> = { go: 'go', ts: 'typescript' };

export interface TokenLine {
  start: number;
  text: string;
  colors: string[];
  fonts: number[];
}

export interface TokenizedCode {
  lines: TokenLine[];
  bg: string;
  fg: string;
}

const DEFAULT_FG = '#d4d4d4';

let highlighter: HighlighterCore | null = null;
let highlighterPromise: Promise<HighlighterCore> | null = null;

export function getHighlighter(): Promise<HighlighterCore> {
  highlighterPromise ??= createHighlighterCore({
    langs: [goGrammar, tsGrammar],
    themes: editorThemes.map((theme) => theme.raw),
    engine: createJavaScriptRegexEngine({ target: 'auto' })
  }).then((instance) => {
    highlighter = instance;
    return instance;
  });
  return highlighterPromise;
}

function tokenizeLines(
  instance: HighlighterCore,
  source: string,
  language: Language,
  themeId: string
): TokenizedCode {
  const tokenLines = instance.codeToTokensBase(source, {
    lang: SHIKI_LANG[language],
    theme: themeId
  });
  const theme = editorThemes.find((t) => t.id === themeId);
  const fg = theme?.fg ?? DEFAULT_FG;
  const bg = theme?.bg ?? DEFAULT_FG;

  let offset = 0;
  const lines: TokenLine[] = tokenLines.map((tokens) => {
    let text = '';
    const colors: string[] = [];
    const fonts: number[] = [];
    for (const token of tokens) {
      for (const ch of token.content) {
        text += ch;
        colors.push(token.color ?? fg);
        fonts.push(token.fontStyle ?? 0);
      }
    }
    const line: TokenLine = { start: offset, text, colors, fonts };
    offset += text.length + 1;
    return line;
  });

  return { lines, bg, fg };
}

const cache = new Map<string, TokenizedCode>();

export function tokenizeCodeSync(
  source: string,
  language: Language,
  themeId: string
): TokenizedCode | null {
  if (highlighter === null) {
    return null;
  }
  const key = JSON.stringify([themeId, language, source]);
  const hit = cache.get(key);
  if (hit !== undefined) {
    return hit;
  }
  const code = tokenizeLines(highlighter, source, language, themeId);
  cache.set(key, code);
  return code;
}

export async function tokenizeCode(
  source: string,
  language: Language,
  themeId: string
): Promise<TokenizedCode> {
  await getHighlighter();
  const code = tokenizeCodeSync(source, language, themeId);
  if (code === null) {
    return { lines: [], bg: DEFAULT_FG, fg: DEFAULT_FG };
  }
  return code;
}
