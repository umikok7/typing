import { create } from 'zustand';

import { loadThemeId, saveThemeId } from '@/lib/themes';

import { problems } from './data/problems';

interface AppState {
  themeId: string;
  problemId: string;
  pickerOpen: boolean;
  input: string;
  setTheme: (id: string) => void;
  selectProblem: (id: string) => void;
  setPickerOpen: (open: boolean) => void;
  setInput: (text: string) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>()((set) => ({
  themeId: loadThemeId(),
  problemId: problems[0].id,
  pickerOpen: false,
  input: '',
  setTheme: (id) => {
    saveThemeId(id);
    set({ themeId: id });
  },
  selectProblem: (id) => {
    set({ problemId: id, input: '', pickerOpen: false });
  },
  setPickerOpen: (open) => {
    set({ pickerOpen: open });
  },
  setInput: (text) => {
    set({ input: text });
  },
  reset: () => {
    set({ input: '' });
  }
}));
