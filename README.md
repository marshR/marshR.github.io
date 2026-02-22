# Marce Romero Portfolio (Next.js)

Fresh Next.js rebuild of the portfolio with automatic GitHub Pages deployment from `master`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"`)
- Small global token layer in `app/globals.css`
- GitHub Actions Pages deploy

## Project structure

```
marshR.github.io/
├── app/
│   ├── components/
│   │   ├── nav-link.tsx
│   │   └── ui/
│   │       ├── button-link.tsx
│   │       ├── card.tsx
│   │       ├── page-header.tsx
│   │       └── section.tsx
│   ├── contact/page.tsx
│   ├── lib/projects.ts
│   ├── projects/page.tsx
│   ├── resume/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .github/workflows/deploy.yml
├── postcss.config.mjs
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Local dev

```bash
nvm use
npm install
npm run dev
```

Node 22 is required (`.nvmrc` included).

## Deployment

- Work on `dev` branch.
- Deploy only when changes are merged/pushed to `master`.
- GitHub Actions builds static files (`next build` with `output: "export"`).
- Workflow deploys `out/` to GitHub Pages automatically.

## Notes

- Add your real `public/resume.pdf` so the resume download works.
- Replace `marce@example.com` in `app/contact/page.tsx`.
- If you ever move from user-site repo to project repo, `next.config.mjs` already handles base path in CI.
