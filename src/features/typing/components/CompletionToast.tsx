import { useState } from 'react';

import { ArrowRight, CheckCircle2, RotateCcw, X } from 'lucide-react';

import { getProblem, problems } from '../data/problems';
import { isCompleted } from '../is-completed';
import { useAppStore } from '../store';

export function CompletionToast() {
  const problemId = useAppStore((s) => s.problemId);
  const language = useAppStore((s) => s.language);
  const input = useAppStore((s) => s.input);
  const selectProblem = useAppStore((s) => s.selectProblem);
  const reset = useAppStore((s) => s.reset);
  const [dismissedFor, setDismissedFor] = useState<string | null>(null);
  const problem = getProblem(problemId) ?? problems[0];
  const source = problem.sources[language];

  const finished = isCompleted(input, source);
  if (!finished || dismissedFor === problemId) {
    return null;
  }

  const index = problems.findIndex((p) => p.id === problem.id);
  const nextId = problems[(index + 1) % problems.length]?.id ?? problem.id;

  return (
    <div className='fixed bottom-10 left-1/2 z-50 -translate-x-1/2'>
      <div className='border-border bg-background flex items-center gap-2 rounded-lg border px-4 py-2.5 shadow-lg'>
        <CheckCircle2 size={18} className='text-easy' />
        <span className='mr-1 text-sm font-medium'>完成</span>
        <button
          type='button'
          onClick={() => {
            selectProblem(nextId);
          }}
          className='bg-accent/15 text-accent hover:bg-accent/25 flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors'
        >
          下一题 <ArrowRight size={12} />
        </button>
        <button
          type='button'
          onClick={reset}
          className='text-muted-foreground hover:bg-surface flex items-center gap-1 rounded-md px-2.5 py-1 text-xs transition-colors'
        >
          <RotateCcw size={12} /> 重来
        </button>
        <button
          type='button'
          onClick={() => {
            setDismissedFor(problemId);
          }}
          className='text-muted-foreground hover:text-foreground transition-colors'
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
