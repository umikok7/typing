import type { Language } from '@/types/language';

export type { Language } from '@/types/language';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Problem {
  id: string;
  number: number;
  title: string;
  difficulty: Difficulty;
  topic: string;
  sources: Record<Language, string>;
}
