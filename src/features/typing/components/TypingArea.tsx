import { useEffect, useRef } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

import type { TokenLine } from '@/lib/highlighter';
import { useCodeTokens } from '@/lib/use-code-tokens';

import { getProblem, problems } from '../data/problems';
import { useAppStore } from '../store';

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
  const themeId = useAppStore((s) => s.themeId);
  const input = useAppStore((s) => s.input);
  const setInput = useAppStore((s) => s.setInput);
  const problem = getProblem(problemId) ?? problems[0];
  const referenceHl = useCodeTokens(problem.source, themeId);
  const inputHl = useCodeTokens(input, themeId);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const preRef = useRef<HTMLPreElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, [problem.id]);

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

  function handleScroll() {
    const textarea = textareaRef.current;
    if (textarea === null) {
      return;
    }
    if (preRef.current !== null) {
      preRef.current.scrollTop = textarea.scrollTop;
      preRef.current.scrollLeft = textarea.scrollLeft;
    }
    if (ghostRef.current !== null) {
      ghostRef.current.scrollTop = textarea.scrollTop;
      ghostRef.current.scrollLeft = textarea.scrollLeft;
    }
  }

  let inputContent: ReactNode = null;
  if (input !== '') {
    inputContent =
      inputHl === null ? <PlainLines text={input} /> : <HighlightedLines lines={inputHl.lines} />;
  }

  return (
    <div className='flex flex-1 items-center justify-center overflow-hidden px-6 py-6'>
      <div className='border-border bg-surface relative h-[min(100%,56rem)] w-full max-w-5xl overflow-hidden rounded-xl border'>
        <div
          ref={ghostRef}
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 overflow-hidden opacity-40 select-none'
        >
          <div className='p-8 font-mono text-lg leading-relaxed whitespace-pre'>
            {referenceHl === null ? null : <HighlightedLines lines={referenceHl.lines} />}
          </div>
        </div>
        <pre
          ref={preRef}
          aria-hidden='true'
          className='no-scrollbar text-foreground pointer-events-none absolute inset-0 m-0 overflow-auto p-8 font-mono text-lg leading-relaxed whitespace-pre'
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
          onScroll={handleScroll}
          spellCheck={false}
          autoCapitalize='off'
          autoCorrect='off'
          autoComplete='off'
          className='no-scrollbar caret-accent absolute inset-0 h-full w-full resize-none overflow-auto bg-transparent p-8 font-mono text-lg leading-relaxed whitespace-pre text-transparent outline-none'
        />
      </div>
    </div>
  );
}
