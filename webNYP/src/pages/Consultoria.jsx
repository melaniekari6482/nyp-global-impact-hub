import traducciones from "../assets/traducciones";

export default function Consultoria({ idioma }) {
  const t = traducciones[idioma] || traducciones.es;

  return (
    <div className="page page-consultoria">
      <h1>{t.consultoria}</h1>
      <p>
        <strong>{t.consultoriaAmbitoStrong}</strong> {t.consultoriaAmbito}
      </p>
      <ul>
        <li>{t.consultoriaLi1}</li>
        <li>{t.consultoriaLi2}</li>
        <li>{t.consultoriaLi3}</li>
        <li>{t.consultoriaLi4}</li>
      </ul>
    </div>
  );
}
