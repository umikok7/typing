import { useEffect, useRef } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

import type { TokenLine } from '@/lib/highlighter';
import { useSyncCodeTokens } from '@/lib/use-code-tokens';

import { getProblem, problems } from '../data/problems';
import { useAppStore } from '../store';

const PAD = 32; // p-8 = 2rem 上下内边距
const LINE_HEIGHT = 29; // 与 text-lg + leading-[29px] 保持一致

function computeContentHeight(referenceLineCount: number, input: string): number {
  const inputLineCount = input === '' ? 0 : input.split('\n').length;
  return Math.max(referenceLineCount, inputLineCount, 1) * LINE_HEIGHT + PAD * 2;
}

function scrollCaretIntoView(
  wrapper: HTMLDivElement,
  textarea: HTMLTextAreaElement,
  input: string
): void {
  const caretIndex = textarea.selectionStart;
  const lineIndex = input.slice(0, caretIndex).split('\n').length - 1;
  const caretTop = lineIndex * LINE_HEIGHT;
  const viewportTop = wrapper.scrollTop;
  const viewportHeight = wrapper.clientHeight;
  if (caretTop < viewportTop) {
    wrapper.scrollTop = caretTop;
  } else if (caretTop + LINE_HEIGHT > viewportTop + viewportHeight) {
    wrapper.scrollTop = caretTop + LINE_HEIGHT - viewportHeight;
  }
}

function LineSpans({ line }: { line: TokenLine }) {
  const spans = [];
  let i = 0;
  while (i < line.text.length) {
    const color = line.colors[i] ?? '';
    let j = i + 1;
    while (j < line.text.length && line.colors[j] === color) {
      j++;
    }
    spans.push(
      <span key={i} style={{ color }}>
        {line.text.slice(i, j)}
      </span>
    );
    i = j;
  }
  return <>{spans}</>;
}

function HighlightedLines({ lines }: { lines: TokenLine[] }) {
  return (
    <>
      {lines.map((line) => (
        <div key={line.start} className='whitespace-pre'>
          <LineSpans line={line} />
        </div>
      ))}
    </>
  );
}

function PlainLines({ text }: { text: string }) {
  const lines = text.split('\n');
  const nodes = [];
  let offset = 0;
  for (const line of lines) {
    nodes.push(
      <div key={offset} className='whitespace-pre'>
        {line}
      </div>
    );
    offset += line.length + 1;
  }
  return <>{nodes}</>;
}

export function TypingArea() {
  const problemId = useAppStore((s) => s.problemId);
  const language = useAppStore((s) => s.language);
  const themeId = useAppStore((s) => s.themeId);
  const input = useAppStore((s) => s.input);
  const setInput = useAppStore((s) => s.setInput);
  const problem = getProblem(problemId) ?? problems[0];
  const source = problem.sources[language];
  const referenceHl = useSyncCodeTokens(source, language, themeId);
  const inputHl = useSyncCodeTokens(input, language, themeId);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    textareaRef.current?.focus();
    if (wrapperRef.current !== null) {
      wrapperRef.current.scrollTop = 0;
    }
  }, [problem.id, language]);

  // 跟随光标：敲到可视区外时，让滚动容器把光标行滚回视野
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const textarea = textareaRef.current;
    if (wrapper === null || textarea === null) {
      return;
    }
    scrollCaretIntoView(wrapper, textarea, input);
  }, [input]);

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== 'Tab') {
      return;
    }
    event.preventDefault();
    const element = event.currentTarget;
    const start = element.selectionStart;
    const end = element.selectionEnd;
    const next = input.slice(0, start) + '\t' + input.slice(end);
    setInput(next);
    requestAnimationFrame(() => {
      element.selectionStart = start + 1;
      element.selectionEnd = start + 1;
    });
  }

  let inputContent: ReactNode = null;
  if (input !== '') {
    inputContent =
      inputHl === null ? <PlainLines text={input} /> : <HighlightedLines lines={inputHl.lines} />;
  }

  // 内容高度取「参考代码」与「已输入」的较大者，保证长题解也能整体下滚
  const contentHeight = computeContentHeight(referenceHl?.lines.length ?? 0, input);

  return (
    <div className='flex flex-1 items-center justify-center overflow-hidden px-6 py-6'>
      <div className='border-border bg-surface relative h-[min(100%,56rem)] w-full max-w-5xl overflow-hidden rounded-xl border'>
        <div ref={wrapperRef} className='no-scrollbar absolute inset-0 overflow-auto'>
          <div className='relative min-h-full' style={{ height: contentHeight }}>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute inset-0 select-none overflow-hidden opacity-40'
            >
              <div className='p-8 font-mono text-lg leading-[29px] whitespace-pre [tab-size:4]'>
                {referenceHl === null ? null : <HighlightedLines lines={referenceHl.lines} />}
              </div>
            </div>
            <pre
              aria-hidden='true'
              className='text-foreground pointer-events-none absolute inset-0 m-0 overflow-hidden p-8 font-mono text-lg leading-[29px] whitespace-pre [tab-size:4]'
            >
              {inputContent}
            </pre>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoCapitalize='off'
              autoCorrect='off'
              autoComplete='off'
              className='caret-accent absolute inset-0 h-full w-full resize-none overflow-hidden bg-transparent p-8 font-mono text-lg leading-[29px] whitespace-pre [tab-size:4] text-transparent outline-none'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
