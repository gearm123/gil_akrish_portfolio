import { research } from '../data/site'
import './ResearchSection.css'

export default function ResearchSection() {
  return (
    <section
      className="section research"
      id="research"
      aria-labelledby="research-title"
    >
      <div className="section__inner research__inner">
        <div className="research__copy">
          <p className="section__eyebrow">Research</p>
          <h2 className="section__title" id="research-title">
            {research.title}
          </h2>
          <p className="research__school">
            {research.school} · {research.degree}
          </p>
          <p className="research__status">{research.status}</p>
          <p className="research__thesis">
            <span className="research__thesis-label">Thesis</span>
            {research.thesisTitle}
          </p>
          <p className="research__summary">{research.summary}</p>
          <ul className="research__methods">
            {research.methods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>
          <a
            className="research__link"
            href={research.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            View related training codebase on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
