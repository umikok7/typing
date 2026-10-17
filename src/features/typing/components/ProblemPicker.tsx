import { Search, X } from 'lucide-react';
import { useState } from 'react';

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
  const [query, setQuery] = useState('');

  if (!pickerOpen) {
    return null;
  }

  const keyword = query.trim().toLowerCase();
  const visible = keyword
    ? problems.filter((problem) => problem.title.toLowerCase().includes(keyword))
    : problems;

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
        <div className='border-border border-b px-3 py-2'>
          <div className='bg-surface focus-within:border-accent flex items-center gap-2 rounded-md border border-transparent px-2 py-1.5 transition-colors'>
            <Search size={14} className='text-muted-foreground shrink-0' />
            <input
              type='text'
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              placeholder='搜索题目标题…'
              className='placeholder:text-muted-foreground w-full bg-transparent text-sm outline-none'
            />
            {query && (
              <button
                type='button'
                onClick={() => {
                  setQuery('');
                }}
                className='text-muted-foreground hover:bg-background rounded p-0.5 transition-colors'
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>
        <div className='overflow-y-auto p-2'>
          {DIFFICULTIES.map((difficulty) => {
            const group = visible.filter((problem) => problem.difficulty === difficulty);
            if (group.length === 0) {
              return null;
            }
            return (
              <div key={difficulty} className='mb-2'>
                <div className='text-muted-foreground px-2 py-1 text-[11px] font-medium uppercase'>
                  {difficulty}
                </div>
                {group.map((problem) => (
                  <ProblemRow
                    key={problem.id}
                    problem={problem}
                    active={problem.id === problemId}
                    onSelect={selectProblem}
                  />
                ))}
              </div>
            );
          })}
          {visible.length === 0 && (
            <div className='text-muted-foreground py-8 text-center text-sm'>
              没有匹配「{query.trim()}」的题目
            </div>
          )}
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
