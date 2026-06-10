# Styling Rules

## Technology Stack

- **SCSS**: Used for custom styles and component-specific styling.
- **MUI (Material UI v5)**: Used for layout grids, form inputs, dynamic components, and the global theme provider.
- **No Tailwind/Emotion/Styled Components**: Standard SCSS files and MUI components only. Avoid mixing styling libraries.

---

## SCSS Structure

Every React component folder must contain a matching SCSS file:
- `ComponentName.tsx`
- `ComponentName.scss`

### Naming Convention (BEM)
Always write class names using the BEM (Block__Element--Modifier) structure:
```scss
.hero {
  display: flex;
  
  &__title {
    font-size: 2rem;
  }
  
  &__description {
    font-size: 1rem;
  }
  
  &--large {
    min-height: 80vh;
  }
}
```

---

## Variables & Theme

- Use SCSS variables for colors, spacing, border radiuses, and typography.
- Do not hardcode magic numbers or hex codes.
- SCSS variables should be defined centrally (e.g. `src/styles/variables.scss`).
  ```scss
  $color-primary: #0f62fe;
  $spacing-md: 16px;
  ```
- **Nesting**: Limit SCSS nesting to a maximum of 3 levels to maintain readability and CSS performance.

---

## Responsive Design

- Follow a **mobile-first** development approach.
- Breakpoints: Mobile, Tablet, Desktop, Wide.
- Leverage MUI responsive properties when working with MUI components (e.g., `<Grid container spacing={{ xs: 2, md: 3 }}>`).

---

## Animations

- Keep animations smooth and lightweight.
- Prioritize animating `transform` and `opacity` properties.
- Avoid animating layout properties (e.g. `width`, `height`, `margin`, `top`, `left`) to prevent layout thrashing and maintain high FPS.

---

## MUI Integration

- Prefer MUI theme overrides and custom SCSS files for extensive component customization.
- Use the MUI `sx` prop only for small, dynamic styles (e.g., dynamic color value based on state).
- Avoid inline `style={{}}` objects and large MUI `sx` declarations.