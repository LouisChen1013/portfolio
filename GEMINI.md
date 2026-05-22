# Portfolio Project

This is a personal portfolio website developed using **React** and **Vite**. It features a modern, responsive design with multi-language support and dynamic theme switching.

## Project Overview

- **Core Technologies:** React 19 (RC), Vite, React Bootstrap, react-i18next.
- **Internationalization:** Supports English (EN) and Chinese (ZH). Translation files are located in `src/locales`.
- **Theming:** A custom `ThemeProvider` (in `src/themes`) manages global CSS variables for different color schemes: Light, Almond, Blue, and Charcoal. The theme state is managed in `src/components/Intro.jsx` and persisted in `localStorage`.
- **Key Features:**
  - Dynamic typewriter effect for the intro.
  - Interactive project showcase.
  - Smooth theme and language transitions.

## Project Structure

- `src/components/`: Contains the main layout sections (`Intro`, `About`, `Experience`, `Education`, `Project`).
- `src/components/projects/`: Individual components for each project showcased in the portfolio.
- `src/locales/`: JSON translation files for `react-i18next`.
- `src/themes/`: Contains `ThemeProvider.jsx` for managing CSS variable-based themes.
- `public/images/`: Stores all project screenshots and profile pictures.
- `public/files/`: Stores downloadable files like resumes.

## Building and Running

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Development

To start the development server:

```bash
npm run dev
```

### Production Build

To create a production build in the `dist/` directory:

```bash
npm run build
```

### Deployment

To deploy the project to GitHub Pages:

```bash
npm run deploy
```

### Linting

To run the linter:
ect to GitHub Pages:

```bash
npm run deploy
```

### Linting

To run the linter:

```bash
npm run lint
```

## Development Conventions

- **Component Structure:** Prefer functional components with hooks.
- **Styling:** Uses a mix of React Bootstrap components and custom CSS in `src/App.css`. Global styles and theme variables are defined in `src/index.css`.
- **Translations:** Always use the `t` function from `useTranslation` for text content to ensure multi-language support.
- **Images:** Reference images from the `public/images/` directory using the `BASE_URL` from Vite's `import.meta.env`.

## Key Files

- `src/App.jsx`: The main entry component that assembles the sections.
- `src/i18n.js`: Configuration for internationalization.
- `src/themes/ThemeProvider.jsx`: Logic for applying theme-specific CSS variables.
- `src/components/Intro.jsx`: Handles language switching, theme selection, and the hero section.
