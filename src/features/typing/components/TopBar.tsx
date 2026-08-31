import { BookOpen, ChevronDown, Palette } from 'lucide-react';

import { editorThemes } from '@/lib/themes';
import { cn } from '@/lib/utils';
import type { Language } from '@/types/language';

import { getProblem, problems } from '../data/problems';
import { useAppStore } from '../store';
import { DifficultyBadge } from './DifficultyBadge';

const LANGUAGES: Language[] = ['go', 'ts'];

export function TopBar() {
  const themeId = useAppStore((s) => s.themeId);
  const problemId = useAppStore((s) => s.problemId);
  const language = useAppStore((s) => s.language);
  const setTheme = useAppStore((s) => s.setTheme);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const setPickerOpen = useAppStore((s) => s.setPickerOpen);
  const setViewerOpen = useAppStore((s) => s.setViewerOpen);
  const problem = getProblem(problemId) ?? problems[0];

  return (
    <header className='border-border flex h-28 shrink-0 flex-col items-center gap-2 border-b px-6 py-2'>


      <div className='flex w-full items-center justify-start'>
        <div className='font-mono text-4xl font-bold leading-none tracking-tight'>
          <span>
            Typing 1.0
          </span>
        </div>
      </div>

      <div className='w-full text-left'>
        <div className='font-mono text-xm leading-none tracking-tight'>
          <span>
            Token is cheap. Show me the code! - Linus Torvalds
          </span>
        </div>
      </div>


      <div className='flex w-full items-center gap-4'>
        <button
          type='button'
          onClick={() => {
            setPickerOpen(true);
          }}
          className='text-muted-foreground hover:text-foreground flex min-w-0 items-center gap-2 text-sm transition-colors'
        >
          <span className='truncate'>
            {problem.number}. {problem.title}
          </span>
          <DifficultyBadge difficulty={problem.difficulty} />
          <ChevronDown size={14} className='shrink-0' />
        </button>

        <button
          type='button'
          onClick={() => {
            setViewerOpen(true);
          }}
          className='text-muted-foreground hover:bg-surface hover:text-foreground flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors'
        >
          <BookOpen size={14} />
          题目
        </button>

        <div className='ml-auto flex shrink-0 items-center gap-3'>
          <div className='border-border flex items-center rounded-md border p-0.5'>
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                type='button'
                onClick={() => {
                  setLanguage(lang);
                }}
                className={cn(
                  'rounded px-2.5 py-1 font-mono text-xs font-medium transition-colors',
                  language === lang
                    ? 'bg-accent/15 text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {lang === 'go' ? 'Go' : 'TS'}
              </button>
            ))}
          </div>

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
      </div>
    </header>
  );
}
