
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

/* COMPONENTES */
import Navbar from "./components/Navbar";

/* PÁGINAS */
import Consultoria from "./pages/Consultoria";
import AsistenciaTecnica from "./pages/AsistenciaTecnica";
import FondosEuropeos from "./pages/FondosEuropeos";
import Innovacion from "./pages/Innovacion";
import Login from "./pages/Login";

/* ASSETS */
import videoFondo from "./assets/video.mp4";
import logoEnyp from "./assets/logo-Enyp.png";
import img2 from "./assets/img2.webp";

/* TRADUCCIONES */
import traducciones from "./assets/traducciones";

/* ESTILOS */
import "./App.scss";

/* HOME embebida en App.jsx */
function Home({ idioma }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  const t = traducciones[idioma] || traducciones.es;

  return (
    <div className="App">
      {/* VIDEO HERO */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={videoFondo} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      {/* HERO */}
      <header className={`hero ${visible ? "is-visible" : ""}`}>
        <div className="hero-content">
          <img src={logoEnyp} alt="Logo Enyp Hub" className="main-logo" />
          <p>{t.heroTexto}</p>
          <div className="descubre">{t.consultoriaEstrategica}</div>
          <button className="cta-button">{t.empezarProyecto}</button>
        </div>
      </header>

      <main>
        {/* ¿QUÉ HACEMOS? */}
        <section id="que-hacemos" className="section-dark">
          <div className="container">
            <h2 className="section-title-dark">{t.queHacemos}</h2>

            <div className="services-grid">
              {/* CONSULTORÍA */}
              <div className="service-card">
                <h3>
                  <span>{t.consultoriaTitulo}</span> {t.consultoriaTipo}
                </h3>
                <p className="subtitle">
                  <strong>{t.consultoriaAmbitoStrong}</strong> {t.consultoriaAmbito}
                </p>
                <ul>
                  <li>{t.consultoriaLi1}</li>
                  <li>{t.consultoriaLi2}</li>
                  <li>{t.consultoriaLi3}</li>
                  <li>{t.consultoriaLi4}</li>
                </ul>
                <button className="btn-service">{t.masInfo} →</button>
              </div>

              {/* ASISTENCIA TÉCNICA */}
              <div className="service-card">
                <h3>
                  <span>{t.asistenciaTitulo}</span> {t.asistenciaTipo}
                </h3>
                <p className="subtitle">
                  <strong>{t.asistenciaAmbitoStrong}</strong> {t.asistenciaAmbito}
                </p>
                <ul>
                  <li>{t.asistenciaLi1}</li>
                  <li>{t.asistenciaLi2}</li>
                  <li>{t.asistenciaLi3}</li>
                  <li>{t.asistenciaLi4}</li>
                </ul>
                <button className="btn-service">{t.masInfo} →</button>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMAS FORMATIVOS */}
        <section id="formacion" className="section-white">
          <div className="container">
            <h2 className="section-title">{t.formacion}</h2>

            <div className="cards-grid">
              <div className="card">
                <div className="card-image">
                  <img src={img2} alt="Formación 1" />
                </div>
                <div className="card-content">
                  <h3>{t.emprendimiento}</h3>
                  <p>{t.textoEmprendimiento}</p>
                  <button className="btn-more">{t.masInfo} →</button>
                </div>
              </div>

              <div className="card">
                <div className="card-image">
                  <img src={img2} alt="Formación 2" />
                </div>
                <div className="card-content">
                  <h3>{t.innovacionFormacion}</h3>
                  <p>{t.innovacionFormacionTexto}</p>
                  <button className="btn-more">{t.masInfo} →</button>
                </div>
              </div>

              <div className="card">
                <div className="card-image">
                  <img src={img2} alt="Formación 3" />
                </div>
                <div className="card-content">
                  <h3>{t.politicasPublicas}</h3>
                  <p>{t.politicasPublicasTexto}</p>
                  <button className="btn-more">{t.masInfo} →</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section id="como-trabajamos" className="section-work">
          <div className="work-container">
            <div className="work-content">
              <h2 className="work-title">{t.comoTrabajamos}</h2>
              <p className="work-text">{t.comoTrabajamosTexto}</p>
              <div className="work-grid">
                <div className="work-box">{t.workBox1}</div>
                <div className="work-box">{t.workBox2}</div>
                <div className="work-box">{t.workBox3}</div>
                <div className="work-box">{t.workBox4}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* === APP === */
export default function App() {
  // Estado idioma con persistencia
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
        <Route path="/consultoria" element={<Consultoria idioma={idioma} />} />
        <Route path="/asistencia" element={<AsistenciaTecnica idioma={idioma} />} />
        <Route path="/fondos" element={<FondosEuropeos idioma={idioma} />} />
        <Route path="/innovacion" element={<Innovacion idioma={idioma} />} />
        <Route path="/login" element={<Login idioma={idioma} />} />
      </Routes>
    </>
  );
}
