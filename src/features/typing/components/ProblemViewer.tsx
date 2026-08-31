import { useEffect } from 'react';

import { X } from 'lucide-react';

import { getProblem, problems } from '../data/problems';
import { useAppStore } from '../store';
import { DifficultyBadge } from './DifficultyBadge';

export function ProblemViewer() {
  const problemId = useAppStore((s) => s.problemId);
  const viewerOpen = useAppStore((s) => s.viewerOpen);
  const setViewerOpen = useAppStore((s) => s.setViewerOpen);
  const problem = getProblem(problemId) ?? problems[0];
  const { statement, examples, constraints } = problem.description;

  useEffect(() => {
    if (!viewerOpen) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setViewerOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [viewerOpen, setViewerOpen]);

  if (!viewerOpen) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
      onClick={() => {
        setViewerOpen(false);
      }}
    >
      <div
        className='border-border bg-background flex max-h-[80vh] w-[680px] max-w-[92vw] flex-col overflow-hidden rounded-lg border shadow-2xl'
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className='border-border flex items-center justify-between border-b px-4 py-3'>
          <div className='flex min-w-0 items-center gap-2'>
            <h2 className='truncate text-sm font-semibold'>
              {problem.number}. {problem.title}
            </h2>
            <DifficultyBadge difficulty={problem.difficulty} />
            <span className='shrink-0 text-xs text-muted-foreground'>{problem.topic}</span>
          </div>
          <button
            type='button'
            onClick={() => {
              setViewerOpen(false);
            }}
            className='text-muted-foreground hover:bg-surface rounded p-1 transition-colors'
          >
            <X size={16} />
          </button>
        </div>
        <div className='overflow-y-auto p-5 [overflow-wrap:anywhere]'>
          <p className='text-sm leading-relaxed'>{statement}</p>

          <h3 className='text-muted-foreground mt-4 mb-2 text-xs font-semibold uppercase'>示例</h3>
          <div className='space-y-2'>
            {examples.map((example) => (
              <div
                key={`${example.input}->${example.output}`}
                className='bg-surface rounded-md px-3 py-2.5 font-mono text-[13px] leading-relaxed'
              >
                <div>
                  <span className='text-muted-foreground'>输入: </span>
                  {example.input}
                </div>
                <div>
                  <span className='text-muted-foreground'>输出: </span>
                  {example.output}
                </div>
                {example.explanation !== undefined && (
                  <div>
                    <span className='text-muted-foreground'>解释: </span>
                    {example.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          <h3 className='text-muted-foreground mt-4 mb-2 text-xs font-semibold uppercase'>约束</h3>
          <ul className='text-muted-foreground list-disc space-y-1 pl-5 text-[13px] leading-relaxed'>
            {constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
