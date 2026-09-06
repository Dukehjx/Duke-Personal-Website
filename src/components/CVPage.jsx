import { PageIntro } from "./SiteElements";
import {
  futureEducation,
  leadership,
  academics,
  interests,
  awards,
  computationalSkills,
} from "../data/cv";

function Experience({ items }) {
  return (
    <div className="experience-list">
      {items.map((item) => (
        <article className="experience" key={item.title}>
          <div className="experience-heading">
            <div>
              <h3>{item.title}</h3>
              {item.role && <p className="experience-role">{item.role}</p>}
            </div>
            <span className="experience-date">{item.period}</span>
          </div>
          {item.description && <p>{item.description}</p>}
          {item.highlights && (
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
const sections = [
  ["education", "Education"],
  ["academics", "Academics & internship"],
  ["leadership", "Community & leadership"],
  ["awards", "Awards & honors"],
  ["skills", "Computational skills"],
  ["interests", "Interests"],
];
export default function CVPage() {
  return (
    <div className="container cv-page">
      <PageIntro
        label="CURRICULUM VITAE"
        title="Junxi (Duke) Hu"
        actions={
          <>
            <button
              className="button button-primary print-button"
              onClick={() => window.print()}
            >
              Print / Save as PDF
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 8V3h10v5M7 17H3V8h18v9h-4M7 14h10v7H7z" />
              </svg>
            </button>
            <a
              className="button button-secondary"
              href="mailto:hjxduke080111@gmail.com"
            >
              Email Duke
            </a>
          </>
        }
      >
        Software development, artificial intelligence, cybersecurity, and
        creative practice.
      </PageIntro>
      <div className="cv-contact">
        <a href="mailto:hjxduke080111@gmail.com">hjxduke080111@gmail.com</a>
        <a href="tel:+8615900709598">+86 15900709598</a>
        <a href="https://github.com/Dukehjx">github.com/Dukehjx</a>
      </div>
      <div className="cv-layout">
        <aside className="cv-sidebar">
          <nav aria-label="CV sections">
            <p className="eyebrow">ON THIS PAGE</p>
            {sections.map(([id, label]) => (
              <a key={id} href={"#" + id}>
                {label}
              </a>
            ))}
          </nav>
        </aside>
        <div className="cv-content">
          <section tabIndex={-1} id="education">
            <h2>Education</h2>
            <article className="experience">
              <div className="experience-heading">
                <h3>{futureEducation.school}</h3>
                <span className="experience-date">
                  {futureEducation.period}
                </span>
              </div>
              <p>{futureEducation.degree}</p>
              {futureEducation.certificate.map((cert) => (
                <p key={cert}>{cert}</p>
              ))}
            </article>
          </section>
          <section tabIndex={-1} id="academics">
            <h2>Academics & internship</h2>
            <Experience items={academics} />
          </section>
          <section tabIndex={-1} id="leadership">
            <h2>Community & leadership</h2>
            <Experience items={leadership} />
          </section>
          <section tabIndex={-1} id="awards">
            <h2>Awards & honors</h2>
            <ul className="awards-list">
              {awards.map((award) => (
                <li key={award.name}>
                  <span>{award.name}</span>
                  <span className="experience-date">{award.year}</span>
                </li>
              ))}
            </ul>
          </section>
          <section tabIndex={-1} id="skills">
            <h2>Computational skills</h2>
            <dl className="cv-skills">
              {computationalSkills.map((skill) => (
                <div key={skill.category}>
                  <dt>{skill.category}</dt>
                  <dd>{skill.skills}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section tabIndex={-1} id="interests">
            <h2>Interests</h2>
            <Experience items={interests} />
          </section>
        </div>
      </div>
    </div>
  );
}
