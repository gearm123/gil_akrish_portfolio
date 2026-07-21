import { useEffect } from 'react'
import { applyPageMeta, type PageMetaInput } from '../../seo/applyPageMeta'

/** Keeps document head SEO tags in sync for the SPA. */
export default function PageSeo(props: PageMetaInput) {
  useEffect(() => {
    applyPageMeta(props)
  }, [props.title, props.description, props.path, props.image, props.jsonLd])

  return null
}
