---
applyTo: "**"
---

# GitHub Copilot Code Generation Instructions for Deepen Padwal's Portfolio (Vite + React 19 + Material UI)
#
## Naming Conventions

## Project Structure



Project structure example:

my-portfolio/
│
├── public/                  # Static files served at root (index.html, favicon, robots.txt, etc.)
│   ├── index.html
│   ├── logo.svg
│   └── robots.txt
│
├── src/                     # Main source folder
│   ├── components/
│   │   ├── AppBar/
│   │   │   ├── AppBar.tsx
│   │   │   ├── AppBar.module.scss
│   │   │   └── AppBar.test.tsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.scss
│   │   │   └── Navbar.test.tsx
│   │   ├── shared/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.scss
│   │   │   └── Button.test.tsx
│   │   └── ... (other components)
│   ├── layout/
│   │   ├── Layout.tsx
│   │   ├── Layout.module.scss
│   │   └── index.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── ...
│   ├── shared/
│   │   └── ... (shared UI elements or utilities)
│   ├── utils/
│   │   └── ... (utility functions and helpers)
│   ├── theme.tsx
│   ├── assets/
│   │   ├── icons/
│   │   └── img/
│   ├── styles/
│   │   ├── global.scss
│   │   └── variables.scss
│   ├── main.tsx
│   ├── App.tsx
│
├── .github/                 # GitHub-specific files (workflows, Copilot instructions)
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── README.md                # Project documentation
└── ...                      # Other config files


src/
│
├── components/
│   ├── AppBar/
│   │   ├── AppBar.tsx
│   │   ├── AppBar.module.scss
│   │   └── AppBar.test.tsx
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.scss
│   │   └── Navbar.test.tsx
│   ├── shared/
│   │   ├── Button.tsx
│   │   ├── Button.module.scss
│   │   └── Button.test.tsx
│   └── ... (other components)
│
├── layout/
│   ├── Layout.tsx
│   ├── Layout.module.scss
│   └── index.ts
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── ...
│
├── shared/
│   └── ... (shared UI elements or utilities)
│
├── utils/
│   └── ... (utility functions and helpers)
│
├── theme.tsx
├── assets/
│   ├── icons/
│   └── img/
├── styles/
│   ├── global.scss
│   └── variables.scss
├── main.tsx
├── App.tsx

// Each component should have its own folder with its `.tsx` file, SCSS module, and test file when appropriate.
// Use absolute imports with path aliases (e.g., `@components/`, `@utils/`).

### React Components
- **PascalCase (UpperCamelCase):** Name all React components using PascalCase. Each word starts with a capital letter, no spaces or underscores. E.g., `UserProfile`, `NavigationBar`, `LoginButton`.
- **Descriptive Names:** Use names that clearly indicate the component's purpose or data.
- **File Naming:** Component files should match the component name, using PascalCase and `.tsx` extension. E.g., `UserProfile.tsx`.
- **Avoid Abbreviations:** Use full words to prevent confusion. E.g., `UserProfile` not `UsrPrfl`.

### Functions and Variables
- **camelCase:** Use camelCase for functions and variables. E.g., `fetchUserData`, `userName`, `handleSubmit`.
- **Boolean Variables:** Prefix with `is`, `has`, or `should` to indicate boolean nature. E.g., `isLoading`, `hasError`, `isAuthenticated`.
- **Event Handlers:** Use camelCase, start with `handle` or `on`. E.g., `handleClick`, `onInputChange`.

### Constants and Enums
- **UPPER_SNAKE_CASE:** Name constants and enums using uppercase letters with underscores. E.g., `API_BASE_URL`, `DEFAULT_TIMEOUT`.

### Custom Hooks
- **Prefix with `use`:** Custom hooks must start with `use` and have descriptive names. E.g., `useFormValidation`, `useLocalStorage`.

### Vite Specifics
- **Vite Plugins:** Name with `vite-plugin-` prefix.
- **CSS Module Class Names:** Use component name prefix and hash. Tools like `vite-plugin-pretty-module-classnames` can help.

### File Naming in General
- **Consistency:** Use a consistent file naming convention.
- **Kebab-case:** Use kebab-case for general filenames (not components). E.g., `my-component.tsx`.
- **SCSS Files for Components:** Name SCSS files for React components using PascalCase to match the component (e.g., `UserProfile.module.scss`).
- **Avoid Special Characters:** No spaces, dots (except extension), or special characters in file names.

## General Coding Practices

### React Basic Practices
- **Prefer Arrow Functions:** Use arrow function components instead of class components for all new React code.
- **Composition Patterns:** Favor composition over inheritance; use children and component composition to build complex UIs.
- **Lifecycle and Cleanup:** Always handle component lifecycle and perform cleanup in effects (e.g., return cleanup functions in `useEffect`).
- **Optimize Rendering:** Use memoization (`React.memo`, `useMemo`, `useCallback`) to prevent unnecessary re-renders and optimize performance.
- **Single Responsibility Principle:** Keep each component focused and maintainable. Each component should do one thing well.
- **Component Size Guidelines:** Aim for a soft maximum of 250 lines per component. If a component exceeds 650 lines, split it into smaller components.
- **Split Complex UI:** Break down complex UIs into smaller, logical components for better readability and maintainability.
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
