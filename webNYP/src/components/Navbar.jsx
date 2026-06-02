import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logoEnyp from "../assets/logo-Enyp.png";
import traducciones from "../assets/traducciones";

const Navbar = ({ idioma, setIdioma }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = traducciones[idioma] || traducciones.es;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoEnyp} alt="EnypLogo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">
            {idioma === "en" ? "Home" : "Inicio"}
          </Link>
        </li>

        <li>
          <Link to="/nyp-global" className="nav-link">
            NYP Global
          </Link>
        </li>

        <li>
          <Link to="/nyp-social-lab" className="nav-link">
            NYP Social Lab
          </Link>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="lang-selector">
          <button
            className={`btn-lang ${idioma === "es" ? "active" : ""}`}
            onClick={() => setIdioma("es")}
          >
            ES
          </button>
          <button
            className={`btn-lang ${idioma === "en" ? "active" : ""}`}
            onClick={() => setIdioma("en")}
          >
            EN
          </button>
        </div>

        <Link to="/login" className="btn-cta">
          {t.acceso}
        </Link>

        <Link to="/#contacto" className="btn-contacto">
          {t.contacto}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;