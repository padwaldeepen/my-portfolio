# Styling Rules

## Technology Stack

- **MUI (Material UI v9)**: The only styling library. All styling via MUI components and their `sx` prop.
- **No CSS Modules, SCSS, Tailwind, or styled-components**: Everything is done through MUI's `sx` prop.
- **Emotion**: MUI v9 uses Emotion under the hood — do not write Emotion CSS prop directly; use `sx` exclusively.

---

## Styling Approach

### MUI `sx` Prop (Primary)

All styling is expressed via the `sx` prop on MUI components (including `Box`, `Typography`, `Stack`, etc.):

```tsx
<Box sx={{ display: 'flex', gap: 2, mt: 4, color: 'text.secondary' }}>
  <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
    Content
  </Typography>
</Box>
```

**Rules:**
1. Always use `sx` over inline `style={{}}` objects.
2. Reference theme tokens instead of hardcoded values:
   - `color: 'primary.main'`, `color: 'text.secondary'`
   - `bgcolor: 'background.default'`, `bgcolor: 'background.paper'`
   - `borderColor: 'divider'`
3. Use MUI shorthand properties (`mt`, `mb`, `py`, `px`, `gap`) when available.

---

## Responsive Design

- **Mobile-first**: Define base styles for mobile, then override for larger breakpoints.
- **MUI responsive syntax**: Use object notation with breakpoint keys:
  ```tsx
  sx={{
    fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4rem' },
    display: { xs: 'none', lg: 'flex' },
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
  }}
  ```
- **Available breakpoints**: `xs` (0), `sm` (600), `md` (900), `lg` (1200), `xl` (1536).
- Do not use MUI `Grid` for layout — prefer `Box` with flexbox or CSS grid.

---

## CSS Variables & Theme

- Use MUI theme tokens via the `sx` prop. Do not duplicate values in CSS variables.
- All theme customization goes through `createTheme()` in `src/theme.tsx`.
- No `global.css` or `:root` variable blocks — the MUI theme is the single source of truth.

---

## When to Use What

| Use case | Approach |
|---|---|
| Layout & spacing | MUI `Box`, `Stack`, `Container` with `sx` |
| Typography | MUI `Typography` with variant and `sx` overrides |
| Colors & theming | Theme tokens via `sx` (e.g., `color: 'primary.main'`) |
| Responsive values | MUI responsive `sx` syntax ({ xs: ..., md: ... }) |
| Interactive states | `sx` pseudo-selectors (`'&:hover'`, `'&::before'`) |
| Custom CSS beyond MUI | Extend MUI theme via `createTheme` overrides |
| Global resets | MUI `CssBaseline` + minimal `index.css` for html/body |

---

## Animations

- Keep animations smooth and lightweight.
- Prioritize animating `transform` and `opacity` properties.
- Use CSS transitions via `sx` (`transition: 'opacity 0.3s'`) for simple animations.
- For scroll‑driven reveal animations, use the `Reveal` component (based on IntersectionObserver + CSS classes).
- Avoid animating layout properties (width, height, margin, top, left).
- Respect `prefers-reduced-motion` via the CSS media query in `index.css`.

---

## MUI Integration

- Theme overrides in `createTheme` are the preferred way to customize MUI components globally.
- Use `sx` for component-specific, one-off styles.
- Avoid deeply nested `sx` objects — extract complex styles into well-named variables if they exceed ~10 lines.
- **No `.module.css` files** — all styles live in `sx`.
