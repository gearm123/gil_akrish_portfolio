import { useEffect, useState } from 'react'

export type Viewport = 'mobile' | 'desktop'

const QUERY = '(max-width: 860px)'

function readViewport(): Viewport {
  if (typeof window === 'undefined') return 'desktop'
  return window.matchMedia(QUERY).matches ? 'mobile' : 'desktop'
}

/** Shared breakpoint for logical desktop vs mobile UI. */
export function useViewport(): Viewport {
  const [viewport, setViewport] = useState<Viewport>(readViewport)

  useEffect(() => {
    const media = window.matchMedia(QUERY)
    const update = () => setViewport(media.matches ? 'mobile' : 'desktop')
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return viewport
}
