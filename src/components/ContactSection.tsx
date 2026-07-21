import { site } from '../data/site'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section__inner contact__inner">
        <div>
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title" id="contact-title">
            Let’s talk about the next build
          </h2>
          <p className="section__lead">
            Prefer email for project inquiries. Social links will be wired once
            you share GitHub and LinkedIn.
          </p>
        </div>

        <div className="contact__panel">
          <a className="contact__email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="contact__meta">{site.location}</p>
          <ul className="contact__links">
            <li>
              <a href={site.links.github}>GitHub</a>
            </li>
            <li>
              <a href={site.links.linkedin}>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
