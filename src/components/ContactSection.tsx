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
            Reach out by email or phone for project inquiries.
          </p>
        </div>

        <div className="contact__panel">
          <a className="contact__email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="contact__phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <p className="contact__meta">{site.location}</p>
          <ul className="contact__links">
            <li>
              <a href={site.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
