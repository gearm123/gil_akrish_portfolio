import { approach } from '../data/site'
import './ApproachSection.css'

export default function ApproachSection() {
  return (
    <section
      className="section approach"
      id="approach"
      aria-labelledby="approach-title"
    >
      <div className="section__inner approach__inner">
        <div>
          <p className="section__eyebrow">Approach</p>
          <h2 className="section__title" id="approach-title">
            {approach.title}
          </h2>
        </div>
        <p className="approach__body">{approach.body}</p>
      </div>
    </section>
  )
}
