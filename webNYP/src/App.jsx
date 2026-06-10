import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import NypGlobal from "./pages/NypGlobal";
import NypSocialLab from "./pages/NypSocialLab";

import traducciones from "./assets/traducciones";
import "./App.scss";

function Home({ idioma }) {
  const t = traducciones[idioma] || traducciones.es;

  return (
    <div className="portal-home">
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

      <section className="cta-section" id="contacto">
        <h2>
          {t.ctaTitulo}
        </h2>

        <p>{t.ctaTexto}</p>

        <div className="cta-actions">
          <button>{t.ctaEmpresa}</button>
          <button>{t.ctaSocial}</button>
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
          <h4>{t.footerNavegacion}</h4>
          <p>NYP Global</p>
          <p>NYP Social Lab</p>
          <p>Área Cliente</p>
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
    </div>
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
        <Route path="/nyp-global" element={<NypGlobal idioma={idioma} />} />
        <Route path="/nyp-social-lab" element={<NypSocialLab idioma={idioma} />} />
        <Route path="/login" element={<Login idioma={idioma} />} />
      </Routes>
    </>
  );
}