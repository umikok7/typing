export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Problem {
  id: string;
  number: number;
  title: string;
  difficulty: Difficulty;
  topic: string;
  source: string;
}
