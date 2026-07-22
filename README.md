# Gil Akrish — personal portfolio

Professional React site for presenting selected work and capabilities.

## Stack

- Vite + React + TypeScript
- Netlify-ready (`netlify.toml` SPA fallback)

## Develop

```bash
npm install
npm run dev
```

## Content

Edit `src/data/site.ts` for copy, experience, education, and projects.

## SEO

On every production build:

- `public/sitemap.xml` and `public/robots.txt` are generated
- Meta / Open Graph / Twitter tags + JSON-LD (`Person`, `WebSite`, `ProfilePage`, project `ItemList`)

## Netlify + Analytics

Google Analytics (`G-368TRC88WM`) is embedded in `index.html`.

Optional Netlify env vars:

| Variable | Example |
|----------|---------|
| `VITE_SITE_URL` | `https://your-domain.com` |
| `VITE_GA_MEASUREMENT_ID` | override only if you change GA properties |

After go-live: submit `https://your-domain.com/sitemap.xml` in Google Search Console.
