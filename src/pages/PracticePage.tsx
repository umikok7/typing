import type { CSSProperties } from 'react';

import { CompletionToast, ProblemPicker, TopBar, TypingArea, useAppStore } from '@/features/typing';
import { editorThemes } from '@/lib/themes';

export function PracticePage() {
  const themeId = useAppStore((s) => s.themeId);
  const theme = editorThemes.find((t) => t.id === themeId) ?? editorThemes[0];
  const themeVars = { '--ct-bg': theme.bg, '--ct-fg': theme.fg } as CSSProperties;

  return (
    <div
      className='bg-background text-foreground flex h-dvh flex-col overflow-hidden'
      style={themeVars}
    >
      <TopBar />
      <TypingArea />
      <CompletionToast />
      <ProblemPicker />
    </div>
  );
}
