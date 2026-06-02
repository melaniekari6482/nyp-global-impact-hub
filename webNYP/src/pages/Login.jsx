import { useState } from "react";
import { useNavigate } from "react-router-dom";
import traducciones from "../assets/traducciones";
import "../styles/login.scss";

export default function Login({ idioma }) {
const t = traducciones[idioma] || traducciones.es;
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [errorMsg, setErrorMsg] = useState("");

const validate = () => {
if (!email || !password) {
setErrorMsg(
idioma === "en"
? "Email and password are required."
: "Email y contraseña son obligatorios."
);
return false;
}


const re = /\S+@\S+\.\S+/;

if (!re.test(email)) {
  setErrorMsg(
    idioma === "en"
      ? "Enter a valid email."
      : "Introduce un email válido."
  );
  return false;
}

return true;


};

const API_URL = "http://localhost:3000/api/login";

const onSubmit = async (e) => {
e.preventDefault();
setErrorMsg("");

if (!validate()) return;

try {
  setLoading(true);

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));

    throw new Error(
      err.message ||
        (idioma === "en"
          ? "Invalid credentials."
          : "Credenciales inválidas.")
    );
  }

  const data = await res.json();

  localStorage.setItem("token", data.token);

  if (data.usuario) {
    localStorage.setItem(
      "usuario",
      JSON.stringify(data.usuario)
    );
  }

  navigate("/");
} catch (err) {
  setErrorMsg(
    err.message ||
      (idioma === "en"
        ? "Unexpected error."
        : "Error inesperado.")
  );
} finally {
  setLoading(false);
}


};

return ( <div className="login-page"> <div className="login-card"> <h1 className="login-title">{t.loginTitulo}</h1>


    <form
      className="login-form"
      onSubmit={onSubmit}
      noValidate
    >
      {errorMsg ? (
        <div className="login-error">
          {errorMsg}
        </div>
      ) : null}

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

      <button
        type="submit"
        className="login-button"
        disabled={loading}
      >
        {loading
          ? idioma === "en"
            ? "Loading..."
            : "Cargando..."
          : t.entrar}
      </button>
    </form>
  </div>
</div>


);
}
