# Frontend Architecture Rules

## Folder Structure

The project follows a modular and strictly organized directory structure split into `pages` and `shared` layers:

```
src/
├── pages/
│   └── Home/
│       ├── Home.tsx
│       ├── Home.scss
│       └── components/            # Local sub-components exclusive to this page
│           └── HomeBanner/
│               ├── HomeBanner.tsx
│               └── HomeBanner.scss
├── shared/
│   └── components/                # Reusable UI components (used across multiple pages)
│       └── Button/
│           ├── Button.tsx
│           └── Button.scss
├── hooks/                         # Custom shared React hooks (flat files)
│   └── useLocalStorage.ts
├── utils/                         # Utility and helper functions (flat files)
│   └── formatDate.ts
├── types/                         # Global TypeScript definitions (flat files)
│   └── global.d.ts
└── assets/                        # Shared static assets (flat files)
    └── logo.svg
```

### Component Placement Rules
1. **Shared Components**: Move to `src/shared/components/` if the component is used across multiple pages.
2. **Page-Specific Components**: If a component is used *only* by a specific page, place it in a `components/` subfolder inside that page's directory (e.g., `src/pages/Home/components/HomeBanner/`).
3. **Component Folders ONLY**: Only React components (both shared and page-specific) should have their own folders (e.g., `src/shared/components/Button/` containing `Button.tsx` and `Button.scss`). Do **not** create directories for individual hooks, utils, types, or assets. They must be placed as flat files directly inside their parent directories (e.g., `src/hooks/useLocalStorage.ts` and `src/utils/formatDate.ts`).

---

## Imports & Exports

- **Named Exports Only**: Always use named exports. Do not use default exports.
  ```typescript
  // Correct
  export const Button = () => {};
  
  // Incorrect
  export default Button;
  ```
- **No Index/Barrel Files**: Do not use `index.ts` files or barrel exports to group imports. Import files directly from their absolute path.
- **Path Aliases**: Use absolute import paths configured in the compiler options:
  - `@assets/*`
  - `@components/*`
  - `@pages/*`
  - `@styles/*`
  - `@types/*`
  - `@utils/*`
  - `@hooks/*`

---

## Component Rules

- **Functional Components Only**: Standard React functional components with hooks. Do not use class components.
- **Size Restrictions**:
  - Soft maximum of 200 lines, hard limit of 300 lines per component file.
  - Soft maximum of 40 lines, hard limit of 60 lines per function.
- **Strict Typing**: Strictly type all component props. Do not use `any` — use explicit interfaces or type declarations.
- **Separation of Styles**: SCSS styling should be in a separate `.scss` file inside the component folder. Avoid inline styles unless dynamic (using custom CSS variables or brief MUI `sx` overrides).
- **Single Responsibility**: Each component must do one thing well. Compose smaller components to build complex layouts.

---

## Pages

- Each page has its own folder containing `PageName.tsx` and `PageName.scss`.
- Local UI sections or sub-components are nested inside `src/pages/PageName/components/`.

---

## Hooks

- **Shared Hooks**: Located in `src/hooks/` and prefixed with `use` (e.g., `useLocalStorage.ts`).
- **Page-Specific Hooks**: Nested inside the page folder if used exclusively by that page.

---

## Types

- **Shared Types**: Declared in `src/types/` (e.g., `global.d.ts`).
- **Page-Specific Types**: Declared inside the page folder.
- **Naming**: Use PascalCase for all `interface`, `type`, and `enum` declarations.

---

## API & Services

- **Shared Utilities**: General API fetch wrappers go in `src/utils/api.ts` (if any).
- **Page-Specific API/Services**: Located inside the specific page folder.
- **DRY**: Do not duplicate API invocation logic.