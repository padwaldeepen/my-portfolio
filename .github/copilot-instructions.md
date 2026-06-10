---
applyTo: "**"
---

# GitHub Copilot Code Generation Instructions

These instructions guide GitHub Copilot in generating code that adheres strictly to the architectural patterns, styling standards, and linting rules of Deepen Padwal's Portfolio project.

---

## 📖 Single Source of Truth

To avoid duplication and out-of-sync instructions, Copilot must prioritize and refer directly to the configuration rules defined in the following local files:

1. **General Requirements & Agent Workflows**: Refer to [agents.md](file:///d:/Projects/my-portfolio/agents.md) for global project constraints, npm verification scripts, and verification checklists.
2. **Frontend Architecture & File Organization**: Refer to [.ai/rules/frontend.md](file:///d:/Projects/my-portfolio/.ai/rules/frontend.md) for naming guidelines, file structure layouts, import aliases, and rules for page-specific component nesting.
3. **Styling & Theme Rules**: Refer to [.ai/rules/styling.md](file:///d:/Projects/my-portfolio/.ai/rules/styling.md) for custom SCSS styling patterns, BEM naming conventions, mobile-first design guidelines, and Material UI (MUI v5) integration.
4. **Refactoring & Code Quality Constraints**: Refer to [.ai/rules/refactor.md](file:///d:/Projects/my-portfolio/.ai/rules/refactor.md) for complexity restrictions, component/function line limits, and post-implementation validation checklists.

---

## 🏗️ High-Level Project Overview

### Project Stack
- **Core**: React 19 + Vite + TypeScript
- **Styling**: SCSS (global and variables) + Material UI (MUI v5)
- **Linter/Formatter**: ESLint v9 (Flat Config) + Prettier

### High-Level Folder Structure
Generate code and place files matching the following target organization:
- **`src/pages/`**: All page components (e.g. `src/pages/Home/Home.tsx` + `Home.scss`).
  - **Local/Page-Specific Components**: If a component is used *only* by one page, nest it inside that page's `components/` folder (e.g. `src/pages/Home/components/HomeBanner/HomeBanner.tsx`).
- **`src/shared/`**: Reusable modules shared across pages. Contains:
  - `components/` (each component has its own folder, e.g. `Button/Button.tsx`)
  - `hooks/` (flat files directly in this directory, e.g. `useLocalStorage.ts` — no folders)
  - `utils/` (flat files directly in this directory, e.g. `formatDate.ts` — no folders)
  - `types/` (flat files directly in this directory, e.g. `global.d.ts`)
  - `assets/` (flat files, e.g. `logo.svg`)

---

## 🚨 Critical Constraints for Code Generation

- **Always Named Exports**: Never generate default exports. Every component or utility must use named exports.
- **No Index/Barrel Files**: Do not generate `index.ts` files to bundle exports. Import directly from the exact file path.
- **Component Folders ONLY**: Only React components (both shared and page-specific) should have their own folders. Do **not** generate folders for individual hooks, utils, types, or assets; place them as flat files inside their parent directories.
- **Strict Typing**: Avoid `any`. Explicitly type all React props, state, utility arguments, and return signatures.
- **Path Aliases**: Always use the defined TypeScript path aliases when generating import statements (e.g. `@components/...`, `@hooks/...`, `@pages/...`, `@utils/...`, `@styles/...`, `@assets/...`, `@types/...`).
- **SCSS Matching**: Create a corresponding `.scss` file next to each `.tsx` file (excluding shared utilities/hooks), and structure selectors using BEM syntax.
- **Code Style Alignment**: Respect the formatting rules in `.prettierrc.json` and linter checks in `eslint.config.js`. Always verify that generated code conforms to these rules.
