import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import NypGlobal from "./pages/NypGlobal";
import NypSocialLab from "./pages/NypSocialLab";

import traducciones from "./assets/traducciones";
import "./App.scss";

// ── Imágenes del carrusel ──────────────────
import img1 from "./assets/img1Nyp.jpg";
import img2 from "./assets/img2Nyp.jpg";
import img3 from "./assets/img3Nyp.jpg";
import img4 from "./assets/img4Nyp.jpg";
import img5 from "./assets/img5Nyp.jpg";
import img6 from "./assets/img6Nyp.jpg";
import img7 from "./assets/img7Nyp.jpg";

const SLIDES = [
  { img: img1, label: "NYP GLOBAL IMPACT HUB", title: "Trabajamos para que nuestros clientes puedan cambiar el mundo." },
  { img: img2, label: "INNOVACIÓN · FINANCIACIÓN", title: "Proyectos de alto impacto en Europa, Latinoamérica y Oriente Medio." },
  { img: img3, label: "NYP SOCIAL LAB", title: "Acompañamos a entidades sociales desde la idea hasta la justificación." },
  { img: img4, label: "I+D+i · TECNOLOGÍA", title: "Ingeniería de IA y transferencia tecnológica para organizaciones ambiciosas." },
  { img: img5, label: "FINANCIACIÓN EU", title: "Subvenciones de gran volumen. Fondos europeos, nacionales e internacionales." },
  { img: img6, label: "TERCER SECTOR", title: "ONG, fundaciones y asociaciones que transforman realidades." },
  { img: img7, label: "ECOSISTEMA NYP", title: "Conectamos empresas, universidades y centros tecnológicos." },
];

