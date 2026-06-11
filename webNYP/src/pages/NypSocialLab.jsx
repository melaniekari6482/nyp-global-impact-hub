import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../styles/nyp-social-lab.scss";

import img1 from "../assets/img1Nyp.jpg";
import img2 from "../assets/img2Nyp.jpg";
import img3 from "../assets/img3Nyp.jpg";
import img4 from "../assets/img4Nyp.jpg";
import img5 from "../assets/img5Nyp.jpg";
import img6 from "../assets/img6Nyp.jpg";
import img7 from "../assets/img7Nyp.jpg";

export default function NypSocialLab({ idioma }) {
  const [seccion, setSeccion] = useState("inicio");
  const [orgType, setOrgType] = useState(null);
  const [ambitoType, setAmbitoType] = useState(null);
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
    { id: "proyectos",   label: "Proyectos" },
    { id: "mercantiles", label: "Mercantiles" },
    { id: "financiacion",label: "¿Hay financiación?" },
    { id: "presenta",    label: "Presenta tu proyecto" },
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
          {/* Hero con imagen */}
          <section className="page-hero-img" style={{ backgroundImage: `url(${img2})` }}>
            <div className="page-hero-overlay">
              <div className="page-hero-content">
                <p className="eyebrow eyebrow-light">NYP SOCIAL LAB</p>
                <h1>
                  Trabajamos para que las causas<br />
                  que importan puedan<br />
                  <em>hacerse realidad.</em>
                </h1>
                <p className="hero-desc hero-desc-light">
                  Acompañamos a ONG, fundaciones y entidades sociales en la captación
                  de fondos, el diseño de proyectos y su ejecución.
                </p>
                <div className="area-actions" style={{ marginTop: "32px" }}>
                  <button className="btn-primary" onClick={() => setSeccion("presenta")}>
                    PRESENTA TU PROYECTO →
                  </button>
                  <button className="btn-ghost-light" onClick={() => setSeccion("quehacemos")}>
                    CÓMO TRABAJAMOS
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="steps-band">
            <div className="steps-inline-grid">
              <div className="step-inline">
                <span className="step-inline-num">01</span>
                <div>
                  <h4>Captación de fondos</h4>
                  <p>Identificamos convocatorias y gestionamos la financiación que tu entidad necesita.</p>
                </div>
              </div>
              <div className="step-inline">
                <span className="step-inline-num">02</span>
                <div>
                  <h4>Diseño de proyectos</h4>
                  <p>Convertimos tu idea en una propuesta sólida, coherente y competitiva.</p>
                </div>
              </div>
              <div className="step-inline">
                <span className="step-inline-num">03</span>
                <div>
                  <h4>Gestión y justificación</h4>
                  <p>Gestionamos la subvención aprobada y la justificamos ante el organismo financiador.</p>
                </div>
              </div>
              <div className="step-inline">
                <span className="step-inline-num">04</span>
                <div>
                  <h4>Ejecución y formación</h4>
                  <p>Ejecutamos materialmente el proyecto y formamos a vuestros equipos.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Split imagen + texto */}
          <section className="split-section">
            <div className="split-img">
              <img src={img4} alt="Entidades sociales" />
            </div>
            <div className="split-content">
              <p className="eyebrow">HONORARIOS ALINEADOS</p>
              <h2>Solo cobramos si tú consigues la financiación.</h2>
              <p>
                En la mayoría de los proyectos trabajamos a éxito. Sin sorpresas,
                sin letra pequeña. Con total transparencia desde el primer momento.
              </p>
              <button className="btn-primary" onClick={() => setSeccion("quehacemos")}>
                VER MODELOS DE HONORARIOS →
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
              No somos una consultora<br />
              al uso. Somos tu equipo<br />
              de <em>proyectos.</em>
            </h1>
            <p className="hero-desc">
              Muchas entidades sociales tienen ideas poderosas y equipos comprometidos.
              Lo que les falta es tiempo, experiencia técnica y conocimiento del sistema
              de financiación. Nosotros cubrimos exactamente ese espacio.
            </p>
          </section>

          <section className="why-section">
            <p className="eyebrow">POR QUÉ NYP SOCIAL LAB</p>
            <div className="numbered-grid">
              <article>
                <span className="num">01</span>
                <h3>Transparencia total</h3>
                <p>Acceso en tiempo real al estado de cada proyecto. Sin llamadas para preguntar en qué punto está tu subvención.</p>
              </article>
              <article>
                <span className="num">02</span>
                <h3>Honorarios alineados</h3>
                <p>Trabajamos a éxito cuando la convocatoria lo permite. Ganamos cuando tú ganas.</p>
              </article>
              <article>
                <span className="num">03</span>
                <h3>Acompañamiento completo</h3>
                <p>Del diseño inicial a la justificación final. No desaparecemos después de la presentación.</p>
              </article>
              <article>
                <span className="num">04</span>
                <h3>Nacional e internacional</h3>
                <p>Gestionamos fondos europeos, subvenciones nacionales y programas de cooperación internacional.</p>
              </article>
            </div>
          </section>

          <section className="honorarios-section">
            <p className="eyebrow">NUESTRO MODELO DE HONORARIOS</p>
            <p className="honorarios-intro">Sabemos que el coste es lo primero que preguntan. Por eso lo explicamos aquí, sin rodeos.</p>
            <div className="honorarios-grid">
              <article>
                <span className="tag">MODELO 1</span>
                <h3>Solo a éxito</h3>
                <p>Honorarios únicamente si la subvención se concede. Aplicable en convocatorias estándar.</p>
              </article>
              <article>
                <span className="tag">MODELO 2</span>
                <h3>Mixto</h3>
                <p>Tarifa de presentación más porcentaje reducido si se aprueba. Para convocatorias de alta complejidad.</p>
              </article>
              <article>
                <span className="tag">MODELO 3</span>
                <h3>Iguala mensual</h3>
                <p>Fee fijo mensual para entidades con proyectos continuos que necesitan soporte permanente.</p>
              </article>
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
              Todo lo que necesita<br />
              tu entidad, en<br />
              un solo <em>equipo.</em>
            </h1>
            <p className="hero-desc">
              Desde la idea hasta la justificación final. Trabajamos en cada fase
              del ciclo de vida de tus proyectos.
            </p>
          </section>

          <section className="services-section">
            <div className="services-grid">
              <article>
                <span className="tag">FINANCIACIÓN</span>
                <h3>Captación de fondos</h3>
                <p>Identificación de convocatorias, análisis de elegibilidad, redacción y presentación. Fondos europeos, nacionales y autonómicos.</p>
              </article>
              <article>
                <span className="tag">DISEÑO</span>
                <h3>Formulación de proyectos</h3>
                <p>Diseño técnico del proyecto, definición de objetivos, actividades, indicadores y presupuesto.</p>
              </article>
              <article>
                <span className="tag">GESTIÓN</span>
                <h3>Gestión y justificación</h3>
                <p>Seguimiento técnico y económico, elaboración de informes y justificación documental.</p>
              </article>
              <article>
                <span className="tag">EJECUCIÓN</span>
                <h3>Ejecución material</h3>
                <p>Coordinación y ejecución directa de las actividades del proyecto cuando la entidad lo requiere.</p>
              </article>
              <article>
                <span className="tag">FORMACIÓN</span>
                <h3>Formación especializada</h3>
                <p>Programas formativos en gestión de proyectos, impacto social, digitalización e igualdad.</p>
              </article>
              <article>
                <span className="tag">ESTRATEGIA</span>
                <h3>Consultoría estratégica</h3>
                <p>Planes estratégicos, modelos de sostenibilidad, gobernanza y profesionalización del tercer sector.</p>
              </article>
              <article>
                <span className="tag">COMUNICACIÓN</span>
                <h3>Comunicación y diseminación</h3>
                <p>Diseño y ejecución de estrategias de comunicación para proyectos financiados. Difusión de resultados e impacto.</p>
              </article>
              <article className="service-highlight">
                <span className="tag">SERVICIO COMPLEMENTARIO</span>
                <h3>¿Tu fundación recibe donaciones de empresas?</h3>
                <p>El Sello <strong>Dona con Garantía</strong> certifica que las donaciones son fiscalmente deducibles para las empresas donadoras.</p>
                <a href="https://donacongarantia.org" target="_blank" rel="noopener noreferrer" className="link-arrow">
                  Conoce donacongarantia.org →
                </a>
              </article>
            </div>
          </section>

          <section className="cta-band">
            <div className="cta-box">
              <p className="cta-title">¿No sabes si tu proyecto encaja?</p>
              <p className="cta-body">
                El diagnóstico inicial es gratuito. Te respondemos en menos de 48 horas.
              </p>
              <button className="btn-primary" onClick={() => setSeccion("presenta")}>
                SOLICITAR DIAGNÓSTICO GRATUITO →
              </button>
            </div>
          </section>
        </>
      )}

      {/* ── PROYECTOS ── */}
      {seccion === "proyectos" && (
        <>
          {/* Hero con imagen */}
          <section className="page-hero-img" style={{ backgroundImage: `url(${img7})` }}>
            <div className="page-hero-overlay">
              <div className="page-hero-content">
                <p className="eyebrow eyebrow-light">IMPACTO REAL</p>
                <h1>
                  Proyectos que<br />
                  <em>transforman realidades.</em>
                </h1>
                <p className="hero-desc hero-desc-light">
                  Trabajamos con entidades de toda España en proyectos de inclusión social,
                  cooperación internacional, desarrollo rural, igualdad y digitalización.
                </p>
              </div>
            </div>
          </section>

          <section className="sectores-section">
            <p className="eyebrow">ÁMBITOS DE ACTUACIÓN</p>
            <div className="sectores-grid">
              <article>
                <h3>Inclusión y cohesión social</h3>
                <p>Proyectos con colectivos vulnerables, inserción laboral y apoyo a personas en riesgo de exclusión.</p>
              </article>
              <article>
                <h3>Cooperación internacional</h3>
                <p>Proyectos de desarrollo en el marco de programas europeos y agencias de cooperación.</p>
              </article>
              <article>
                <h3>Igualdad y género</h3>
                <p>Planes de igualdad, proyectos con perspectiva de género y programas para mujeres en entornos rurales.</p>
              </article>
              <article>
                <h3>Desarrollo rural</h3>
                <p>Dinamización económica y social de territorios rurales, economía verde y sostenibilidad.</p>
              </article>
            </div>
          </section>

          {/* Split imagen */}
          <section className="split-section split-reverse">
            <div className="split-content">
              <p className="eyebrow">ENFOQUE REGENERATIVO</p>
              <h2>Impacto duradero,<br />no solo resultados inmediatos.</h2>
              <p>
                Diseñamos proyectos orientados a generar capacidades que perduran
                en las organizaciones y los territorios donde trabajamos.
              </p>
              <button className="btn-primary" onClick={() => setSeccion("presenta")}>
                CUÉNTANOS TU PROYECTO →
              </button>
            </div>
            <div className="split-img">
              <img src={img5} alt="Impacto social" />
            </div>
          </section>

          <section className="seguimiento-section">
            <p className="eyebrow">SEGUIMIENTO EN TIEMPO REAL</p>
            <h2>
              Sabes en todo momento<br />
              en qué punto está<br />
              tu <em>proyecto.</em>
            </h2>
            <p className="seguimiento-desc">
              Accede a tu área privada y consulta el estado actualizado de cada expediente.
              Sin llamadas. Sin esperas.
            </p>
            <div className="seguimiento-grid">
              <article>
                <h4>Panel de proyectos</h4>
                <p>Vista general de todos tus proyectos activos con su estado, fase actual y próximos pasos.</p>
              </article>
              <article>
                <h4>Documentación centralizada</h4>
                <p>Todos los documentos de cada expediente organizados y accesibles desde un único lugar.</p>
              </article>
              <article>
                <h4>Alertas y notificaciones</h4>
                <p>Te avisamos de resoluciones, plazos críticos y cambios de estado en tiempo real.</p>
              </article>
              <article>
                <h4>Canal directo con tu equipo</h4>
                <p>Comunicación directa con los consultores responsables de cada proyecto.</p>
              </article>
            </div>
            <div className="cliente-access-note">
              <p>¿Ya eres cliente? Accede a tu área privada con las credenciales que te hemos facilitado. Si tienes algún problema escríbenos a <a href="mailto:soporte@nyphub.com">soporte@nyphub.com</a></p>
            </div>
          </section>
        </>
      )}

      {/* ── MERCANTILES ── */}
      {seccion === "mercantiles" && (
        <>
          <section className="area-hero">
            <p className="eyebrow">FUNDACIONES Y MERCANTILES</p>
            <h1>
              Cuando una fundación<br />
              y su mercantil trabajan<br />
              juntas, el impacto<br />
              se <em>multiplica.</em>
            </h1>
            <p className="hero-desc">
              Cuando esa relación está bien diseñada, ambas entidades se refuerzan
              mutuamente — sin comprometer la misión fundacional.
            </p>
          </section>

          <section className="mercantiles-quote-section">
            <blockquote>
              "Si la fundación sigue siendo solo filantropía, será marginal.<br />
              Si se convierte en infraestructura estratégica, será decisiva."
            </blockquote>
            <p className="mercantiles-quote-body">
              Nuestra experiencia trabajando en la frontera entre el tercer sector y el mundo
              empresarial nos permite diseñar modelos que respetan la identidad y el propósito
              de cada entidad.
            </p>
          </section>

          <section className="steps-section">
            <p className="eyebrow">LO QUE HACEMOS</p>
            <div className="steps-list">
              <div className="step-row">
                <span className="step-num">01</span>
                <div>
                  <h3>Diagnóstico estratégico de la relación fundación-mercantil</h3>
                  <p>Analizamos cómo interactúan actualmente ambas entidades, qué oportunidades de mejora existen y qué riesgos hay que gestionar.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">02</span>
                <div>
                  <h3>Diseño del modelo de interacción</h3>
                  <p>Definimos qué palancas permiten que la fundación impulse los resultados de la mercantil — y viceversa.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">03</span>
                <div>
                  <h3>Optimización fiscal y operativa</h3>
                  <p>Identificamos cómo estructurar las operaciones entre ambas entidades optimizando resultados en los dos lados.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">04</span>
                <div>
                  <h3>Captación de financiación para ambas entidades</h3>
                  <p>Gestionamos subvenciones que pueden beneficiar tanto a la fundación como a la mercantil vinculada.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">05</span>
                <div>
                  <h3>Comunicación e impacto</h3>
                  <p>Diseñamos la narrativa que explica la relación entre ambas entidades de forma transparente y creíble.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="no-hacemos-section">
            <p className="eyebrow">LO QUE NO HACEMOS</p>
            <p className="no-hacemos-text">
              No promovemos la creación de mercantiles como solución universal.
              Si tras el diagnóstico concluimos que la mercantil no aporta valor real,
              os lo diremos sin rodeos.
            </p>
          </section>

          <section className="exp-cta-band">
            <p className="exp-cta-text">¿Tienes dudas? La primera conversación es gratuita y sin compromiso.</p>
            <button className="btn-primary" onClick={() => setSeccion("contacto")}>
              HABLEMOS →
            </button>
          </section>
        </>
      )}

      {/* ── ¿HAY FINANCIACIÓN? ── */}
      {seccion === "financiacion" && (
        <>
          <section className="area-hero">
            <p className="eyebrow">¿HAY FINANCIACIÓN PARA TU PROYECTO?</p>
            <h1>
              Descubre qué fondos<br />
              existen para lo que<br />
              quieres <em>hacer.</em>
            </h1>
            <p className="hero-desc">
              Selecciona tu perfil y el ámbito de tu proyecto. Te mostramos las principales
              fuentes de financiación disponibles.
            </p>
          </section>

          <section className="financiacion-filter-section">
            <div className="filter-group">
              <p className="filter-label">¿QUÉ TIPO DE ORGANIZACIÓN ERES?</p>
              <div className="filter-pills">
                {["ONG / Asociación", "Fundación", "Entidad pública social", "Cooperativa / Economía social"].map((opt) => (
                  <button
                    key={opt}
                    className={orgType === opt ? "pill active" : "pill"}
                    onClick={() => setOrgType(opt === orgType ? null : opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <p className="filter-label">¿EN QUÉ ÁMBITO TRABAJA TU PROYECTO?</p>
              <div className="filter-pills">
                {["Inclusión social", "Mujer y género", "Educación y formación", "Medio ambiente", "Cooperación internacional", "Desarrollo rural", "Salud y bienestar", "Cultura y patrimonio", "Digitalización e innovación"].map((opt) => (
                  <button
                    key={opt}
                    className={ambitoType === opt ? "pill active" : "pill"}
                    onClick={() => setAmbitoType(opt === ambitoType ? null : opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="fondos-section">
            <p className="eyebrow">PRINCIPALES FUENTES DE FINANCIACIÓN DISPONIBLES</p>
            <div className="fondos-grid">
              <article>
                <span className="fondo-badge">EU</span>
                <h3>Fondos Europeos</h3>
                <p>FSE+, FEDER, FEADER, POISES, Horizonte Europa, Erasmus+, LIFE y programas de cooperación territorial.</p>
              </article>
              <article>
                <span className="fondo-badge">ES</span>
                <h3>Subvenciones Nacionales</h3>
                <p>Ministerios de Derechos Sociales, Igualdad, Cultura, Educación y Transición Ecológica.</p>
              </article>
              <article>
                <span className="fondo-badge">AU</span>
                <h3>Autonómicas y Locales</h3>
                <p>Consejerías, diputaciones y ayuntamientos. Convocatorias anuales de servicios sociales, igualdad y cultura.</p>
              </article>
              <article>
                <span className="fondo-badge">PR</span>
                <h3>Financiación Privada</h3>
                <p>Fundaciones corporativas, programas de RSC y convocatorias de filantropía estratégica.</p>
              </article>
              <article>
                <span className="fondo-badge">INT</span>
                <h3>Cooperación Internacional</h3>
                <p>AECID, PNUD, Banco Mundial y agencias de cooperación bilateral.</p>
              </article>
              <article className="fondos-highlight">
                <span className="fondo-badge">★</span>
                <h3>Alertas personalizadas</h3>
                <p>Recibe convocatorias en tiempo real filtradas por tu perfil y ámbito.</p>
                <button className="btn-primary" onClick={() => navigate("/login")}>
                  ACCEDER AL ÁREA CLIENTE →
                </button>
              </article>
            </div>
          </section>

          <section className="exp-cta-band">
            <p className="exp-cta-text">¿Quieres saber exactamente qué convocatorias encajan con tu proyecto?</p>
            <button className="btn-primary" onClick={() => setSeccion("presenta")}>
              SOLICITAR ANÁLISIS GRATUITO →
            </button>
          </section>
        </>
      )}

      {/* ── PRESENTA TU PROYECTO ── */}
      {seccion === "presenta" && (
        <>
          <section className="area-hero">
            <p className="eyebrow">PRESENTA TU PROYECTO</p>
            <h1>
              Cuéntanos qué necesitas.<br />
              Nosotros hacemos<br />
              el <em>resto.</em>
            </h1>
            <p className="hero-desc">
              Rellena el formulario y adjunta la documentación relevante. Te respondemos
              en un plazo máximo de 48 horas con una valoración inicial sin compromiso.
            </p>
          </section>

          <section className="form-section">
            <form className="project-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label>NOMBRE DE LA ENTIDAD</label>
                <input type="text" placeholder="Nombre de tu ONG, fundación o entidad" />
              </div>
              <div className="form-field">
                <label>PERSONA DE CONTACTO</label>
                <input type="text" placeholder="Nombre y apellidos" />
              </div>
              <div className="form-field">
                <label>EMAIL</label>
                <input type="email" placeholder="correo@entidad.org" />
              </div>
              <div className="form-field">
                <label>TELÉFONO <span className="optional">(opcional)</span></label>
                <input type="tel" placeholder="Si prefieres que te llamemos" />
              </div>
              <div className="form-field">
                <label>TIPO DE ENTIDAD</label>
                <select>
                  <option>Selecciona una opción</option>
                  <option>ONG / Asociación</option>
                  <option>Fundación</option>
                  <option>Entidad pública con programa social</option>
                  <option>Cooperativa / Economía social</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="form-field">
                <label>¿QUÉ NECESITAS?</label>
                <select>
                  <option>Selecciona una opción</option>
                  <option>Captación de fondos / Subvenciones</option>
                  <option>Diseño de un proyecto</option>
                  <option>Gestión y justificación de subvención aprobada</option>
                  <option>Consultoría estratégica</option>
                  <option>Formación</option>
                  <option>No lo sé todavía, quiero orientación</option>
                </select>
              </div>
              <div className="form-field">
                <label>DESCRIBE TU SITUACIÓN O PROYECTO</label>
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
                <p className="file-note">Estatutos, memorias, convocatorias o cualquier documento relevante.</p>
              </div>
              <div className="form-privacy">
                <span className="privacy-dot" />
                <p>Tus datos se tratan con total confidencialidad conforme al RGPD. Nunca los compartiremos con terceros.</p>
              </div>
              <button type="submit" className="btn-primary btn-full">
                ENVIAR SOLICITUD →
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
              Detrás de cada proyecto<br />
              hay personas. Y nosotros<br />
              estamos aquí para <em>ellas.</em>
            </h1>
            <p className="hero-desc">
              Escríbenos y te respondemos en menos de 48 horas. Tratamos cada consulta
              como si fuera la nuestra.
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
                <span className="contact-value">NYP Social Lab</span>
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
              "No cobramos por escucharte.<br />
              La primera conversación es siempre gratuita."
            </blockquote>
            <p className="contact-quote-attr">Cuéntanoslo. Hay proyectos que solo necesitan que alguien los escuche bien.</p>
            <button className="btn-primary" onClick={() => setSeccion("presenta")}>
              PRESENTA TU PROYECTO →
            </button>
          </section>
        </>
      )}
    </main>
  );
}