import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { useViewport } from '../hooks/useViewport'
import './SiteHeader.css'

const nav = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#work', label: 'Side quests' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
]

export default function SiteHeader() {
  const viewport = useViewport()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (viewport === 'desktop') setMenuOpen(false)
  }, [viewport])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  if (viewport === 'mobile') {
    return (
      <header className="site-header site-header--mobile">
        <div className="site-header__inner site-header__inner--mobile">
          <a className="site-header__brand" href="#top" onClick={closeMenu}>
            {site.name}
          </a>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="site-header__menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>

        <div
          id="mobile-nav"
          className={[
            'site-header__drawer',
            menuOpen ? 'site-header__drawer--open' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <nav className="site-header__drawer-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="site-header__drawer-meta">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="site-header site-header--desktop">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top">
          {site.name}
        </a>
        <nav className="site-header__nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
