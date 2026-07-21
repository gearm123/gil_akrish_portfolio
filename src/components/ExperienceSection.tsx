import { experience } from '../data/site'
import './ExperienceSection.css'

export default function ExperienceSection() {
  return (
    <section
      className="section experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Experience</p>
        <h2 className="section__title" id="experience-title">
          Where I’ve worked
        </h2>
        <p className="section__lead">
          A concise timeline of roles — focused on what was built and shipped.
        </p>

        <ol className="experience__list">
          {experience.map((entry) => (
            <li key={entry.id} className="experience__company">
              <div className="experience__company-head">
                <h3>{entry.company}</h3>
                {entry.tenure ? (
                  <span className="experience__tenure">{entry.tenure}</span>
                ) : null}
              </div>

              <ul className="experience__roles">
                {entry.roles.map((role) => (
                  <li key={`${entry.id}-${role.title}-${role.dates}`}>
                    <div className="experience__role-head">
                      <h4>{role.title}</h4>
                      <p className="experience__meta">
                        {[role.type, role.dates, role.location]
                          .filter(Boolean)
                          .join(' · ')}
                      </p>
                    </div>
                    <ul className="experience__bullets">
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    {role.skills?.length ? (
                      <ul className="experience__skills">
                        {role.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
