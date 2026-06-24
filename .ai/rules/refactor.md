# Refactor Rules

## DRY (Don't Repeat Yourself)
- **Duplicate logic**: Extract logic to a shared utility or helper function after 2 occurrences.
- **Triple repetition**: Must extract logic to a shared helper immediately upon 3 occurrences.

---

## Component Size
- **Target**: 100–200 lines.
- **Maximum**: 350 lines.
- Refactor and break down components into sub-components if they exceed the maximum limit.

---

## Function Size
- **Target**: 20–40 lines.
- **Maximum**: 60 lines.
- Refactor functions that exceed this length into smaller helper functions.

---

## Complexity
- Avoid deeply nested conditional statements.
- Prefer guard clauses to handle errors or boundary conditions early.
- Keep component state and side effects (`useEffect`) clean and minimal.

---

## Reusability
- Always check `src/components/` before creating a new component.
- Avoid duplicate styling; share styling parameters through MUI theme tokens (defined in `src/theme.tsx`).
- Avoid duplicate API logic.

---

## Mandatory Checks After Change
- Run TypeScript compiler checks (`npx tsc --noEmit`).
- Run ESLint to verify code quality.
- Run Prettier to format.
- Remove unused imports, variables, and code.
- Verify web accessibility (semantic HTML, alt tags, labels).
- Verify responsiveness.
- Ensure named exports only.
- Ensure no `index.ts` or barrel files are introduced.
