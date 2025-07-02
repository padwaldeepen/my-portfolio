
# GitHub Copilot Code Generation Instructions for Deepen Padwal's Portfolio (Vite + React 19)

## General Coding Practices
- Use TypeScript with strict typing. Avoid `any`.
- Use React functional components with hooks (React 19, Vite setup).
- Follow ESLint and Prettier configurations defined in the project.
- Write modular, reusable, and well-documented code.
- Use absolute imports with path aliases (e.g., `@components/`, `@utils/`) as configured in `vite.config.ts` and `tsconfig.json`.
- Use SCSS modules or Bootstrap 5 classes for styling. Avoid inline styles.
- Keep component complexity low; break large components into smaller ones.
- Follow accessibility best practices: semantic HTML and aria attributes.

## React + Vite Specific Instructions
- Use `React.FC<Props>` with explicit props interfaces.
- Use hooks like `useState`, `useEffect`, `useMemo`, `useCallback` appropriately.
- Organize components in `src/components`, pages in `src/pages`, and reusable sections in `src/sections`.
- Use `main.tsx` as the entry point and ensure all new code is compatible with Vite's module system.
- Add tests using `@testing-library/react` alongside components.
- Keep JSX clean and readable with proper indentation.

## TypeScript Specific Instructions
- Use interfaces and types for props and state.
- Use utility types (`Pick`, `Omit`, `Partial`) when applicable.
- Avoid any; prefer unknown with type checks if needed.
- Use enums for fixed sets of values.
- Use path aliases as defined in `vite.config.ts` and `tsconfig.json` for all imports.

## Styling Instructions
- Use SCSS modules with camelCase class names.
- Use variables for colors, fonts, spacing in `src/styles/variables.scss`.
- Avoid global CSS except for resets and base styles.
- Prefer Bootstrap 5 components for layout and responsive design.

## Testing Instructions
- Write unit tests with Jest and React Testing Library.
- Test components for render, interactions, and edge cases.
- Place test files alongside components using `.test.tsx` suffix.

---

## Vite-Specific Notes
- Use `vite.config.ts` for all build and alias configuration.
- Use `/src/main.tsx` as the entry point in `index.html`.
- Do not use CRA-specific files or patterns (no `serviceWorker`, no `reportWebVitals`, etc.).
- Ensure all static assets are referenced with absolute or aliased paths.
- The build output is in the `dist/` folder, ready for Netlify or static hosting.
