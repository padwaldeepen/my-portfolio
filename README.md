# Deepen Padwal's Portfolio

A modern, accessible, and responsive developer portfolio built with Vite, React 19, TypeScript, Material UI (MUI v5), and SCSS modules.

## Features
- **Vite + React 19**: Fast, modern build setup with hot reload and optimized production output.
- **TypeScript**: Strict typing for maintainable, scalable code.
- **Material UI (MUI v5)**: Consistent, accessible UI components and theming.
- **SCSS Modules**: Modular, theme-driven styles with variables for color, border, and shadow systems.
- **Responsive Design**: Mobile-first layouts and adaptive components.
- **Dark/Light Mode**: Theme toggling with MUI's `ThemeProvider` and custom SCSS variables.
- **Absolute Imports**: Clean import paths using Vite and TypeScript path aliases.
- **Unit Testing**: Jest and React Testing Library for robust component tests.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```sh
npm install
```

### Development
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production
```sh
npm run build
```
The output will be in the `dist/` folder, ready for static hosting (e.g., Netlify).

### Preview Production Build
```sh
npm run preview
```

## Project Structure
```
my-portfolio/
├── public/                # Static assets (favicon, logo, robots.txt)
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Modular React components (with SCSS modules)
│   ├── pages/             # Page-level components
│   ├── styles/            # Global and variable SCSS
│   ├── theme.tsx          # MUI theme setup
│   ├── main.tsx           # App entry point
│   └── ...
├── index.html             # Main HTML file
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript config (with path aliases)
├── vite.config.ts         # Vite config (with alias setup)
└── README.md
```

## Theming & Styling
- All colors, borders, and shadows are defined in `src/styles/variables.scss` and used throughout SCSS modules.
- MUI theme is defined in `src/theme.tsx` and provided via `ThemeProvider`.
- Supports both light and dark modes.

## Deployment
- Optimized for static hosting (Netlify, Vercel, GitHub Pages, etc.).
- All assets referenced via absolute or aliased paths.

---

**Created by Deepen Padwal**
