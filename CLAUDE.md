# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `travel_website/` subdirectory:

```bash
cd travel_website

npm install        # Install dependencies
npm run dev        # Start dev server (Vite, default http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Serve the production build locally
npm run lint       # Run ESLint
```

There are no tests in this project.

## Architecture

The app is a single-page React site with a flat, three-component layout rendered in `src/App.jsx`:

```
Header  →  Hero  →  Footer
```

Each component owns its styles via a paired CSS file (e.g. `Header.jsx` + `header.css`). Tailwind utility classes are used inline alongside these local stylesheets — both approaches coexist.

**Styling convention:** Tailwind classes handle layout/color; component-scoped CSS files handle sizing, positioning, and anything Tailwind can't express cleanly. When adding styles, follow whichever approach the existing component already uses.

**Icons:** Font Awesome 6 SVG-core pattern — import individual icons from `@fortawesome/free-brands-svg-icons` or `@fortawesome/free-solid-svg-icons`, then render with `<FontAwesomeIcon icon={...} />`.

**Static assets** (logo, hero images) live in `public/` and are referenced with root-relative paths (e.g. `src='/gohan_world_logo_500x500.png'`).

**Import note:** `Header` is exported from `components/header.jsx` (lowercase filename) but imported as `Header` — keep the filename lowercase to avoid case-sensitivity issues on Linux/CI.
