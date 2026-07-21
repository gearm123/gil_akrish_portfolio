import { projects, site } from '../data/site'
import './WorkSection.css'

export default function WorkSection() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="section__inner">
        <p className="section__eyebrow">Side quests</p>
        <h2 className="section__title" id="work-title">
          Builds for the joy of it
        </h2>
        <p className="section__lead">
          A handful of GitHub projects I actually care about — client sites,
          games, and experiments. Less résumé, more workshop.
        </p>

        <ul className="work__grid">
          {projects.map((project, index) => (
            <li key={project.id}>
              <a
                className={`work__card work__card--${(index % 3) + 1}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="work__card-top">
                  <span className="work__vibe">{project.vibe}</span>
                  {project.year ? (
                    <span className="work__year">{project.year}</span>
                  ) : null}
                </div>
                <h3>{project.title}</h3>
                <p className="work__summary">{project.summary}</p>
                <ul className="work__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="work__open">Open on GitHub →</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="work__more">
          More experiments live on{' '}
          <a href={site.links.github} target="_blank" rel="noreferrer">
            github.com/gearm123
          </a>
          .
        </p>
      </div>
    </section>
  )
}
