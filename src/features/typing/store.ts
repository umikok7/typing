import { create } from 'zustand';

import { loadThemeId, saveThemeId } from '@/lib/themes';
import type { Language } from '@/types/language';

import { problems } from './data/problems';

interface AppState {
  themeId: string;
  problemId: string;
  language: Language;
  pickerOpen: boolean;
  viewerOpen: boolean;
  input: string;
  setTheme: (id: string) => void;
  selectProblem: (id: string) => void;
  setLanguage: (language: Language) => void;
  setPickerOpen: (open: boolean) => void;
  setViewerOpen: (open: boolean) => void;
  setInput: (text: string) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>()((set) => ({
  themeId: loadThemeId(),
  problemId: problems[0].id,
  language: 'go',
  pickerOpen: false,
  viewerOpen: false,
  input: '',
  setTheme: (id) => {
    saveThemeId(id);
    set({ themeId: id });
  },
  selectProblem: (id) => {
    set({ problemId: id, input: '', pickerOpen: false });
  },
  setLanguage: (language) => {
    set({ language, input: '' });
  },
  setPickerOpen: (open) => {
    set({ pickerOpen: open });
  },
  setViewerOpen: (open) => {
    set({ viewerOpen: open });
  },
  setInput: (text) => {
    set({ input: text });
  },
  reset: () => {
    set({ input: '' });
  }
}));
