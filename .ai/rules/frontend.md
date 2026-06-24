# Frontend Architecture Rules

## Folder Structure

The project follows a component-based directory structure. All components live in `src/components/`:

```
src/
├── components/                     # All React components (each in its own folder)
│   └── ComponentName/
│       └── ComponentName.tsx       # Component implementation
├── hooks/                          # Custom React hooks (flat files)
│   └── useLocalStorage.ts
├── utils/                          # Utility and helper functions (flat files)
│   └── formatDate.ts
├── types/                          # Global TypeScript definitions (flat files)
│   └── global.d.ts
└── assets/                         # Shared static assets (flat files)
    └── logo.svg
```

### Component Placement Rules
1. **All components** go in `src/components/ComponentName/`, regardless of reuse scope.
2. **Component Folders ONLY**: Only React components have their own folders (e.g., `src/components/Button/`). Do **not** create directories for hooks, utils, types, or assets — keep them as flat files in their respective directories.
3. **No `pages/` or `shared/` layers** — the project uses a flat component hierarchy.

---

## Imports & Exports

- **Named Exports Only**: Always use named exports. Do not use default exports.
  ```typescript
  // Correct
  export function Button() {}

  // Incorrect
  export default Button;
  ```
- **No Index/Barrel Files**: Do not use `index.ts` files or barrel exports. Import files directly from their path.
- **Path Aliases** (not yet configured — use relative imports):
  - Currently using relative imports like `./ComponentName` or `../../theme`
  - Aliases can be enabled later via Vite `resolve.alias` + `tsconfig.json` `paths`

---

## Component Rules

- **Functional Components Only**: React functional components with hooks. No class components.
- **Size Restrictions**:
  - Soft maximum of 200 lines, hard limit of 300 lines per component file.
  - Soft maximum of 40 lines, hard limit of 60 lines per function.
- **Strict Typing**: Strictly type all component props with interfaces or type aliases. No `any`.
- **Single Responsibility**: Each component must do one thing well. Compose smaller components to build complex layouts.

---

## Styling Approach

- **MUI `sx` prop only**: All styling is done via the MUI `sx` prop. No CSS modules, no styled-components, no Tailwind.
- **No `.module.css` files**: Custom CSS files are not used. Everything goes through `sx`.
- **Theme tokens**: Reference MUI theme tokens (e.g., `color: 'primary.main'`, `bgcolor: 'background.default'`) instead of hardcoded values.
- **Avoid `style={}`**: Use `sx` over inline `style` objects for better theme integration and responsive support.

---

## Hooks

- **Shared Hooks**: Located in `src/hooks/` and prefixed with `use` (e.g., `useLocalStorage.ts`).
- Keep hooks as flat files — no folders.

---

## Types

- **Shared Types**: Declared in `src/types/` (e.g., `global.d.ts`) as flat files.
- **Naming**: Use PascalCase for all `interface`, `type`, and `enum` declarations.
