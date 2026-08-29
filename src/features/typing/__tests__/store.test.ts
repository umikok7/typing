import { beforeEach, describe, expect, it } from 'vitest';

import { problems } from '../data/problems';
import { useAppStore } from '../store';

describe('useAppStore', () => {
  beforeEach(() => {
    useAppStore.setState({ problemId: problems[0].id, pickerOpen: false, input: '' });
  });

  it('starts with the first problem and empty input', () => {
    const state = useAppStore.getState();
    expect(state.problemId).toBe(problems[0].id);
    expect(state.input).toBe('');
    expect(state.pickerOpen).toBe(false);
  });

  it('setInput updates the input', () => {
    useAppStore.getState().setInput('package main');
    expect(useAppStore.getState().input).toBe('package main');
  });

  it('reset clears the input', () => {
    useAppStore.getState().setInput('abc');
    useAppStore.getState().reset();
    expect(useAppStore.getState().input).toBe('');
  });

  it('selectProblem switches problem, clears input and closes the picker', () => {
    useAppStore.getState().setInput('abc');
    useAppStore.getState().setPickerOpen(true);
    const targetId = problems[1]?.id ?? problems[0].id;
    useAppStore.getState().selectProblem(targetId);
    expect(useAppStore.getState().problemId).toBe(targetId);
    expect(useAppStore.getState().input).toBe('');
    expect(useAppStore.getState().pickerOpen).toBe(false);
  });

  it('setTheme persists to localStorage', () => {
    useAppStore.getState().setTheme('dracula');
    expect(useAppStore.getState().themeId).toBe('dracula');
    expect(window.localStorage.getItem('code-typing:theme-id')).toBe('dracula');
  });
});
