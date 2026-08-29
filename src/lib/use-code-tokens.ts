import { useEffect, useMemo, useState } from 'react';

import { getHighlighter, tokenizeCodeSync } from './highlighter';
import type { TokenizedCode } from './highlighter';

export function useSyncCodeTokens(source: string, themeId: string): TokenizedCode | null {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void getHighlighter().then(() => {
      if (!cancelled) {
        setReady(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return useMemo(
    () => (ready ? tokenizeCodeSync(source, themeId) : null),
    [source, themeId, ready]
  );
}
