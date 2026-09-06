import { Link } from "react-router-dom";

export function Arrow({ diagonal = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}
export function ResponsiveImage({
  source,
  alt,
  sizes = "(max-width: 640px) 100vw, 50vw",
  className = "",
  eager = false,
}) {
  const imagePath = encodeURI(source);
  return (
    <img
      className={className}
      src={imagePath + "-960.webp"}
      srcSet={imagePath + "-480.webp 480w, " + imagePath + "-960.webp 960w"}
      sizes={sizes}
      alt={alt}
      width="960"
      height="600"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
export function SectionHeading({ number, title, children, link, label }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label || "EXPLORE"}
        </p>
        <h2>{title}</h2>
        {children && <p className="section-description">{children}</p>}
      </div>
      {link && (
        <Link className="text-link" to={link.to}>
          {link.label}
          <Arrow />
        </Link>
      )}
    </div>
  );
}
export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        <div className="project-image">
          <ResponsiveImage
            source={project.image}
            alt={project.title + " website preview"}
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 560px"
          />
          {project.paused && (
            <span className="project-status">Project paused</span>
          )}
          <span className="project-arrow">
            <Arrow diagonal />
          </span>
        </div>
        <div className="project-info">
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <span className="sr-only">Visit website (opens in a new tab)</span>
        </div>
      </a>
    </article>
  );
}
export function PageIntro({ label, title, children, actions }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">
        <span className="status-dot" />
        {label}
      </p>
      <h1>{title}</h1>
      <p className="intro-description">{children}</p>
      {actions && <div className="actions">{actions}</div>}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-contact">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            Good things start
            <br />
            with a conversation.
          </h2>
        </div>
        <a
          className="text-link email-link"
          href="mailto:hjxduke080111@gmail.com"
        >
          hjxduke080111@gmail.com
          <Arrow diagonal />
        </a>
      </div>
      <div className="footer-bottom">
        <Link className="footer-name" to="/">
          Duke Hu<span>Developer. Researcher. Musician.</span>
        </Link>
        <nav aria-label="Social links">
          <a href="https://github.com/Dukehjx">
            GitHub
            <Arrow diagonal />
          </a>
          <a href="https://www.linkedin.com/in/junxi-hu">
            LinkedIn
            <Arrow diagonal />
          </a>
          <a href="https://x.com/DukeHu0111">
            X<Arrow diagonal />
          </a>
          <a href="https://www.facebook.com/duke.hu.2025/">
            Facebook
            <Arrow diagonal />
          </a>
        </nav>
        <p>© {new Date().getFullYear()} Duke Hu</p>
      </div>
    </footer>
  );
}
