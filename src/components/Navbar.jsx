import { Link, NavLink } from "react-router-dom";
import { Arrow } from "./SiteElements";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-inner container">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            d<span>.</span>
          </span>
          <span>Duke Hu</span>
          <span className="sr-only"> — home</span>
        </Link>
        <nav className="primary-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/computer">Work & Research</NavLink>
          <NavLink to="/music">Music</NavLink>
          <NavLink to="/cv">CV</NavLink>
        </nav>
        <a className="nav-contact" href="mailto:hjxduke080111@gmail.com">
          Get in touch
          <Arrow diagonal />
        </a>
      </div>
    </header>
  );
}
