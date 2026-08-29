import { cn } from '@/lib/utils';

import type { Difficulty } from '../types';

const difficultyClass: Record<Difficulty, string> = {
  Easy: 'bg-easy/15 text-easy',
  Medium: 'bg-medium/15 text-medium',
  Hard: 'bg-hard/15 text-hard'
};

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const cls = difficultyClass[difficulty];
  return (
    <span className={cn('rounded px-1.5 py-0.5 text-[11px] font-medium', cls)}>{difficulty}</span>
  );
}
