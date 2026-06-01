import traducciones from "../assets/traducciones";

export default function FondosEuropeos({ idioma }) {
  const t = traducciones[idioma] || traducciones.es;

  return (
    <div className="page page-fondos">
      <h1>{t.fondos}</h1>
      <p>{t.innovacionFormacionTexto}</p>
    </div>
  );
}
