# Deepen Padwal's Resume Portfolio

A modern, highly interactive, accessible, and responsive developer resume portfolio. Built with React 19, Vite, TypeScript, Material UI (MUI v5), and SCSS (custom styling and layout).

This portfolio serves as a professional showcase of experience, technical skills, projects, and integrates a downloadable resume PDF with support for both dark and light modes.

---

## ✨ Features

- **Interactive Resume Timeline**: View full professional experience with interactive descriptions, tags, and milestones.
- **Projects Grid**: Showcase developer projects with dynamic tech-stack filtering, screenshots, live previews, and GitHub repository links.
- **Skills Matrix**: Interactive representation of core competencies categorized by domain (Frontend, Backend, Tools, etc.).
- **PDF Resume Integration**: Built-in support to view and download a clean, professional print resume.
- **Dark/Light Mode Sync**: Adaptive UI theme toggling using Material UI's `ThemeProvider` synced with custom SCSS variables.
- **Responsive & Accessible (WCAG)**: Mobile-first responsive layouts, keyboard navigation, and proper aria-labels for assistive technology.
- **Path Aliases**: Direct, clean import statements using Vite and TypeScript path mappings.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI & Layout**: [Material UI (MUI v5)](https://mui.com/)
- **Styling**: [SCSS](https://sass-lang.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v22.17.0+ recommended)
- npm (v10+ recommended)

### Installation
```sh
npm install
```

### Run Local Development Server
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the application locally.

### Build for Production
```sh
npm run build
```
The optimized static files will be placed in the `dist/` directory, ready for deployment.

### Preview Production Build
```sh
npm run preview
```

---

## 📂 Project Structure

This project follows a modular structure splitting page-level views from shared utilities, hooks, and reusable components:

```
my-portfolio/
├── .ai/                       # AI Agent instructions & rules
│   └── rules/                 # Coding, styling, and refactoring guidelines
├── .github/                   # GitHub workflows & Copilot instruction files
├── public/                    # Static assets served at the root (favicon, pdf resume)
├── src/                       # Main source directory
│   ├── assets/                # Global visual assets
│   ├── shared/                # Shared code layer (reusable items)
│   │   ├── components/        # Reusable UI components
│   │   │   └── Button/
│   │   │       ├── Button.tsx
│   │   │       └── Button.scss
│   │   ├── hooks/             # Custom global React hooks
│   │   │   └── useLocalStorage.ts
│   │   ├── utils/             # Helper functions
│   │   │   └── formatDate.ts
│   │   ├── types/             # Global typescript definitions
│   │   │   └── global.d.ts
│   │   └── assets/            # Shared static assets
│   │       └── logo.svg
│   ├── pages/                 # Page-level route views
│   │   └── Home/              # Home page
│   │       ├── Home.tsx       # Page component
│   │       ├── Home.scss      # Page styling
│   │       └── components/    # Sub-components exclusive to this page
│   ├── App.tsx                # App entry routing & layout
│   ├── App.scss               # Global styles & resets
│   ├── theme.tsx              # MUI theme definitions (light/dark values)
│   └── main.tsx               # DOM insertion entrypoint
├── eslint.config.js           # ESLint v9 Flat Configuration
├── tsconfig.json              # TypeScript compilation setup
├── vite.config.ts             # Vite bundler options & path alias definitions
└── README.md
```

---

## 🛠️ Chrome DevTools MCP Setup

This repository is optimized for use with the **Chrome DevTools Model Context Protocol (MCP)** server, enabling AI agents to connect to your browser, automate page interactions, capture console logs, and visually verify modifications.

### 1. Launch Your Local Dev Server
Make sure the portfolio is running locally:
```sh
npm run dev
```

### 2. Configure the MCP Server in Your Agent Settings
Add the Chrome DevTools MCP server configuration to your editor (e.g. Cursor, Claude Desktop, or Gemini config):

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest", "--autoConnect"]
    }
  }
}
```

*The `--autoConnect` flag tells the MCP server to automatically search for and connect to your open Chrome browser window.*

### 3. Verification Commands for AI Agents
Once connected, agents can run browser validation tasks such as:
- Navigating to `http://localhost:5173`.
- Capturing screenshots of page layouts.
- Inspecting the console for runtime errors.

---

## 📜 Development & Coding Rules

To maintain high code quality and consistency, all development must follow the specifications listed in `.ai/rules/`:
- **Architecture**: Always use **Named Exports** (no default exports) and avoid creating `index.ts` barrel files (see [.ai/rules/frontend.md](file:///d:/Projects/my-portfolio/.ai/rules/frontend.md)).
- **Styling**: Always write component styling in a matching `.scss` file using **BEM naming conventions** (see [.ai/rules/styling.md](file:///d:/Projects/my-portfolio/.ai/rules/styling.md)).
- **Refactoring**: Enforce limits on file lines and function sizes, and adhere to strict complexity limits (see [.ai/rules/refactor.md](file:///d:/Projects/my-portfolio/.ai/rules/refactor.md)).

Before submitting any code changes, run:
```sh
npm run format      # Formats code with Prettier
npm run lint        # Lints code with ESLint
npx tsc --noEmit    # Verifies TypeScript compiles successfully
```

---

**Created by Deepen Padwal**
