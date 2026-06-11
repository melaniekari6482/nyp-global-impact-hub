import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logoEnyp from "../assets/logo-Enyp.png";
import traducciones from "../assets/traducciones";

const Navbar = ({ idioma, setIdioma }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const linksRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú al cambiar de ruta
  const closeMenu = () => setMenuOpen(false);

  // Calcula el top del navbar-right según la altura del links abierto
  const linksHeight = menuOpen && linksRef.current
    ? linksRef.current.offsetHeight
    : 0;

  const t = traducciones[idioma] || traducciones.es;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logoEnyp} alt="EnypLogo" />
        </Link>
      </div>

      <ul
        ref={linksRef}
        className={`navbar-links ${menuOpen ? "open" : ""}`}
      >
        <li>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            {idioma === "en" ? "Home" : "Inicio"}
          </Link>
        </li>
        <li>
          <Link to="/nyp-global" className="nav-link" onClick={closeMenu}>
            NYP Global
          </Link>
        </li>
        <li>
          <Link to="/nyp-social-lab" className="nav-link" onClick={closeMenu}>
            NYP Social Lab
          </Link>
        </li>
      </ul>

      <div
        className={`navbar-right ${menuOpen ? "open" : ""}`}
        style={menuOpen ? { top: `${92 + linksHeight}px` } : {}}
      >
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
        <Link to="/login" className="btn-cta" onClick={closeMenu}>
          {t.acceso}
        </Link>
        <Link to="/#contacto" className="btn-contacto" onClick={closeMenu}>
          {t.contacto}
        </Link>
      </div>

      <button
        className={`navbar-menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;