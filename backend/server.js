const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

app.get("/api/prueba", (req, res) => {
  res.json({
    mensaje: "Hola desde Express",
  });
});

// LOGIN CON POSTGRESQL
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const resultado = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1 AND password = $2",
      [email, password]
    );

    if (resultado.rows.length === 0) {
      return res.status(401).json({
        message: "Credenciales inválidas",
      });
    }

    const usuario = resultado.rows[0];

    return res.json({
      token: "token-demo",
      usuario: {
        id: usuario.id,
        email: usuario.email,
      },
    });
  } catch (error) {
    console.error("Error login:", error);

    return res.status(500).json({
      message: "Error del servidor",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});