import { site } from '../data/site'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__wash hero__wash--a" />
        <div className="hero__wash hero__wash--b" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <p className="hero__kicker">Software engineer · AI researcher</p>
        <h1 id="hero-name" className="hero__name">
          {site.name}
        </h1>
        <p className="hero__tagline">{site.tagline}</p>
        <p className="hero__intro">{site.intro}</p>
        <div className="hero__actions">
          <a className="hero__cta hero__cta--primary" href="#research">
            View research
          </a>
          <a className="hero__cta hero__cta--ghost" href="#experience">
            Work experience
          </a>
        </div>
      </div>
    </section>
  )
}
