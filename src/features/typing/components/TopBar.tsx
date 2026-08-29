import { ChevronDown, Palette } from 'lucide-react';

import { editorThemes } from '@/lib/themes';

import { getProblem, problems } from '../data/problems';
import { useAppStore } from '../store';
import { DifficultyBadge } from './DifficultyBadge';

export function TopBar() {
  const themeId = useAppStore((s) => s.themeId);
  const problemId = useAppStore((s) => s.problemId);
  const setTheme = useAppStore((s) => s.setTheme);
  const setPickerOpen = useAppStore((s) => s.setPickerOpen);
  const problem = getProblem(problemId) ?? problems[0];

  return (
    <header className='border-border flex h-12 shrink-0 items-center gap-3 border-b px-5'>
      <button
        type='button'
        onClick={() => {
          setPickerOpen(true);
        }}
        className='hover:text-foreground flex min-w-0 items-center gap-2 text-sm transition-colors'
      >
        <span className='truncate font-medium'>
          {problem.number}. {problem.title}
        </span>
        <DifficultyBadge difficulty={problem.difficulty} />
        <span className='text-muted-foreground shrink-0 text-xs'>{problem.topic}</span>
        <ChevronDown size={14} className='text-muted-foreground shrink-0' />
      </button>

      <div className='ml-auto flex shrink-0 items-center gap-3'>
        <span className='text-accent text-xs font-semibold'>Go</span>
        <label className='text-muted-foreground flex items-center gap-1.5 text-xs'>
          <Palette size={14} />
          <select
            value={themeId}
            onChange={(event) => {
              setTheme(event.target.value);
            }}
            className='ct-theme-select cursor-pointer bg-transparent outline-none'
          >
            {editorThemes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </header>
  );
}
