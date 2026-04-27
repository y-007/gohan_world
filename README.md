<!-- TODO: Update deployment URL from gohan-world.vercel.app to gohanworld.com -->

# GOHAN WORLD

A personal travel and lifestyle blog built with React and Vite. The site shares stories, destinations, and experiences centered around international travel between the USA and Japan.

## Tech Stack

- **React** 18.3 — component-based UI
- **Vite** 6 — development server and production builds
- **Tailwind CSS** 3.4 — utility-first styling
- **Font Awesome** 6 — icons
- **PostCSS** + Autoprefixer — CSS processing

## Project Structure

```
travel_website/
├── public/                  # Static assets (logo, images, favicon)
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation, logo, social links, search
│   │   ├── Hero.jsx         # Intro section with author bio
│   │   ├── Footer.jsx       # Social links, newsletter signup
│   │   ├── Subscribe.jsx    # Subscribe component
│   │   └── Newsletter.jsx   # Newsletter component
│   ├── App.jsx              # Root component
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Global styles with Tailwind directives
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
cd travel_website
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Features

- Responsive navigation with links to Home, About, Destinations, Travel Tips, and Contact
- Hero section with author introduction and profile imagery
- Footer with newsletter email signup and social media links (Facebook, X, Instagram, Pinterest)
- Dynamic copyright year
