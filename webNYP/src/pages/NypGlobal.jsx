import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nyp-global.scss";

export default function NypGlobal({ idioma }) {
  const [seccion, setSeccion] = useState("inicio");

  const menu = [
    { id: "inicio", label: "Inicio" },
    { id: "quehacemos", label: "Qué hacemos" },
    { id: "servicios", label: "Servicios" },
    { id: "ia", label: "Ingeniería de IA" },
    { id: "experiencia", label: "Experiencia" },
    { id: "evalua", label: "Evalúa tu proyecto" },
    { id: "contacto", label: "Contacto" },
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
          <section className="area-hero">
            <p className="eyebrow">NYP GLOBAL</p>
            <h1>
              Financiación, innovación<br />
              y tecnología para proyectos<br />
              que <em>importan.</em>
            </h1>
            <p className="hero-desc">
              Trabajamos con empresas, universidades, administraciones y
              asociaciones empresariales en Europa, Latinoamérica y Oriente
              Medio en proyectos de alto impacto. Subvenciones de gran volumen,
              I+D+i, ingeniería de IA y transferencia tecnológica.
            </p>
            <div className="area-actions">
              <button className="btn-primary" onClick={() => setSeccion("evalua")}>
                EVALÚA TU PROYECTO →
              </button>
              <button className="btn-ghost" onClick={() => setSeccion("quehacemos")}>
                CÓMO TRABAJAMOS
              </button>
            </div>
            <div className="action-labels">
              <span>Diagnóstico inicial gratuito y sin compromiso</span>
              <span>Sin letra pequeña</span>
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
                reales de financiación. Sin coste. Sin compromiso. Porque preferimos no trabajar
                contigo a hacerte perder el tiempo.
              </p>
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
              sólidos, con narrativa técnica potente y viabilidad real — y luego los
              presentamos. La diferencia está en la tasa de éxito, el retorno para la
              entidad y la calidad en la ejecución.
            </p>
          </section>

          <section className="why-section">
            <p className="eyebrow">POR QUÉ NYP GLOBAL</p>
            <div className="numbered-grid">
              <article>
                <span className="num">01</span>
                <h3>Solo proyectos de envergadura</h3>
                <p>Trabajamos en proyectos desde 100.000€. Nuestro foco es la complejidad y el volumen, no el volumen de expedientes.</p>
              </article>
              <article>
                <span className="num">02</span>
                <h3>Especialización en innovación y tecnología</h3>
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
                  <p>Analizamos tu proyecto, tu organización y el contexto de financiación disponible. Te decimos qué convocatorias encajan y con qué probabilidad real de éxito.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">02</span>
                <div>
                  <h3>Diseño técnico del proyecto</h3>
                  <p>Construimos la arquitectura del proyecto — objetivos, actividades, presupuesto, indicadores y narrativa técnica — para maximizar su competitividad.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">03</span>
                <div>
                  <h3>Presentación y seguimiento</h3>
                  <p>Gestionamos la presentación completa y el seguimiento ante el organismo financiador hasta la resolución.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">04</span>
                <div>
                  <h3>Ejecución y justificación</h3>
                  <p>Acompañamos la ejecución del proyecto aprobado y gestionamos su justificación técnica y económica completa.</p>
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
              normativa requieren un partner con experiencia real, no conocimiento
              genérico.
            </p>
          </section>

          <section className="services-section">
            <div className="services-grid">
              <article>
                <span className="tag">FINANCIACIÓN</span>
                <h3>Subvenciones de gran volumen</h3>
                <p>Identificación, diseño, presentación y justificación de proyectos subvencionados desde 100.000€. Convocatorias nacionales, europeas e internacionales.</p>
              </article>
              <article>
                <span className="tag">INNOVACIÓN</span>
                <h3>Proyectos de I+D+i</h3>
                <p>Diseño y gestión de proyectos de investigación, desarrollo e innovación. Coordinación de consorcios y agrupaciones empresariales para convocatorias competitivas.</p>
              </article>
              <article>
                <span className="tag">DIGITAL</span>
                <h3>Transformación digital</h3>
                <p>Consultoría y formación en digitalización para empresas, asociaciones empresariales y administraciones. Agentes de Transformación Digital certificados.</p>
              </article>
              <article>
                <span className="tag">TRANSFERENCIA</span>
                <h3>Transferencia tecnológica</h3>
                <p>Conexión entre grupos de investigación, centros tecnológicos y empresas para la valorización y explotación de resultados de I+D+i.</p>
              </article>
              <article>
                <span className="tag">FORMACIÓN</span>
                <h3>Formación y mentoría</h3>
                <p>Programas especializados en digitalización, innovación y gestión de proyectos. Mentoría estratégica para equipos y organizaciones en procesos de transformación.</p>
              </article>
              <article>
                <span className="tag">EVENTOS</span>
                <h3>Eventos B2B de innovación</h3>
                <p>Organización de encuentros empresariales, misiones tecnológicas, jornadas de matchmaking y eventos de ecosistema innovador a nivel nacional e internacional.</p>
              </article>
              <article className="empty-cell" aria-hidden="true"></article>
              <article className="empty-cell" aria-hidden="true"></article>
            </div>
          </section>

          <section className="cta-band">
            <div className="cta-box">
              <p className="cta-title">¿No sabes si tu proyecto encaja?</p>
              <p className="cta-body">
                Cuéntanoslo. El diagnóstico inicial es gratuito y te damos una valoración honesta en
                menos de 48 horas. Si no vemos opciones reales, te lo decimos sin rodeos.
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
                inteligentes, confiables y escalables que transforman la forma en que tu
                organización opera, decide y crece.
              </p>
              <p className="hero-desc hero-desc-light">
                Para empresas, administraciones y grupos de investigación que necesitan IA real —
                no demos.
              </p>
            </div>
          </section>

          <section className="capacidades-section">
            <p className="eyebrow">NUESTRAS CAPACIDADES</p>
            <div className="capacidades-grid">
              <article>
                <h3>Arquitecturas de IA confiable</h3>
                <p>Diseño e implementación de sistemas de IA robustos, auditables y alineados con los requisitos de gobernanza y cumplimiento normativo de tu organización.</p>
              </article>
              <article>
                <h3>Datasets y entrenamiento privados</h3>
                <p>Construcción de datasets propietarios y entrenamiento de modelos sobre datos privados de la organización. Máxima privacidad, máximo rendimiento.</p>
              </article>
              <article>
                <h3>Sistemas multiagente autónomos</h3>
                <p>Diseño y despliegue de arquitecturas multiagente capaces de ejecutar flujos de trabajo complejos de forma autónoma, coordinada y supervisada.</p>
              </article>
              <article>
                <h3>Infraestructura de IA predictiva</h3>
                <p>Infraestructura optimizada para modelos de alta demanda computacional. Rendimiento, escalabilidad y eficiencia en producción.</p>
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
                Muchas organizaciones invierten en IA sin una base técnica sólida. Nosotros diseñamos
                desde la arquitectura — para que tu inversión escale, sea auditable y genere resultados
                medibles.
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
          <section className="area-hero">
            <p className="eyebrow">EXPERIENCIA</p>
            <h1>
              Proyectos de alto impacto<br />
              en los sectores que<br />
              más <em>evolucionan.</em>
            </h1>
            <p className="hero-desc">
              Hemos trabajado con empresas, universidades, grupos de investigación,
              startups y administraciones en proyectos de innovación, digitalización y
              financiación de gran escala.
            </p>
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
                <p>Asistencia técnica, digitalización de servicios públicos y gestión de fondos europeos para AAPP.</p>
              </article>
              <article>
                <h3>Universidad e investigación</h3>
                <p>Proyectos con grupos de investigación, spin-offs, valorización de resultados y programas Horizonte Europa.</p>
              </article>
              <article>
                <h3>Asociaciones empresariales</h3>
                <p>Proyectos de promoción empresarial, digitalización sectorial, internacionalización y acceso a financiación para colectivos de empresas.</p>
              </article>
            </div>
          </section>

          <section className="exp-cta-band">
            <p className="exp-cta-text">¿Quieres conocer nuestra experiencia en tu sector? Cuéntanos tu proyecto y te lo explicamos en detalle.</p>
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
              menos de 48 horas con una valoración honesta — sin coste y sin
              compromiso.
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
                <p className="file-note">Memorias técnicas, convocatorias de interés, planes de negocio o cualquier documento relevante.</p>
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
              Trabajamos con organizaciones en Europa, Latinoamérica y Oriente Medio. Si
              tienes un proyecto ambicioso y quieres saber si tiene recorrido, escríbenos.
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