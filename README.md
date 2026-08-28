# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Statický export pro GitHub Pages

Hosting nepotřebuje Node.js – web se exportuje do čistého HTML/CSS/JS:

```sh
npm run dev            # v jednom terminálu (localhost:8080)
npm run export:static  # vygeneruje /docs
```

Ve složce `docs/` je `index.html`, `ukrajina/`, anglická verze `en/` a `en/ukrajina/`,
dále `assets/styles.css`, `assets/gallery.js`, `images/` a `.nojekyll`.
Složka `docs/` se generuje jen lokálně (je v `.gitignore`) — na produkci ji vytváří GitHub Action.

## Jazyky

Texty obou jazyků jsou na jednom místě v `src/content/site.tsx` (`content.cs`, `content.en`),
stránky je jen renderují (`src/components/site/HomePage.tsx`, `UkrainePage.tsx`).
Routy: `/` a `/ukrajina` (česky), `/en` a `/en/ukrajina` (anglicky), přepínač jazyka je v hlavičce.


Automaticky to dělá i GitHub Action `.github/workflows/deploy-pages.yml`:
po pushi do `main` vygeneruje statický web a nasadí ho na GitHub Pages
(v repozitáři nastavte Settings → Pages → Source: GitHub Actions).
