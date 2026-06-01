import traducciones from "../assets/traducciones";

export default function AsistenciaTecnica({ idioma }) {
  const t = traducciones[idioma] || traducciones.es;

  return (
    <div className="page page-asistencia">
      <h1>{t.asistencia}</h1>
      <p>
        <strong>{t.asistenciaAmbitoStrong}</strong> {t.asistenciaAmbito}
      </p>
      <ul>
        <li>{t.asistenciaLi1}</li>
        <li>{t.asistenciaLi2}</li>
        <li>{t.asistenciaLi3}</li>
        <li>{t.asistenciaLi4}</li>
      </ul>
    </div>
  );
}
