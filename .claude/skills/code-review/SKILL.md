---
name: code-review
description: Review the current diff (or the whole src/ tree when no diff exists) for correctness bugs, dead/duplicated code, and violations of this project's .ai/rules/*.md conventions, using multi-angle finding + independent verification, then report a severity-tiered matrix (🔴/🟡/🟢) with file:line. Use before committing any non-trivial change.
---

# Code Review

Precision over coverage: every finding reported should be one a maintainer would
actually act on.

## Phase 0 — Gather the diff

Run `git diff @{upstream}...HEAD` (or `git diff main...HEAD` if no upstream, or
`git diff HEAD~1` if neither applies). If there are uncommitted changes, also run
`git diff HEAD` and include working-tree changes in scope. If a PR number, branch, or
file path was passed as an argument, review that target instead. If there is no
meaningful diff (working tree clean, nothing ahead of main), review the full `src/`
tree instead of a diff — state this explicitly in the report.

This project has no CLAUDE.md; the source of truth is `.ai/rules/*.md`
(`frontend.md` — folder structure/exports/component size, `styling.md` — MUI `sx`
vs CSS Modules, `refactor.md` — DRY thresholds, component/function size, complexity)
plus `agents.md` at the repo root. Read the relevant rule file(s) before judging a
finding.

## Phase 1 — Find candidates (up to 6 each, via parallel Agent tool calls)

Run these finder angles as independent agents, each given the diff/range and the
`.ai/rules/*.md` files:

1. **Line-by-line scan** — read every hunk, then the enclosing function in the
   current file (not just the diff). Look for: inverted conditions, off-by-one,
   null/undefined deref, missing dependency in `useEffect`, stale closures, swallowed
   errors, stale import paths after file moves.
2. **Removed-behavior audit** — for every deleted/replaced line, name the invariant
   it enforced and confirm the new code re-establishes it. High-risk whenever
   sections/components are deleted or consolidated.
3. **Cross-file tracer** — for each changed function/type/moved file, Grep its
   callers (`data.ts` fields, hooks, utils) and confirm the change doesn't break them.
4. **Reuse** — new code that re-implements something `src/components/`,
   `src/hooks/`, or `src/utils/` already has. Name the existing helper. Per
   `refactor.md`: extract after 2 occurrences, mandatory at 3.
5. **Simplification** — redundant/derivable state, deep `sx` nesting (>10 lines
   should be a named variable per `styling.md`), dead code, unused props/exports,
   components over the size limits in `.ai/rules/frontend.md`/`refactor.md`
   (soft 200 / hard 300 lines per component; soft 40 / hard 60 lines per function).
6. **Efficiency** — unnecessary re-renders, work in hot paths (mousemove/scroll
   handlers not throttled or not using refs), missing `passive: true` on scroll/touch
   listeners, layout-property animations instead of `transform`/`opacity`.
7. **Conventions** — quote the exact `.ai/rules/*.md` line broken and the exact diff
   line that breaks it: named exports only, no barrel files, no inline `style={}`,
   no hardcoded colors instead of theme tokens, `.module.css` used for anything
   beyond keyframes/complex pseudo-elements.
8. **Content/functionality** — data defined in `src/data.ts` that the UI never
   renders (dead fields), interactive-looking elements with no handler/href,
   accessibility gaps (missing `alt`, non-semantic click targets without
   `role`/`tabIndex`/keyboard handling).

Pass every candidate with a nameable failure scenario through — do not silently drop
half-believed candidates.

## Phase 2 — Verify (1 vote per candidate, 3-state)

Dedup candidates pointing at the same line/mechanism, keeping the most concrete one.
For each survivor, run one independent verifier agent: give it the diff and the
file(s), and have it return CONFIRMED (names the trigger, quotes the line),
PLAUSIBLE (mechanism real, trigger uncertain), or REFUTED (quote the line/rule that
disproves it). Drop REFUTED candidates. Correctness bugs always outrank
cleanup/convention findings if a cap forces a cut.

## Output format

**1. Findings** — ranked by severity, each with `file:line` and a concrete failure
scenario, at most 8:
- 🔴 **Critical** — wrong output, crash, broken user flow, build failure
- 🟡 **Warning** — real bug, a11y gap, or inefficiency that doesn't break a flow
- 🟢 **Suggestion** — duplication, dead code, convention violation, simplification

Report as a markdown table: `File | Line | Issue`, grouped under each severity
heading — print the table directly (don't use the ReportFindings tool; its tiers
don't match this project's format).

**2. Verdict** — one line: **ready to commit** or **fix criticals first**.
