import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

import { problems } from '../data/problems';
import { useAppStore } from '../store';
import type { Difficulty, Problem } from '../types';
import { DifficultyBadge } from './DifficultyBadge';

const DIFFICULTIES: Difficulty[] = ['Easy', 'Medium', 'Hard'];

export function ProblemPicker() {
  const problemId = useAppStore((s) => s.problemId);
  const pickerOpen = useAppStore((s) => s.pickerOpen);
  const setPickerOpen = useAppStore((s) => s.setPickerOpen);
  const selectProblem = useAppStore((s) => s.selectProblem);

  if (!pickerOpen) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
      onClick={() => {
        setPickerOpen(false);
      }}
    >
      <div
        className='border-border bg-background flex max-h-[70vh] w-[540px] flex-col overflow-hidden rounded-lg border shadow-2xl'
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className='border-border flex items-center justify-between border-b px-4 py-3'>
          <h2 className='text-sm font-semibold'>选择题目 · LeetCode Hot 100</h2>
          <button
            type='button'
            onClick={() => {
              setPickerOpen(false);
            }}
            className='text-muted-foreground hover:bg-surface rounded p-1 transition-colors'
          >
            <X size={16} />
          </button>
        </div>
        <div className='overflow-y-auto p-2'>
          {DIFFICULTIES.map((difficulty) => (
            <div key={difficulty} className='mb-2'>
              <div className='text-muted-foreground px-2 py-1 text-[11px] font-medium uppercase'>
                {difficulty}
              </div>
              {problems
                .filter((problem) => problem.difficulty === difficulty)
                .map((problem) => (
                  <ProblemRow
                    key={problem.id}
                    problem={problem}
                    active={problem.id === problemId}
                    onSelect={selectProblem}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProblemRowProps {
  problem: Problem;
  active: boolean;
  onSelect: (id: string) => void;
}

function ProblemRow({ problem, active, onSelect }: ProblemRowProps) {
  return (
    <button
      type='button'
      onClick={() => {
        onSelect(problem.id);
      }}
      className={cn(
        'flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left text-sm transition-colors',
        active ? 'bg-surface' : 'hover:bg-surface'
      )}
    >
      <span className='text-muted-foreground w-8 shrink-0 text-right tabular-nums'>
        {problem.number}
      </span>
      <span className='flex-1 truncate'>{problem.title}</span>
      <span className='text-muted-foreground shrink-0 text-[11px]'>{problem.topic}</span>
      <DifficultyBadge difficulty={problem.difficulty} />
    </button>
  );
}