// ── Carrusel ───────────────────────────────
function Carousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (idx) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  return (
    <div className="carousel-section">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((s, i) => (
          <div className="carousel-slide" key={i}>
            <img src={s.img} alt={s.label} />
            <div className="carousel-overlay">
              <div className="carousel-caption">
                <p>{s.label}</p>
                <h2>{s.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={() => go(current - 1)}>‹</button>
      <button className="carousel-btn next" onClick={() => go(current + 1)}>›</button>

      <div className="carousel-dots">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={i === current ? "active" : ""}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}

// ── Footer ─────────────────────────────────
function Footer({ idioma }) {
  const t = traducciones[idioma] || traducciones.es;

  return (
    <footer className="footer">
      <div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <h3>NYP</h3>
        </Link>
        <p>NYP Global Impact Hub, SL</p>
        <p>CIF B22849244</p>
        <p>Europa · Latinoamérica · Oriente Medio</p>
      </div>
      <div>
        <h4>{t.footerNavegacion}</h4>
        <Link to="/nyp-global"><p>NYP Global</p></Link>
        <Link to="/nyp-social-lab"><p>NYP Social Lab</p></Link>
        <Link to="/login"><p>Área Cliente</p></Link>
      </div>
      <div>
        <h4>{t.footerLegal}</h4>
        <p>{t.politicaPrivacidad}</p>
        <p>{t.avisoLegal}</p>
        <p>{t.politicaCookies}</p>
      </div>
      <div>
        <h4>{t.footerSiguenos}</h4>
        <p>LinkedIn</p>
        <p>Instagram</p>
        <p>Facebook</p>
      </div>
      <div>
        <h4>{t.footerContacto}</h4>
        <p>hola@nyphub.com</p>
        <p>soporte@nyphub.com</p>
        <p>donacongarantia.org</p>
      </div>
    </footer>
  );
}

// ── Home ───────────────────────────────────
function Home({ idioma }) {
  const t = traducciones[idioma] || traducciones.es;
  const navigate = useNavigate();

  return (
    <div className="portal-home">

      {/* Carrusel hero */}
      <Carousel />

      {/* Intro + cards */}
      <section className="portal-hero">
        <p className="eyebrow">{t.homeEyebrow}</p>
        <h1>{t.homeTitulo}</h1>
        <p className="portal-intro">{t.homeDescripcion}</p>
        <div className="portal-cards">
          <Link to="/nyp-global" className="portal-card global-card">
            <p className="card-label">{t.globalLabel}</p>
            <h2>{t.nypGlobal}</h2>
            <p>{t.globalDescripcion}</p>
            <div className="tags">
              <span>Empresas</span>
              <span>Universidades</span>
              <span>AAPP</span>
              <span>Startups</span>
            </div>
            <strong>{t.descubrirGlobal}</strong>
          </Link>
          <Link to="/nyp-social-lab" className="portal-card social-card">
            <p className="card-label">{t.socialLabel}</p>
            <h2>{t.nypSocialLab}</h2>
            <p>{t.socialDescripcion}</p>
            <div className="tags">
              <span>ONG</span>
              <span>Fundaciones</span>
              <span>Asociaciones</span>
              <span>Entidades sociales</span>
            </div>
            <strong>{t.descubrirSocial}</strong>
          </Link>
        </div>
      </section>

      {/* Por qué NYP */}
      <section className="why-section">
        <p className="eyebrow">{t.porqueNyp}</p>
        <div className="why-grid">
          <div>
            <h3>{t.transparencia}</h3>
            <p>{t.transparenciaTexto}</p>
          </div>
          <div>
            <h3>{t.honorarios}</h3>
            <p>{t.honorariosTexto}</p>
          </div>
          <div>
            <h3>{t.seguimiento}</h3>
            <p>{t.seguimientoTexto}</p>
          </div>
          <div>
            <h3>{t.acompanamiento}</h3>
            <p>{t.acompanamientoTexto}</p>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="metrics-section">
        <div className="metrics-track">
          {[1, 2].map((group) => (
            <div className="metrics-group" key={group}>
              <div className="metric-item">
                <h2>+100K€</h2>
                <p>{t.metrica1Texto}</p>
              </div>
              <div className="metric-item">
                <h2>{t.metrica2Titulo}</h2>
                <p>{t.metrica2Texto}</p>
              </div>
              <div className="metric-item">
                <h2>48h</h2>
                <p>{t.metrica3Texto}</p>
              </div>
              <div className="metric-item">
                <h2>2</h2>
                <p>{t.metrica4Texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sectores */}
      <section className="sectors-section">
        <p className="eyebrow">{t.sectoresTitulo}</p>
        <div className="sector-tags">
          <span>Energía</span>
          <span>Agroindustria</span>
          <span>Tecnología</span>
          <span>Educación</span>
          <span>Salud</span>
          <span>Cooperación Internacional</span>
          <span>Desarrollo Rural</span>
          <span>IA y Deep Tech</span>
          <span>Mujer y Género</span>
          <span>Medio Ambiente</span>
          <span>Inclusión Social</span>
          <span>Cultura y Patrimonio</span>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contacto">
        <h2>{t.ctaTitulo}</h2>
        <p>{t.ctaTexto}</p>
        <div className="cta-actions">
          <button onClick={() => navigate("/nyp-global?seccion=evalua")}>
            {t.ctaEmpresa}
          </button>
          <button onClick={() => navigate("/nyp-social-lab?seccion=presenta")}>
            {t.ctaSocial}
          </button>
        </div>
      </section>
    </div>
  );
}

// ── App ────────────────────────────────────
export default function App() {
  const [idioma, setIdioma] = useState(
    () => localStorage.getItem("idioma") || "es"
  );

  useEffect(() => {
    localStorage.setItem("idioma", idioma);
  }, [idioma]);

  return (
    <>
      <Navbar idioma={idioma} setIdioma={setIdioma} />
      <Routes>
        <Route path="/"               element={<Home      idioma={idioma} />} />
        <Route path="/nyp-global"     element={<NypGlobal idioma={idioma} />} />
        <Route path="/nyp-social-lab" element={<NypSocialLab idioma={idioma} />} />
        <Route path="/login"          element={<Login     idioma={idioma} />} />
      </Routes>
      <div className="footer-wrapper">
        <Footer idioma={idioma} />
      </div>
    </>
  );
}