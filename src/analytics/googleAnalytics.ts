import { getGoogleAnalyticsId } from '../constants/seoConfig'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let loadedId: string | undefined

/** Loads GA4 when VITE_GA_MEASUREMENT_ID is set at build time. */
export function initGoogleAnalytics(): void {
  const id = getGoogleAnalyticsId()
  if (!id || loadedId === id || typeof document === 'undefined') return

  loadedId = id
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
