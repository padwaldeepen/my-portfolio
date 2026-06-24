---
applyTo: "**"
---

# GitHub Copilot Code Generation Instructions

These instructions guide GitHub Copilot in generating code that adheres strictly to the architectural patterns, styling standards, and linting rules of Deepen Padwal's Portfolio project.

---

## Single Source of Truth

Prioritize and refer directly to the configuration rules defined in the following local files:

1. **General Requirements & Agent Workflows**: Refer to [AGENTS.md](file:///d:/Projects/my-portfolio/AGENTS.md) for global project constraints, npm verification scripts, and verification checklists.
2. **Frontend Architecture & File Organization**: Refer to [.ai/rules/frontend.md](file:///d:/Projects/my-portfolio/.ai/rules/frontend.md) for naming guidelines, file structure layouts, and component rules.
3. **Styling & Theme Rules**: Refer to [.ai/rules/styling.md](file:///d:/Projects/my-portfolio/.ai/rules/styling.md) for MUI sx prop usage, theme integration, and responsive design guidelines.
4. **Refactoring & Code Quality Constraints**: Refer to [.ai/rules/refactor.md](file:///d:/Projects/my-portfolio/.ai/rules/refactor.md) for complexity restrictions, component/function line limits, and post-implementation validation checklists.

---

## Project Overview

### Project Stack
- **Core**: React 19 + Vite 8 + TypeScript 6
- **Styling**: Material UI (MUI v9) — **sx prop only**. No CSS Modules, no SCSS, no Tailwind.
- **Linter/Formatter**: ESLint v9 (Flat Config) + Prettier

### Folder Structure
All components live in `src/components/ComponentName/ComponentName.tsx`. No `pages/` or `shared/` layers — flat component hierarchy.

```
src/
├── components/       # All React components (each in its own folder)
├── hooks/            # Custom hooks (flat files)
├── utils/            # Utility functions (flat files)
├── types/            # TypeScript definitions (flat files)
└── assets/           # Static assets (flat files)
```

---

## Critical Constraints

- **Named Exports Only**: Never generate default exports. Every component/utility must use named arrow function exports: `export const X = () => { ... }`.
- **No Index/Barrel Files**: Do not generate `index.ts` files. Import directly from the exact file path.
- **Component Folders ONLY**: Only React components have their own folders. Do not create folders for hooks, utils, types, or assets.
- **Arrow Functions**: Always use arrow functions for component exports. Never `export function`.
- **Strict Typing**: Avoid `any`. Explicitly type all props, state, and utility signatures.
- **MUI sx Only**: All styling via MUI `sx` prop. No `style={}` objects, no CSS files.
- **Theme Tokens**: Reference MUI theme tokens (`primary.main`, `text.secondary`, `background.default`) instead of hardcoded values.
