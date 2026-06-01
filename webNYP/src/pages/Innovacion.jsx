import traducciones from "../assets/traducciones";

export default function Innovacion({ idioma }) {
  const t = traducciones[idioma] || traducciones.es;

  return (
    <div className="page page-innovacion">
      <h1>{t.innovacion}</h1>
      <p>{t.comoTrabajamosTexto}</p>
    </div>
  );
}

