import { describe, expect, it } from 'vitest';

import { problems } from '../data/problems';

describe('problems data', () => {
  it('has 30 curated problems', () => {
    expect(problems.length).toBe(30);
  });

  it('every problem has both go and ts sources', () => {
    for (const problem of problems) {
      expect(problem.sources.go.length).toBeGreaterThan(0);
      expect(problem.sources.ts.length).toBeGreaterThan(0);
    }
  });

  it('every problem has a description with statement, examples and constraints', () => {
    for (const problem of problems) {
      expect(problem.description.statement.length).toBeGreaterThan(0);
      expect(problem.description.examples.length).toBeGreaterThan(0);
      expect(problem.description.constraints.length).toBeGreaterThan(0);
    }
  });
});
