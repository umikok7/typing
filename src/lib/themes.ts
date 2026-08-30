import catppuccinMocha from '@shikijs/themes/catppuccin-mocha';
import dracula from '@shikijs/themes/dracula';
import githubDarkDefault from '@shikijs/themes/github-dark-default';
import nord from '@shikijs/themes/nord';
import oneDarkPro from '@shikijs/themes/one-dark-pro';
import tokyoNight from '@shikijs/themes/tokyo-night';
import type { ThemeRegistrationRaw } from 'shiki';

export interface EditorTheme {
  id: string;
  name: string;
  raw: ThemeRegistrationRaw;
  bg: string;
  fg: string;
}

const DEFAULT_BG = '#1e1e1e';
const DEFAULT_FG = '#d4d4d4';

function makeTheme(raw: ThemeRegistrationRaw, name: string): EditorTheme {
  return {
    id: raw.name ?? name,
    name,
    raw,
    bg: raw.colors?.['editor.background'] ?? DEFAULT_BG,
    fg: raw.colors?.['editor.foreground'] ?? DEFAULT_FG
  };
}

export const editorThemes: readonly EditorTheme[] & { 0: EditorTheme } = [
  makeTheme(githubDarkDefault as unknown as ThemeRegistrationRaw, 'GitHub Dark'),
  makeTheme(oneDarkPro as unknown as ThemeRegistrationRaw, 'One Dark Pro'),
  makeTheme(tokyoNight as unknown as ThemeRegistrationRaw, 'Tokyo Night'),
  makeTheme(dracula as unknown as ThemeRegistrationRaw, 'Dracula'),
  makeTheme(catppuccinMocha as unknown as ThemeRegistrationRaw, 'Catppuccin Mocha'),
  makeTheme(nord as unknown as ThemeRegistrationRaw, 'Nord')
];

export const DEFAULT_THEME_ID = editorThemes[0].id;

const STORAGE_KEY = 'code-typing:theme-id';

export function loadThemeId(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? DEFAULT_THEME_ID;
  } catch {
    return DEFAULT_THEME_ID;
  }
}

export function saveThemeId(id: string): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // ignore storage errors
  }
}
