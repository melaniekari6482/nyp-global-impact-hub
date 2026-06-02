import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import traducciones from "./assets/traducciones";
import "./App.scss";

function Home({ idioma }) {
  const t = traducciones[idioma] || traducciones.es;

  return (
    <div className="portal-home">
      <section className="portal-hero">
        <p className="eyebrow">
  {t.homeEyebrow}
</p>

        <h1>{t.homeTitulo}</h1>

        <p className="portal-intro">
  {t.homeDescripcion}
</p>

        <div className="portal-cards">
          <Link to="/nyp-global" className="portal-card global-card">
            <p className="card-label">
              {idioma === "en" ? "FOR COMPANIES AND ORGANIZATIONS" : "PARA EMPRESAS Y ORGANIZACIONES"}
            </p>
           <h2>{t.nypGlobal}</h2>
            <p>
              {idioma === "en"
                ? "High-volume funding, R&D&I, digital transformation, AI engineering and technology transfer."
                : "Financiación de gran volumen, I+D+i, transformación digital, ingeniería de IA y transferencia tecnológica."}
            </p>

            <div className="tags">
              <span>Empresas</span>
              <span>Universidades</span>
              <span>AAPP</span>
              <span>Startups</span>
            </div>

            <strong>{idioma === "en" ? "DISCOVER NYP GLOBAL →" : "CONOCE NYP GLOBAL →"}</strong>
          </Link>

          <Link to="/nyp-social-lab" className="portal-card social-card">
            <p className="card-label">
              {idioma === "en" ? "FOR THE THIRD SECTOR" : "PARA EL TERCER SECTOR"}
            </p>
            <h2>{t.nypSocialLab}</h2>
            <p>
              {idioma === "en"
                ? "Fundraising, design and management of social projects, training and comprehensive support."
                : "Captación de fondos, diseño y gestión de proyectos sociales, formación y acompañamiento integral."}
            </p>

            <div className="tags">
              <span>ONG</span>
              <span>Fundaciones</span>
              <span>Asociaciones</span>
              <span>Entidades sociales</span>
            </div>

            <strong>{idioma === "en" ? "DISCOVER NYP SOCIAL LAB →" : "CONOCE NYP SOCIAL LAB →"}</strong>
          </Link>
        </div>
      </section>

      <section className="why-section">
        <p className="eyebrow">{t.porqueNyp}</p>

        <div className="why-grid">
          <div>
            <h3>{t.transparencia}</h3>
<p>{t.transparenciaTexto}</p>
          </div>

          <div>
            <h3>Honorarios alineados</h3>
            <p>Trabajamos a éxito cuando es posible. Ganamos cuando tú ganas.</p>
          </div>

          <div>
            <h3>Seguimiento en tiempo real</h3>
            <p>Acceso permanente al estado de tus proyectos.</p>
          </div>

          <div>
            <h3>Acompañamiento completo</h3>
            <p>Desde la idea inicial hasta la justificación final.</p>
          </div>
        </div>
      </section>

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

<section className="sectors-section">
  <p className="eyebrow">SECTORES EN LOS QUE OPERAMOS</p>
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

<section className="cta-section" id="contacto">
  <h2>
    ¿No sabes por dónde empezar?<br />
    La primera conversación es siempre gratuita.
  </h2>
  <p>Cuéntanoslo. Hay proyectos que solo necesitan que alguien los escuche bien.</p>
  <div className="cta-actions">
    <button>TENGO UN PROYECTO EMPRESARIAL →</button>
    <button>SOY ENTIDAD SOCIAL →</button>
  </div>
</section>

<footer className="footer">
  <div>
    <h3>NYP</h3>
    <p>NYP Global Impact Hub, SL</p>
    <p>CIF B22849244</p>
    <p>Europa · Latinoamérica · Oriente Medio</p>
  </div>

  <div>
    <h4>NAVEGACIÓN</h4>
    <p>NYP Global</p>
    <p>NYP Social Lab</p>
    <p>Área Cliente</p>
  </div>

  <div>
    <h4>LEGAL</h4>
    <p>Política de privacidad</p>
    <p>Aviso legal</p>
    <p>Política de cookies</p>
  </div>

  <div>
    <h4>SÍGUENOS</h4>
    <p>LinkedIn</p>
    <p>Instagram</p>
    <p>Facebook</p>
  </div>

  <div>
    <h4>CONTACTO</h4>
    <p>hola@nyphub.com</p>
    <p>soporte@nyphub.com</p>
    <p>donacongarantia.org</p>
  </div>
</footer>

    </div>
  );
}

function NypGlobal() {
  return (
    <main className="simple-page">
      <h1>NYP Global</h1>
      <p>Página de NYP Global en construcción.</p>
    </main>
  );
}

function NypSocialLab() {
  return (
    <main className="simple-page">
      <h1>NYP Social Lab</h1>
      <p>Página de NYP Social Lab en construcción.</p>
    </main>
  );
}

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
        <Route path="/" element={<Home idioma={idioma} />} />
        <Route path="/nyp-global" element={<NypGlobal />} />
        <Route path="/nyp-social-lab" element={<NypSocialLab />} />
        <Route path="/login" element={<Login idioma={idioma} />} />
      </Routes>
    </>
  );
}