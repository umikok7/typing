import type { Language } from '@/types/language';

export type { Language } from '@/types/language';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface ProblemDescription {
  statement: string;
  examples: ProblemExample[];
  constraints: string[];
}

export interface Problem {
  id: string;
  number: number;
  title: string;
  difficulty: Difficulty;
  topic: string;
  sources: Record<Language, string>;
  description: ProblemDescription;
}
