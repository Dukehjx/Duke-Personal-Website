import { Link } from "react-router-dom";
import {
  Arrow,
  PageIntro,
  ProjectCard,
  ResponsiveImage,
  SectionHeading,
} from "./SiteElements";
import { projects } from "../data/projects";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Magic UI",
      "Material UI",
      "Vite",
    ],
  },
  {
    title: "Backend & data",
    skills: [
      "Python",
      "Flask",
      "FastAPI",
      "Django",
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "ClickHouse",
      "MongoDB",
      "DBeaver",
    ],
  },
  {
    title: "Infrastructure & tools",
    skills: [
      "Docker",
      "Nginx",
      "Cloudflare",
      "Alibaba Cloud",
      "Vercel",
      "GitHub Pages",
      "Ubuntu",
      "Git",
      "GitHub Desktop",
      "Postman",
    ],
  },
];
export default function ComputerPage() {
  return (
    <div className="container">
      <PageIntro label="TECHNOLOGY & EXPLORATION" title="Work & research.">
        Building useful software. Exploring intelligent systems. Learning how to
        make them secure.
      </PageIntro>
      <nav className="section-nav" aria-label="Work sections">
        <a href="#projects">Projects</a>
        <a href="#research">AI & research</a>
        <a href="#security">Cybersecurity</a>
        <a href="#skills">Skills & tools</a>
      </nav>
      <section tabIndex={-1} className="section" id="projects">
        <SectionHeading
          number="01"
          label="PROJECTS"
          title="From idea to application."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section tabIndex={-1} className="section" id="research">
        <SectionHeading
          number="02"
          label="AI & RESEARCH"
          title="Exploring what comes next."
        />
        <div className="research-feature">
          <p className="eyebrow">PIONEER ACADEMICS · SUMMER 2025</p>
          <h3>Cross-Lingual Structural Priming in Chinese → English MT</h3>
          <p>
            Independent research into the effects of structural priming on
            syntax and translation quality. A roughly 5,000-word paper exploring
            language and machine translation.
          </p>
          <Link className="text-link" to="/cv#academics">
            Academic background
            <Arrow />
          </Link>
        </div>
        <div className="three-column">
          <article className="info-card">
            <span className="card-index">01 / AUTOMATION</span>
            <h3>Agents & workflows</h3>
            <p>
              Building LLM-powered agents and automated workflows with n8n and
              Dify. Connecting AI APIs to real applications.
            </p>
          </article>
          <article className="info-card">
            <span className="card-index">02 / DEVELOPMENT</span>
            <h3>AI-assisted coding</h3>
            <p>
              Working with Cursor, Copilot, prompt engineering, and MCP tools as
              part of everyday development.
            </p>
          </article>
          <article className="info-card">
            <span className="card-index">03 / LEARNING</span>
            <h3>Machine learning</h3>
            <p>
              Exploring model training and deployment with PyTorch, Google
              Colab, Ollama, and Hugging Face.
            </p>
          </article>
        </div>
      </section>
      <section tabIndex={-1} className="section" id="security">
        <SectionHeading
          number="03"
          label="CYBERSECURITY"
          title="Understanding systems deeply."
        />
        <div className="security-feature">
          <div>
            <p className="eyebrow">
              INTERNATIONAL CYBERSECURITY OLYMPIAD · 2025
            </p>
            <h3>Bronze medal.</h3>
            <p>
              Exploring cryptography, web security, binary exploitation, digital
              forensics, and steganography through competition and practice.
            </p>
            <Link className="text-link" to="/cv#awards">
              Awards & honors
              <Arrow />
            </Link>
          </div>
          <ResponsiveImage
            source="/ICO-2025/ICO2025-1"
            alt="International Cybersecurity Olympiad 2025 award ceremony"
          />
        </div>
        <div className="photo-strip">
          {[2, 3, 4].map((n) => (
            <ResponsiveImage
              key={n}
              source={"/ICO-2025/ICO2025-" + n}
              alt={
                "International Cybersecurity Olympiad 2025 — " +
                {
                  2: "receiving a bronze medal",
                  3: "bronze medal achievement",
                  4: "group photo of medal winners",
                }[n]
              }
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          ))}
        </div>
      </section>
      <section tabIndex={-1} className="section" id="skills">
        <SectionHeading
          number="04"
          label="SKILLS & TOOLS"
          title="A practical toolkit."
        />
        <div className="three-column">
          {skillGroups.map((group) => (
            <article className="info-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="additional-skills">
          <p>
            <strong>Also working with</strong> C++, Java, Python, Google
            Workspace, and Microsoft Office.
          </p>
          <p>
            <strong>Currently studying</strong> Embedded systems programming and
            the 8051 microcontroller architecture.
          </p>
        </div>
      </section>
    </div>
  );
}
