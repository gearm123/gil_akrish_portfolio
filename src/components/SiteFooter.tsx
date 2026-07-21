import { site } from '../data/site'
import './SiteFooter.css'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          © {year} {site.name}
        </p>
        <p className="site-footer__note">Site structure ready for live content.</p>
      </div>
    </footer>
  )
}
