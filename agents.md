# Project AI Instructions

Please read the core rule files in `.ai/rules/` before proposing or executing any modifications. They define the single source of truth for architectural guidelines, naming, styling, and code quality.

## Referenced Rules
- Refer to [.ai/rules/frontend.md](file:///d:/Projects/my-portfolio/.ai/rules/frontend.md) for folder structure, nesting, exports, and naming conventions.
- Refer to [.ai/rules/styling.md](file:///d:/Projects/my-portfolio/.ai/rules/styling.md) for MUI theme integration, sx prop usage, and mobile-first responsive guidelines.
- Refer to [.ai/rules/refactor.md](file:///d:/Projects/my-portfolio/.ai/rules/refactor.md) for complexity limits, DRY code rules, file size standards, and refactoring checklists.

Follow all rules in order.

---

## Project Stack

- **Core**: React 19 + Vite 8 + TypeScript 6
- **Styling**: Material UI (MUI v9) — **sx prop only**. No CSS Modules, no Tailwind, no styled-components.
- **Quality**: ESLint v9 (Flat Config) + Prettier

---

## Global Requirements

- **Named Exports Only**: Always export components/functions as named exports. Do not use default exports.
- **No Index Files**: No `index.ts` or barrel files. Import files directly.
- **Directory Layout**: Components live in `src/components/ComponentName/ComponentName.tsx` folders. Shared non-component code (hooks, utils, types, assets) are flat files in their respective `src/hooks/`, `src/utils/`, `src/types/`, `src/assets/` directories.
- **Path Aliases** (available but not required — currently using relative imports):
  - `@assets/*` → `src/assets/*`
  - `@components/*` → `src/components/*`
  - `@hooks/*` → `src/hooks/*`
  - `@utils/*` → `src/utils/*`
  - `@types/*` → `src/types/*`
- **Accessibility & Responsiveness**: Prioritize semantic HTML and mobile-first layouts.
- **Styling**: All styling via MUI `sx` prop. No CSS module files. No inline `style={}` objects.

---

## Agent Workflow

### 1. Planning & Research
- Read `AGENTS.md` (this file) and the referenced rules in `.ai/rules/`.
- Understand the existing code patterns and reuse them.
- If changes are complex or architectural, create an implementation plan first.

### 2. Implementation & Code Quality
- Follow the named export constraints and folder structures.
- Keep components small and modular.

### 3. Verification & Testing Workflow
After making modifications, you MUST execute these verification steps in order:
1. **Format Code**: Run `npm run format` to automatically format files using Prettier.
2. **Lint Code**: Run `npm run lint` to check for any ESLint code quality issues. Fix any warnings or errors.
3. **Type Check**: Run `npx tsc --noEmit` to verify type safety.
4. **Build Code**: Run `npm run build` to verify the production build completes successfully without errors.
5. **Browser Verification**: Use the Chrome DevTools plugin or `browser_subagent` to launch and verify the running site (typically `http://localhost:5173`):
   - Check the console logs for any errors or warnings.
   - Verify that pages and routes render correctly.
   - Verify responsiveness across mobile and desktop widths.
   - Check accessibility (e.g., proper header nesting, image alt descriptions).
