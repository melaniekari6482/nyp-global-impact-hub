import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nyp-social-lab.scss";

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

      {seccion === "inicio" && (
        <section className="area-hero">
          <p className="eyebrow">NYP GLOBAL</p>
          <h1>
            Financiación, innovación y tecnología para proyectos que{" "}
            <em>importan.</em>
          </h1>
          <p>
            Trabajamos con empresas, universidades, administraciones y
            asociaciones empresariales para convertir ideas en proyectos
            financiables de alto impacto.
          </p>

          <div className="area-actions">
            <button onClick={() => setSeccion("presenta")}>
              EVALÚA TU PROYECTO →
            </button>
            <button onClick={() => setSeccion("quehacemos")}>
              CÓMO TRABAJAMOS
            </button>
          </div>
        </section>
      )}

      {seccion === "quehacemos" && (
        <section className="area-section">
          <p className="eyebrow">NUESTRA FORMA DE TRABAJAR</p>
          <h1>
            No somos una consultora al uso. Somos tu equipo de{" "}
            <em>proyectos.</em>
          </h1>
          <p>
            Analizamos cada iniciativa, localizamos oportunidades de financiación
            y acompañamos a la organización desde la idea inicial hasta la
            justificación final.
          </p>

          <div className="area-grid">
            <article>
              <h3>Transparencia total</h3>
              <p>Informamos del estado real de cada expediente y convocatoria.</p>
            </article>
            <article>
              <h3>Honorarios alineados</h3>
              <p>Trabajamos a éxito siempre que el proyecto lo permite.</p>
            </article>
            <article>
              <h3>Acompañamiento completo</h3>
              <p>Diseño, presentación, seguimiento y justificación final.</p>
            </article>
            <article>
              <h3>Nacional e internacional</h3>
              <p>Fondos europeos, programas nacionales y convocatorias globales.</p>
            </article>
          </div>
        </section>
      )}

      {seccion === "servicios" && (
        <section className="area-section">
          <p className="eyebrow">SERVICIOS</p>
          <h1>
            Todo lo que necesita tu organización en un solo <em>equipo.</em>
          </h1>
          <p>
            Cubrimos las principales fases del ciclo de vida de un proyecto:
            financiación, diseño, gestión, ejecución y comunicación.
          </p>

          <div className="area-grid services-grid">
            <article>
              <span>FINANCIACIÓN</span>
              <h3>Captación de fondos</h3>
              <p>Fondos europeos, nacionales, autonómicos e internacionales.</p>
            </article>
            <article>
              <span>DISEÑO</span>
              <h3>Diseño de proyectos</h3>
              <p>Memorias técnicas, objetivos, actividades e indicadores.</p>
            </article>
            <article>
              <span>GESTIÓN</span>
              <h3>Seguimiento técnico</h3>
              <p>Control documental, hitos, informes y relación con organismos.</p>
            </article>
            <article>
              <span>EJECUCIÓN</span>
              <h3>Apoyo operativo</h3>
              <p>Acompañamiento durante la ejecución y justificación.</p>
            </article>
            <article>
              <span>IA</span>
              <h3>Ingeniería de IA</h3>
              <p>Soluciones digitales e inteligencia artificial aplicada.</p>
            </article>
            <article>
              <span>ESTRATEGIA</span>
              <h3>Consultoría estratégica</h3>
              <p>Planes de innovación, digitalización y crecimiento.</p>
            </article>
          </div>
        </section>
      )}

      {seccion === "proyectos" && (
        <section className="area-section">
          <p className="eyebrow">IMPACTO REAL</p>
          <h1>
            Proyectos que <em>transforman realidades.</em>
          </h1>
          <p>
            Trabajamos en proyectos de innovación, digitalización,
            sostenibilidad, cooperación internacional y desarrollo territorial.
          </p>

          <div className="area-grid">
            <article>
              <h3>Innovación empresarial</h3>
              <p>Competitividad, transformación digital y nuevos modelos.</p>
            </article>
            <article>
              <h3>I+D+i</h3>
              <p>Investigación, desarrollo tecnológico y transferencia.</p>
            </article>
            <article>
              <h3>Sostenibilidad</h3>
              <p>Economía circular, transición ecológica y eficiencia energética.</p>
            </article>
            <article>
              <h3>Cooperación internacional</h3>
              <p>Programas europeos e iniciativas con impacto global.</p>
            </article>
          </div>

          <div className="center-cta">
            <p>¿Quieres que estudiemos tu caso?</p>
            <button onClick={() => setSeccion("presenta")}>
              CUÉNTANOS TU PROYECTO →
            </button>
          </div>
        </section>
      )}

      {seccion === "mercantiles" && (
        <section className="area-section">
          <p className="eyebrow">MERCANTILES</p>
          <h1>
            Soluciones para empresas y entidades con actividad{" "}
            <em>económica.</em>
          </h1>
          <p>
            Acompañamos a sociedades mercantiles, startups, cooperativas,
            centros tecnológicos y empresas vinculadas a entidades sociales.
          </p>

          <div className="area-grid">
            <article>
              <h3>Startups</h3>
              <p>Financiación, innovación y crecimiento tecnológico.</p>
            </article>
            <article>
              <h3>Empresas sociales</h3>
              <p>Modelos sostenibles con impacto económico y social.</p>
            </article>
            <article>
              <h3>Cooperativas</h3>
              <p>Desarrollo territorial, empleo y economía social.</p>
            </article>
            <article>
              <h3>Centros tecnológicos</h3>
              <p>Transferencia de conocimiento y proyectos colaborativos.</p>
            </article>
          </div>
        </section>
      )}

      {seccion === "financiacion" && (
        <section className="area-section">
          <p className="eyebrow">VIABILIDAD</p>
          <h1>
            ¿Hay financiación para tu <em>proyecto?</em>
          </h1>
          <p>
            Analizamos la idea, el sector, el presupuesto y el grado de madurez
            para identificar convocatorias y oportunidades reales.
          </p>

          <div className="area-grid">
            <article>
              <h3>Fondos europeos</h3>
              <p>Programas de innovación, cooperación y transformación digital.</p>
            </article>
            <article>
              <h3>Subvenciones nacionales</h3>
              <p>Ayudas estatales para empresas, innovación e industria.</p>
            </article>
            <article>
              <h3>Programas autonómicos</h3>
              <p>Convocatorias regionales para desarrollo económico.</p>
            </article>
            <article>
              <h3>Diagnóstico inicial</h3>
              <p>Valoración previa para evitar pérdidas de tiempo.</p>
            </article>
          </div>
        </section>
      )}

      {seccion === "presenta" && (
        <section className="area-section form-section">
          <p className="eyebrow">PRESENTA TU PROYECTO</p>
          <h1>
            Cuéntanos qué necesitas. Nosotros hacemos el <em>resto.</em>
          </h1>
          <p>
            Rellena el formulario y te responderemos en un plazo máximo de 48
            horas con una valoración inicial sin compromiso.
          </p>

          <form className="project-form">
            <label>
              Nombre de la entidad
              <input type="text" placeholder="Nombre de tu organización" />
            </label>

            <label>
              Persona de contacto
              <input type="text" placeholder="Nombre y apellidos" />
            </label>

            <label>
              Email
              <input type="email" placeholder="correo@entidad.org" />
            </label>

            <label>
              Teléfono
              <input type="tel" placeholder="Teléfono de contacto" />
            </label>

            <label>
              Tipo de entidad
              <select>
                <option>Selecciona una opción</option>
                <option>Empresa</option>
                <option>Startup</option>
                <option>Universidad</option>
                <option>Administración pública</option>
                <option>Entidad social</option>
              </select>
            </label>

            <label>
              Describe tu situación o proyecto
              <textarea placeholder="Cuéntanos qué tienes en mente, en qué fase estás y qué tipo de apoyo buscas." />
            </label>

            <label>
              Documentación
              <input type="file" />
            </label>

            <p className="privacy-note">
              Tus datos se tratan con confidencialidad conforme al RGPD.
            </p>

            <button type="submit">ENVIAR SOLICITUD →</button>
          </form>
        </section>
      )}

      {seccion === "contacto" && (
        <section className="area-section">
          <p className="eyebrow">CONTACTO</p>
          <h1>
            Hablemos de tu próximo <em>proyecto.</em>
          </h1>

          <div className="area-grid">
            <article>
              <h3>Email</h3>
              <p>hola@nyphub.com</p>
            </article>
            <article>
              <h3>Soporte</h3>
              <p>soporte@nyphub.com</p>
            </article>
            <article>
              <h3>Ámbito</h3>
              <p>Europa · Latinoamérica · Oriente Medio</p>
            </article>
          </div>

          <Link to="/" className="back-link">
            Volver al inicio
          </Link>
        </section>
      )}
    </main>
  );
}