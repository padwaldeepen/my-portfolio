---
applyTo: "**"
---

# GitHub Copilot Code Generation Instructions for Deepen Padwal's Portfolio (Vite + React 19 + Material UI)

## General Coding Practices
- Use TypeScript with strict typing. Avoid `any` — prefer `unknown` with type guards when needed.
- Use React functional components with hooks (React 19, Vite setup).
- Follow ESLint and Prettier configurations defined in the project.
- Write modular, reusable, and well-documented code.
- Use absolute imports with path aliases (e.g., `@components/`, `@utils/`) as configured in `vite.config.ts` and `tsconfig.json`.
- Keep component complexity low; break large components into smaller ones.
- Use semantic HTML and follow accessibility best practices (e.g., `aria-label`, `role`, proper heading levels).

## React + Vite Specific Instructions
- Use `React.FC<Props>` with explicit `Props` interfaces or `type` aliases.
- Use hooks like `useState`, `useEffect`, `useMemo`, `useCallback` appropriately.
- Organize components in `src/components`, pages in `src/pages`, and utility code in `src/utils`.
- Use `main.tsx` as the entry point and ensure all code is compatible with Vite's module system.
- Place component-specific logic and tests near the component file.
- Avoid CRA-specific patterns (`reportWebVitals`, `serviceWorker`, etc.).
- All assets should be referenced via absolute paths or `@assets/` alias.

## Material UI (MUI) Styling Instructions
- Use Material UI (MUI v5) components for all UI elements (e.g., `Box`, `Grid`, `Button`, `Typography`, `AppBar`, `Card`).
- Use MUI's `sx` prop or the `styled()` API from `@mui/system` for custom styling.
- Do not use Tailwind CSS, Bootstrap, or inline `style={{}}` unless necessary for dynamic values.
- Prefer the `@mui/material` theme and responsive design system for layout and spacing.
- Ensure components use accessible MUI variants (`aria-*`, focus indicators, etc.).
- For dark mode support, use MUI's `ThemeProvider` and theme toggle logic.

## TypeScript Specific Instructions
- Use `interface` or `type` for props and component state.
- Use utility types (`Pick`, `Omit`, `Partial`, `Record`) where appropriate.
- Avoid using `any`. If necessary, narrow `unknown` types with runtime checks.
- Use enums for constrained values where appropriate.
- Keep types colocated with components or share in a global `@types` or `src/types/` folder if reused.

## Testing Instructions
- Write unit tests using `@testing-library/react` and Jest.
- Test component rendering, prop usage, events, and edge cases.
- Use `.test.tsx` naming convention and colocate test files with components.
- Mock external dependencies or APIs using `jest.mock()`.

---

## Vite-Specific Notes
- Configure path aliases in `vite.config.ts` and `tsconfig.json`.
- Use `vite-plugin-svgr` for importing SVGs as React components if needed.
- Build output should be clean and optimized for Netlify or other static hosting platforms.
- All routing should use `react-router-dom` with dynamic and nested routes handled cleanly.
