# Demokratisches Hacker Kollektiv - Personal Homepage

Personal homepage built with React, Vite, and Tailwind CSS, deployed on GitHub Pages.

**Team:**
- Thomas D. (Anführer)
- Jennifer K. (Frau Kuchen)
- Fabian S. (Herr Kuchen)
- Jayden S. (Gruppen-Clown)
- Julius F.-W. (Zirkusaffe)

## Live Site

🌐 [https://demokratisches-hacker-kollektiv.github.io](https://demokratisches-hacker-kollektiv.github.io)

## Development

**Prerequisites:** Node.js

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build & Deploy

1. Build for production:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

## Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **GitHub Pages** - Hosting

## Project Structure

```
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── lib/           # Utilities and helpers
│   └── main.tsx       # App entry point
├── .github/workflows/ # GitHub Actions for deployment
└── dist/              # Build output
```

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.
