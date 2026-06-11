import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../styles/nyp-global.scss";

import img1 from "../assets/img1Nyp.jpg";
import img2 from "../assets/img2Nyp.jpg";
import img3 from "../assets/img3Nyp.jpg";
import img4 from "../assets/img4Nyp.jpg";
import img5 from "../assets/img5Nyp.jpg";
import img6 from "../assets/img6Nyp.jpg";
import img7 from "../assets/img7Nyp.jpg";

export default function NypGlobal({ idioma }) {
  const [seccion, setSeccion] = useState("inicio");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const s = searchParams.get("seccion");
    if (s) setSeccion(s);
  }, [searchParams]);

  const menu = [
    { id: "inicio",      label: "Inicio" },
    { id: "quehacemos",  label: "Qué hacemos" },
    { id: "servicios",   label: "Servicios" },
    { id: "ia",          label: "Ingeniería de IA" },
    { id: "experiencia", label: "Experiencia" },
    { id: "evalua",      label: "Evalúa tu proyecto" },
    { id: "contacto",    label: "Contacto" },
  ];

  return (
    <main className="nyp-area-page">
      <nav className="subnav">
        {menu.map((item) => (
          <button
            key={item.id}
            className={seccion === item.id ? "active" : ""}
            onClick={() => setSeccion(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* ── INICIO ── */}
      {seccion === "inicio" && (
        <>
          <section className="page-hero-img" style={{ backgroundImage: `url(${img1})` }}>
            <div className="page-hero-overlay">
              <div className="page-hero-content">
                <p className="eyebrow eyebrow-light">NYP GLOBAL</p>
                <h1>
                  Financiación, innovación<br />
                  y tecnología para proyectos<br />
                  que <em>importan.</em>
                </h1>
                <p className="hero-desc hero-desc-light">
                  Trabajamos con empresas, universidades, administraciones y
                  asociaciones en Europa, Latinoamérica y Oriente Medio.
                </p>
                <div className="area-actions" style={{ marginTop: "32px" }}>
                  <button className="btn-primary" onClick={() => setSeccion("evalua")}>
                    EVALÚA TU PROYECTO →
                  </button>
                  <button className="btn-ghost-light" onClick={() => setSeccion("quehacemos")}>
                    CÓMO TRABAJAMOS
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="stats-band">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">+100K€</span>
                <span className="stat-label">Financiación mínima que buscamos<br />para cada cliente</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Nacional<br />+ EU</span>
                <span className="stat-label">Ámbito de financiación</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">I+D+i</span>
                <span className="stat-label">Especialización en innovación</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">IA</span>
                <span className="stat-label">Ingeniería de alto rendimiento</span>
              </div>
            </div>
          </section>

          <section className="truth-band">
            <div className="truth-box">
              <p className="truth-title">Lo primero que hacemos es decirte la verdad.</p>
              <p className="truth-body">
                Antes de hablar de honorarios, analizamos tu proyecto y te decimos si tiene opciones
                reales de financiación. Sin coste. Sin compromiso.
              </p>
            </div>
          </section>

          <section className="split-section">
            <div className="split-img">
              <img src={img3} alt="Innovación y tecnología" />
            </div>
            <div className="split-content">
              <p className="eyebrow">NUESTRO ENFOQUE</p>
              <h2>No gestionamos expedientes.<br />Construimos proyectos.</h2>
              <p>
                La diferencia entre presentar una solicitud y diseñar un proyecto competitivo
                está en la tasa de éxito. Nosotros nos quedamos con la segunda opción.
              </p>
              <button className="btn-primary" onClick={() => setSeccion("quehacemos")}>
                VER CÓMO TRABAJAMOS →
              </button>
            </div>
          </section>
        </>
      )}

      {/* ── QUÉ HACEMOS ── */}
      {seccion === "quehacemos" && (
        <>
          <section className="area-hero">
            <p className="eyebrow">NUESTRA FORMA DE TRABAJAR</p>
            <h1>
              No gestionamos expedientes.<br />
              Construimos proyectos que<br />
              <em>consiguen financiación.</em>
            </h1>
            <p className="hero-desc">
              Hay consultoras que presentan solicitudes. Nosotros diseñamos proyectos
              sólidos, con narrativa técnica potente y viabilidad real.
            </p>
          </section>

          <section className="why-section">
            <p className="eyebrow">POR QUÉ NYP GLOBAL</p>
            <div className="numbered-grid">
              <article>
                <span className="num">01</span>
                <h3>Solo proyectos de envergadura</h3>
                <p>Trabajamos en proyectos desde 100.000€. Nuestro foco es la complejidad y el volumen.</p>
              </article>
              <article>
                <span className="num">02</span>
                <h3>Especialización en innovación</h3>
                <p>I+D+i, transformación digital, ingeniería de IA y transferencia tecnológica son nuestro núcleo duro.</p>
              </article>
              <article>
                <span className="num">03</span>
                <h3>Red de ecosistema</h3>
                <p>Conectamos empresas, centros tecnológicos, universidades y administraciones para construir consorcios competitivos.</p>
              </article>
              <article>
                <span className="num">04</span>
                <h3>Diagnóstico previo honesto</h3>
                <p>Antes de cualquier compromiso, te decimos si tu proyecto tiene opciones reales. Siempre.</p>
              </article>
            </div>
          </section>

          <section className="steps-section">
            <p className="eyebrow">CÓMO TRABAJAMOS</p>
            <div className="steps-list">
              <div className="step-row">
                <span className="step-num">01</span>
                <div>
                  <h3>Diagnóstico de elegibilidad</h3>
                  <p>Analizamos tu proyecto, tu organización y el contexto de financiación disponible.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">02</span>
                <div>
                  <h3>Diseño técnico del proyecto</h3>
                  <p>Construimos la arquitectura del proyecto para maximizar su competitividad.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">03</span>
                <div>
                  <h3>Presentación y seguimiento</h3>
                  <p>Gestionamos la presentación completa y el seguimiento hasta la resolución.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">04</span>
                <div>
                  <h3>Ejecución y justificación</h3>
                  <p>Acompañamos la ejecución del proyecto aprobado y gestionamos su justificación completa.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── SERVICIOS ── */}
      {seccion === "servicios" && (
        <>
          <section className="area-hero">
            <p className="eyebrow">SERVICIOS</p>
            <h1>
              Alta especialización para<br />
              proyectos de <em>alto impacto.</em>
            </h1>
            <p className="hero-desc">
              Trabajamos en ámbitos donde la complejidad técnica y la exigencia
              normativa requieren un partner con experiencia real.
            </p>
          </section>

          <section className="services-section">
            <div className="services-grid">
              <article>
                <span className="tag">FINANCIACIÓN</span>
                <h3>Subvenciones de gran volumen</h3>
                <p>Identificación, diseño, presentación y justificación desde 100.000€. Nacionales, europeas e internacionales.</p>
              </article>
              <article>
                <span className="tag">INNOVACIÓN</span>
                <h3>Proyectos de I+D+i</h3>
                <p>Diseño y gestión de proyectos de investigación, desarrollo e innovación. Coordinación de consorcios.</p>
              </article>
              <article>
                <span className="tag">DIGITAL</span>
                <h3>Transformación digital</h3>
                <p>Consultoría y formación en digitalización para empresas, asociaciones y administraciones.</p>
              </article>
              <article>
                <span className="tag">TRANSFERENCIA</span>
                <h3>Transferencia tecnológica</h3>
                <p>Conexión entre grupos de investigación, centros tecnológicos y empresas.</p>
              </article>
              <article>
                <span className="tag">FORMACIÓN</span>
                <h3>Formación y mentoría</h3>
                <p>Programas especializados en digitalización, innovación y gestión de proyectos.</p>
              </article>
              <article>
                <span className="tag">EVENTOS</span>
                <h3>Eventos B2B de innovación</h3>
                <p>Organización de encuentros empresariales, misiones tecnológicas y jornadas de matchmaking.</p>
              </article>
              <article className="empty-cell" aria-hidden="true"></article>
              <article className="empty-cell" aria-hidden="true"></article>
            </div>
          </section>

          <section className="cta-band">
            <div className="cta-box">
              <p className="cta-title">¿No sabes si tu proyecto encaja?</p>
              <p className="cta-body">
                El diagnóstico inicial es gratuito y te damos una valoración honesta en menos de 48 horas.
              </p>
              <button className="btn-primary" onClick={() => setSeccion("evalua")}>
                SOLICITAR DIAGNÓSTICO GRATUITO →
              </button>
            </div>
          </section>
        </>
      )}

      {/* ── INGENIERÍA DE IA ── */}
      {seccion === "ia" && (
        <>
          <section className="ia-hero">
            <div className="ia-hero-inner">
              <p className="eyebrow eyebrow-light">NYP GLOBAL · INGENIERÍA DE IA</p>
              <h1>
                Ingeniería de Inteligencia<br />
                Artificial Generativa<br />
                de <em>alto rendimiento.</em>
              </h1>
              <p className="hero-desc hero-desc-light">
                No implementamos herramientas de IA. Diseñamos arquitecturas
                inteligentes, confiables y escalables.
              </p>
            </div>
          </section>

          <section className="capacidades-section">
            <p className="eyebrow">NUESTRAS CAPACIDADES</p>
            <div className="capacidades-grid">
              <article>
                <h3>Arquitecturas de IA confiable</h3>
                <p>Diseño e implementación de sistemas robustos, auditables y alineados con los requisitos de gobernanza.</p>
              </article>
              <article>
                <h3>Datasets y entrenamiento privados</h3>
                <p>Construcción de datasets propietarios y entrenamiento de modelos sobre datos privados.</p>
              </article>
              <article>
                <h3>Sistemas multiagente autónomos</h3>
                <p>Diseño y despliegue de arquitecturas multiagente para flujos de trabajo complejos.</p>
              </article>
              <article>
                <h3>Infraestructura de IA predictiva</h3>
                <p>Infraestructura optimizada para modelos de alta demanda computacional.</p>
              </article>
            </div>
          </section>

          <section className="ia-quote-section">
            <blockquote>
              La IA no es una herramienta que se instala.<br />
              Es una capacidad que se construye.
            </blockquote>
            <p className="ia-quote-attr">NYP Global · Ingeniería de IA</p>
          </section>

          <section className="cta-band">
            <div className="cta-box">
              <p className="cta-title">¿Tienes un proyecto de IA que necesita arquitectura real?</p>
              <p className="cta-body">
                Diseñamos desde la arquitectura para que tu inversión escale y genere resultados medibles.
              </p>
              <button className="btn-primary" onClick={() => setSeccion("evalua")}>
                CUÉNTANOS TU PROYECTO →
              </button>
            </div>
          </section>
        </>
      )}

      {/* ── EXPERIENCIA ── */}
      {seccion === "experiencia" && (
        <>
          <section className="page-hero-img" style={{ backgroundImage: `url(${img5})` }}>
            <div className="page-hero-overlay">
              <div className="page-hero-content">
                <p className="eyebrow eyebrow-light">EXPERIENCIA</p>
                <h1>
                  Proyectos de alto impacto<br />
                  en los sectores que<br />
                  más <em>evolucionan.</em>
                </h1>
                <p className="hero-desc hero-desc-light">
                  Hemos trabajado con empresas, universidades, grupos de investigación,
                  startups y administraciones en proyectos de innovación de gran escala.
                </p>
              </div>
            </div>
          </section>

          <section className="sectores-section">
            <p className="eyebrow">SECTORES DE EXPERIENCIA</p>
            <div className="sectores-grid">
              <article>
                <h3>Tecnología e innovación</h3>
                <p>I+D+i, startups tecnológicas, transferencia universidad-empresa y ecosistemas de innovación.</p>
              </article>
              <article>
                <h3>Administración pública</h3>
                <p>Asistencia técnica, digitalización de servicios públicos y gestión de fondos europeos.</p>
              </article>
              <article>
                <h3>Universidad e investigación</h3>
                <p>Proyectos con grupos de investigación, spin-offs, valorización de resultados y Horizonte Europa.</p>
              </article>
              <article>
                <h3>Asociaciones empresariales</h3>
                <p>Proyectos de promoción empresarial, digitalización sectorial e internacionalización.</p>
              </article>
            </div>
          </section>

          <section className="split-section split-reverse">
            <div className="split-content">
              <p className="eyebrow">NUESTRO ALCANCE</p>
              <h2>Europa, Latinoamérica<br />y Oriente Medio.</h2>
              <p>
                Operamos en tres continentes con un modelo de trabajo remoto y presencial
                que se adapta a cada cliente y convocatoria.
              </p>
              <button className="btn-primary" onClick={() => setSeccion("contacto")}>
                HABLEMOS →
              </button>
            </div>
            <div className="split-img">
              <img src={img6} alt="Alcance internacional" />
            </div>
          </section>

          <section className="exp-cta-band">
            <p className="exp-cta-text">¿Quieres conocer nuestra experiencia en tu sector? Cuéntanos tu proyecto.</p>
            <button className="btn-primary" onClick={() => setSeccion("contacto")}>
              HABLEMOS →
            </button>
          </section>
        </>
      )}

      {/* ── EVALÚA TU PROYECTO ── */}
      {seccion === "evalua" && (
        <>
          <section className="area-hero">
            <p className="eyebrow">EVALÚA TU PROYECTO</p>
            <h1>
              Antes de comprometerte,<br />
              saber si tiene opciones reales<br />
              no debería <em>costarte nada.</em>
            </h1>
            <p className="hero-desc">
              Cuéntanos tu proyecto. Analizamos su elegibilidad y te respondemos en
              menos de 48 horas con una valoración honesta.
            </p>
          </section>

          <section className="form-section">
            <form className="project-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label>ORGANIZACIÓN</label>
                <input type="text" placeholder="Nombre de tu empresa, universidad o entidad" />
              </div>
              <div className="form-field">
                <label>PERSONA DE CONTACTO</label>
                <input type="text" placeholder="Nombre y apellidos" />
              </div>
              <div className="form-field">
                <label>EMAIL</label>
                <input type="email" placeholder="correo@organización.com" />
              </div>
              <div className="form-field">
                <label>TELÉFONO <span className="optional">(opcional)</span></label>
                <input type="tel" placeholder="Si prefieres que te llamemos" />
              </div>
              <div className="form-field">
                <label>TIPO DE ORGANIZACIÓN</label>
                <select>
                  <option>Selecciona una opción</option>
                  <option>Empresa</option>
                  <option>Startup</option>
                  <option>Universidad</option>
                  <option>Centro tecnológico</option>
                  <option>Administración pública</option>
                  <option>Asociación empresarial</option>
                  <option>Entidad social</option>
                </select>
              </div>
              <div className="form-field">
                <label>¿QUÉ NECESITAS?</label>
                <select>
                  <option>Selecciona una opción</option>
                  <option>Captación de financiación</option>
                  <option>Diseño y gestión de proyectos I+D+i</option>
                  <option>Ingeniería de IA</option>
                  <option>Transformación digital</option>
                  <option>Transferencia tecnológica</option>
                  <option>Formación o mentoría</option>
                  <option>Organización de eventos</option>
                </select>
              </div>
              <div className="form-field">
                <label>VOLUMEN ESTIMADO DEL PROYECTO</label>
                <select>
                  <option>Selecciona una opción</option>
                  <option>100.000€ – 250.000€</option>
                  <option>250.000€ – 500.000€</option>
                  <option>500.000€ – 1.000.000€</option>
                  <option>Más de 1.000.000€</option>
                  <option>No lo sé todavía</option>
                </select>
              </div>
              <div className="form-field">
                <label>DESCRIBE TU PROYECTO O NECESIDAD</label>
                <textarea placeholder="Cuéntanos en qué consiste tu proyecto, en qué fase está y qué tipo de apoyo buscas." />
              </div>
              <div className="form-field">
                <label>DOCUMENTACIÓN <span className="optional">(opcional)</span></label>
                <div className="file-drop">
                  <span className="file-icon">↑</span>
                  <p>Arrastra aquí tus archivos o haz clic para seleccionarlos</p>
                  <p className="file-hint">PDF, Word, Excel · Máximo 20 MB por archivo</p>
                  <input type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx" />
                </div>
              </div>
              <div className="form-privacy">
                <span className="privacy-dot" />
                <p>Tus datos se tratan con total confidencialidad conforme al RGPD. Nunca los compartiremos con terceros.</p>
              </div>
              <button type="submit" className="btn-primary btn-full">
                SOLICITAR DIAGNÓSTICO GRATUITO →
              </button>
            </form>
          </section>
        </>
      )}

      {/* ── CONTACTO ── */}
      {seccion === "contacto" && (
        <>
          <section className="area-hero">
            <p className="eyebrow">CONTACTO</p>
            <h1>
              Hablamos de tu proyecto.<br />
              Sin rodeos<br />
              y sin <em>compromiso.</em>
            </h1>
            <p className="hero-desc">
              Trabajamos con organizaciones en Europa, Latinoamérica y Oriente Medio.
              La primera conversación es siempre gratuita.
            </p>
          </section>

          <section className="contact-grid-section">
            <div className="contact-grid">
              <div className="contact-cell">
                <span className="contact-label">EMAIL</span>
                <a href="mailto:hola@nyphub.com" className="contact-value">hola@nyphub.com</a>
              </div>
              <div className="contact-cell">
                <span className="contact-label">LINKEDIN</span>
                <span className="contact-value">NYP Global</span>
              </div>
              <div className="contact-cell">
                <span className="contact-label">RESPUESTA GARANTIZADA</span>
                <span className="contact-value">Menos de 48 horas</span>
              </div>
              <div className="contact-cell">
                <span className="contact-label">CONFIDENCIALIDAD</span>
                <span className="contact-value">Total. Siempre.</span>
              </div>
            </div>
          </section>

          <section className="contact-quote-section">
            <blockquote className="contact-quote">
              "Preferimos decirte que no<br />
              a hacerte perder el tiempo."
            </blockquote>
            <p className="contact-quote-attr">Honestidad antes que negocio. Siempre.</p>
            <button className="btn-primary" onClick={() => setSeccion("evalua")}>
              EVALÚA TU PROYECTO →
            </button>
          </section>
        </>
      )}
    </main>
  );
}