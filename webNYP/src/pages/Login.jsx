import { useState } from "react";
import { useNavigate } from "react-router-dom";
import traducciones from "../assets/traducciones";
import "../styles/Login.scss"; // ya corregido

export default function Login({ idioma }) {
  const t = traducciones[idioma] || traducciones.es;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    if (!email || !password) {
      setErrorMsg(idioma === "en" ? "Email and password are required." : "Email y contraseña son obligatorios.");
      return false;
    }
    // validación email simple
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setErrorMsg(idioma === "en" ? "Enter a valid email." : "Introduce un email válido.");
      return false;
    }
    return true;
  };

  // Cambia esta URL por la de tu backend
  const API_URL = "[localhost](http://localhost:3000/api/login)"; // ejemplo

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!validate()) return;

    try {
      setLoading(true);

      // Si tienes backend: descomenta el fetch REAL y elimina el bloque MOCK
      /*
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || (idioma === "en" ? "Invalid credentials." : "Credenciales inválidas."));
      }
      const data = await res.json();
      // guarda el token/usuario
      localStorage.setItem("token", data.token);
      */

      // ============== MODO MOCK (quítalo cuando tengas backend) ==============
      await new Promise((r) => setTimeout(r, 800)); // simular red
      if (!(email === "demo@demo.com" && password === "demo123")) {
        throw new Error(idioma === "en" ? "Invalid credentials." : "Credenciales inválidas.");
      }
      const data = { token: "mock-token-123" };
      localStorage.setItem("token", data.token);
      // ======================================================================

      // navegar a inicio o dashboard
      navigate("/");
    } catch (err) {
      setErrorMsg(err.message || (idioma === "en" ? "Unexpected error." : "Error inesperado."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">{t.loginTitulo}</h1>

        <form className="login-form" onSubmit={onSubmit} noValidate>
          {errorMsg ? <div className="login-error">{errorMsg}</div> : null}

          <label className="login-label">
            {t.email}
            <input
              className="login-input"
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              disabled={loading}
              required
            />
          </label>

          <label className="login-label">
            {t.password}
            <input
              className="login-input"
              type="password"
              placeholder={t.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              disabled={loading}
              required
            />
          </label>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (idioma === "en" ? "Loading..." : "Cargando...") : t.entrar}
          </button>
        </form>

        {/* Pista para el modo mock; quítalo cuando conectes el backend */}
        <div className="login-hint">
          {idioma === "en"
            ? "Try demo@demo.com / demo123"
            : "Prueba demo@demo.com / demo123"}
        </div>
      </div>
    </div>
  );
}
