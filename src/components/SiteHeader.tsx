import { site } from '../data/site'
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
  return (
    <header className="site-header">
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
