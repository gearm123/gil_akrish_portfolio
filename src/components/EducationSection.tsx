import { education } from '../data/site'
import './EducationSection.css'

export default function EducationSection() {
  return (
    <section
      className="section education"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Education</p>
        <h2 className="section__title" id="education-title">
          Academic background
        </h2>
        <p className="section__lead">
          Graduate AI research at Tel Aviv University, grounded in a computer
          engineering foundation from Bar-Ilan.
        </p>

        <ul className="education__list">
          {education.map((entry) => (
            <li key={entry.id} className="education__item">
              <div className="education__head">
                <h3>{entry.school}</h3>
                {entry.dates ? (
                  <span className="education__dates">{entry.dates}</span>
                ) : null}
              </div>
              <p className="education__degree">{entry.degree}</p>
              <p className="education__meta">
                {[entry.grade, entry.honors].filter(Boolean).join(' · ')}
              </p>
              {entry.details?.length ? (
                <ul className="education__details">
                  {entry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
              {entry.skills?.length ? (
                <ul className="education__skills">
                  {entry.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
