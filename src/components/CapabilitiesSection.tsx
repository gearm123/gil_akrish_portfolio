import { capabilities } from '../data/site'
import './CapabilitiesSection.css'

export default function CapabilitiesSection() {
  return (
    <section
      className="section capabilities"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Capabilities</p>
        <h2 className="section__title" id="capabilities-title">
          What I can take on
        </h2>
        <p className="section__lead">
          From model training in medical imaging research to shipping production
          apps and frontends.
        </p>

        <ul className="capabilities__list">
          {capabilities.map((item) => (
            <li key={item.id} className="capabilities__item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
