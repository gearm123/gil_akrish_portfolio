/**
 * Generates public/sitemap.xml and public/robots.txt before production builds.
 */
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE_URL = (process.env.VITE_SITE_URL || 'https://gilakrish.com').replace(
  /\/+$/,
  '',
)

const PATHS = ['/']

function urlEntry(path) {
  return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.7'}</priority>
  </url>`
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PATHS.map(urlEntry).join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

writeFileSync(resolve('public', 'sitemap.xml'), sitemap, 'utf8')
writeFileSync(resolve('public', 'robots.txt'), robots, 'utf8')
console.log(`Wrote sitemap (${PATHS.length} URL) + robots.txt for ${SITE_URL}`)
