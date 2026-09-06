import { Link } from "react-router-dom";
import {
  Arrow,
  ProjectCard,
  ResponsiveImage,
  SectionHeading,
} from "./SiteElements";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <div className="container">
      <section tabIndex={-1} className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            DEVELOPER · RESEARCHER · MUSICIAN
          </p>
          <h1 id="hero-title">
            Duke Hu
            <span>
              Curiosity,
              <br />
              put into practice.
            </span>
          </h1>
          <p className="hero-description">
            I build at the intersection of software, artificial intelligence,
            and cybersecurity. Bringing ideas to life, with a little rhythm
            along the way.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#work">
              Explore my work
              <Arrow />
            </a>
            <Link className="button button-secondary" to="/cv">
              View CV
              <Arrow diagonal />
            </Link>
          </div>
          <div className="hero-meta">
            <span>Based in Shanghai and Evanston</span>
            <span>Building with purpose</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-coordinate">FIG. 01 / CONNECTED IDEAS</div>
          <img
            src="/orbital.svg"
            width="560"
            height="520"
            alt=""
            fetchPriority="high"
          />
          <div className="art-caption">
            <span>TECHNOLOGY × CREATIVITY</span>
            <span>01 — ∞</span>
          </div>
        </div>
      </section>
      <div className="credentials" aria-label="Selected highlights">
        <div>
          <span className="credential-label">EDUCATION</span>
          <p>
            Northwestern University<span>Computer Science · Expected 2030</span>
          </p>
        </div>
        <div>
          <span className="credential-label">RECOGNITION</span>
          <p>
            Cybersecurity Olympiad<span>International bronze medal · 2025</span>
          </p>
        </div>
        <div>
          <span className="credential-label">FOCUS</span>
          <p>
            Ideas into useful tools
            <span>Full-stack development · AI · Security</span>
          </p>
        </div>
      </div>
      <section
        tabIndex={-1}
        className="section"
        id="work"
        aria-labelledby="work-title"
      >
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title={<span id="work-title">Built with intention.</span>}
          link={{ to: "/computer", label: "All work & research" }}
        >
          A few projects connecting technology with real people.
        </SectionHeading>
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="project-list">
          {projects.slice(2).map((project, i) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="row-number">0{i + 3}</span>
              <h3>{project.title}</h3>
              <span className="project-list-category">{project.category}</span>
              <span className="sr-only">
                Visit website (opens in a new tab)
              </span>
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </section>
      <section
        tabIndex={-1}
        className="section about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">
            <span>02</span> A LITTLE CONTEXT
          </p>
          <h2 id="about-title">
            Always learning.
            <br />
            Always making.
          </h2>
          <p className="about-description">
            My interests connect code, research, and creative expression. From
            exploring language and AI to building community platforms, I’m drawn
            to work that brings ideas into the real world.
          </p>
          <Link to="/cv" className="text-link">
            Explore my background
            <Arrow />
          </Link>
        </div>
        <div className="focus-list">
          <div>
            <span className="focus-symbol" aria-hidden="true">
              ⌘
            </span>
            <div>
              <h3>Software & AI</h3>
              <p>
                Full-stack applications, language models, and useful automation.
              </p>
            </div>
          </div>
          <div>
            <span className="focus-symbol" aria-hidden="true">
              ◇
            </span>
            <div>
              <h3>Research & security</h3>
              <p>
                Cross-lingual machine translation, competitive programming, and
                cybersecurity.
              </p>
            </div>
          </div>
          <div>
            <span className="focus-symbol" aria-hidden="true">
              ≋
            </span>
            <div>
              <h3>Music & community</h3>
              <p>
                Drumming, live performance, and sharing a creative practice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        tabIndex={-1}
        className="music-feature"
        aria-labelledby="music-title"
      >
        <ResponsiveImage
          source="/ICS Got Talent/Got Talent 1"
          alt="Duke performing drums at ICS Got Talent"
        />
        <div>
          <p className="eyebrow">
            <span>03</span> BEYOND THE KEYBOARD
          </p>
          <h2 id="music-title">
            A different kind
            <br />
            of rhythm.
          </h2>
          <p>
            Behind the drum kit, I find another way to create, collaborate, and
            connect.
          </p>
          <Link className="text-link" to="/music">
            Music & performances
            <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
