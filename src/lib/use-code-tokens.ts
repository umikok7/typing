import { useEffect, useState } from 'react';

import type { TokenizedCode } from './highlighter';

interface CodeTokensEntry {
  source: string;
  themeId: string;
  code: TokenizedCode;
}

export function useCodeTokens(source: string, themeId: string): TokenizedCode | null {
  const [entry, setEntry] = useState<CodeTokensEntry | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import('./highlighter')
      .then((mod) => mod.tokenizeCode(source, themeId))
      .then((code) => {
        if (!cancelled) {
          setEntry({ source, themeId, code });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [source, themeId]);

  const fresh = entry !== null && entry.source === source && entry.themeId === themeId;
  return fresh ? entry.code : null;
}
