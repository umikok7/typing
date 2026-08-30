# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Requires Node ≥ 24 and pnpm ≥ 11 (`nvm use 24`).

```bash
pnpm dev            # Vite dev server
pnpm build          # tsc --noEmit && vite build
pnpm typecheck      # tsc --noEmit
pnpm lint           # eslint . (strict TS rules, check-file naming)
pnpm lint:style     # stylelint "**/*.css"
pnpm test           # vitest run
pnpm format         # prettier --write .
```

Run a single test: `pnpm test -- src/features/typing/__tests__/store.test.ts`.

Validate the standalone data solutions after editing them (they are excluded from the project's tsc/eslint):
- TypeScript: `npx tsc --ignoreConfig --noEmit --strict --target es2020 --lib es2020,dom <file>`
- Go: `gofmt -l <file>` and compile-check with a `go build` stub (see `data/go`).

## What this app is

A web-based code typing trainer: a large centered textarea where you type LeetCode solutions, with the target code shown faded as a ghost backdrop inside the same typing area and your typed text syntax-highlighted live. Corpus is 30 LeetCode Hot 100 problems, each with a Go and a TypeScript solution.

Core product decisions (do not regress):
- **Free input, no validation.** The user types unrestricted in a real `<textarea>` — there is NO per-char matching, NO accuracy metrics, NO auto-pairing. Arrow/Enter/Backspace/Tab/click all work natively. "Completion" = `input.length >= reference.length`, shown as a small toast.
- **Input must be syntax-highlighted** (Shiki), and the reference code must look like faded ghost text filling the typing area (not a separate panel, not a placeholder).
- **UI should feel like a geeky typing app, not a LeetCode exercise page.** Big `Typing▌` brand wordmark in JetBrains Mono, muted problem metadata.

## Highlighting pipeline (the subtle part)

Read `src/lib/highlighter.ts` + `src/lib/use-code-tokens.ts` + `src/features/typing/components/TypingArea.tsx`.

- Shiki is a lazy-loaded singleton: `createHighlighterCore` with Go + TypeScript grammars and 6 VS Code themes, created once on first use (JS regex engine, no WASM).
- `useSyncCodeTokens(source, language, themeId)` loads the highlighter, then tokenizes **synchronously** inside a `useMemo`. Sync is intentional — an earlier async version flashed on every keystroke (colored → plain → colored). Do not revert to async per-keystroke tokenizing.
- `TypingArea` stacks three layers over the typing card: (1) faded ghost reference (`opacity-40`), (2) a highlighted `<pre>` of the user's input, (3) the `<textarea>` on top with `text-transparent` + visible `caret-accent`. Scroll is synced from the textarea to the pre and ghost. Tab inserts `\t` via a keydown handler; `tab-size: 4` keeps tabs aligned across all layers.

## State

Single zustand store: `src/features/typing/store.ts` — `themeId` (persisted to `code-typing:theme-id`), `problemId`, `language` (`'go' | 'ts'`), `pickerOpen`, `input`, plus actions. `setLanguage`/`selectProblem` reset the input. No scattered UI state.

## Design tokens

Tailwind v4 `@theme inline` in `src/styles/global.css`. `background`/`foreground` are bound to `--ct-bg`/`--ct-fg` CSS vars injected on the `PracticePage` root from the selected Shiki theme, so switching theme recolors the whole UI. Also `surface`, `border`, `muted-foreground`, `accent`, `destructive`, and difficulty colors `easy`/`medium`/`hard`. **Use tokens, never hardcoded colors.** Class composition via `cn()` in `src/lib/utils.ts`.

## Problem data

- `src/features/typing/data/go/*.go` and `data/ts/*.ts` are standalone LeetCode solutions, imported with Vite `?raw` in `data/problems.ts`, which maps each problem to `sources: { go, ts }`.
- `data/ts/` is excluded from the project tsconfig and eslint (standalone code, validated separately with the `tsc --ignoreConfig` command above). Add new problems by adding a `.go` + `.ts` file and one `problems.ts` entry.
- `Language` lives in `src/types/language.ts` (shared) — the Shiki layer imports it, so it must not live only inside the feature.

## Structure notes

Single feature (`src/features/typing/`) from the feature-first scaffold, minus git-hook tooling (no commitlint/lint-staged/dependency-cruiser). `index.ts` is the only export point; `lib/` is the shared layer (themes, highlighter, utils) and must not import from `features/` or `pages/`. Tests live in `__tests__/` next to what they test. `eslint.config.ts` intentionally omits core `no-duplicate-imports` because prettier splits value/type imports from the same module.
