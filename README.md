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

In Netlify → Site settings → Environment variables:

| Variable | Example |
|----------|---------|
| `VITE_SITE_URL` | `https://your-domain.com` |
| `VITE_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` |

Then redeploy. GA loads only when the measurement ID is set.

After go-live: submit `https://your-domain.com/sitemap.xml` in Google Search Console.
