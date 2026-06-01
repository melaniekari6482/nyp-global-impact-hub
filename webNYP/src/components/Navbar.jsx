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
        <li className="nav-item dropdown">
          <Link to="/#que-hacemos" className="nav-link">{t.servicios}</Link>
          <ul className="dropdown-menu">
            <li><Link to="/consultoria">{t.consultoria}</Link></li>
            <li><Link to="/asistencia">{t.asistencia}</Link></li>
            <li><Link to="/fondos">{t.fondos}</Link></li>
            <li><Link to="/innovacion">{t.innovacion}</Link></li>
          </ul>
        </li>
        <li><Link to="/#proyectos" className="nav-link">{t.proyectos}</Link></li>
        <li><Link to="/#contacto" className="nav-link">{t.contacto}</Link></li>
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

        <Link to="/login" className="btn-cta">{t.acceso}</Link>
      </div>
    </nav>
  );
};

export default Navbar;

