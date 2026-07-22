import { getGoogleAnalyticsId } from '../constants/seoConfig'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Google tag is embedded in index.html (G-368TRC88WM).
 * This helper only avoids a second injection if something calls init again.
 */
export function initGoogleAnalytics(): void {
  const id = getGoogleAnalyticsId()
  if (!id || typeof document === 'undefined') return

  const alreadyLoaded = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${id}"]`,
  )
  if (alreadyLoaded || typeof window.gtag === 'function') return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', id)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(script)
}

export function trackPageView(path: string, title?: string): void {
  if (!window.gtag || !getGoogleAnalyticsId()) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  })
}
