import { defaultSeo, getSiteUrl, toAbsoluteUrl } from '../constants/seoConfig'
import { getDefaultOgImageUrl } from './structuredData'

const MANAGED = 'page-seo'

function upsertMeta(
  attr: 'name' | 'property',
  key: string,
  content: string,
): void {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"][data-managed-by="${MANAGED}"]`,
  )
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    el.setAttribute('data-managed-by', MANAGED)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string): void {
  let el = document.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"][data-managed-by="${MANAGED}"]`,
  )
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    el.setAttribute('data-managed-by', MANAGED)
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(graphs: Record<string, unknown>[]): void {
  document
    .querySelectorAll(`script[type="application/ld+json"][data-managed-by="${MANAGED}"]`)
    .forEach((node) => node.remove())

  for (const graph of graphs) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-managed-by', MANAGED)
    script.textContent = JSON.stringify(graph)
    document.head.appendChild(script)
  }
}

export type PageMetaInput = {
  title?: string
  description?: string
  path?: string
  image?: string
  jsonLd?: Record<string, unknown>[]
}

/** Apply document title, canonical, Open Graph, Twitter, and JSON-LD. */
export function applyPageMeta(meta: PageMetaInput = {}): void {
  const title = meta.title ?? defaultSeo.title
  const description = meta.description ?? defaultSeo.description
  const path = meta.path ?? '/'
  const canonical = toAbsoluteUrl(path)
  const image = meta.image
    ? toAbsoluteUrl(meta.image)
    : getDefaultOgImageUrl()

  document.title = title

  upsertMeta('name', 'description', description)
  upsertMeta('name', 'author', 'Gil Akrish')
  upsertLink('canonical', canonical)

  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', 'Gil Akrish')
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', canonical)
  upsertMeta('property', 'og:image', image)
  upsertMeta('property', 'og:locale', 'en_US')

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', image)

  if (meta.jsonLd?.length) {
    upsertJsonLd(meta.jsonLd)
  }

  void getSiteUrl()
}
