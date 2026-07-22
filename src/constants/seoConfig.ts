/**
 * Site-wide SEO and analytics config.
 * Set in Netlify (Site settings → Environment variables):
 *   VITE_SITE_URL=https://your-domain.com
 *   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  (optional override)
 */

const DEFAULT_SITE_URL = 'https://gilakrish.com'
const DEFAULT_GA_MEASUREMENT_ID = 'G-368TRC88WM'

export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined
  return (raw?.trim() || DEFAULT_SITE_URL).replace(/\/+$/, '')
}

export function getGoogleAnalyticsId(): string | undefined {
  const fromEnv = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim()
  return fromEnv || DEFAULT_GA_MEASUREMENT_ID
}

export function toAbsoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${getSiteUrl()}${normalized}`
}

export const defaultSeo = {
  title: 'Gil Akrish — Software Engineer & AI Researcher',
  description:
    'Gil Akrish is a software engineer and AI researcher. M.Sc. work at Tel Aviv University on deep learning for histopathology segmentation, plus production mobile and web systems.',
  ogImagePath: '/og.svg',
} as const
